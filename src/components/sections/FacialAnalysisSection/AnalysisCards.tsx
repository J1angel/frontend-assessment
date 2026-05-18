"use client";

import Image from "next/image";

const COL = "shrink-0 xs:w-[132px] md:w-[285px]";
const COL_WIDE = "shrink-0 xs:w-[132px] md:w-[352px]";

/** Facial-thirds on lg/xl */
const WIDE_CARD_LG =
  "h-auto w-full lg:h-[165px] lg:w-[352px] xl:h-[165px] xl:w-[352px]";

/** Asymmetrical: 352 on lg, 285 on xl */
const ASYMMETRICAL_DESKTOP =
  "h-auto w-full md:max-lg:max-h-[165px] lg:h-[165px] lg:w-[352px] xl:h-[165px] xl:w-[285px]";

const DESKTOP_IMAGE_SIZES =
  "(min-width: 1440px) 352px, 285px";

const HIDE_ON_XS = "hidden md:max-lg:block lg:block";
const SHOW_ON_XS = "block xs:block md:hidden lg:hidden";

const SCATTER_POINT = "/images/cards/scatter-point.png";
const BELL_CURVE = "/images/cards/bell-curve.png";
const HALF_BLOCK = "/images/cards/half-block.png";
const EYES = "/images/cards/eyes.png";
const FACIAL_THIRDS = "/images/cards/facial-thirds.png";
const ASYMMETRICAL = "/images/cards/asymmetrical.png";

const SIDE_BLUR =
  "pointer-events-none absolute top-0 z-[5] h-[370px] w-[136px] backdrop-blur-[4px] hidden opacity-50 lg:block xl:hidden";
const TABLET_ROW =
  "xs:items-start xs:pt-[50px] md:max-lg:items-start md:max-lg:pt-[50px]";
const XS_COL =
  "xs:flex-col xs:max-md:flex-col md:max-lg:flex-col lg:flex-row";
const XS_COL_END =
  "xs:flex-col xs:max-md:flex-col xs:items-end md:max-lg:flex-col md:max-lg:items-end lg:flex-row lg:items-start";
const XS_LEFT_STACK_REVERSE =
  "xs:flex-col-reverse xs:max-md:flex-col-reverse md:max-lg:flex-col lg:flex-col";
const XS_STACK_REVERSE =
  "xs:flex-col-reverse xs:max-md:flex-col-reverse md:max-lg:flex-col-reverse lg:flex-col";

function CardImage({
  src,
  alt,
  width,
  height,
  className = "",
  sizes,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="eager"
      className={`block h-auto w-full max-w-full ${className}`}
      sizes={sizes ?? DESKTOP_IMAGE_SIZES}
    />
  );
}

function ResponsiveCardPair({
  src,
  srcXs,
  alt,
  width,
  height,
  widthXs,
  heightXs,
  className = "",
  classNameXs = "",
}: {
  src: string;
  srcXs: string;
  alt: string;
  width: number;
  height: number;
  widthXs: number;
  heightXs: number;
  className?: string;
  classNameXs?: string;
}) {
  return (
    <>
      <CardImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`${HIDE_ON_XS} ${className}`.trim()}
      />
      <CardImage
        src={srcXs}
        alt={alt}
        width={widthXs}
        height={heightXs}
        className={`${SHOW_ON_XS} ${classNameXs}`.trim()}
        sizes={`${widthXs}px`}
      />
    </>
  );
}

export function AnalysisCards() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 mx-auto xs:w-[343px] md:max-lg:w-[736px] lg:w-full">
      <div
        className={`relative z-0 flex w-full items-start justify-between gap-0 lg:items-start lg:pt-[180px] ${TABLET_ROW}`}
      >
        <div className={`relative flex w-fit gap-[10px] ${XS_COL}`}>
          <div aria-hidden className={`${SIDE_BLUR} left-0`} />
          <div className={COL}>
            <ResponsiveCardPair
              src={SCATTER_POINT}
              srcXs={SCATTER_POINT}
              alt="Scatter Point"
              width={285}
              height={337}
              widthXs={132}
              heightXs={157}
            />
          </div>
          <div className={`flex flex-col gap-[10px] ${COL} ${XS_LEFT_STACK_REVERSE}`}>
            <ResponsiveCardPair
              src={BELL_CURVE}
              srcXs={BELL_CURVE}
              alt="Bell Curve"
              width={285}
              height={197}
              widthXs={132}
              heightXs={90}
            />
            <ResponsiveCardPair
              src={HALF_BLOCK}
              srcXs={HALF_BLOCK}
              alt="Half block chart"
              width={284}
              height={126}
              widthXs={132}
              heightXs={58}
            />
          </div>
        </div>

        <div className={`flex w-fit gap-[10px] ${XS_COL_END}`}>
          <div className={`${COL} self-end`}>
            <ResponsiveCardPair
              src={EYES}
              srcXs={EYES}
              alt="Eyes"
              width={285}
              height={337}
              widthXs={132}
              heightXs={157}
            />
          </div>
          <div
            className={`relative flex flex-col gap-[10px] ${COL_WIDE} ${XS_STACK_REVERSE}`}
          >
            <div aria-hidden className={`${SIDE_BLUR} right-0`} />
            <ResponsiveCardPair
              src={FACIAL_THIRDS}
              srcXs={FACIAL_THIRDS}
              alt="Facial thirds"
              width={352}
              height={165}
              widthXs={132}
              heightXs={90}
              className={WIDE_CARD_LG}
            />
            <ResponsiveCardPair
              src={ASYMMETRICAL}
              srcXs={ASYMMETRICAL}
              alt="Asymmetrical"
              width={352}
              height={165}
              widthXs={132}
              heightXs={58}
              className={ASYMMETRICAL_DESKTOP}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
