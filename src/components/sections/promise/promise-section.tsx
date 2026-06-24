import { PROMISE_COPY } from "@/constants/content";
import { SECTION_IDS } from "@/constants/site";
import { ChapterWhisper } from "@/components/ui/chapter";
import { BODY_PROSE, DISPLAY_PROMISE, PROSE_MAX } from "@/lib/styles";
import { cn } from "@/lib/utils";

export function PromiseSection() {
  return (
    <ChapterWhisper
      id={SECTION_IDS.promise}
      aria-labelledby="promise-heading"
      className="bg-stone pt-10 pb-8 md:pt-14 md:pb-10 lg:pt-16 lg:pb-12"
    >
      <div className="mx-auto max-w-[36rem] text-center">
        <h2 id="promise-heading" className="sr-only">
          Our promise
        </h2>
        <p className={cn(DISPLAY_PROMISE, "text-balance text-charcoal")}>
          {PROMISE_COPY.lead}
        </p>
        <p className={cn(BODY_PROSE, "mx-auto mt-4", PROSE_MAX)}>
          {PROMISE_COPY.body}
        </p>
      </div>
    </ChapterWhisper>
  );
}
