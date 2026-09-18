export default function Placeholder({ label, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-6 bg-slate-50 border border-slate-200 text-slate-500 rounded-xl transition-all hover:bg-blue-50/40 hover:border-blue-200 ${className}`}
    >
      <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200 flex items-center justify-center text-2xl mb-3">
        🚚
      </div>
      <div className="font-bold text-sm text-[#0b1f3a]">{label}</div>
      <div className="text-[11px] text-[#64748b] mt-1">Bakır Nakliyat Operasyon Görseli</div>
    </div>
  );
}
