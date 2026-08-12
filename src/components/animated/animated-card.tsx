import React from "react";
import { cn } from "../../lib/utils";
import { Card } from "../ui/card";

interface Props {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  tapScale?: number;
  duration?: number;
  onClick?: () => void;
}
export default function AnimatedCard(props: Readonly<Props>) {
  const {
    children,
    className,
    tapScale = 1.1,
    hoverScale = 1.05,
    duration = 0.2,
    onClick,
  } = props;

  return (
    <Card
      onClick={onClick}
      className={cn(
        "border-4 border-transparent text-inherit transition-[transform,box-shadow,border-color,color] ease-in-out hover:scale-[var(--hover-scale)] hover:border-[rgba(var(--card-glow),0.8)] hover:text-[rgb(var(--card-glow))] hover:shadow-[0px_0px_15px_rgba(var(--card-glow),0.9)] active:scale-[var(--tap-scale)]",
        className,
      )}
      style={
        {
          "--hover-scale": hoverScale,
          "--tap-scale": tapScale,
          transitionDuration: `${duration * 1000}ms`,
        } as React.CSSProperties
      }
    >
      {children}
    </Card>
  );
}
