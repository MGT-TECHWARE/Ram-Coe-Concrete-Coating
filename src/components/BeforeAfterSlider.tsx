import { useState, useRef } from 'react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  fallbackBefore?: string;
  fallbackAfter?: string;
  className?: string;
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before',
  afterAlt = 'After',
  fallbackBefore,
  fallbackAfter,
  className = '',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [before, setBefore] = useState(beforeSrc);
  const [after, setAfter] = useState(afterSrc);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const p = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPosition(p);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <div
      ref={containerRef}
      className={`relative aspect-[16/10] w-full overflow-hidden rounded-md bg-slate-900 select-none touch-none ${className}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={(e) => (e.target as HTMLElement).releasePointerCapture(e.pointerId)}
      onPointerLeave={(e) => (e.target as HTMLElement).releasePointerCapture(e.pointerId)}
    >
      <div className="absolute inset-0">
        <img
          src={before}
          alt={beforeAlt}
          className="w-full h-full object-cover object-center"
          draggable={false}
          loading="lazy"
          onError={() => fallbackBefore && setBefore(fallbackBefore)}
        />
      </div>
      <div
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <img
          src={after}
          alt={afterAlt}
          className="w-full h-full object-cover object-center"
          draggable={false}
          loading="lazy"
          onError={() => fallbackAfter && setAfter(fallbackAfter)}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-20 cursor-ew-resize pointer-events-none"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-slate-200 shadow-md flex items-center justify-center pointer-events-none">
          <div className="flex gap-0.5">
            <span className="w-0.5 h-3 bg-slate-400 rounded" />
            <span className="w-0.5 h-3 bg-slate-400 rounded" />
          </div>
        </div>
      </div>
      <div
        className="absolute top-0 bottom-0 left-0 right-0 z-[5] cursor-ew-resize"
        style={{ left: 0, width: `${position}%` }}
        aria-hidden
      />
      <div className="absolute top-3 left-3 z-20 px-2 py-1 bg-black/60 text-white text-xs font-bold uppercase tracking-wider rounded pointer-events-none">
        Before
      </div>
      <div className="absolute top-3 right-3 z-20 px-2 py-1 bg-black/60 text-white text-xs font-bold uppercase tracking-wider rounded pointer-events-none">
        After
      </div>
    </div>
  );
}
