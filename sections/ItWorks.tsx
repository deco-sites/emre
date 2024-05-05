import { usePartialSection } from "deco/hooks/usePartialSection.ts";

export interface Props {
  /**
   * @format rich-text
   * @description The description of name.
   * @default It Works!
   */
  name?: string;
}

export default function Section({ name = "It Works!"}: Props) {
  /**
   * usePartialSection is a nice hook for getting the HTMX link to render this section,
   * but with the following Props
   */
  const downLink = usePartialSection({ props: { count: count - 1 } });
  const upLink = usePartialSection({ props: { count: count + 1 } });

  return (
    <div
      id="it-works"
      class="container py-10 flex flex-col h-screen w-full items-center justify-center gap-16"
    >
      <div class="leading-10 text-6xl" dangerouslySetInnerHTML={{
        __html: name,
      }}/>

      <div class="flex flex-col items-center justify-center gap-2">
        <div class="text-sm">StudioEK</div>
      </div>
    </div>
  );
}
