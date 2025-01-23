import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import ColorOptions from './ColorOptions';
import HardwareOptions from './HardwareOptions';

export default function CarOptionList({ selectedModel, colorIndex, setColorIndex, setCarPrice }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;

    const handleScroll = () => {
      setScrollPosition(scrollElement.scrollTop);
    };

    scrollElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      className={classNames(
        ' transition-all duration-500 overflow-y-auto',
        scrollPosition < 1500 ? 'w-2/5' : 'w-3/4',
      )}
    >
      <div>
        <ColorOptions colorIndex={colorIndex} setColorIndex={setColorIndex} />
        <HardwareOptions setPrice={setCarPrice} />
      </div>
    </div>
  );
}
