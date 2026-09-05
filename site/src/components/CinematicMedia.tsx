'use client';

import { useEffect, useRef, useState } from 'react';

export interface CinematicAsset {
  /** Required still image in /public (e.g. "/media/hero-poster.jpg"). Shown
   *  first (instant paint) and whenever reduced-motion is requested. */
  poster: string;
  /** Optional video in /public. Plays a finite number of times, then freezes
   *  on its final frame — never loops. */
  video?: string;
  alt: string;
}

/**
 * Cinematic media for the hero background and work-item covers.
 *
 * Discipline:
 *  - Poster paints first. Video plays only when on screen AND reduced-motion is
 *    off.
 *  - Plays `playCount` times, then PAUSES on the final frame. No looping.
 *  - Always muted + inline. Never autoplay-with-sound.
 *  - Lazy: the <video> mounts only when the element is near the viewport.
 *  - Graceful: with no `video`, it is just a still; with no asset, returns null
 *    so the caller can render its own fallback.
 *
 * The video should be authored to start and END on a stable, dark, legible
 * frame — the final frame is what visitors see at rest.
 */
export function CinematicMedia({
  asset,
  className = '',
  overlay = true,
  playCount = 2,
  objectPosition = 'center',
  priority = false,
}: {
  asset?: CinematicAsset;
  className?: string;
  overlay?: boolean;
  /** How many times to play before freezing on the final frame. */
  playCount?: number;
  /** CSS object-position for the fill (e.g. "center", "right center"). */
  objectPosition?: string;
  /** Above-the-fold usage (the hero): load the poster eagerly. */
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playsRef = useRef(0);
  const doneRef = useRef(false);
  const [inView, setInView] = useState(false);
  const [reduced, setReduced] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: '200px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Start the finite play once, when first in view and motion is allowed.
  useEffect(() => {
    const v = videoRef.current;
    if (!v || reduced || doneRef.current) return;
    if (inView) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [inView, reduced]);

  const onEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    playsRef.current += 1;
    if (playsRef.current < playCount) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      doneRef.current = true; // freeze on final frame, never loop
    }
  };

  if (!asset) return null;

  const showVideo = Boolean(asset.video) && !reduced;

  return (
    <div ref={ref} className={`relative overflow-hidden bg-ink ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset.poster}
        alt={asset.alt}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition }}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
      />
      {showVideo && inView && (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
          poster={asset.poster}
          muted
          playsInline
          preload={priority ? 'auto' : 'none'}
          aria-hidden="true"
          onEnded={onEnded}
        >
          <source src={asset.video} type="video/mp4" />
        </video>
      )}
      {overlay && (
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,8,0.35) 0%, rgba(10,10,8,0.15) 45%, rgba(10,10,8,0.78) 100%)',
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
