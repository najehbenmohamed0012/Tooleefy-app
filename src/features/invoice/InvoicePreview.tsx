import React from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

interface PreviewData {
  logo: string | null;
  businessName: string;
  businessEmail: string;
  businessAddress: string;
  businessPhone: string;
  businessTaxId: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  clientTaxId: string;
  showShipping: boolean;
  shippingAddress: string;
  invoiceNumber: string;
  poNumber: string;
  invoiceDate: string;
  dueDate: string;
  currency: { symbol: string; value: string };
  items: Array<{ id: string; description: string; quantity: number; rate: number }>;
  taxRate: number;
  taxLabel: string;
  discountRate: number;
  shippingCost: number;
  notes: string;
  terms: string;
  bankName: string;
  accountHolder: string;
  accountNumber: string;
  iban: string;
  swift: string;
  paymentLink: string;
  qrCode: string | null;
  barcode: string | null;
  signature: string | null;
  template: string;
  invoiceColor: string;
  subtotal: number;
  discountAmount: number;
  taxAmount: number;
  total: number;
}

export function InvoicePreview({ data }: { data: PreviewData }) {
  const {
    logo, businessName, businessEmail, businessAddress, businessPhone, businessTaxId,
    clientName, clientEmail, clientAddress, clientTaxId, showShipping, shippingAddress,
    invoiceNumber, poNumber, invoiceDate, dueDate, currency, items,
    notes, terms, bankName, accountHolder, accountNumber, iban, swift, paymentLink,
    qrCode, barcode, signature,
    subtotal, discountAmount, taxAmount, total, shippingCost, taxRate, discountRate,
    template, taxLabel, invoiceColor
  } = data;

  const isModern = template === 'modern';
  const isMinimal = template === 'minimal';
  const isClassic = template === 'classic';
  const isNeo = template === 'neo';
  const isBold = template === 'bold';
  const isFuturistic = template === 'futuristic';
  const isLuxury = template === 'luxury';
  const isIndustrial = template === 'industrial';

  const brandColor = invoiceColor || '#000000';

  return (
    <div className={cn(
      "bg-white text-slate-900 p-10 md:p-16 min-h-[1123px] h-fit w-full shadow-2xl relative overflow-hidden transition-all duration-500 flex flex-col",
      (isClassic || isLuxury) ? "font-serif" : (isIndustrial ? "font-mono" : "font-sans"),
      isNeo ? "border-[8px] border-black p-12" : "",
      isIndustrial ? "border-[12px] border-slate-200 p-12 bg-slate-50" : "",
      isFuturistic ? "bg-slate-950 text-slate-200" : "",
      isLuxury ? "bg-[#fffdfa]" : ""
    )} style={isNeo ? { boxShadow: '20px 20px 0px 0px #000' } : {}}>
      {/* Decorative background effects */}
      {isModern && <div className="absolute top-0 right-0 w-64 h-64 rounded-full -mr-32 -mt-32 blur-3xl opacity-20" style={{ backgroundColor: brandColor }} />}
      {isLuxury && <div className="absolute top-0 left-0 w-full h-2 bg-[#d4af37]" />}
      {isIndustrial && <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 0)', backgroundSize: '24px 24px' }} />}
      {isFuturistic && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent)] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </>
      )}
      {isClassic && <div className="absolute top-0 left-0 w-full h-4 bg-slate-900" />}
      
      {/* Header */}
      <div className={cn(
        "flex flex-col md:flex-row justify-between items-start gap-8 relative z-10 mb-16",
        isClassic || isLuxury ? "border-b-4 border-double border-slate-200 pb-12" : "",
        isIndustrial ? "border-b-8 border-slate-900 pb-12" : "",
        isNeo ? "mb-12" : ""
      )}>
        <div className="flex gap-6 items-center flex-1 min-w-0">
          {logo ? (
            <img src={logo} alt="Logo" className={cn("w-20 md:w-24 h-20 md:h-24 object-contain shrink-0", isModern ? "rounded-2xl shadow-lg" : "", isNeo ? "border-4 border-black" : "")} />
          ) : (
            <div className={cn(
              "w-20 h-20 flex items-center justify-center border-2 border-dashed transition-colors shrink-0",
              isModern ? "rounded-2xl bg-slate-50 border-slate-200" : "bg-slate-100 border-slate-300",
              isNeo ? "bg-yellow-400 border-black border-4 border-solid" : "",
              isFuturistic ? "bg-slate-900 border-slate-800" : "bg-slate-100"
            )}>
              <span className={cn("text-[10px] font-bold", isNeo ? "text-black" : "text-slate-400")}>LOGO</span>
            </div>
          )}
          <div className="space-y-1 min-w-0 overflow-hidden">
            <h2 className={cn(
               "text-xl md:text-2xl font-black tracking-tighter uppercase truncate",
               isClassic || isLuxury ? "text-2xl md:text-3xl" : "",
               isIndustrial ? "font-mono tracking-[0.2em]" : "",
               isFuturistic ? "text-white" : ""
            )} style={!isFuturistic && !isClassic && !isLuxury ? { color: brandColor } : (isLuxury ? { color: '#1a1a1a' } : {})}>{businessName || "BRAND NAME"}</h2>
            <div className={cn("text-[10px] md:text-[11px] font-medium space-y-0.5", isFuturistic ? "text-slate-400" : (isIndustrial ? "font-mono text-slate-600" : "text-slate-500"))}>
              {businessAddress && <div className="max-w-[200px] leading-relaxed break-words">{businessAddress}</div>}
              {businessEmail && <p className="truncate">{businessEmail}</p>}
              {businessPhone && <p className="truncate">{businessPhone}</p>}
              {businessTaxId && <p className="font-bold">TAX ID: {businessTaxId}</p>}
            </div>
          </div>
        </div>
        
        <div className="text-left md:text-right shrink-0">
          <h1 className={cn(
            "tracking-tighter mb-4 transition-all",
            isModern ? "text-5xl font-black text-slate-100" : "",
            isMinimal ? "text-4xl font-light text-slate-400" : "",
            isClassic ? "text-3xl font-bold text-slate-900 underline underline-offset-8" : "",
            isLuxury ? "text-4xl font-light tracking-[0.3em] text-[#d4af37] italic" : "",
            isIndustrial ? "text-6xl font-black text-slate-900 bg-white px-4 border-4 border-slate-900" : "",
            isNeo ? "text-6xl font-black text-black italic -rotate-2" : "",
            isBold ? "text-7xl font-black text-slate-900 opacity-10 absolute right-10 top-10 pointer-events-none" : "",
            isFuturistic ? "text-4xl font-black text-white glow-sm tracking-[0.2em]" : ""
          )}>INVOICE</h1>
          <div className="space-y-1 relative z-10">
            <div className="flex justify-end gap-4 text-[10px] font-black uppercase tracking-widest">
              <span className={isFuturistic ? "text-slate-500" : "text-slate-400"}>Number</span>
              <span className={isFuturistic ? "text-white" : "text-slate-900"}>{invoiceNumber}</span>
            </div>
            {poNumber && (
              <div className="flex justify-end gap-4 text-[10px] font-black uppercase tracking-widest">
                <span className={isFuturistic ? "text-slate-500" : "text-slate-400"}>PO #</span>
                <span className={isFuturistic ? "text-white" : "text-slate-900"}>{poNumber}</span>
              </div>
            )}
            <div className="flex justify-end gap-4 text-[10px] font-black uppercase tracking-widest">
              <span className={isFuturistic ? "text-slate-500" : "text-slate-400"}>Issued</span>
              <span className={isFuturistic ? "text-white" : "text-slate-900"}>{invoiceDate}</span>
            </div>
            {dueDate && (
              <div className="flex justify-end gap-4 text-[10px] font-black uppercase tracking-widest">
                <span className={isFuturistic ? "text-slate-500" : "text-slate-400"}>Due Date</span>
                <span className="font-black" style={{ color: brandColor }}>{dueDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {!isClassic && !isNeo && <Separator className={cn("mb-12", isFuturistic ? "bg-slate-800" : "bg-slate-100")} />}
      {isNeo && <div className="h-2 bg-black mb-12" />}

      {/* Recipients */}
      <div className="grid grid-cols-2 gap-12 mb-16 relative z-10">
        <div className={cn(
          isNeo ? "bg-cyan-300 p-6 border-4 border-black" : "",
          isIndustrial ? "border-l-4 border-slate-900 pl-6" : "",
          isLuxury ? "bg-white p-8 shadow-sm border border-slate-100 italic font-serif" : ""
        )}>
          <p className={cn(
            "text-[10px] font-black uppercase tracking-widest mb-4",
            isMinimal ? "text-slate-300" : (isNeo ? "text-black" : (isLuxury ? "text-[#d4af37]" : "text-primary")),
            isFuturistic || isIndustrial ? "text-slate-500" : ""
          )} style={!isMinimal && !isNeo && !isFuturistic && !isLuxury && !isIndustrial ? { color: brandColor } : {}}>Bill To</p>
          <h3 className={cn("font-black mb-2", isClassic || isLuxury ? "text-xl" : "text-lg", isFuturistic ? "text-white" : "text-slate-900")}>{clientName || "Recipient Name"}</h3>
          <div className={cn("text-xs space-y-1 font-medium leading-relaxed", isFuturistic ? "text-slate-400" : (isIndustrial ? "font-mono" : "text-slate-500"))}>
            {clientAddress && <p className="max-w-[200px]">{clientAddress}</p>}
            {clientEmail && <p>{clientEmail}</p>}
            {clientTaxId && <p className={cn("font-bold", isFuturistic ? "text-slate-200" : "text-slate-900")}>Tax ID: {clientTaxId}</p>}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          {showShipping && shippingAddress && (
            <div className={cn(isNeo ? "bg-magenta-300 p-6 border-4 border-black" : "")}>
              <p className={cn(
                "text-[10px] font-black uppercase tracking-widest mb-2",
                isMinimal ? "text-slate-300" : (isNeo ? "text-black" : "text-primary"),
                isFuturistic ? "text-slate-500" : ""
              )} style={!isMinimal && !isNeo && !isFuturistic ? { color: brandColor } : {}}>Ship To</p>
              <div className={cn("text-xs font-medium leading-relaxed max-w-[200px]", isFuturistic ? "text-slate-400" : "text-slate-500")}>
                {shippingAddress}
              </div>
            </div>
          )}
          {paymentLink && (
            <div className={cn(isNeo ? "bg-yellow-300 p-4 border-4 border-black" : "")}>
              <p className={cn(
                "text-[10px] font-black uppercase tracking-widest mb-1",
                isMinimal ? "text-slate-300" : (isNeo ? "text-black" : "text-primary"),
                isFuturistic ? "text-slate-500" : ""
              )} style={!isMinimal && !isNeo && !isFuturistic ? { color: brandColor } : {}}>Pay Online</p>
              <p className={cn("text-[10px] underline truncate font-bold", isFuturistic ? "text-primary" : "text-primary")}>{paymentLink}</p>
            </div>
          )}
        </div>
      </div>

      {/* Items Table */}
      <div className="mb-12 flex-1">
        <div className={cn(
          "grid grid-cols-12 gap-4 pb-4 border-b-2 text-[10px] font-black uppercase tracking-widest",
          isClassic ? "border-slate-300 text-slate-400" : "border-slate-900 text-slate-400",
          isNeo ? "border-black text-black border-b-[6px]" : "",
          isIndustrial ? "bg-slate-900 text-white p-3" : "",
          isLuxury ? "border-[#d4af37] text-slate-400 italic" : "",
          isFuturistic ? "border-slate-800 text-slate-500" : ""
        )}>
          <div className="col-span-7">Description</div>
          <div className="col-span-1 text-center">Qty</div>
          <div className="col-span-2 text-right">Price</div>
          <div className="col-span-2 text-right">Amount</div>
        </div>
        
        <div className={cn("space-y-4 pt-6", (isNeo || isIndustrial) ? "space-y-0" : "")}>
          {items.map((item, idx) => (
            <div key={item.id} className={cn(
              "grid grid-cols-12 gap-4 text-xs font-bold items-center pb-4",
              isNeo ? "border-black border-b-2 py-4 bg-white last:border-b-0" : (isIndustrial ? "border-slate-300 border-b-2 py-6 bg-white px-3" : "border-b border-slate-50"),
              isLuxury ? "border-b-2 border-slate-50 py-6 italic font-serif" : "",
              isFuturistic ? "border-slate-900" : ""
            )}>
              <div className={cn("col-span-7", isFuturistic ? "text-white" : (isLuxury ? "text-slate-800" : "text-slate-900"))}>{item.description || "Project Service Line Item"}</div>
              <div className={cn("col-span-1 text-center", isFuturistic ? "text-slate-400" : "text-slate-500")}>{item.quantity}</div>
              <div className={cn("col-span-2 text-right", isFuturistic ? "text-slate-400" : "text-slate-500")}>{currency.symbol}{item.rate.toLocaleString()}</div>
              <div className={cn("col-span-2 text-right font-black", isFuturistic ? "text-white" : (isIndustrial ? "text-slate-900" : (isLuxury ? "text-[#d4af37]" : "text-slate-900")))}>{currency.symbol}{(item.quantity * item.rate).toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Summary */}
      <div className="flex justify-end mb-16">
        <div className={cn(
          "w-full md:w-1/3 min-w-[240px] space-y-3 pt-6",
          !isClassic && !isNeo && !isIndustrial && !isLuxury ? "border-t border-slate-100" : "",
          isClassic || isLuxury ? "bg-slate-50 p-6 rounded-lg" : "",
          isNeo ? "border-t-[6px] border-black pt-4 bg-yellow-400 p-6" : "",
          isIndustrial ? "border-4 border-slate-900 p-6 bg-white" : ""
        )}>
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest">
            <span className={isFuturistic ? "text-slate-500" : (isIndustrial ? "font-mono" : "text-slate-500")}>Subtotal</span>
            <span className={isFuturistic ? "text-white" : "text-slate-900"}>{currency.symbol}{subtotal.toLocaleString()}</span>
          </div>
          {discountAmount > 0 && (
            <div className="flex justify-between text-[11px] font-bold text-error uppercase tracking-widest">
              <span>Discount ({discountRate}%)</span>
              <span>-{currency.symbol}{discountAmount.toLocaleString()}</span>
            </div>
          )}
          {shippingCost > 0 && (
            <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-500">
              <span>Shipping</span>
              <span>{currency.symbol}{shippingCost.toLocaleString()}</span>
            </div>
          )}
          <div className="flex justify-between text-[11px] font-bold uppercase tracking-widest text-slate-500">
            <span>{taxLabel || 'Tax'} ({taxRate}%)</span>
            <span>{currency.symbol}{taxAmount.toLocaleString()}</span>
          </div>
          <div className={cn(
             "flex justify-between text-xl font-black pt-4",
             isClassic ? "text-slate-900 border-t-4 border-double border-slate-300" : "",
             isNeo ? "text-black border-t-0 bg-yellow-400 p-2 border-2 border-black" : "",
             isLuxury ? "text-slate-800 border-t-2 border-[#d4af37] font-serif italic" : "",
             isIndustrial ? "text-slate-900 border-t-4 border-slate-900 font-mono" : "",
             !isClassic && !isNeo && !isLuxury && !isIndustrial ? "text-slate-900 border-t-2 border-slate-900" : "",
             isFuturistic ? "text-white border-white" : ""
          )} style={!isClassic && !isNeo && !isFuturistic && !isLuxury && !isIndustrial ? { borderTopColor: brandColor } : {}}>
            <span>Total</span>
            <span style={!isNeo && !isFuturistic && !isLuxury ? { color: brandColor } : (isLuxury ? { color: '#d4af37' } : {})}>{currency.symbol}{total.toLocaleString()}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 relative z-10 transition-all duration-500">
        <div className="space-y-6">
          {notes && (
            <div className={cn(
              "p-4 rounded-xl border",
              isFuturistic ? "bg-slate-900 border-slate-800" : "bg-slate-50/50 border-slate-100",
              isNeo ? "bg-white border-4 border-black rounded-none shadow-[8px_8px_0px_0px_#000]" : "",
              isIndustrial ? "bg-slate-50 border-2 border-slate-900 rounded-none shadow-sm" : "",
              isLuxury ? "bg-white border-none italic font-serif px-0" : ""
            )}>
              <p className={cn(
                "text-[10px] font-black uppercase tracking-widest mb-2",
                isMinimal ? "text-slate-300" : (isNeo ? "text-black" : (isLuxury ? "text-[#d4af37]" : "text-primary")),
                isFuturistic || isIndustrial ? "text-slate-500" : ""
              )} style={!isMinimal && !isNeo && !isFuturistic && !isLuxury && !isIndustrial ? { color: brandColor } : {}}>Notes</p>
              <p className={cn("text-[10px] font-medium leading-relaxed whitespace-pre-wrap", isFuturistic ? "text-slate-400" : (isIndustrial ? "font-mono" : "text-slate-500"))}>
                {notes}
              </p>
            </div>
          )}

          <div className="flex gap-6 items-end">
            {qrCode && (
              <div className={isNeo ? "border-4 border-black p-1 bg-white" : ""}>
                <p className={cn(
                  "text-[10px] font-black uppercase tracking-widest mb-2",
                  isMinimal ? "text-slate-300" : (isNeo ? "text-black" : "text-primary"),
                  isFuturistic ? "text-slate-500" : ""
                )} style={!isMinimal && !isNeo && !isFuturistic ? { color: brandColor } : {}}>Scan to Pay</p>
                <img src={qrCode} className={cn("w-20 h-20 bg-white", isModern ? "p-1 border border-slate-100 rounded-lg" : "")} />
              </div>
            )}
            {barcode && (
              <div className={isNeo ? "border-4 border-black p-2 bg-white" : ""}>
                <img src={barcode} className={cn("h-10 w-32 object-contain", isFuturistic ? "filter invert" : "")} />
              </div>
            )}
          </div>

          {(bankName || accountNumber) && (
            <div className={cn(
              isNeo ? "bg-white border-4 border-black p-4" : "",
              isIndustrial ? "bg-white border-2 border-slate-900 p-6 rounded-none" : "",
              isLuxury ? "bg-white border-none italic font-serif text-right px-0" : ""
            )}>
              <p className={cn(
                "text-[10px] font-black uppercase tracking-widest mb-3",
                isMinimal ? "text-slate-300" : (isNeo ? "text-black" : (isLuxury ? "text-[#d4af37]" : "text-primary")),
                isFuturistic || isIndustrial ? "text-slate-500" : ""
              )} style={!isMinimal && !isNeo && !isFuturistic && !isLuxury && !isIndustrial ? { color: brandColor } : {}}>Bank Details</p>
              <div className={cn("text-[10px] font-bold space-y-1", isFuturistic ? "text-slate-400" : (isIndustrial ? "font-mono" : "text-slate-500"))}>
                {bankName && <p>BANK: {bankName}</p>}
                {accountHolder && <p>HOLDER: {accountHolder}</p>}
                {accountNumber && <p>ACC #: {accountNumber}</p>}
                {iban && <p>IBAN: {iban}</p>}
                {swift && <p>SWIFT: {swift}</p>}
              </div>
            </div>
          )}
        </div>
        
        <div className="space-y-6">
          {terms && (
            <div className={cn(
              isNeo ? "bg-slate-50 border-4 border-black p-4" : "",
              isIndustrial ? "bg-slate-100 border-2 border-slate-900 p-6 rounded-none italic" : "",
              isLuxury ? "bg-[#fffdfa] border-l-4 border-[#d4af37] p-8 italic font-serif" : ""
            )}>
              <p className={cn(
                "text-[10px] font-black uppercase tracking-widest mb-2",
                isMinimal ? "text-slate-300" : (isNeo ? "text-black" : (isLuxury ? "text-[#d4af37]" : "text-primary")),
                isFuturistic || isIndustrial ? "text-slate-500" : ""
              )} style={!isMinimal && !isNeo && !isFuturistic && !isLuxury && !isIndustrial ? { color: brandColor } : {}}>Payment Terms</p>
              <p className={cn("text-[10px] font-medium leading-relaxed whitespace-pre-wrap", isFuturistic ? "text-slate-500" : (isIndustrial ? "font-mono" : "text-slate-400"))}>
                {terms}
              </p>
            </div>
          )}
          <div className="pt-4 text-center">
            {signature ? (
              <img src={signature} className={cn("h-12 mx-auto mb-2 object-contain", isFuturistic ? "filter invert" : "")} />
            ) : (
              <div className={cn("w-40 h-1 mx-auto mb-2 opacity-5", isFuturistic ? "bg-white" : "bg-slate-900")} />
            )}
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-300">Authorized Signature</p>
          </div>
        </div>
      </div>
      
      {/* Visual Accents */}
      {!isMinimal && !isNeo && !isFuturistic && <div className="absolute bottom-0 left-0 w-full h-2" style={{ backgroundColor: brandColor }} />}
      {isClassic && <div className="absolute bottom-0 left-0 w-full h-12 bg-slate-50 -z-10" />}
      {isNeo && <div className="absolute bottom-4 right-4 text-[8px] font-black bg-black text-white px-2 py-1">BLOCK-INV-V3</div>}
    </div>
  );
}
