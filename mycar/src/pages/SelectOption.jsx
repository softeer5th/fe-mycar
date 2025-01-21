import { useParams } from "react-router-dom";
import OptionPageHeader from "../components/OptionPageHeader";
import { useState } from "react";
import ModelList from "../components/ModelList";
import { AnimatePresence, delay, easeIn, easeInOut, easeOut, motion } from "motion/react"

export default function SelectOption() {
    const { carName } = useParams();
    const [step, setStep] = useState(1);

    return (
        <div>
            <OptionPageHeader step={step} setStep={setStep} />
            <AnimatePresence initial={false} mode="wait">
                {step === 1
                    ? <motion.div
                        key={step}
                        initial={{ x: 0, y: 400, opacity: 0 }}
                        animate={{ y: 0, opacity: 1, transition: { duration: 0.4, ease: easeOut} }}
                        exit={{ x: -700, opacity: 0, transition: { duration: 0.3, ease: easeOut} }}>
                        <ModelList carName={carName} />
                    </motion.div>
                    : <motion.div
                        key={step}
                        initial={{ x: 500, y: 0, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { duration: 0.4, ease: easeOut} }}
                        exit={{ x: -700, opacity: 0, transition: { duration: 0.3, ease: easeOut} }}>
                        <ModelList carName={carName} />
                    </motion.div>}
            </AnimatePresence>
        </div>
    )
}