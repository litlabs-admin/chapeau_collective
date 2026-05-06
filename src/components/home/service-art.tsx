"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type ServiceArtKind = "ads" | "creative" | "conversion";

// Framer card: width 328px, height min-content, padding 24px 16px, gap 16px, flex-col items-center
const cardClass =
  "relative flex w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-[8px] bg-accent-dark px-4 py-6 tablet:w-[328px] desktop:w-[328px]";

// All three cards loop their illustration animation continuously.
const LOOP_DURATION = 4.2;
const LOOP_TRANSITION = {
  duration: LOOP_DURATION,
  repeat: Infinity,
  ease: [0.45, 0, 0.55, 1] as const,
  times: [0, 0.5, 1]
};

// Framer illustration row: width 100%, height 180px, flex-row, items-center, justify-center
const stageClass = "relative flex h-[180px] w-full items-center justify-center";

export function ServiceArt({ kind }: { kind: ServiceArtKind }) {
  if (kind === "ads") return <AdsArt />;
  if (kind === "creative") return <CreativeArt />;
  return <ConversionArt />;
}

function AdsArt() {
  return (
    <div className={cardClass}>
      <div className={stageClass}>
        {/* Inner positioning area: 195 x 163 (matches framer-lxtj5g) */}
        <div className="relative h-[163px] w-[195px]">
          {/* Vector 2549 — long right curve: bottom:0 right:26px, 74x138 */}
          <svg
            aria-hidden="true"
            className="absolute bottom-0 right-[26px] h-[138px] w-[74px]"
            fill="none"
            viewBox="-1 -1 74 138"
          >
            <path
              d="M71.1463 0C46.8667 7.98003 0.0397574 46.3521 0.854739 136"
              stroke="url(#ads-right-long)"
              strokeLinecap="round"
              strokeWidth="1.01873"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="ads-right-long"
                x1="35.9953"
                x2="39.0838"
                y1="0"
                y2="115.946"
              >
                <stop stopColor="#83F6F8" />
                <stop offset="1" stopColor="#2cd4e6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Vector 2551 — short right curve: bottom:15px right:27px, 72x71 */}
          <svg
            aria-hidden="true"
            className="absolute bottom-[15px] right-[27px] h-[71px] w-[72px]"
            fill="none"
            viewBox="-1 -1 72 71"
          >
            <path
              d="M70 0C45.8247 4.04869 -0.801024 23.5169 0.0104553 69"
              stroke="url(#ads-right-short)"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="ads-right-short"
                x1="35"
                x2="35.7989"
                y1="0"
                y2="58.8564"
              >
                <stop stopColor="#83F6F8" />
                <stop offset="1" stopColor="#2cd4e6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Vector 2548 — long left curve: top:25px left:26px, 69x128 */}
          <svg
            aria-hidden="true"
            className="absolute left-[26px] top-[25px] h-[128px] w-[69px]"
            fill="none"
            viewBox="-1 -1 72 131"
          >
            <path
              d="M0.692871 0C24.2427 6.99668 71.0351 42.492 69.8064 128.5"
              stroke="url(#ads-left-long)"
              strokeLinecap="round"
              strokeWidth="1.0239"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="ads-left-long"
                x1="35.2615"
                x2="38.0654"
                y1="0"
                y2="109.558"
              >
                <stop stopColor="#83F6F8" />
                <stop offset="1" stopColor="#2cd4e6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Vector 2550 — short left curve: bottom:17px left:28px, 67x70 */}
          <svg
            aria-hidden="true"
            className="absolute bottom-[17px] left-[28px] h-[70px] w-[67px]"
            fill="none"
            viewBox="-1 -1 69 72"
          >
            <path
              d="M0 0C22.8218 3.81142 68.1677 23.1474 66.977 70"
              stroke="url(#ads-left-short)"
              strokeLinecap="round"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="ads-left-short"
                x1="33.5"
                x2="34.359"
                y1="0"
                y2="59.708"
              >
                <stop stopColor="#83F6F8" />
                <stop offset="1" stopColor="#2cd4e6" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>

          {/* Vector 2547 — center vertical line: bottom:1px, centered, 4x136 */}
          <span className="absolute bottom-px left-[calc(49.7436%-2px)] h-[136px] w-1 bg-gradient-to-b from-[#83f6f8] to-transparent" />

          {/* Frame 8483 — YouTube tile: loops left 0 → 14 → 0 */}
          <motion.span
            animate={{ x: [0, 14, 0] }}
            className="absolute left-0 flex h-7 w-[29px] items-center justify-center rounded bg-white will-change-transform"
            style={{ top: "calc(47.8528% - 14px)" }}
            transition={LOOP_TRANSITION}
          >
            <YoutubeIcon />
          </motion.span>

          {/* Frame 8482 — Meta tile: loops right 0 → 12 → 0 */}
          <motion.span
            animate={{ x: [0, -12, 0] }}
            className="absolute right-0 flex h-7 w-[29px] items-center justify-center rounded bg-white will-change-transform"
            style={{ top: "calc(47.8528% - 14px)" }}
            transition={LOOP_TRANSITION}
          >
            <MetaIcon />
          </motion.span>

          {/* Frame 8479 — GoogleAds tile: loops top 0→18→0, left 14→24→14 */}
          <motion.span
            animate={{ x: [0, 10, 0], y: [0, 18, 0] }}
            className="absolute left-[14px] top-0 flex h-7 w-[29px] items-center justify-center rounded bg-white will-change-transform"
            transition={LOOP_TRANSITION}
          >
            <GoogleAdsIcon />
          </motion.span>

          {/* Frame 8480 — Facebook tile: loops top 0→11→0 */}
          <motion.span
            animate={{ y: [0, 11, 0] }}
            className="absolute top-0 flex h-7 w-[29px] items-center justify-center rounded bg-white will-change-transform"
            style={{ left: "calc(49.7436% - 14.5px)" }}
            transition={LOOP_TRANSITION}
          >
            <FacebookIcon />
          </motion.span>

          {/* Frame 8481 — Instagram tile: loops top 0→18→0, right 14→21→14 */}
          <motion.span
            animate={{ x: [0, -7, 0], y: [0, 18, 0] }}
            className="absolute right-[14px] top-0 flex h-7 w-[29px] items-center justify-center rounded bg-white will-change-transform"
            transition={LOOP_TRANSITION}
          >
            <InstagramIcon />
          </motion.span>

          {/* fluent:people-team — bottom center, 40x40, doesn't move */}
          <svg
            aria-hidden="true"
            className="absolute bottom-2 left-[calc(50.2564%-20px)] h-10 w-10"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              d="M24.5902 16.6667C26.2002 16.6667 27.5068 17.9733 27.5068 19.5833V27.4983C27.5068 29.4879 26.7165 31.396 25.3096 32.8028C23.9028 34.2096 21.9947 35 20.0052 35C18.0156 35 16.1075 34.2096 14.7007 32.8028C13.2938 31.396 12.5035 29.4879 12.5035 27.4983V19.5833C12.5035 17.9733 13.8085 16.6667 15.4202 16.6667H24.5902ZM11.8852 16.6667C11.2829 17.3879 10.9216 18.2796 10.8518 19.2167L10.8352 19.5833V27.4983C10.8352 28.91 11.1552 30.2467 11.7252 31.44C11.1741 31.59 10.5991 31.6656 10.0002 31.6667C9.12454 31.6667 8.2575 31.4942 7.44856 31.159C6.63961 30.8239 5.90461 30.3327 5.28553 29.7135C4.66645 29.0942 4.17542 28.3591 3.84049 27.5501C3.50555 26.741 3.33328 25.874 3.3335 24.9983V19.5833C3.33352 18.8513 3.60878 18.1461 4.10463 17.6077C4.60048 17.0692 5.28066 16.7369 6.01016 16.6767L6.25016 16.6667H11.8852ZM28.1252 16.6667H33.7502C35.3602 16.6667 36.6668 17.9733 36.6668 19.5833V25C36.6671 26.0219 36.4323 27.0303 35.9808 27.947C35.5293 28.8638 34.873 29.6645 34.0628 30.2873C33.2525 30.91 32.3099 31.3382 31.3078 31.5386C30.3057 31.7391 29.271 31.7065 28.2835 31.4433C28.7835 30.3967 29.0902 29.2433 29.1585 28.0233L29.1735 27.4983V19.5833C29.1735 18.475 28.7818 17.4583 28.1252 16.6667ZM20.0002 5C21.3262 5 22.598 5.52678 23.5357 6.46447C24.4734 7.40215 25.0002 8.67392 25.0002 10C25.0002 11.3261 24.4734 12.5979 23.5357 13.5355C22.598 14.4732 21.3262 15 20.0002 15C18.6741 15 17.4023 14.4732 16.4646 13.5355C15.5269 12.5979 15.0002 11.3261 15.0002 10C15.0002 8.67392 15.5269 7.40215 16.4646 6.46447C17.4023 5.52678 18.6741 5 20.0002 5ZM30.8335 6.66667C31.9386 6.66667 32.9984 7.10565 33.7798 7.88706C34.5612 8.66846 35.0002 9.72826 35.0002 10.8333C35.0002 11.9384 34.5612 12.9982 33.7798 13.7796C32.9984 14.561 31.9386 15 30.8335 15C29.7284 15 28.6686 14.561 27.8872 13.7796C27.1058 12.9982 26.6668 11.9384 26.6668 10.8333C26.6668 9.72826 27.1058 8.66846 27.8872 7.88706C28.6686 7.10565 29.7284 6.66667 30.8335 6.66667ZM9.16683 6.66667C10.2719 6.66667 11.3317 7.10565 12.1131 7.88706C12.8945 8.66846 13.3335 9.72826 13.3335 10.8333C13.3335 11.9384 12.8945 12.9982 12.1131 13.7796C11.3317 14.561 10.2719 15 9.16683 15C8.06176 15 7.00195 14.561 6.22055 13.7796C5.43915 12.9982 5.00016 11.9384 5.00016 10.8333C5.00016 9.72826 5.43915 8.66846 6.22055 7.88706C7.00195 7.10565 8.06176 6.66667 9.16683 6.66667Z"
              fill="url(#ads-people)"
            />
            <defs>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(20.0002 20) rotate(90) scale(15 16.6667)"
                gradientUnits="userSpaceOnUse"
                id="ads-people"
                r="1"
              >
                <stop stopColor="#FFFAEF" />
                <stop offset="1" stopColor="#FCDB87" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CreativeArt() {
  // Framer renders 3 small badges (Frame 8485/8484/8483) at fixed positions with
  // opacity 0/1/0 — they cycle through to create a rotating-badge animation.
  // The center badge (Frame 8486) stays visible. We replicate the cycle via Motion.
  const badgeCycle = {
    initial: { opacity: 0 },
    animate: { opacity: [0, 1, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  };

  return (
    <div className={cardClass}>
      <div className={stageClass}>
        {/* Inner positioning area: 181 x 167, rotated 1deg (matches framer-i728kx) */}
        <div className="relative h-[167px] w-[181px] rotate-[1deg]">
          {/* Mask group rings — top:0 bottom:4px right:0, 167x163 */}
          <svg
            aria-hidden="true"
            className="absolute right-0 top-0 h-[163px] w-[167px]"
            fill="none"
            viewBox="0 0 167 167"
          >
            <path
              d="M167 83.5C167 129.616 129.616 167 83.5 167C37.3842 167 0 129.616 0 83.5C0 37.3842 37.3842 0 83.5 0C129.616 0 167 37.3842 167 83.5ZM0.834999 83.5C0.834999 129.155 37.8454 166.165 83.5 166.165C129.155 166.165 166.165 129.155 166.165 83.5C166.165 37.8454 129.155 0.834999 83.5 0.834999C37.8454 0.834999 0.834999 37.8454 0.834999 83.5Z"
              fill="url(#creative-rings)"
            />
            <path
              d="M153 83C153 121.66 121.66 153 83 153C44.3401 153 13 121.66 13 83C13 44.3401 44.3401 13 83 13C121.66 13 153 44.3401 153 83ZM13.7 83C13.7 121.273 44.7267 152.3 83 152.3C121.273 152.3 152.3 121.273 152.3 83C152.3 44.7267 121.273 13.7 83 13.7C44.7267 13.7 13.7 44.7267 13.7 83Z"
              fill="url(#creative-rings)"
            />
            <path
              d="M138 84C138 114.1 113.6 138.5 83.5 138.5C53.4005 138.5 29 114.1 29 84C29 53.9005 53.4005 29.5 83.5 29.5C113.6 29.5 138 53.9005 138 84ZM29.545 84C29.545 113.799 53.7015 137.955 83.5 137.955C113.299 137.955 137.455 113.799 137.455 84C137.455 54.2015 113.299 30.045 83.5 30.045C53.7015 30.045 29.545 54.2015 29.545 84Z"
              fill="url(#creative-rings)"
            />
            <path
              d="M120 84.5C120 104.658 103.658 121 83.5 121C63.3416 121 47 104.658 47 84.5C47 64.3416 63.3416 48 83.5 48C103.658 48 120 64.3416 120 84.5ZM47.365 84.5C47.365 104.457 63.5432 120.635 83.5 120.635C103.457 120.635 119.635 104.457 119.635 84.5C119.635 64.5432 103.457 48.365 83.5 48.365C63.5432 48.365 47.365 64.5432 47.365 84.5Z"
              fill="url(#creative-rings)"
            />
            <defs>
              <radialGradient
                cx="0"
                cy="0"
                gradientTransform="translate(83 83) rotate(90) scale(88)"
                gradientUnits="userSpaceOnUse"
                id="creative-rings"
                r="1"
              >
                <stop stopColor="#83F6F8" />
                <stop offset="1" stopColor="#2cd4e6" />
              </radialGradient>
            </defs>
          </svg>

          {/* Frame 8486 — center badge (always visible): top:~65px left:~78px */}
          <RoundBadge className="left-[calc(53.5912%-19px)] top-[calc(49.7006%-18.5px)]">
            <PeopleMiniIcon />
          </RoundBadge>

          {/* Frame 8484 — middle-left badge (initial visible): top:~73px left:0 */}
          <motion.span
            animate={{ opacity: [1, 0, 0, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.33, 0.67, 1] }}
            className="absolute left-0 top-[calc(54.491%-18.5px)] flex h-[37px] w-[38px] items-center justify-center rounded-full bg-[radial-gradient(circle,#fffaf0_0%,#fcdb87_100%)]"
          >
            <BriefcaseIcon />
          </motion.span>

          {/* Frame 8485 — bottom-right badge: appears mid-cycle */}
          <motion.span
            animate={{ opacity: [0, 1, 0, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.33, 0.67, 1] }}
            className="absolute bottom-0 right-[22px] flex h-[37px] w-[38px] items-center justify-center rounded-full bg-[radial-gradient(circle,#fffaf0_0%,#fcdb87_100%)]"
          >
            <BriefcaseIcon />
          </motion.span>

          {/* Frame 8483 — top-right badge: appears late-cycle */}
          <motion.span
            animate={{ opacity: [0, 0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", times: [0, 0.33, 0.67, 1] }}
            className="absolute right-[14px] top-[20px] flex h-[37px] w-[38px] items-center justify-center rounded-full bg-[radial-gradient(circle,#fffaf0_0%,#fcdb87_100%)]"
          >
            <BriefcaseIcon />
          </motion.span>
        </div>
      </div>
    </div>
  );
}

function ConversionArt() {
  return (
    <div className={cardClass}>
      <div className={stageClass}>
        {/* Inner positioning area: 258 x 138 (matches framer-1tt0xib) */}
        <div className="relative h-[138px] w-[258px]">
          <BrowserWindow />
          {/* DashboardPhone: loops left -12 → 9 → -12 */}
          <motion.div
            animate={{ left: [-12, 9, -12] }}
            className="absolute bottom-px"
            transition={LOOP_TRANSITION}
          >
            <DashboardPhone />
          </motion.div>
          {/* TallPhone: loops right 0 → 30 → 0 */}
          <motion.div
            animate={{ right: [0, 30, 0] }}
            className="absolute bottom-0"
            transition={LOOP_TRANSITION}
          >
            <TallPhone />
          </motion.div>
          <GaugeBadge />
        </div>
      </div>
    </div>
  );
}

function IconTile({
  children,
  className
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <span
      className={`absolute flex h-7 w-[29px] items-center justify-center rounded bg-white ${className}`}
    >
      {children}
    </span>
  );
}

function RoundBadge({
  children,
  className
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <span
      className={`absolute flex h-[37px] w-[38px] items-center justify-center rounded-full bg-[radial-gradient(circle,#fffaf0_0%,#fcdb87_100%)] ${className}`}
    >
      {children}
    </span>
  );
}

function YoutubeIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-5" viewBox="0 0 18 14">
      <path
        d="M17.2 2.5c-.1-.4-.3-.8-.6-1.1-.3-.3-.7-.5-1.1-.6C14.3.5 9 .5 9 .5S3.7.5 2.5.8c-.4.1-.8.3-1.1.6-.3.3-.5.7-.6 1.1C.4 4.9.3 8.5.8 10.8c.1.4.3.8.6 1.1.3.3.7.5 1.1.6 1.2.3 6.5.3 6.5.3s5.3 0 6.5-.3c.4-.1.8-.3 1.1-.6.3-.3.5-.7.6-1.1.4-2.4.5-5.9 0-8.3Z"
        fill="#f00"
      />
      <path d="m7.2 9.5 4.7-2.7-4.7-2.7Z" fill="#fff" />
    </svg>
  );
}

function MetaIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-5" fill="none" viewBox="0 0 20 14">
      <path
        d="M1 9.1C1 5.4 2.6 1 5.2 1c1.7 0 3.1 1.7 4.8 4.5C11.7 2.7 13.2 1 14.8 1 17.4 1 19 5.4 19 9.1c0 2.4-.9 3.9-2.6 3.9-1.8 0-2.8-1.5-4.4-4.2l-2-3.3-2 3.3C6.4 11.5 5.4 13 3.6 13 1.9 13 1 11.5 1 9.1Z"
        stroke="#0081fb"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function GoogleAdsIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-[18px]" viewBox="0 0 18 16">
      <path d="M.4 11.6 6.3 1.5l5.2 2.9-5.9 10.1C4.9 15.4-.4 12.9.4 11.6Z" fill="#fbbc04" />
      <path d="M17.4 11.6 11.5 1.5C10.7.1 8.9-.4 7.4.4 6 1.2 5.5 3 6.3 4.4l5.9 10.1c.9 1.4 2.7 1.9 4.1 1.1s1.9-2.6 1.1-4Z" fill="#4285f4" />
      <path d="M3 16a2.9 2.9 0 1 0 0-5.8A2.9 2.9 0 0 0 3 16Z" fill="#34a853" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16">
      <path d="M15.1 0H.9C.4 0 0 .4 0 .9v14.2c0 .5.4.9.9.9h14.2c.5 0 .9-.4.9-.9V.9c0-.5-.4-.9-.9-.9Z" fill="#3d5a98" />
      <path d="M10.8 16.4v-5.7h1.9l.3-2.3h-2.2V7c0-.6.2-1.1 1.1-1.1h1.2v-2c-.6-.1-1.2-.1-1.7-.1-1.7 0-2.9 1-2.9 3v1.6H6.6v2.3h1.9v5.7Z" fill="#fff" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" viewBox="0 0 16 16">
      <defs>
        <radialGradient id="ig-a" cx=".7" cy="1.45" r=".99">
          <stop stopColor="#ffdd55" />
          <stop offset="1" stopColor="#c837ab" />
        </radialGradient>
      </defs>
      <path d="M12.25 0h-8.5A3.75 3.75 0 0 0 0 3.75v8.5A3.75 3.75 0 0 0 3.75 16h8.5A3.75 3.75 0 0 0 16 12.25v-8.5A3.75 3.75 0 0 0 12.25 0Z" fill="url(#ig-a)" />
      <path d="M8 1.75c-1.7 0-1.91.01-2.58.04-.66.03-1.12.13-1.51.29-.42.16-.76.37-1.11.72-.35.35-.56.7-.72 1.11-.15.4-.26.85-.29 1.52-.03.66-.04.88-.04 2.57 0 1.7.01 1.91.04 2.58.03.66.13 1.12.29 1.51.16.42.37.76.72 1.11.35.35.7.56 1.11.72.4.15.85.26 1.52.29.66.03.88.04 2.57.04 1.7 0 1.91-.01 2.58-.04.66-.03 1.12-.13 1.51-.29.42-.16.76-.37 1.11-.72.35-.35.56-.7.72-1.11.15-.4.26-.85.29-1.52.03-.66.04-.88.04-2.57 0-1.7-.01-1.91-.04-2.58-.03-.66-.13-1.12-.29-1.51-.16-.42-.37-.76-.72-1.11-.35-.35-.7-.56-1.11-.72-.4-.15-.85-.26-1.52-.29-.66-.03-.88-.04-2.57-.04Zm0 3.04a3.21 3.21 0 1 1 0 6.42 3.21 3.21 0 0 1 0-6.42Zm3.34-.88a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z" fill="#fff" />
    </svg>
  );
}

function PeopleMiniIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 18 18">
      <path d="M7.3 8.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5.4 0a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4ZM3.4 10.2c-.9 0-1.6.7-1.6 1.6v.2s0 3.3 5.5 3.3 5.5-3.3 5.5-3.3v-.2c0-.9-.7-1.6-1.6-1.6H3.4Zm9.3 4.2c3.6 0 3.6-2.4 3.6-2.4 0-.9-.7-1.6-1.6-1.6h-2.3c.4.5.6 1.2.6 1.9v.2c0 .7-.2 1.4-.5 1.9h.2Z" fill="#000" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg aria-hidden="true" className="h-[18px] w-[18px]" viewBox="0 0 18 18">
      <path
        d="M9 1.5c-1.1 0-1.9 0-2.5.1-.7.1-1.2.3-1.6.7-.4.4-.6.9-.7 1.6-.1.4-.1 1.4-.1 2.3-1.8.1-2.9.3-3.6 1C-.5 8.2-.5 9.8-.5 13.1s0 4.9 1 5.9 2.7 1 6 1h3.5c3.3 0 4.9 0 5.9-1s1-2.7 1-5.9 0-4.9-1-5.9c-.7-.7-1.8-.9-3.6-1-.1-.9-.1-1.9-.2-2.3-.1-.7-.3-1.2-.7-1.6-.4-.4-.9-.6-1.6-.7-.5-.1-1.3-.1-2.4-.1H9Zm2.8 4.7c0-.8-.1-1.5-.1-1.9-.1-.4-.1-.6-.3-.7-.1-.1-.3-.2-.7-.3-.4-.1-1-.1-1.9-.1s-1.5 0-1.9.1c-.4.1-.6.1-.7.3-.1.1-.2.3-.3.7 0 .4-.1 1.1-.1 1.9h6Zm-2.9 2.8c.4 0 .7.3.7.7v.1c1 .2 1.8 1 1.8 2 0 .4-.3.7-.7.7s-.7-.3-.7-.7-.4-.8-1.1-.8-1.1.4-1.1.8.4.8 1.1.8c1.2 0 2.4.8 2.4 2.1 0 1-.8 1.8-1.8 2v.1c0 .4-.3.7-.7.7s-.7-.3-.7-.7v-.1c-1-.2-1.8-1-1.8-2 0-.4.3-.7.7-.7s.7.3.7.7.4.8 1.1.8 1.1-.4 1.1-.8-.4-.8-1.1-.8c-1.2 0-2.4-.8-2.4-2.1 0-1 .8-1.8 1.8-2v-.1c0-.4.3-.7.7-.7Z"
        fill="#2cd4e6"
      />
    </svg>
  );
}

function BrowserWindow() {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-[calc(51.938%-87.5px)] top-0 h-[131px] w-[175px]"
      fill="none"
      viewBox="0 0 175 131"
    >
      <path d="M2.3584 7.12938C2.3584 4.49444 4.49444 2.3584 7.12938 2.3584H167.587C170.222 2.3584 172.358 4.49444 172.358 7.12938V125.587C172.358 128.222 170.222 130.358 167.587 130.358H7.12938C4.49444 130.358 2.3584 128.222 2.3584 125.587V7.12938Z" fill="#168d9c" />
      <path d="M167.588 0C171.525 0 174.717 3.19164 174.717 7.12891V123.229C174.717 127.084 171.657 130.222 167.833 130.352C170.354 130.224 172.358 128.14 172.358 125.587V7.12938C172.358 4.49444 170.222 2.3584 167.587 2.3584H7.12938C4.49444 2.3584 2.3584 4.49444 2.3584 7.12938V125.587C2.35865 128.139 4.36264 130.223 6.88281 130.352C3.05939 130.222 0 127.084 0 123.229V7.12891C0 3.19164 3.19164 0 7.12891 0H167.588Z" fill="#2cd4e6" />
      <path d="M24.5109 28.9454C24.5109 27.6427 25.5669 26.5867 26.8696 26.5867H148.345C149.648 26.5867 150.704 27.6427 150.704 28.9454V50.1742C150.704 51.4769 149.648 52.5329 148.345 52.5329H26.8696C25.5669 52.5329 24.5109 51.4769 24.5109 50.1742V28.9454Z" fill="#2cd4e6" />
      <path d="M24.5109 59.611C24.5109 58.3083 25.5669 57.2523 26.8696 57.2523H81.1208C82.4235 57.2523 83.4795 58.3083 83.4795 59.611V80.8398C83.4795 82.1425 82.4235 83.1985 81.1208 83.1985H26.8696C25.5669 83.1985 24.5109 82.1425 24.5109 80.8398V59.611Z" fill="#D9D9D9" fillOpacity=".16" />
      <path d="M24.5109 90.2732C24.5109 88.9705 25.5669 87.9144 26.8696 87.9144H50.4571C51.7598 87.9144 52.8158 88.9705 52.8158 90.2732V111.502C52.8158 112.805 51.7598 113.861 50.4571 113.861H26.8696C25.5669 113.861 24.5109 112.805 24.5109 111.502V90.2732Z" fill="#D9D9D9" fillOpacity=".16" />
      <path d="M57.5332 90.2732C57.5332 88.9705 58.5893 87.9144 59.892 87.9144H83.4794C84.7821 87.9144 85.8382 88.9705 85.8382 90.2732V111.502C85.8382 112.805 84.7821 113.861 83.4794 113.861H59.892C58.5893 113.861 57.5332 112.805 57.5332 111.502V90.2732Z" fill="#D9D9D9" fillOpacity=".16" />
      <path d="M89.3765 90.2732C89.3765 88.9705 90.4326 87.9144 91.7353 87.9144H115.323C116.625 87.9144 117.681 88.9705 117.681 90.2732V111.502C117.681 112.805 116.625 113.861 115.323 113.861H91.7353C90.4326 113.861 89.3765 112.805 89.3765 111.502V90.2732Z" fill="#D9D9D9" fillOpacity=".16" />
      <path d="M122.399 90.2732C122.399 88.9705 123.455 87.9144 124.758 87.9144H148.345C149.648 87.9144 150.704 88.9705 150.704 90.2732V111.502C150.704 112.805 149.648 113.861 148.345 113.861H124.758C123.455 113.861 122.399 112.805 122.399 111.502V90.2732Z" fill="#D9D9D9" fillOpacity=".16" />
      {[57.842, 61.3795, 64.9169, 68.4561, 71.9936, 75.5328, 79.0703].map((y) => (
        <path
          d={`M91.7354 ${y}C91.7354 ${y - 0.3257} 91.9994 ${y - 0.5897} 92.3251 ${y - 0.5897}H150.114C150.44 ${y - 0.5897} 150.704 ${y - 0.3257} 150.704 ${y}C150.704 ${y + 0.3257} 150.44 ${y + 0.5897} 150.114 ${y + 0.5897}H92.3251C91.9994 ${y + 0.5897} 91.7354 ${y + 0.3257} 91.7354 ${y}Z`}
          fill="#D9D9D9"
          fillOpacity=".16"
          key={y}
        />
      ))}
      <path d="M10.3584 8.91847C10.3584 6.9523 11.9523 5.3584 13.9185 5.3584H162.476C164.442 5.3584 166.036 6.9523 166.036 8.91847V11.2553H10.3584V8.91847Z" fill="#23b8c8" />
      <circle cx="13.8962" cy="8.6081" fill="#FF2C60" r="1.17938" />
      <circle cx="18.614" cy="8.6081" fill="#F2C94C" r="1.17938" />
      <circle cx="23.3318" cy="8.6081" fill="#1BC47D" r="1.17938" />
    </svg>
  );
}

function DashboardPhone() {
  return (
    <div className="h-[111px] w-[92px] rounded-[7px] bg-[#168d9c] shadow-[0_0_0_2px_#2cd4e6]">
      <div className="mx-auto mt-[6px] h-[6px] w-[78px] rounded-[2px] bg-white/15" />
      <div className="mx-auto mt-[9px] h-[26px] w-[75px] rounded bg-accent-dark" />
      <div className="mx-auto mt-[5px] flex w-[75px] gap-1">
        <span className="h-[26px] flex-1 rounded bg-white/15" />
        <span className="h-[26px] flex-1 rounded bg-white/15" />
      </div>
      <div className="mx-auto mt-[4px] grid w-[75px] grid-cols-2 gap-1">
        <span className="h-[23px] rounded bg-white/15" />
        <span className="h-[23px] rounded bg-white/15" />
      </div>
    </div>
  );
}

function TallPhone() {
  return (
    <svg
      aria-hidden="true"
      className="h-[103px] w-[55px]"
      fill="none"
      viewBox="0 0 55 103"
    >
      <path d="M2.3584 7.07589C2.3584 4.47049 4.47049 2.3584 7.07589 2.3584H47.6409C50.2463 2.3584 52.3584 4.47049 52.3584 7.07589V97.6409C52.3584 100.246 50.2463 102.358 47.6409 102.358H7.07589C4.47049 102.358 2.3584 100.246 2.3584 97.6409V7.07589Z" fill="#168d9c" />
      <path d="M47.8838 102.352C50.3763 102.225 52.3584 100.165 52.3584 97.6409V7.07589C52.3584 4.47049 50.2463 2.3584 47.6409 2.3584H7.07589C4.47049 2.3584 2.3584 4.47049 2.3584 7.07589V97.6409C2.3584 100.165 4.33998 102.225 6.83203 102.352C3.03691 102.223 0 99.1086 0 95.2822V7.07617C0 3.16807 3.16807 0 7.07617 0H47.6406C51.5487 0 54.7168 3.16807 54.7168 7.07617V95.2822C54.7168 99.0682 51.7438 102.16 48.0049 102.35L47.8838 102.352Z" fill="#2cd4e6" />
      <path d="M7.3584 23.333C7.3584 22.0303 8.41444 20.9743 9.71714 20.9743H45.0983C46.401 20.9743 47.4571 22.0303 47.4571 23.333V44.5618C47.4571 45.8645 46.401 46.9205 45.0983 46.9205H9.71715C8.41445 46.9205 7.3584 45.8644 7.3584 44.5617V23.333Z" fill="#2cd4e6" />
      <path d="M7.3584 91.7357C7.3584 90.433 8.41444 89.3769 9.71714 89.3769H45.0983C46.401 89.3769 47.4571 90.433 47.4571 91.7357V92.9151C47.4571 94.2178 46.401 95.2738 45.0983 95.2738H9.71715C8.41445 95.2738 7.3584 94.2178 7.3584 92.9151V91.7357Z" fill="#D9D9D9" fillOpacity=".16" />
      <path d="M7.3584 51.6363C7.3584 50.3336 8.41444 49.2775 9.71714 49.2775H45.0983C46.401 49.2775 47.4571 50.3336 47.4571 51.6363V83.4793C47.4571 84.782 46.401 85.8381 45.0983 85.8381H9.71715C8.41445 85.8381 7.3584 84.782 7.3584 83.4793V51.6363Z" fill="#D9D9D9" fillOpacity=".16" />
      {[7.3584, 17.9725, 28.5871, 39.2017].map((x) => (
        <rect fill="#D9D9D9" fillOpacity=".16" height="7.0762" key={x} rx="1.1794" width="8.0871" x={x} y="10.3584" />
      ))}
    </svg>
  );
}

function GaugeBadge() {
  return (
    <svg
      aria-hidden="true"
      className="absolute left-[calc(51.5504%-30.5px)] top-[calc(49.2754%-29.5px)] h-[59px] w-[61px] overflow-hidden rounded-full"
      viewBox="0 0 61 59"
    >
      <defs>
        <radialGradient id="gauge-bg" cx=".5" cy=".5" r=".5">
          <stop stopColor="#FFFAEF" />
          <stop offset="1" stopColor="#FCDB87" />
        </radialGradient>
      </defs>
      <path d="M29.381 58.763C13.154 58.763 0 58.763 0 58.763V0s13.154 0 29.381 0h2.099C47.707 0 60.861 0 60.861 0v58.763s-13.154 0-29.381 0Z" fill="url(#gauge-bg)" />
      <path d="M37.801 17.681A13.99 13.99 0 1 0 42.924 22.821" fill="transparent" stroke="#111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.79821" />
      <path d="M36.351 24.229s-2.37 6.327-3.463 7.42a2.798 2.798 0 1 1-3.957-3.958c1.093-1.092 7.42-3.462 7.42-3.462Z" fill="#111" stroke="#111" strokeLinejoin="round" strokeWidth="2.79821" />
    </svg>
  );
}
