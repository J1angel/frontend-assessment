type FaqIconProps = {
  expanded: boolean;
  className?: string;
  /** Category headers use plus / X; questions use plus / minus */
  variant?: "plus-minus" | "plus-x";
  stroke?: string;
  size?: number;
};

/** Plus / minus (or X) toggle — matches qoves.com FAQ icons */
export function FaqIcon({
  expanded,
  className = "",
  variant = "plus-minus",
  stroke = "#758084",
  size = 24,
}: FaqIconProps) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none relative inline-flex shrink-0 items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className={`absolute transition-opacity ${expanded ? "opacity-0" : "opacity-100"}`}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
      >
        <path
          d="M5 12.7109H19M12 5.71094V19.7109"
          stroke={stroke}
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className={`absolute transition-opacity ${expanded ? "opacity-100" : "opacity-0"}`}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 25"
        fill="none"
      >
        {variant === "plus-x" ? (
          <path
            d="M5 5.71094L19 19.7109M19 5.71094L5 19.7109"
            stroke={stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M5 12.7109H19"
            stroke={stroke}
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </span>
  );
}
