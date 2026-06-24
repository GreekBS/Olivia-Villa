/** Responsive header offset for in-page anchor scrolling */
export function getHeaderScrollOffset(): number {
  return typeof window !== "undefined" && window.innerWidth < 768 ? -64 : -80;
}
