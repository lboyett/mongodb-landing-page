import { useEffect, useState } from 'react';

export default function RotatingSpan() {
  const phrases = [
    'AI',
    'Streaming Data',
    'Operational Data',
    'Full-Text Search',
    'Transactions',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setPhraseIndex(prevIndex => (prevIndex + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`rotating-span ${fade ? 'fade-in-span' : 'fade-out-span'}`}
    >
      {phrases[phraseIndex]}
    </span>
  );
}
