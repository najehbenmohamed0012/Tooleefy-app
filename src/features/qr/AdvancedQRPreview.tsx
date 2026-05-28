import React, { useEffect, useRef } from "react";
import QRCodeStyling, {
  DrawType,
  TypeNumber,
  Mode,
  ErrorCorrectionLevel,
  DotType,
  CornerSquareType,
  CornerDotType,
  Options
} from "qr-code-styling";

interface AdvancedQRPreviewProps {
  value: string;
  size: number;
  fgColor: string;
  bgColor: string;
  fgColor2?: string;
  useGradient?: boolean;
  gradientType?: "linear" | "radial";
  gradientRotation?: number;
  dotsStyle: DotType;
  cornersSquareStyle: CornerSquareType;
  cornersDotStyle: CornerDotType;
  logo?: string;
  logoSize?: number;
  margin?: number;
  level?: ErrorCorrectionLevel;
  className?: string;
  onDownload?: (blob: Blob) => void;
  
  // Elite customizations
  drawType?: DrawType;
  shape?: "square" | "circle";
  backgroundRound?: number;
  dotsRoundSize?: boolean;
  
  bgUseGradient?: boolean;
  bgColor2?: string;
  bgGradientType?: "linear" | "radial";
  bgGradientRotation?: number;

  cornersSquareColor?: string;
  cornersSquareUseGradient?: boolean;
  cornersSquareColor2?: string;
  cornersSquareGradientRotation?: number;

  cornersDotColor?: string;
  cornersDotUseGradient?: boolean;
  cornersDotColor2?: string;
  cornersDotGradientRotation?: number;

  logoMargin?: number;
  hideBackgroundDots?: boolean;

  // Premium Custom Frames
  frameStyle?: string;
  frameText?: string;
  frameColor?: string;
}

export function AdvancedQRPreview({
  value,
  size,
  fgColor,
  bgColor,
  fgColor2,
  useGradient,
  gradientType,
  gradientRotation,
  dotsStyle,
  cornersSquareStyle,
  cornersDotStyle,
  logo,
  logoSize = 20,
  margin = 0,
  level = "H",
  className,
  qrRef,
  
  // Elite customizations defaults
  drawType = "canvas",
  shape = "square",
  backgroundRound = 0,
  dotsRoundSize = true,
  bgUseGradient = false,
  bgColor2 = "#f8fafc",
  bgGradientType = "linear",
  bgGradientRotation = 0,
  cornersSquareColor = "",
  cornersSquareUseGradient = false,
  cornersSquareColor2 = "",
  cornersSquareGradientRotation = 0,
  cornersDotColor = "",
  cornersDotUseGradient = false,
  cornersDotColor2 = "",
  cornersDotGradientRotation = 0,
  logoMargin = 5,
  hideBackgroundDots = true,

  // Premium Frame properties
  frameStyle = "none",
  frameText = "SCAN ME",
  frameColor = ""
}: AdvancedQRPreviewProps & { qrRef?: React.MutableRefObject<QRCodeStyling | null> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const qrCode = useRef<QRCodeStyling | null>(null);

  useEffect(() => {
    const options: Options = {
      type: frameStyle && frameStyle !== "none" ? "svg" : drawType,
      shape: shape,
      width: size,
      height: size,
      data: value || " ",
      margin: margin * 10,
      qrOptions: {
        typeNumber: 0 as TypeNumber,
        mode: "Byte" as Mode,
        errorCorrectionLevel: level
      },
      imageOptions: {
        hideBackgroundDots: hideBackgroundDots,
        imageSize: logoSize / 100,
        margin: logoMargin
      },
      dotsOptions: {
        color: !useGradient ? fgColor : undefined,
        type: dotsStyle,
        roundSize: dotsRoundSize,
        gradient: useGradient ? {
          type: gradientType,
          rotation: (gradientRotation || 0) * (Math.PI / 180),
          colorStops: [
            { offset: 0, color: fgColor },
            { offset: 1, color: fgColor2 || fgColor }
          ]
        } : undefined
      },
      backgroundOptions: {
        color: bgColor,
        round: backgroundRound,
        gradient: bgUseGradient ? {
          type: bgGradientType,
          rotation: (bgGradientRotation || 0) * (Math.PI / 180),
          colorStops: [
            { offset: 0, color: bgColor },
            { offset: 1, color: bgColor2 }
          ]
        } : undefined
      },
      cornersSquareOptions: {
        color: cornersSquareColor ? cornersSquareColor : fgColor,
        type: cornersSquareStyle,
        gradient: cornersSquareUseGradient ? {
          type: "linear",
          rotation: (cornersSquareGradientRotation || 0) * (Math.PI / 180),
          colorStops: [
            { offset: 0, color: cornersSquareColor || fgColor },
            { offset: 1, color: cornersSquareColor2 || fgColor2 || fgColor }
          ]
        } : undefined
      },
      cornersDotOptions: {
        color: cornersDotColor ? cornersDotColor : fgColor,
        type: cornersDotStyle,
        gradient: cornersDotUseGradient ? {
          type: "linear",
          rotation: (cornersDotGradientRotation || 0) * (Math.PI / 180),
          colorStops: [
            { offset: 0, color: cornersDotColor || fgColor },
            { offset: 1, color: cornersDotColor2 || fgColor2 || fgColor }
          ]
        } : undefined
      },
      image: logo || undefined
    };

    const currentContainer = containerRef.current;
    if (!currentContainer) return;

    // Clear previous elements to avoid duplicate appending or stale canvassing structures
    currentContainer.innerHTML = "";

    const qr = new QRCodeStyling(options);
    qrCode.current = qr;
    if (qrRef) qrRef.current = qr;
    
    qr.append(currentContainer);

    return () => {
      // Clean up the inner container during unmounts and re-renders using the captured node reference
      if (currentContainer) {
        currentContainer.innerHTML = "";
      }
    };
  }, [
    value, size, fgColor, bgColor, fgColor2, useGradient, gradientType, gradientRotation,
    dotsStyle, cornersSquareStyle, cornersDotStyle, logo, logoSize, margin, level,
    drawType, shape, backgroundRound, dotsRoundSize,
    bgUseGradient, bgColor2, bgGradientType, bgGradientRotation,
    cornersSquareColor, cornersSquareUseGradient, cornersSquareColor2, cornersSquareGradientRotation,
    cornersDotColor, cornersDotUseGradient, cornersDotColor2, cornersDotGradientRotation,
    logoMargin, hideBackgroundDots,
    frameStyle,
    qrRef
  ]);

  if (frameStyle && frameStyle !== "none") {
    // Determine background style
    const bgStyle = bgUseGradient 
      ? { background: `linear-gradient(${bgGradientRotation}deg, ${bgColor}, ${bgColor2})` }
      : { backgroundColor: bgColor };

    const actualFrameColor = frameColor || fgColor;

    return (
      <div 
        key={`qr-frame-wrapper-${frameStyle}`}
        className="relative w-full aspect-[340/420] flex flex-col items-center p-6 border shadow-2xl transition-all duration-300 rounded-[2.5rem] overflow-hidden"
        style={{ 
          ...bgStyle,
          borderColor: actualFrameColor + "20",
          color: actualFrameColor
        }}
      >
        {frameStyle === "smart-badge" && (
          <div key="frame-content-smart-badge" className="absolute inset-0 flex flex-col items-center p-4">
            {/* Lanyard slot */}
            <div className="w-10 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700/80 mx-auto opacity-70 flex items-center justify-center mb-4 mt-2">
              <div className="w-6 h-1 bg-slate-400 dark:bg-slate-800 rounded-full" />
            </div>
            {/* Header text */}
            <div className="text-center space-y-0.5 mb-2 select-none">
              <p className="text-[10px] font-black tracking-widest uppercase">SECURITY PASS GATE</p>
              <p className="text-[7px] font-mono opacity-60 uppercase tracking-widest font-semibold">• TRUSTED ACCESS •</p>
            </div>
            <div className="w-full flex-1 flex items-center justify-center">
              <div key="canvas-holder-smart-badge" ref={containerRef} className="w-[82%] aspect-square flex items-center justify-center [&>canvas]:w-full [&>canvas]:h-full [&>svg]:w-full [&>svg]:h-full object-contain" />
            </div>
            {/* Bottom Pill Badge */}
            <div className="w-[85%] mt-auto mb-2 py-2.5 rounded-xl text-center text-[10px] font-black uppercase text-white shadow-sm" style={{ backgroundColor: actualFrameColor }}>
              {frameText}
            </div>
          </div>
        )}

        {frameStyle === "retro-ticket" && (
          <div key="frame-content-retro-ticket" className="absolute inset-0 flex flex-col p-5">
            {/* Notch cutouts on edges */}
            <div className="absolute -left-3 top-[38%] w-6 h-6 rounded-full border shadow-inner bg-slate-900 border-white/5" />
            <div className="absolute -right-3 top-[38%] w-6 h-6 rounded-full border shadow-inner bg-slate-900 border-white/5" />
            <div className="absolute left-6 right-6 top-[41%] border-t border-dashed opacity-30 pointer-events-none" style={{ borderColor: actualFrameColor }} />
            
            <div className="flex justify-between items-center text-[8px] font-mono font-bold tracking-widest select-none">
              <span>ADMIT ONE TICK</span>
              <span>NO. #4829</span>
            </div>
            <div className="mt-8 flex-1 flex items-center justify-center relative z-10">
              <div key="canvas-holder-retro-ticket" ref={containerRef} className="w-[80%] aspect-square flex items-center justify-center [&>canvas]:w-full [&>canvas]:h-full [&>svg]:w-full [&>svg]:h-full object-contain" />
            </div>
            
            <div className="mt-auto border-t-2 border-b-2 py-2 text-center text-xs font-black uppercase select-none tracking-wider font-semibold" style={{ borderColor: actualFrameColor }}>
              {frameText}
            </div>
          </div>
        )}

        {frameStyle === "bracket-technical" && (
          <div key="frame-content-bracket-technical" className="absolute inset-0 flex flex-col p-4 font-mono">
            {/* 4 Corner brackets */}
            <div className="absolute top-4 left-4 w-5 h-5 border-t-[3px] border-l-[3px]" style={{ borderColor: actualFrameColor }} />
            <div className="absolute top-4 right-4 w-5 h-5 border-t-[3px] border-r-[3px]" style={{ borderColor: actualFrameColor }} />
            <div className="absolute bottom-4 left-4 w-5 h-5 border-b-[3px] border-l-[3px]" style={{ borderColor: actualFrameColor }} />
            <div className="absolute bottom-4 right-4 w-5 h-5 border-b-[3px] border-r-[3px]" style={{ borderColor: actualFrameColor }} />
            
            <div className="flex justify-between text-[7px] font-bold select-none mt-2 uppercase">
              <span>CORE_DATA_LOCK</span>
              <span>COORD.77X_9Y</span>
            </div>
            <div className="flex-1 flex items-center justify-center">
              <div key="canvas-holder-bracket-technical" ref={containerRef} className="w-[84%] aspect-square flex items-center justify-center [&>canvas]:w-full [&>canvas]:h-full [&>svg]:w-full [&>svg]:h-full object-contain opacity-90 scale-95" />
            </div>
            <div className="mt-auto mb-2 text-center text-[10px] font-black uppercase tracking-widest opacity-80 leading-snug">
              &lt; {frameText} &gt;
            </div>
          </div>
        )}

        {frameStyle === "stamp-classic" && (
          <div key="frame-content-stamp-classic" className="absolute inset-x-4 inset-y-5 flex flex-col p-4 border-2 border-dashed rounded-2xl" style={{ borderColor: actualFrameColor + "40" }}>
            {/* Postage cancellation stamp overlay */}
            <div className="absolute top-3 right-3 w-16 h-16 rounded-full border border-dashed opacity-45 flex items-center justify-center select-none rotate-[-12deg] pointer-events-none" style={{ borderColor: actualFrameColor }}>
              <span className="text-[7px] font-bold tracking-wider text-center uppercase">PAR AVION</span>
            </div>
            
            <div className="flex items-start justify-between select-none">
              <div className="w-8 h-10 border flex items-center justify-center rounded text-[9px] font-serif font-black" style={{ borderColor: actualFrameColor }}>
                25¢
              </div>
              <span className="text-[7px] font-mono tracking-widest uppercase opacity-60">POSTAGE MAIL</span>
            </div>
            
            <div className="flex-1 flex items-center justify-center">
              <div key="canvas-holder-stamp-classic" ref={containerRef} className="w-[82%] aspect-square flex items-center justify-center [&>canvas]:w-full [&>canvas]:h-full [&>svg]:w-full [&>svg]:h-full object-contain" />
            </div>
            
            <div className="mt-auto border-t border-dashed py-1.5 text-center text-[10px] font-serif font-black uppercase tracking-widest opacity-90" style={{ borderColor: actualFrameColor }}>
              {frameText}
            </div>
          </div>
        )}

        {frameStyle === "bubble-retro" && (
          <div key="frame-content-bubble-retro" className="absolute inset-0 flex flex-col items-center p-4">
            {/* Speech Bubble */}
            <div className="relative w-[90%] py-2.5 px-4 rounded-xl text-center font-black uppercase text-[10px] select-none shadow-sm flex items-center justify-center text-white mt-2" style={{ backgroundColor: actualFrameColor }}>
              {frameText}
              {/* Pointer beak */}
              <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45" style={{ backgroundColor: actualFrameColor }} />
            </div>
            
            <div className="flex-1 flex items-center justify-center w-full mt-4">
              <div key="canvas-holder-bubble-retro" ref={containerRef} className="w-[84%] aspect-square flex items-center justify-center [&>canvas]:w-full [&>canvas]:h-full [&>svg]:w-full [&>svg]:h-full object-contain" />
            </div>

            <p className="mt-auto mb-2 text-[7px] font-black uppercase tracking-widest opacity-60 select-none">SAY HELLO — PLACE SCAN</p>
          </div>
        )}

        {frameStyle === "comic-pop" && (
          <div key="frame-content-comic-pop" className="absolute inset-0 flex flex-col items-center p-4 border-[3px] border-slate-900 dark:border-slate-100 bg-[#fefce8] dark:bg-zinc-950">
            {/* Comic starburst overlay */}
            <div className="absolute top-2 right-2 px-3 py-2 bg-yellow-400 border-[2px] border-slate-900 rounded-lg text-[10px] font-black rotate-[15deg] select-none shadow-sm text-slate-900 font-bold">
              BOOM!
            </div>
            
            <div className="flex-1 flex items-center justify-center w-full mt-2">
              <div key="canvas-holder-comic-pop" ref={containerRef} className="w-[84%] aspect-square flex items-center justify-center [&>canvas]:w-full [&>canvas]:h-full [&>svg]:w-full [&>svg]:h-full object-contain" />
            </div>

            {/* Bottom Skewed Banner */}
            <div className="w-[90%] mt-auto mb-2 py-2 px-4 bg-red-500 border-2 border-slate-900 -skew-x-6 text-center text-white text-[10px] font-black select-none uppercase shadow-sm">
              {frameText}
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div 
      key="qr-no-frame"
      ref={containerRef} 
      className={`flex items-center justify-center [&>canvas]:w-full [&>canvas]:h-full [&>canvas]:max-w-full [&>canvas]:max-h-full [&>canvas]:object-contain [&>svg]:w-full [&>svg]:h-full [&>svg]:max-w-full [&>svg]:max-h-full [&>svg]:object-contain ${className}`} 
    />
  );
}
