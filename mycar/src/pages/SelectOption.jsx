import { useParams } from 'react-router-dom';
import OptionPageHeader from '../components/OptionPageHeader';
import { useEffect, useState } from 'react';
import ModelList from '../components/ModelList';
import { AnimatePresence, delay, easeIn, easeInOut, easeOut, motion } from 'motion/react';
import { getOptions } from '../apis/dataFetch';
import { useQuery } from '@tanstack/react-query';
import CarView from '../components/CarView';
import CarEditor from '../components/CarEditor';

export default function SelectOption() {
  const { carName } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['options'],
    queryFn: () => getOptions(carName),
  });

  const [step, setStep] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);

  useEffect(() => {
    if (selectedModel !== null) {
      setStep(2);
    }
  }, [selectedModel]);

  useEffect(() => {
    if (step === 1) {
      setSelectedModel(null);
    }
  }, [step]);

  if (isLoading) return;
  if (error) return;
  return (
    <div className='h-dvh' style={{ minWidth: '800px' }}>
      <OptionPageHeader step={step} setStep={setStep} />
      <AnimatePresence initial={false} mode='wait'>
        {step === 1 ? (
          <motion.div
            key={step}
            initial={{ x: 0, y: 400, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: easeOut },
            }}
            exit={{
              x: -700,
              opacity: 0,
              transition: { duration: 0.3, ease: easeOut },
            }}
          >
            <ModelList models={data.detailModels} setSelectedModel={setSelectedModel} />
          </motion.div>
        ) : (
          <motion.div
            style={{ height: 'calc(100% - 146px)' }}
            key={step}
            initial={{ x: 500, y: 0, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 0.4, ease: easeOut },
            }}
            exit={{
              x: -700,
              opacity: 0,
              transition: { duration: 0.3, ease: easeOut },
            }}
          >
            <CarEditor selectedModel={selectedModel} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
