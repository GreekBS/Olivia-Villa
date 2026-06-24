import Link from "next/link";
import { FOCUS_RING } from "@/lib/styles";
import { cn } from "@/lib/utils";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
};

function isHashLink(href: string): boolean {
  return href.startsWith("#");
}

/** In-page anchor or internal route navigation */
export function NavLink({
  href,
  children,
  className,
  onClick,
  "aria-label": ariaLabel,
}: NavLinkProps) {
  const classes = cn(FOCUS_RING, className);

  if (isHashLink(href)) {
    return (
      <a href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      prefetch={false}
      onClick={onClick}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </Link>
  );
}
