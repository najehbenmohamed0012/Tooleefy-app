import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { Trophy, Star, Sparkles, Layout, PenTool, Check } from "lucide-react";

interface QRStyleSettingsProps {
  // Core Styles
  dotsStyle: string;
  setDotsStyle: (v: any) => void;
  cornersSquareStyle: string;
  setCornersSquareStyle: (v: any) => void;
  cornersDotStyle: string;
  setCornersDotStyle: (v: any) => void;
  fgColor: string;
  setFgColor: (v: string) => void;
  bgColor: string;
  setBgColor: (v: string) => void;
  useGradient: boolean;
  setUseGradient: (v: boolean) => void;
  fgColor2: string;
  setFgColor2: (v: string) => void;
  gradientRotation: number;
  setGradientRotation: (v: number) => void;
  level: string;
  setLevel: (v: any) => void;
  includeMargin: boolean;
  setIncludeMargin: (v: boolean) => void;
  marginSize: number;
  setMarginSize: (v: number) => void;
  logoSize: number;
  setLogoSize: (v: number) => void;
  logoUrl: string;
  setLogoUrl: (v: string) => void;

  // Elite Settings
  drawType?: "canvas" | "svg";
  setDrawType?: (v: "canvas" | "svg") => void;
  shape?: "square" | "circle";
  setShape?: (v: "square" | "circle") => void;
  backgroundRound?: number;
  setBackgroundRound?: (v: number) => void;
  dotsRoundSize?: boolean;
  setDotsRoundSize?: (v: boolean) => void;

  // Background Gradient
  bgUseGradient?: boolean;
  setBgUseGradient?: (v: boolean) => void;
  bgColor2?: string;
  setBgColor2?: (v: string) => void;
  bgGradientType?: "linear" | "radial";
  setBgGradientType?: (v: "linear" | "radial") => void;
  bgGradientRotation?: number;
  setBgGradientRotation?: (v: number) => void;

  // Outer Eye Corners Custom Selection
  cornersSquareColor?: string;
  setCornersSquareColor?: (v: string) => void;
  cornersSquareUseGradient?: boolean;
  setCornersSquareUseGradient?: (v: boolean) => void;
  cornersSquareColor2?: string;
  setCornersSquareColor2?: (v: string) => void;
  cornersSquareGradientRotation?: number;
  setCornersSquareGradientRotation?: (v: number) => void;

  // Inner Eye Dots Custom Selection
  cornersDotColor?: string;
  setCornersDotColor?: (v: string) => void;
  cornersDotUseGradient?: boolean;
  setCornersDotUseGradient?: (v: boolean) => void;
  cornersDotColor2?: string;
  setCornersDotColor2?: (v: string) => void;
  cornersDotGradientRotation?: number;
  setCornersDotGradientRotation?: (v: number) => void;

  // Overrides
  logoMargin?: number;
  setLogoMargin?: (v: number) => void;
  hideBackgroundDots?: boolean;
  setHideBackgroundDots?: (v: boolean) => void;

  // Premium Frames Actions
  frameStyle?: string;
  setFrameStyle?: (v: string) => void;
  frameText?: string;
  setFrameText?: (v: string) => void;
  frameColor?: string;
  setFrameColor?: (v: string) => void;
}

export function QRStyleSettings({
  // Core
  dotsStyle, setDotsStyle,
  cornersSquareStyle, setCornersSquareStyle,
  cornersDotStyle, setCornersDotStyle,
  fgColor, setFgColor,
  bgColor, setBgColor,
  useGradient, setUseGradient,
  fgColor2, setFgColor2,
  gradientRotation, setGradientRotation,
  level, setLevel,
  includeMargin, setIncludeMargin,
  marginSize, setMarginSize,
  logoSize, setLogoSize,
  logoUrl, setLogoUrl,

  // Elite (with default setters/getters fallbacks)
  drawType = "canvas",
  setDrawType = () => {},
  shape = "square",
  setShape = () => {},
  backgroundRound = 0,
  setBackgroundRound = () => {},
  dotsRoundSize = true,
  setDotsRoundSize = () => {},

  bgUseGradient = false,
  setBgUseGradient = () => {},
  bgColor2 = "#ffffff",
  setBgColor2 = () => {},
  bgGradientType = "linear",
  setBgGradientType = () => {},
  bgGradientRotation = 0,
  setBgGradientRotation = () => {},

  cornersSquareColor = "",
  setCornersSquareColor = () => {},
  cornersSquareUseGradient = false,
  setCornersSquareUseGradient = () => {},
  cornersSquareColor2 = "",
  setCornersSquareColor2 = () => {},
  cornersSquareGradientRotation = 0,
  setCornersSquareGradientRotation = () => {},

  cornersDotColor = "",
  setCornersDotColor = () => {},
  cornersDotUseGradient = false,
  setCornersDotUseGradient = () => {},
  cornersDotColor2 = "",
  setCornersDotColor2 = () => {},
  cornersDotGradientRotation = 0,
  setCornersDotGradientRotation = () => {},

  logoMargin = 5,
  setLogoMargin = () => {},
  hideBackgroundDots = true,
  setHideBackgroundDots = () => {},

  // Premium Frame fallbacks
  frameStyle = "none",
  setFrameStyle = () => {},
  frameText = "SCAN ME",
  setFrameText = () => {},
  frameColor = "",
  setFrameColor = () => {}
}: QRStyleSettingsProps) {

  const applyPreset = (preset: any) => {
    if (preset.dotsStyle) setDotsStyle(preset.dotsStyle);
    if (preset.cornersSquareStyle) setCornersSquareStyle(preset.cornersSquareStyle);
    if (preset.cornersDotStyle) setCornersDotStyle(preset.cornersDotStyle);
    if (preset.fgColor) setFgColor(preset.fgColor);
    if (preset.fgColor2) setFgColor2(preset.fgColor2);
    if (preset.useGradient !== undefined) setUseGradient(preset.useGradient);
    if (preset.bgColor) setBgColor(preset.bgColor);
    
    // Ext presets settings
    if (preset.shape) setShape(preset.shape);
    if (preset.drawType) setDrawType(preset.drawType);
    if (preset.backgroundRound !== undefined) setBackgroundRound(preset.backgroundRound);
    if (preset.dotsRoundSize !== undefined) setDotsRoundSize(preset.dotsRoundSize);
    
    // Support background gradients in presets as well
    if (preset.bgUseGradient !== undefined) {
      setBgUseGradient(preset.bgUseGradient);
    } else {
      setBgUseGradient(false);
    }
    if (preset.bgColor2) setBgColor2(preset.bgColor2);

    // Support premium frame attributes in presets
    if (preset.frameStyle !== undefined) setFrameStyle(preset.frameStyle);
    if (preset.frameText !== undefined) setFrameText(preset.frameText);
    if (preset.frameColor !== undefined) {
      setFrameColor(preset.frameColor);
    } else {
      setFrameColor("");
    }

    // Reset eye modifications or update from preset
    if (preset.cornersSquareColor !== undefined) {
      setCornersSquareColor(preset.cornersSquareColor);
    } else {
      setCornersSquareColor("");
    }
    if (preset.cornersSquareUseGradient !== undefined) {
      setCornersSquareUseGradient(preset.cornersSquareUseGradient);
    } else {
      setCornersSquareUseGradient(false);
    }
    if (preset.cornersSquareColor2 !== undefined) {
      setCornersSquareColor2(preset.cornersSquareColor2);
    } else {
      setCornersSquareColor2("");
    }
    if (preset.cornersDotColor !== undefined) {
      setCornersDotColor(preset.cornersDotColor);
    } else {
      setCornersDotColor("");
    }
    if (preset.cornersDotUseGradient !== undefined) {
      setCornersDotUseGradient(preset.cornersDotUseGradient);
    } else {
      setCornersDotUseGradient(false);
    }
    if (preset.cornersDotColor2 !== undefined) {
      setCornersDotColor2(preset.cornersDotColor2);
    } else {
      setCornersDotColor2("");
    }

    toast.success(`${preset.name} Premium Template Applied`);
  };

  const premiumTemplates = [
    {
      name: "Cyber Tokyo",
      desc: "Futuristic glow with neon pink, electric cyan, and technical frame.",
      dotsStyle: "classy",
      cornersSquareStyle: "extra-rounded",
      cornersDotStyle: "dot",
      fgColor: "#ff007f",
      fgColor2: "#00f0ff",
      useGradient: true,
      bgColor: "#080710",
      shape: "circle" as const,
      frameStyle: "bracket-technical",
      frameText: "GRID-SCAN v2.0",
      cornersSquareColor: "#ff007f",
      cornersDotColor: "#39ff14",
      backgroundRound: 0.2
    },
    {
      name: "Foil Gilded",
      desc: "Sleek classic gold details on dark royal black matte casing.",
      dotsStyle: "classy-rounded",
      cornersSquareStyle: "classy",
      cornersDotStyle: "rounded",
      fgColor: "#bf953f",
      fgColor2: "#fcf6ba",
      useGradient: true,
      bgColor: "#050505",
      shape: "square" as const,
      frameStyle: "smart-badge",
      frameText: "PREMIUM ACCESS",
      cornersSquareColor: "#fcf6ba",
      cornersDotColor: "#bf953f",
      backgroundRound: 0.1
    },
    {
      name: "Post Stamp",
      desc: "Craft paper background, solid ink dots, and cancellation graphics.",
      dotsStyle: "square",
      cornersSquareStyle: "square",
      cornersDotStyle: "square",
      fgColor: "#1c1b1a",
      useGradient: false,
      bgColor: "#fdfbf7",
      shape: "square" as const,
      frameStyle: "stamp-classic",
      frameText: "PAR AVION MAIL",
      backgroundRound: 0
    },
    {
      name: "Retro Ticket",
      desc: "Cozy tangerine to deep magenta sunsets on ticket stub framing.",
      dotsStyle: "rounded",
      cornersSquareStyle: "rounded",
      cornersDotStyle: "rounded",
      fgColor: "#e63780",
      fgColor2: "#f95e54",
      useGradient: true,
      bgColor: "#fffaf7",
      shape: "square" as const,
      frameStyle: "retro-ticket",
      frameText: "ADMIT ONE PASS",
      backgroundRound: 0
    },
    {
      name: "Mint Matcha",
      desc: "Soft sage latte with elegant organic forestry dots.",
      dotsStyle: "classy-rounded",
      cornersSquareStyle: "rounded",
      cornersDotStyle: "dot",
      fgColor: "#1e352f",
      useGradient: false,
      bgColor: "#f4f6f0",
      shape: "circle" as const,
      frameStyle: "smart-badge",
      frameText: "BOTANICAL CO.",
      cornersSquareColor: "#2d4232",
      cornersDotColor: "#a2b5cd",
      backgroundRound: 0.5
    },
    {
      name: "Pop Comic",
      desc: "Saturated primary colors, heavy outlines, and retro comic burst.",
      dotsStyle: "square",
      cornersSquareStyle: "square",
      cornersDotStyle: "dot",
      fgColor: "#111827",
      useGradient: false,
      bgColor: "#ffffff",
      shape: "square" as const,
      frameStyle: "comic-pop",
      frameText: "BOOM SCAN!",
      cornersSquareColor: "#ef4444",
      cornersDotColor: "#3b82f6",
      backgroundRound: 0.15
    }
  ];

  const framesOptions = [
    { id: "none", name: "Standard Naked QR", desc: "No outer elements or labels." },
    { id: "smart-badge", name: "Minimalist Smart Badge", desc: "Digital style key pass with top lanyard hole." },
    { id: "retro-ticket", name: "Retro Admission Ticket", desc: "Classic pass with left/right perforated indents." },
    { id: "bracket-technical", name: "Tactical Tech Brackets", desc: "Four sharp scanning guide targets around QR." },
    { id: "stamp-classic", name: "Vintage Postage Stamp", desc: "Scalloped-stamp dashes and postal cancellation circles." },
    { id: "bubble-retro", name: "Playful Cloud Bubble", desc: "A cozy cartoon dialogue box floating on top." },
    { id: "comic-pop", name: "Pop-Art Comic Starburst", desc: "Thick bold frames with yellow explosion sticker." }
  ];

  return (
    <div className="space-y-8">
      {/* Full-width premium workspace box */}
      <div className="bg-[#f0f3ff] dark:bg-zinc-900/60 p-8 rounded-[2.5rem] border border-indigo-200/50 dark:border-zinc-800 shadow-premium-sm space-y-8">
        
        {/* Header line */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-indigo-200/30 dark:border-zinc-800">
          <div className="space-y-1.5 text-left">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-400 dark:bg-yellow-500 text-[10px] font-black uppercase text-slate-900 rounded-full tracking-wider">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" /> NEW DESIGN WORKSPACE
            </span>
            <h3 className="text-lg font-black tracking-widest uppercase italic text-indigo-950 dark:text-zinc-200">Premium Templates & Sticker Frames</h3>
            <p className="text-[11px] text-indigo-900/70 dark:text-zinc-400 max-w-xl font-medium leading-relaxed">
              Activate crafted, rare premium layouts instantly or choose a creative sticker frame complete with customizable system variables.
            </p>
          </div>
        </div>

        {/* Templates Zone */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-left">
            <Trophy className="w-4 h-4 text-amber-500" />
            <h4 className="text-xs font-black uppercase tracking-widest text-indigo-950 dark:text-zinc-300">Handcrafted Premium Presets</h4>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {premiumTemplates.map((tmpl) => {
              const bgGradient = tmpl.useGradient 
                ? `linear-gradient(135deg, ${tmpl.fgColor}, ${tmpl.fgColor2})`
                : tmpl.fgColor;
              
              return (
                <button
                  type="button"
                  key={tmpl.name}
                  onClick={() => applyPreset(tmpl)}
                  className="group relative flex flex-col items-center p-4 bg-white/60 dark:bg-zinc-950/80 hover:bg-white dark:hover:bg-zinc-950/100 border border-indigo-100 dark:border-zinc-800 hover:border-indigo-400 dark:hover:border-indigo-500 rounded-2xl shadow-sm transition-all duration-300 text-left cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-3 shadow-inner group-hover:scale-110 transition-transform" style={{ background: bgGradient }}>
                    <div className="w-4 h-4 bg-white dark:bg-zinc-950 rounded-full" />
                  </div>
                  <h5 className="text-[11px] font-black uppercase tracking-tight text-indigo-950 dark:text-zinc-200 text-center mb-1">{tmpl.name}</h5>
                  <p className="text-[9px] text-indigo-900/50 dark:text-zinc-400 text-center leading-normal select-none line-clamp-2">{tmpl.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Frames & Custom Studio Zone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-indigo-200/30 dark:border-zinc-800">
          
          {/* Framings choice */}
          <div className="space-y-4 text-left">
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-indigo-500" />
              <h4 className="text-xs font-black uppercase tracking-widest text-indigo-950 dark:text-zinc-300">Sticker Frame Layouts</h4>
            </div>

            <div className="space-y-2 max-h-[220px] overflow-y-auto pr-2 custom-scrollbar">
              {framesOptions.map((opt) => {
                const isActive = frameStyle === opt.id;
                return (
                  <button
                    type="button"
                    key={opt.id}
                    onClick={() => setFrameStyle(opt.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border transition-all text-left cursor-pointer ${
                      isActive 
                        ? "bg-indigo-600 border-indigo-600 text-white shadow-md font-semibold"
                        : "bg-white/80 dark:bg-zinc-950/70 border-indigo-100/60 dark:border-zinc-800 hover:border-indigo-300 dark:hover:border-zinc-700 text-slate-800 dark:text-zinc-300"
                    }`}
                  >
                    <div className="space-y-0.5">
                      <p className="text-[11px] font-black uppercase tracking-wider">{opt.name}</p>
                      <p className={`text-[9px] ${isActive ? "text-indigo-100" : "text-muted-foreground"}`}>{opt.desc}</p>
                    </div>
                    {isActive && <Check className="w-4 h-4 shrink-0 stroke-[3px]" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Frame controls studio */}
          <div className="space-y-5 text-left bg-white/40 dark:bg-zinc-950/40 p-5 rounded-2xl border border-indigo-100/50 dark:border-zinc-800">
            <div className="flex items-center gap-2">
              <PenTool className="w-4 h-4 text-indigo-500" />
              <h5 className="text-[11px] font-black uppercase tracking-widest text-indigo-950 dark:text-zinc-300">Frame Variables Studio</h5>
            </div>

            {frameStyle === "none" ? (
              <div className="h-[140px] flex items-center justify-center text-center p-4">
                <p className="text-[10px] text-muted-foreground font-medium italic">
                  Select a creative sticker frame layout on the left to unlock real-time control variables.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Frame Text */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <Label className="text-[10px] font-black uppercase tracking-wider text-indigo-950 dark:text-zinc-400">Frame Inscription Text</Label>
                    <span className="text-[8px] font-mono text-muted-foreground font-black">{frameText.length}/18 chars</span>
                  </div>
                  <Input
                    type="text"
                    maxLength={18}
                    value={frameText}
                    onChange={(e) => setFrameText(e.target.value)}
                    placeholder="e.g., SCAN TO ACCESS"
                    className="h-10 rounded-xl border border-indigo-100 bg-white text-slate-900 font-bold text-xs"
                  />
                </div>

                {/* Frame custom line color */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <Label className="text-[10px] font-black uppercase tracking-wider text-indigo-950 dark:text-zinc-400">Frame Accent Color</Label>
                    <span className="text-[8px] font-mono text-indigo-600 dark:text-indigo-400 font-bold">Overrides default stroke color</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="relative w-10 h-10 rounded-xl border border-indigo-100 overflow-hidden shrink-0 shadow-inner">
                      <Input
                        type="color"
                        value={frameColor || fgColor}
                        onChange={(e) => setFrameColor(e.target.value)}
                        className="absolute inset-0 w-full h-full p-0 border-none cursor-pointer scale-150"
                      />
                    </div>
                    <div className="flex-1 flex gap-2">
                      <Input
                        type="text"
                        value={frameColor}
                        onChange={(e) => setFrameColor(e.target.value)}
                        placeholder="Default (Matches QR Foreground)"
                        className="h-10 rounded-xl border border-indigo-100 bg-white text-slate-900 font-bold text-xs uppercase"
                      />
                      {frameColor && (
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setFrameColor("")}
                          className="h-10 rounded-xl border border-red-200/50 hover:bg-red-50 hover:text-red-600 text-xs text-slate-500 font-black"
                        >
                          Clear
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Group 1: Geometric Structures */}
      <div className="space-y-6 bg-[#daf3e4] p-6 rounded-[2rem] border border-emerald-300/40 shadow-sm transition-all text-emerald-950">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950 italic">Aesthetic Patterns</h3>
          <p className="text-[10px] text-emerald-900/80 font-semibold leading-relaxed">Customize physical rendering formats and module elements.</p>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-1">Draw Engine</Label>
              <Select value={drawType} onValueChange={(v: "canvas" | "svg") => setDrawType(v)}>
                <SelectTrigger className="h-11 rounded-xl bg-white/80 dark:bg-white/90 border border-emerald-300/30 font-bold text-xs text-slate-900 dark:text-slate-900">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="canvas">Canvas (Raster)</SelectItem>
                  <SelectItem value="svg">SVG (Vector)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-1">Outer Shape</Label>
              <Select value={shape} onValueChange={(v: "square" | "circle") => setShape(v)}>
                <SelectTrigger className="h-11 rounded-xl bg-white/80 dark:bg-white/90 border border-emerald-300/30 font-bold text-xs text-slate-900 dark:text-slate-900">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="circle">Circular Frame</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-1">Dots/Modules Style</Label>
            <Select value={dotsStyle} onValueChange={(v: any) => setDotsStyle(v)}>
              <SelectTrigger className="h-11 rounded-xl bg-white/80 dark:bg-white/90 border border-emerald-300/30 font-bold text-xs text-slate-900 dark:text-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="square">Square</SelectItem>
                <SelectItem value="dots">Dots</SelectItem>
                <SelectItem value="rounded">Rounded</SelectItem>
                <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
                <SelectItem value="classy">Classy Elements</SelectItem>
                <SelectItem value="classy-rounded">Classy Rounded</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between p-3 bg-white/50 dark:bg-white/60 rounded-xl border border-emerald-300/30">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-900">Force Rounded Size</span>
              <span className="text-[8px] text-emerald-800/80 font-semibold leading-none">Perfect symmetry across scanning grids</span>
            </div>
            <Switch checked={dotsRoundSize} onCheckedChange={setDotsRoundSize} className="scale-75" />
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-1">Corners Outer Style</Label>
            <Select value={cornersSquareStyle} onValueChange={(v: any) => setCornersSquareStyle(v)}>
              <SelectTrigger className="h-11 rounded-xl bg-white/80 dark:bg-white/90 border border-emerald-300/30 font-bold text-xs text-slate-900 dark:text-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="square">Square</SelectItem>
                <SelectItem value="dot">Dot</SelectItem>
                <SelectItem value="extra-rounded">Extra Rounded</SelectItem>
                <SelectItem value="rounded">Rounded</SelectItem>
                <SelectItem value="classy">Classy Edge</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-1">Corners Inner Style (Eyeball)</Label>
            <Select value={cornersDotStyle} onValueChange={(v: any) => setCornersDotStyle(v)}>
              <SelectTrigger className="h-11 rounded-xl bg-white/80 dark:bg-white/90 border border-emerald-300/30 font-bold text-xs text-slate-900 dark:text-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="square">Square Eyeball</SelectItem>
                <SelectItem value="dot">Dot Eyeball</SelectItem>
                <SelectItem value="rounded">Rounded Eyeball</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="pt-2 border-t border-emerald-300/20 space-y-2.5">
            <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 ml-1">Instant Presets</Label>
            <div className="flex flex-wrap gap-2 pt-1 pb-1.5 ms-0.5">
              {premiumTemplates.map(p => (
                <Button 
                  key={p.name} 
                  variant="outline" 
                  size="sm" 
                  onClick={() => applyPreset(p)}
                  className="rounded-lg h-8 px-3 text-[9px] font-black uppercase tracking-widest border border-emerald-400 bg-white hover:bg-emerald-50 text-emerald-950 transition-all duration-75 shrink-0 border-b-[4px] hover:border-b-[3px] active:border-b-0 active:translate-y-[4px] shadow-sm select-none"
                >
                  {p.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Group 2: Color Gradients & Branding */}
      <div className="space-y-6 bg-[#daf3e4] p-6 rounded-[2rem] border border-emerald-300/40 shadow-sm transition-all text-emerald-950">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950 italic">Branding & Colors</h3>
          <p className="text-[10px] text-emerald-900/80 font-semibold leading-relaxed">Infuse custom color pallets or logos directly inside the code.</p>
        </div>

        <div className="space-y-5">
          {/* Main QR Code Foreground Colors */}
          <div className="space-y-3">
            <div className="flex items-center justify-between ml-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Foreground Palette</Label>
              <div className="flex items-center gap-1.5 text-emerald-900">
                <span className="text-[9px] font-bold text-emerald-800/80 uppercase">Gradient</span>
                <Switch checked={useGradient} onCheckedChange={setUseGradient} className="scale-75" />
              </div>
            </div>
            
            <div className="space-y-2.5 p-3 bg-white/50 dark:bg-white/60 rounded-xl border border-emerald-300/30">
              {/* Color Picks Row */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="relative group">
                    <Input 
                      type="color" 
                      value={fgColor} 
                      onChange={e => setFgColor(e.target.value)}
                      className="w-10 h-10 p-0.5 rounded-lg border border-emerald-300/20 cursor-pointer bg-white group-hover:ring-emerald-500/20 transition-all animate-fade-in"
                    />
                    <span className="text-[8px] font-bold uppercase text-emerald-850 mt-1 block text-center leading-none">Start</span>
                  </div>
                  {useGradient && (
                    <div className="relative group animate-fade-in">
                      <Input 
                        type="color" 
                        value={fgColor2} 
                        onChange={e => setFgColor2(e.target.value)}
                        className="w-10 h-10 p-0.5 rounded-lg border border-emerald-300/20 cursor-pointer bg-white group-hover:ring-emerald-500/20 transition-all"
                      />
                      <span className="text-[8px] font-bold uppercase text-emerald-850 mt-1 block text-center leading-none">End</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-bold text-emerald-950 opacity-80 uppercase tracking-widest bg-emerald-100/50 px-2 py-1 rounded">
                    {useGradient ? "Dual Gradient" : "Solid Color"}
                  </span>
                </div>
              </div>

              {/* Slider bar placed under colors on activation and stretched across the container with more width */}
              {useGradient && (
                <div className="pt-2.5 border-t border-emerald-300/10 space-y-1.5 animate-fade-in w-full">
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-emerald-800">
                    <span>Gradient Rotation Angle</span>
                    <span className="bg-[#05402a]/10 px-2 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{gradientRotation}°</span>
                  </div>
                  <input 
                    type="range" min="0" max="360" value={gradientRotation} 
                    onChange={e => setGradientRotation(parseInt(e.target.value))}
                    className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-850 cursor-pointer transition-all shadow-sm outline-none"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Background Gradient & Solid Choices */}
          <div className="space-y-3 pt-2 border-t border-emerald-300/20">
            <div className="flex items-center justify-between ml-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Background Palette</Label>
              <div className="flex items-center gap-1.5 text-emerald-900">
                <span className="text-[9px] font-bold text-emerald-800/80 uppercase">Gradient</span>
                <Switch checked={bgUseGradient} onCheckedChange={setBgUseGradient} className="scale-75" />
              </div>
            </div>
            
            <div className="space-y-2.5 p-3 bg-white/50 dark:bg-white/60 rounded-xl border border-emerald-300/30">
              {/* Color Picks Row */}
              <div className="flex items-center justify-between">
                <div className="flex gap-3 items-center">
                  <div className="relative group">
                    <Input 
                      type="color" 
                      value={bgColor} 
                      onChange={e => setBgColor(e.target.value)}
                      className="w-10 h-10 p-0.5 rounded-lg border border-emerald-300/20 cursor-pointer bg-white group-hover:ring-emerald-500/20 transition-all"
                    />
                    <span className="text-[8px] font-bold uppercase text-emerald-850 mt-1 block text-center leading-none">BG Start</span>
                  </div>
                  {bgUseGradient && (
                    <div className="relative group animate-fade-in">
                      <Input 
                        type="color" 
                        value={bgColor2} 
                        onChange={e => setBgColor2(e.target.value)}
                        className="w-10 h-10 p-0.5 rounded-lg border border-emerald-300/20 cursor-pointer bg-white group-hover:ring-emerald-500/20 transition-all"
                      />
                      <span className="text-[8px] font-bold uppercase text-emerald-850 mt-1 block text-center leading-none">BG End</span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-bold text-emerald-950 opacity-80 uppercase tracking-widest bg-emerald-100/50 px-2 py-1 rounded">
                    {bgUseGradient ? "BG Gradient" : "Solid BG"}
                  </span>
                </div>
              </div>

              {/* Slider bar placed under colors on activation and stretched across the container with more width */}
              {bgUseGradient && (
                <div className="pt-2.5 border-t border-emerald-300/10 space-y-1.5 animate-fade-in w-full">
                  <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-emerald-800">
                    <span>Background Rotation Angle</span>
                    <span className="bg-[#05402a]/10 px-2 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{bgGradientRotation}°</span>
                  </div>
                  <input 
                    type="range" min="0" max="360" value={bgGradientRotation} 
                    onChange={e => setBgGradientRotation(parseInt(e.target.value))}
                    className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-850 cursor-pointer transition-all shadow-sm outline-none"
                  />
                </div>
              )}
            </div>

            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Background Corners Rounding</span>
              <span className="bg-[#05402a]/10 px-2.5 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{Math.round(backgroundRound * 100)}%</span>
            </div>
            <div className="flex gap-3 items-center p-3 bg-white/50 rounded-xl border border-emerald-300/30">
              <input 
                type="range" min="0" max="1" step="0.05" value={backgroundRound} 
                onChange={e => setBackgroundRound(parseFloat(e.target.value))}
                className="w-full h-2 rounded bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-850 cursor-pointer transition-all outline-none"
              />
            </div>
          </div>

          {/* Logo Integration */}
          <div className="space-y-4 pt-2 border-t border-emerald-300/20 animate-fade-in">
            <div className="flex items-center justify-between ml-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Brand Logo Integration</Label>
              <span className="bg-[#05402a]/10 px-2.5 py-0.5 rounded text-[#06241b] font-mono text-[9px] font-black">{logoSize}% Center Scale</span>
            </div>
            
            <div className="space-y-3 p-3 bg-white/50 dark:bg-white/60 rounded-xl border border-emerald-300/30">
              {/* Top Row: Button action triggers */}
              <div className="flex items-center gap-3">
                <Button 
                  type="button"
                  variant="outline" 
                  className="h-11 flex-1 rounded-xl border-2 border-dashed border-emerald-400/80 bg-white hover:bg-emerald-50 text-emerald-950 font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all duration-75 border-b-4 hover:border-b-3 active:border-b-0 active:translate-y-[4px] select-none"
                  onClick={() => {
                    const input = document.createElement('input');
                    input.type = 'file';
                    input.accept = 'image/*';
                    input.onchange = (e: any) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => setLogoUrl(reader.result as string);
                        reader.readAsDataURL(file);
                      }
                    };
                    input.click();
                  }}
                >
                  {logoUrl ? (
                    <>
                      <img src={logoUrl} className="w-6 h-6 object-cover rounded shadow-inner" />
                      <span>Change Brand Logo</span>
                    </>
                  ) : (
                    <>
                      <span className="text-emerald-600 text-[14px] font-black leading-none">+</span>
                      <span>Upload Brand Logo</span>
                    </>
                  )}
                </Button>

                {logoUrl && (
                  <Button 
                    type="button"
                    variant="outline" 
                    onClick={() => setLogoUrl("")}
                    className="h-11 rounded-xl border-2 border-red-300 bg-red-100 hover:bg-red-200 text-[10px] font-black uppercase text-red-750 px-4 transition-all duration-75 border-b-4 hover:border-b-3 active:border-b-0 active:translate-y-[4px] select-none"
                  >
                    Clear Logo
                  </Button>
                )}
              </div>

              {/* Slider for logo size moved under the action buttons with enriched contrast */}
              <div className="pt-2.5 border-t border-emerald-300/15 space-y-1.5">
                <div className="flex justify-between items-center text-[9px] font-bold uppercase tracking-wider text-emerald-855">
                  <span>Logo Vector Size Scale</span>
                  <span className="bg-[#05402a]/10 px-2.5 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{logoSize}%</span>
                </div>
                <input 
                  type="range" min="10" max="35" value={logoSize} 
                  onChange={e => setLogoSize(parseInt(e.target.value))}
                  className="w-full h-2.5 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-850 cursor-pointer transition-all outline-none"
                />
                <span className="text-[8px] text-emerald-800/95 font-semibold block leading-tight">Recommended scale limit ~20% to retain ideal QR grid scannability parameters.</span>
              </div>
            </div>

            {logoUrl && (
              <div className="space-y-2.5 p-3 bg-white/40 rounded-xl border border-emerald-300/20 animate-fade-in">
                <div className="flex items-center justify-between text-[9px]">
                  <span className="font-bold text-emerald-800 uppercase">Logo Clearance Buffer</span>
                  <span className="bg-[#05402a]/10 px-2.5 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{logoMargin}px</span>
                </div>
                <input 
                  type="range" min="0" max="25" value={logoMargin} 
                  onChange={e => setLogoMargin(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-400 cursor-pointer transition-all outline-none"
                />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[9px] font-bold text-emerald-800 uppercase">Hide Background Dots</span>
                  <Switch checked={hideBackgroundDots} onCheckedChange={setHideBackgroundDots} className="scale-75" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Group 3: Anchors & Integrity */}
      <div className="space-y-6 bg-[#daf3e4] p-6 rounded-[2rem] border border-emerald-300/40 shadow-sm transition-all text-emerald-950">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950 italic">Anchor Eyes & Security</h3>
          <p className="text-[10px] text-emerald-900/80 font-semibold leading-relaxed">Customize individual corner components and code reliability.</p>
        </div>

        <div className="space-y-5">
          {/* Custom Eye Branding Switcher */}
          <div className="space-y-3 p-3 bg-white/50 dark:bg-white/60 rounded-2xl border border-emerald-300/30">
            <h4 className="text-[10px] font-black uppercase tracking-wider text-emerald-950 flex items-center justify-between font-bold">
              Independent Corner Eyes
              <span className="text-[8px] text-indigo-600 bg-indigo-600/10 px-2 py-0.5 rounded-full uppercase font-bold">Elite Mode</span>
            </h4>
            <p className="text-[9px] leading-normal text-emerald-900/90 font-medium">
              Style the 3 main scanning square anchors (and inner eyeballs) distinct from the core dots!
            </p>
            
            {/* Custom Corners Squares */}
            <div className="space-y-2.5 pt-2 mt-2 border-t border-emerald-300/20">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-900">Outer Ring Color</span>
                <Switch 
                  checked={!!cornersSquareColor} 
                  onCheckedChange={(checked) => setCornersSquareColor(checked ? "#2563eb" : "")} 
                  className="scale-75" 
                />
              </div>
              {cornersSquareColor !== "" && (
                <div className="space-y-2.5 p-2.5 bg-white/60 dark:bg-white/70 rounded-xl border border-emerald-300/20 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase text-emerald-850">Color Target</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[8px] font-bold text-emerald-850 uppercase">Gradient</span>
                      <Switch checked={cornersSquareUseGradient} onCheckedChange={setCornersSquareUseGradient} className="scale-75" />
                    </div>
                  </div>
                  
                  {/* Color inputs row */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <Input 
                        type="color" 
                        value={cornersSquareColor} 
                        onChange={e => setCornersSquareColor(e.target.value)}
                        className="w-9 h-9 p-0.5 rounded-lg border border-emerald-300/25 cursor-pointer bg-white"
                      />
                      <span className="text-[7px] font-black text-emerald-850 block text-center uppercase leading-none mt-0.5">Start</span>
                    </div>
                    {cornersSquareUseGradient && (
                      <div className="relative animate-fade-in">
                        <Input 
                          type="color" 
                          value={cornersSquareColor2 || "#3b82f6"} 
                          onChange={e => setCornersSquareColor2(e.target.value)}
                          className="w-9 h-9 p-0.5 rounded-lg border border-emerald-300/25 cursor-pointer bg-white"
                        />
                        <span className="text-[7px] font-black text-emerald-850 block text-center uppercase leading-none mt-0.5">End</span>
                      </div>
                    )}
                  </div>

                  {/* Slider bar placed under colors when gradient is active for Outer Ring */}
                  {cornersSquareUseGradient && (
                    <div className="pt-2 border-t border-emerald-300/10 space-y-1.5 animate-fade-in w-full">
                      <div className="flex justify-between items-center text-[8px] font-bold uppercase tracking-wider text-emerald-800">
                        <span>Ring Gradient Rotation</span>
                        <span className="bg-[#05402a]/10 px-2.5 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{cornersSquareGradientRotation}°</span>
                      </div>
                      <input 
                        type="range" min="0" max="360" value={cornersSquareGradientRotation} 
                        onChange={e => setCornersSquareGradientRotation(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-400 cursor-pointer transition-all outline-none"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Custom Corners Dots */}
            <div className="space-y-2.5 pt-2 mt-2 border-t border-emerald-300/20">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-900">Inner Eyeball Color</span>
                <Switch 
                  checked={!!cornersDotColor} 
                  onCheckedChange={(checked) => setCornersDotColor(checked ? "#10b981" : "")} 
                  className="scale-75" 
                />
              </div>
              {cornersDotColor !== "" && (
                <div className="space-y-2.5 p-2.5 bg-white/60 dark:bg-white/70 rounded-xl border border-emerald-300/20 animate-fade-in">
                  <div className="flex items-center justify-between">
                    <span className="text-[8px] font-black uppercase text-emerald-850">Color Target</span>
                    <div className="flex items-center gap-1">
                      <span className="text-[8px] font-bold text-emerald-850 uppercase">Gradient</span>
                      <Switch checked={cornersDotUseGradient} onCheckedChange={setCornersDotUseGradient} className="scale-75" />
                    </div>
                  </div>
                  
                  {/* Color inputs row */}
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <Input 
                        type="color" 
                        value={cornersDotColor} 
                        onChange={e => setCornersDotColor(e.target.value)}
                        className="w-9 h-9 p-0.5 rounded-lg border border-emerald-300/25 cursor-pointer bg-white"
                      />
                      <span className="text-[7px] font-black text-emerald-850 block text-center uppercase leading-none mt-0.5">Start</span>
                    </div>
                    {cornersDotUseGradient && (
                      <div className="relative animate-fade-in">
                        <Input 
                          type="color" 
                          value={cornersDotColor2 || "#10b981"} 
                          onChange={e => setCornersDotColor2(e.target.value)}
                          className="w-9 h-9 p-0.5 rounded-lg border border-emerald-300/25 cursor-pointer bg-white"
                        />
                        <span className="text-[7px] font-black text-emerald-850 block text-center uppercase leading-none mt-0.5">End</span>
                      </div>
                    )}
                  </div>

                  {/* Slider bar placed under colors when gradient is active for Inner Eyeball */}
                  {cornersDotUseGradient && (
                    <div className="pt-2 border-t border-emerald-300/10 space-y-1.5 animate-fade-in w-full">
                      <div className="flex justify-between items-center text-[8px] font-bold uppercase tracking-wider text-emerald-800">
                        <span>Eyeball Gradient Rotation</span>
                        <span className="bg-[#05402a]/10 px-2.5 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{cornersDotGradientRotation}°</span>
                      </div>
                      <input 
                        type="range" min="0" max="360" value={cornersDotGradientRotation} 
                        onChange={e => setCornersDotGradientRotation(parseInt(e.target.value))}
                        className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-400 cursor-pointer transition-all outline-none"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between ml-1">
              <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-850">Quiet Margin Zone</Label>
              <div className="flex items-center gap-1.5 text-emerald-900">
                <span className="text-[9px] font-bold text-emerald-900/90 uppercase font-semibold">{includeMargin ? marginSize : 0} Units</span>
                <Switch checked={includeMargin} onCheckedChange={setIncludeMargin} className="scale-75" />
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-white/50 rounded-xl border border-emerald-300/30 justify-between">
              <input 
                type="range" min="0" max="10" value={marginSize} 
                disabled={!includeMargin}
                onChange={e => setMarginSize(parseInt(e.target.value))}
                className="w-full h-2 rounded-lg bg-emerald-800/15 active:bg-emerald-800/25 accent-emerald-700 hover:accent-emerald-800 cursor-pointer disabled:opacity-35 transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-[10px] font-black uppercase tracking-widest text-emerald-850 ml-1">Precision Control (ECC)</Label>
            <Select value={level} onValueChange={(v: any) => setLevel(v)}>
              <SelectTrigger className="h-11 rounded-xl bg-white/80 dark:bg-white/90 border border-emerald-300/30 font-bold text-xs text-slate-900 dark:text-slate-900">
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="min-w-[280px] sm:min-w-[340px] md:min-w-[380px] fit-content">
                <SelectItem value="L">Low (7% recovery limit)</SelectItem>
                <SelectItem value="M">Medium (15% recovery limit)</SelectItem>
                <SelectItem value="Q">Quartile (25% recovery limit)</SelectItem>
                <SelectItem value="H">High (30% recovery limit) - Best with logo</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="p-3 bg-indigo-600/5 dark:bg-white/30 rounded-xl border border-indigo-600/10 dark:border-emerald-300/10 text-[9px] text-indigo-950 dark:text-emerald-950 font-semibold leading-normal">
            Higher Error Correction Code (ECC) enables scanning reliability even with overlays like brand logos or partial blemishes.
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
