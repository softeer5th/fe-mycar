import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import ColorOptions from './ColorOptions';

export default function CarOptionList({ selectedModel, colorIndex, setColorIndex }) {
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
        'bg-slate-600 transition-all duration-500 overflow-y-auto',
        scrollPosition < 300 ? 'w-2/5' : 'w-3/4',
      )}
    >
      <div style={{ height: '3000px' }}>
        <ColorOptions colorIndex={colorIndex} setColorIndex={setColorIndex} />
      </div>
    </div>
  );
}
