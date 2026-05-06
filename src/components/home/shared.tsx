"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";

export function SmartLink({
  href,
  className,
  children,
  onClick,
  style
}: {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}) {
  if (href.startsWith("http")) {
    return (
      <a
        className={className}
        href={href}
        onClick={onClick}
        rel="noopener noreferrer"
        style={style}
        target="_blank"
      >
        {children}
      </a>
    );
  }

  if (href.startsWith("#")) {
    return (
      <a className={className} href={href} onClick={onClick} style={style}>
        {children}
      </a>
    );
  }

  return (
    <Link className={className} href={href} onClick={onClick} style={style}>
      {children}
    </Link>
  );
}

export function Reveal({
  children,
  className,
  delay = 0
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      viewport={{ once: true, amount: 0.18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}

const FRAMER_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function AnimatedHeadline({
  text,
  className,
  desktopBreakAfter,
  ...props
}: {
  text: string;
  className?: string;
  desktopBreakAfter?: string;
  [key: string]: any;
}) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={className} {...props}>
      {words.map((word, wordIndex) => {
        const isBreakAnchor =
          desktopBreakAfter !== undefined && word === desktopBreakAfter;

        return (
          <span key={`word-${wordIndex}`} className="inline">
            <motion.span
              className="inline-block"
              initial={reduceMotion ? false : { opacity: 0.001, y: 5 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: wordIndex * 0.06,
                ease: FRAMER_EASE
              }}
            >
              {word}
            </motion.span>
            {wordIndex < words.length - 1 && (
              <>
                {isBreakAnchor ? (
                  <>
                    <span className="hidden desktop:inline">
                      <br />
                    </span>
                    <span className="desktop:hidden">{" "}</span>
                    <span className="hidden desktop:inline">{" "}</span>
                  </>
                ) : (
                  " "
                )}
              </>
            )}
          </span>
        );
      })}
    </h1>
  );
}

export function AnimatedWords({
  text,
  className,
  as: Tag = "span",
  delayBase = 0,
  staggerPerWord = 0.06
}: {
  text: string;
  className?: string;
  as?: any;
  delayBase?: number;
  staggerPerWord?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`w-${i}`} className="inline">
          <motion.span
            className="inline-block"
            initial={reduceMotion ? false : { opacity: 0.001, y: 5 }}
            animate={
              reduceMotion
                ? undefined
                : inView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0.001, y: 5 }
            }
            transition={{
              duration: 0.55,
              delay: delayBase + i * staggerPerWord,
              ease: FRAMER_EASE
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

export function AnimatedChars({
  text,
  className,
  as: Tag = "p",
  delayBase = 0,
  staggerPerChar = 0.012
}: {
  text: string;
  className?: string;
  as?: any;
  delayBase?: number;
  staggerPerChar?: number;
}) {
  const reduceMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const words = text.split(" ");
  let charCounter = 0;

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, wIdx) => {
        const wordChars = Array.from(word);
        const node = (
          <span
            key={`w-${wIdx}`}
            className="inline-block"
            style={{ whiteSpace: "nowrap" }}
          >
            {wordChars.map((ch, cIdx) => {
              const idx = charCounter++;
              return (
                <motion.span
                  key={`c-${wIdx}-${cIdx}`}
                  className="inline-block"
                  initial={reduceMotion ? false : { opacity: 0.001, y: 5 }}
                  animate={
                    reduceMotion
                      ? undefined
                      : inView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0.001, y: 5 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: delayBase + idx * staggerPerChar,
                    ease: FRAMER_EASE
                  }}
                >
                  {ch}
                </motion.span>
              );
            })}
          </span>
        );
        return (
          <span key={`wrap-${wIdx}`}>
            {node}
            {wIdx < words.length - 1 && " "}
          </span>
        );
      })}
    </Tag>
  );
}

export function MetricCounter({
  value,
  suffix
}: {
  value: number;
  suffix: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduceMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, amount: 0.7 });
  const [displayValue, setDisplayValue] = useState(reduceMotion ? value : 0);

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      setDisplayValue(value);
      return;
    }

    let frame = 0;
    const start = performance.now();
    const duration = 1300;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      setDisplayValue(Math.round(value * (1 - Math.pow(1 - progress, 3))));
      if (progress < 1) frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

export function SectionIntro({
  eyebrow,
  children,
  className
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Reveal
      className={`grid w-full gap-4 desktop:grid-cols-[30%_minmax(0,1fr)] desktop:items-start ${className ?? ""}`}
    >
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="min-w-0">{children}</div>
    </Reveal>
  );
}
