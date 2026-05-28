import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface BarcodeStyleSettingsProps {
  width: number;
  setWidth: (v: number) => void;
  height: number;
  setHeight: (v: number) => void;
  displayValue: boolean;
  setDisplayValue: (v: boolean) => void;
  font: string;
  setFont: (v: string) => void;
  fontSize: number;
  setFontSize: (v: number) => void;
  textAlign: string;
  setTextAlign: (v: string) => void;
  textPosition: string;
  setTextPosition: (v: string) => void;
  textMargin: number;
  setTextMargin: (v: number) => void;
  background: string;
  setBackground: (v: string) => void;
  lineColor: string;
  setLineColor: (v: string) => void;
  margin: number;
  setMargin: (v: number) => void;
  fontOptions: string;
  setFontOptions: (v: string) => void;
  flat: boolean;
  setFlat: (v: boolean) => void;
  useTextOverride: boolean;
  setUseTextOverride: (v: boolean) => void;
  textOverride: string;
  setTextOverride: (v: string) => void;
  useCustomMargins: boolean;
  setUseCustomMargins: (v: boolean) => void;
  marginTop: number;
  setMarginTop: (v: number) => void;
  marginBottom: number;
  setMarginBottom: (v: number) => void;
  marginLeft: number;
  setMarginLeft: (v: number) => void;
  marginRight: number;
  setMarginRight: (v: number) => void;
  // Professional advanced features (optional)
  useLabelHeader?: boolean;
  setUseLabelHeader?: (v: boolean) => void;
  labelTextHeader?: string;
  setLabelTextHeader?: (v: string) => void;
  headerFontSize?: number;
  setHeaderFontSize?: (v: number) => void;
  borderEnabled?: boolean;
  setBorderEnabled?: (v: boolean) => void;
  borderWidth?: number;
  setBorderWidth?: (v: number) => void;
  borderRadius?: string;
  setBorderRadius?: (v: string) => void;
  exportScale?: number;
  setExportScale?: (v: number) => void;
}

export function BarcodeStyleSettings({
  width, setWidth,
  height, setHeight,
  displayValue, setDisplayValue,
  font, setFont,
  fontSize, setFontSize,
  textAlign, setTextAlign,
  textPosition, setTextPosition,
  textMargin, setTextMargin,
  background, setBackground,
  lineColor, setLineColor,
  margin, setMargin,
  fontOptions, setFontOptions,
  flat, setFlat,
  useTextOverride, setUseTextOverride,
  textOverride, setTextOverride,
  useCustomMargins, setUseCustomMargins,
  marginTop, setMarginTop,
  marginBottom, setMarginBottom,
  marginLeft, setMarginLeft,
  marginRight, setMarginRight,
  useLabelHeader = false, setUseLabelHeader,
  labelTextHeader = "TOOLEEFY INDUSTRIAL", setLabelTextHeader,
  headerFontSize = 14, setHeaderFontSize,
  borderEnabled = false, setBorderEnabled,
  borderWidth = 3, setBorderWidth,
  borderRadius = "soft", setBorderRadius,
  exportScale = 2, setExportScale
}: BarcodeStyleSettingsProps) {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Box 1: Display & Dimensions */}
      <div className="space-y-5 bg-[#daf3e4] p-6 rounded-[2rem] border border-emerald-300/40 shadow-sm transition-all text-emerald-950">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950 italic">Display & Dimensions</h3>
          <p className="text-[10px] text-emerald-900/80 font-semibold leading-relaxed">Adjust physical dimensions, flat render, and serial number visibility.</p>
        </div>

        <div className="space-y-4">
          {/* Card A: Visibility & Render switches */}
          <div className="space-y-3 p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Serial Text</span>
                <span className="text-[8px] text-[#05402a] font-semibold leading-none">Show human-readable serial value</span>
              </div>
              <Switch checked={displayValue} onCheckedChange={setDisplayValue} />
            </div>

            <div className="border-t border-emerald-300/20 pt-3 flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Flat Render</span>
                <span className="text-[8px] text-[#05402a] font-semibold leading-none">Crisper sub-pixel lines</span>
              </div>
              <Switch checked={flat} onCheckedChange={setFlat} />
            </div>
          </div>

          {/* Card B: Bar Width */}
          <div className="space-y-3 p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#06241b]">
              <span>Bar Width</span>
              <span className="bg-[#05402a]/10 px-2 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{width}px</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="4" 
              step="1" 
              value={width} 
              onChange={(e) => setWidth(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-850 cursor-pointer transition-all outline-none"
            />
          </div>

          {/* Card C: Bar Height */}
          <div className="space-y-3 p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#06241b]">
              <span>Bar Height</span>
              <span className="bg-[#05402a]/10 px-2 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{height}px</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="150" 
              step="5" 
              value={height} 
              onChange={(e) => setHeight(parseInt(e.target.value))}
              className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-850 cursor-pointer transition-all outline-none"
            />
          </div>
        </div>
      </div>

      {/* Box 2: Typography */}
      <div className="space-y-5 bg-[#daf3e4] p-6 rounded-[2rem] border border-emerald-300/40 shadow-sm transition-all text-emerald-950">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950 italic">Typography</h3>
          <p className="text-[10px] text-emerald-900/80 font-semibold leading-relaxed">Customize fonts, styling, override printed text, and positions.</p>
        </div>

        <div className="space-y-4">
          {/* Card A: Custom text override */}
          <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Override Text</span>
                <span className="text-[8px] text-[#05402a] font-semibold leading-none">Custom printed alphanumeric value</span>
              </div>
              <Switch checked={useTextOverride} onCheckedChange={setUseTextOverride} />
            </div>

            {useTextOverride && (
              <div className="space-y-2 pt-3 border-t border-emerald-300/20 animate-fade-in">
                <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Custom Value</Label>
                <Input 
                  value={textOverride} 
                  onChange={e => setTextOverride(e.target.value)} 
                  placeholder="e.g. SERIAL NO."
                  className="h-10 rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-900 px-3 w-full"
                />
              </div>
            )}
          </div>

          {/* Card B: Font styling */}
          <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-4">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b] ml-1">Font Family</Label>
              <Select value={font} onValueChange={setFont}>
                <SelectTrigger className="h-10 rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-900 text-left">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="monospace">Monospace</SelectItem>
                  <SelectItem value="sans-serif">Sans Serif</SelectItem>
                  <SelectItem value="serif">Serif</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b] ml-1">Font Style</Label>
              <Select value={fontOptions} onValueChange={setFontOptions}>
                <SelectTrigger className="h-10 rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-900 text-left">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Regular</SelectItem>
                  <SelectItem value="bold">Bold</SelectItem>
                  <SelectItem value="italic">Italic</SelectItem>
                  <SelectItem value="bold italic">Bold Italic</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b] ml-1">Size</Label>
              <Input 
                type="number" 
                value={fontSize} 
                onChange={e => setFontSize(parseInt(e.target.value) || 12)} 
                className="h-10 rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-900 px-3 w-full" 
              />
            </div>

            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b] ml-1">Alignment</Label>
              <Select value={textAlign} onValueChange={setTextAlign}>
                <SelectTrigger className="h-10 rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-900 text-left">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="left">Left</SelectItem>
                  <SelectItem value="center">Center</SelectItem>
                  <SelectItem value="right">Right</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Card C: Text Placement */}
          <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-4">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Position</Label>
              <Select value={textPosition} onValueChange={setTextPosition}>
                <SelectTrigger className="h-10 rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-900 text-left">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bottom">Bottom</SelectItem>
                  <SelectItem value="top">Top</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Text Margin</Label>
              <div className="flex items-center justify-between bg-white px-3 h-10 rounded-xl border border-emerald-300/30">
                <input 
                  type="range" 
                  min="-15" 
                  max="40" 
                  step="1" 
                  value={textMargin} 
                  onChange={(e) => setTextMargin(parseInt(e.target.value))}
                  className="w-full h-1.5 accent-emerald-700 cursor-pointer"
                />
                <span className="font-mono text-[9px] font-black text-[#06241b] ml-2 shrink-0">{textMargin}px</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box 3: Colors & Margin */}
      <div className="space-y-5 bg-[#daf3e4] p-6 rounded-[2rem] border border-emerald-300/40 shadow-sm transition-all text-emerald-950">
        <div className="space-y-1">
          <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950 italic">Colors & Margin</h3>
          <p className="text-[10px] text-emerald-900/80 font-semibold leading-relaxed">Apply brand colors and define custom quiet zone safe spaces.</p>
        </div>

        <div className="space-y-4">
          {/* Card A: Brand Colors */}
          <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-4">
            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Bar Color</Label>
              <div className="flex gap-2 items-center bg-white p-2 h-10 rounded-xl border border-emerald-300/30">
                <Input 
                  type="color" 
                  value={lineColor} 
                  onChange={e => setLineColor(e.target.value)} 
                  className="w-8 h-8 p-0 border-none bg-transparent cursor-pointer rounded-md shrink-0 focus-visible:ring-0" 
                />
                <span className="text-[10px] font-mono font-bold text-[#06241b]">{lineColor}</span>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Background</Label>
              <div className="flex gap-2 items-center bg-white p-2 h-10 rounded-xl border border-emerald-300/30">
                <Input 
                  type="color" 
                  value={background} 
                  onChange={e => setBackground(e.target.value)} 
                  className="w-8 h-8 p-0 border-none bg-transparent cursor-pointer rounded-md shrink-0 focus-visible:ring-0" 
                />
                <span className="text-[10px] font-mono font-bold text-[#06241b]">{background}</span>
              </div>
            </div>
          </div>

          {/* Card B: Quiet Safety Margins */}
          <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Custom Quiets</span>
                <span className="text-[8px] text-[#05402a] font-semibold leading-none">Independent side padding</span>
              </div>
              <Switch checked={useCustomMargins} onCheckedChange={setUseCustomMargins} />
            </div>

            {!useCustomMargins ? (
              <div className="space-y-2 pt-3 border-t border-emerald-300/20 animate-fade-in">
                <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-[#06241b]">
                  <span>Quiet Zone (Uniform)</span>
                  <span className="bg-[#05402a]/10 px-2 py-0.5 rounded text-[#06241b] font-mono text-[10px] font-black">{margin}px</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  step="2" 
                  value={margin} 
                  onChange={(e) => setMargin(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg bg-emerald-800/20 active:bg-emerald-800/30 accent-emerald-700 hover:accent-emerald-850 cursor-pointer transition-all outline-none"
                />
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-emerald-300/20 animate-fade-in text-[#06241b]">
                <div className="space-y-1 bg-white/40 p-2 rounded-xl border border-emerald-300/20">
                  <span className="text-[8px] font-black uppercase tracking-wider text-[#06241b]">Quiet Top: {marginTop}px</span>
                  <input 
                    type="range" min="0" max="100" step="2" value={marginTop} 
                    onChange={(e) => setMarginTop(parseInt(e.target.value))}
                    className="w-full h-1 bg-emerald-800/20 accent-emerald-700 cursor-pointer rounded"
                  />
                </div>
                <div className="space-y-1 bg-white/40 p-2 rounded-xl border border-emerald-300/20">
                  <span className="text-[8px] font-black uppercase tracking-wider text-[#06241b]">Quiet Bot: {marginBottom}px</span>
                  <input 
                    type="range" min="0" max="100" step="2" value={marginBottom} 
                    onChange={(e) => setMarginBottom(parseInt(e.target.value))}
                    className="w-full h-1 bg-emerald-800/20 accent-emerald-700 cursor-pointer rounded"
                  />
                </div>
                <div className="space-y-1 bg-white/40 p-2 rounded-xl border border-emerald-300/20">
                  <span className="text-[8px] font-black uppercase tracking-wider text-[#06241b]">Quiet Lft: {marginLeft}px</span>
                  <input 
                    type="range" min="0" max="100" step="2" value={marginLeft} 
                    onChange={(e) => setMarginLeft(parseInt(e.target.value))}
                    className="w-full h-1 bg-emerald-800/20 accent-emerald-700 cursor-pointer rounded"
                  />
                </div>
                <div className="space-y-1 bg-white/40 p-2 rounded-xl border border-emerald-300/20">
                  <span className="text-[8px] font-black uppercase tracking-wider text-[#06241b]">Quiet Rgt: {marginRight}px</span>
                  <input 
                    type="range" min="0" max="100" step="2" value={marginRight} 
                    onChange={(e) => setMarginRight(parseInt(e.target.value))}
                    className="w-full h-1 bg-emerald-800/20 accent-emerald-700 cursor-pointer rounded"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Box 4: Advanced Label & Export */}
      {setExportScale && (
        <div className="space-y-5 bg-[#daf3e4] p-6 rounded-[2rem] border border-emerald-300/40 shadow-sm transition-all text-emerald-950">
          <div className="space-y-1">
            <h3 className="text-sm font-black uppercase tracking-wider text-emerald-950 italic">Advanced Label & Export</h3>
            <p className="text-[10px] text-emerald-900/80 font-semibold leading-relaxed">Embed brand headers, outline boundary borders, and control print resolutions.</p>
          </div>

          <div className="space-y-4">
            {/* Card A: Brand Header Label */}
            <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Label Header Title</span>
                  <span className="text-[8px] text-[#05402a] font-semibold leading-none">Print brand/pricing title on top</span>
                 </div>
                {setUseLabelHeader && <Switch checked={useLabelHeader} onCheckedChange={setUseLabelHeader} />}
              </div>

              {useLabelHeader && (
                <div className="space-y-3 pt-3 border-t border-emerald-300/20 animate-fade-in">
                  <div className="space-y-1.5">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Header Text</Label>
                    <Input 
                      value={labelTextHeader} 
                      onChange={e => setLabelTextHeader?.(e.target.value)} 
                      placeholder="e.g. TOOLEEFY INDUSTRIAL"
                      className="h-10 rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-900 px-3 w-full"
                    />
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[9px] font-black uppercase tracking-widest text-[#06241b]">
                      <span>Header Size</span>
                      <span>{headerFontSize}px</span>
                    </div>
                    <input 
                      type="range" min="10" max="28" step="1" value={headerFontSize} 
                      onChange={(e) => setHeaderFontSize?.(parseInt(e.target.value))}
                      className="w-full h-1.5 bg-emerald-800/20 accent-emerald-700 cursor-pointer rounded"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Card B: Boundary Outline */}
            <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">Boundary Border</span>
                  <span className="text-[8px] text-[#05402a] font-semibold leading-none">Draw structured bounding outline</span>
                </div>
                {setBorderEnabled && <Switch checked={borderEnabled} onCheckedChange={setBorderEnabled} />}
              </div>

              {borderEnabled && (
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-emerald-300/20 animate-fade-in text-[#06241b]">
                  <div className="space-y-1 bg-white/40 p-2 rounded-xl border border-emerald-300/20">
                    <span className="text-[8px] font-black uppercase tracking-wider text-[#06241b]">Width: {borderWidth}px</span>
                    <input 
                      type="range" min="1" max="10" step="1" value={borderWidth} 
                      onChange={(e) => setBorderWidth?.(parseInt(e.target.value))}
                      className="w-full h-1 bg-emerald-800/20 accent-emerald-700 cursor-pointer rounded"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label className="text-[8px] font-black uppercase tracking-wider text-[#06241b]">Roundness</Label>
                    <Select value={borderRadius} onValueChange={setBorderRadius}>
                      <SelectTrigger className="h-8 rounded-xl bg-white border border-emerald-300/30 font-bold text-[10px] text-slate-900 text-left">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">Square (None)</SelectItem>
                        <SelectItem value="soft">Soft (Medium)</SelectItem>
                        <SelectItem value="rounded">Label Sticker (Full)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
            </div>

            {/* Card C: Print Quality Export Quality Scale */}
            <div className="p-4 bg-white/60 rounded-2xl border border-emerald-300/30 shadow-sm space-y-1.5 align-middle">
              <Label className="text-[10px] font-black uppercase tracking-widest text-[#06241b]">PNG Export Quality DPI</Label>
              <Select value={String(exportScale)} onValueChange={(val) => setExportScale?.(Number(val))}>
                <SelectTrigger className="h-10 w-full rounded-xl bg-white border border-emerald-300/30 font-bold text-xs text-slate-1000 text-left">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="!w-[325px] sm:!w-[365px] max-w-[95vw]" alignItemWithTrigger={false}>
                  <SelectItem value="1">1x (Web Resolution / 72 DPI)</SelectItem>
                  <SelectItem value="2">2x (Office & Standard Sheets / 150 DPI)</SelectItem>
                  <SelectItem value="4">4x (HD Packaging Print / 300 DPI)</SelectItem>
                  <SelectItem value="6">6x (Industrial Warehouse Scale / 450 DPI)</SelectItem>
                  <SelectItem value="8">8x (Aviation Ultra-sharp Pro / 600 DPI)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
