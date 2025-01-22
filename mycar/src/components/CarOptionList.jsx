import classNames from "classnames";
import { useEffect, useState } from "react";

export default function CarOptionList({selectedModel}) {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup
    };
  }, []);

  return (
    <div className={classNames("h-full bg-slate-600 transition-all duration-500",
      scrollPosition < 300 ? 'w-2/5' : 'w-3/4'
    )}>

    </div>
  )
}