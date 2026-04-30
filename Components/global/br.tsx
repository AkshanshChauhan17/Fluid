interface BRProps {
  px?: string;
  color?: string;
}

export default function BR({
  px = "60px",
  color = "white",
}: BRProps) {
  const value = parseInt(px);
  const mobilePx = `${value / 2}px`;

  return (
    <div
      className="w-full"
      style={{
        minHeight: `clamp(${mobilePx}, 5vw, ${px})`,
        backgroundColor: color,
      }}
    />
  );
}