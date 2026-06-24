import { cn } from "@/lib/utils";
import { CONTAINER, PAGE_PADDING } from "@/lib/styles";

type SiteContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function SiteContainer({ children, className }: SiteContainerProps) {
  return <div className={cn(CONTAINER, PAGE_PADDING, className)}>{children}</div>;
}
