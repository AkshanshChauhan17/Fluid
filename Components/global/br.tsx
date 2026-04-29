interface BRProps {
  px?: string;
  color?: string;
}

export default function BR({
  px = "60px",
  color = "white",
}: BRProps) {
  return (
    <div
      className="w-full"
      style={{
        minHeight: px,
        backgroundColor: color,
      }}
    />
  );
}