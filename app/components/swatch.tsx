// Placeholder "garment" visual — a soft diagonal gradient in the product's tone.
// Replace with real photography (next/image) when assets land.
export default function Swatch({
  tone,
  label,
  className = "",
}: {
  tone: [string, string];
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `linear-gradient(135deg, ${tone[0]} 0%, ${tone[1]} 100%)`,
      }}
    >
      {/* faint center seam to hint at a garment */}
      <div className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-black/5" />
      {label ? (
        <span className="label absolute bottom-3 left-3 text-ink/40">
          {label}
        </span>
      ) : null}
    </div>
  );
}
