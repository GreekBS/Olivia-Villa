import Link from "next/link";
import { FOCUS_RING, NAV_LINK } from "@/lib/styles";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
  external?: boolean;
  onClick?: () => void;
  prefetch?: boolean;
};

function isHashLink(href: string): boolean {
  return href.startsWith("#");
}

export function TextLink({
  href,
  children,
  className,
  light = false,
  external = false,
  onClick,
  prefetch = false,
}: TextLinkProps) {
  const classes = cn(
    "group relative inline-flex items-center tracking-[0.12em] transition-opacity duration-300",
    NAV_LINK,
    light ? "text-white" : "text-charcoal",
    "hover:opacity-100",
    FOCUS_RING,
    className,
  );

  const underline = (
    <span
      aria-hidden
      className={cn(
        "absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 ease-elysion group-hover:w-full",
        light ? "bg-white" : "bg-amber",
      )}
    />
  );

  if (external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
        {underline}
      </a>
    );
  }

  if (isHashLink(href)) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
        {underline}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={onClick} prefetch={prefetch}>
      {children}
      {underline}
    </Link>
  );
}
