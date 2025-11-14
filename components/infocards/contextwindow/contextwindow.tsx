"use client";

export default function Contextwindow() {
  return (
    <div
      className="
        w-full flex flex-col items-start justify-start
        mt-10
        /* Desktop sidebar spacing */
        lg:pl-[35vw] lg:pr-60

        /* Tablet */
        md:pl-8 md:pr-8

        /* Small */
        sm:pl-4 sm:pr-4

        /* Mobile */
        pl-2 pr-2

        transition-all duration-300
      "
    >
      {/* SECTION */}
      <section id="context-window" className="mb-14 w-full ">
        {/* Heading */}
        <h2 className="text-base font-semibold text-[#ededed] mb-2">
          Context window
        </h2>

        {/* Subtitle */}
        <p className="text-[#cfcfcf] text-sm leading-relaxed mb-8 max-w-2xl">
          The limit of how much text a model can consider at once. It reads and
          reasons only within this window, measured in tokens.
        </p>

        {/* BIG PANEL */}
        <div
          className="
            w-full
            border border-neutral-800
            rounded-2xl
            bg-[#111]
            h-[380px]
            relative
            flex items-center justify-center
            overflow-hidden
          "
        >
          {/* Faded background text */}
          <p
            className="
    text-neutral-500 text-sm leading-relaxed
    max-w-[520px]
    px-4
    absolute
    text-left
    opacity-25
  "
            style={{
              top: "58%", // moved lower (matches screenshot)
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Sometimes they’re going to work together really well, sharing data
            and processing tasks seamlessly across a distributed network to
            solve complex problems faster than any single machine could. Other
            times, however, they might compete for resources or disagree on the
            best course of action based on their internal algorithms,
          </p>

          {/* Visible context window */}
          <div
            className="
    border border-dashed border-neutral-600
    rounded-md
    p-4
    bg-black/30
    max-w-[340px]
    text-neutral-200 text-sm leading-relaxed
    absolute
  "
            style={{
              top: "43%", // exact matching vertical position
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            How are these computers all going to work together? They’re probably
            going to work together a lot like people do. Sometimes they’re going
            to work together really well,
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="text-center text-[#b5b5b5] text-sm mt-6 leading-relaxed max-w-xl mx-auto">
          The model can process a limited number of tokens at once. It varies a
          lot depending on the model.
        </p>
      </section>
    </div>
  );
}
