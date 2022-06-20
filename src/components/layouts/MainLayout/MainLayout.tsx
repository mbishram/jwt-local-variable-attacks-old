import { JSX } from "solid-js";
import clsx from "clsx";

export function MainLayout({
  children,
  class: className,
  ...props
}: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      class={clsx("bg-stone-900 min-h-screen text-white", className)}
      {...props}
    >
      {children}
    </div>
  );
}
