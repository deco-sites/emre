export interface Props {
  name?: string;
}

export default function Section({ name = "It Works!"}: Props) {
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
