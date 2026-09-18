// Gerçek fotoğraflar eklenene kadar kullanılan yer tutucu bileşen.
// public/images/ klasörüne görsel koyup <Image> ile değiştirin.
export default function Placeholder({ label, className = "" }) {
  return (
    <div
      className={`flex flex-col items-center justify-center text-sm font-medium text-center px-4 ${className}`}
      style={{
        background: "linear-gradient(135deg, var(--color-dark-elevated) 0%, var(--color-dark-card) 100%)",
        border: "1px dashed var(--color-dark-border)",
        color: "var(--color-text-subtle)",
        borderRadius: "inherit",
      }}
    >
      <div className="text-4xl mb-3">🚛</div>
      <div className="font-semibold" style={{ color: "var(--color-text-muted)" }}>
        {label}
      </div>
      <div className="text-xs mt-1">Fotoğraf yakında eklenecek</div>
    </div>
  );
}
