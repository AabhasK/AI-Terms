"use client";

export default function Token() {
  return (
    <div
      className="
        w-full flex flex-col items-start justify-start
        pt-30

        /* DESKTOP (unchanged) */
        lg:pl-[35vw] lg:pr-45

        /* TABLETS (768px–1023px) */
        md:pl-8 md:pr-8

        /* SMALL SCREENS (640px–767px) */
        sm:pl-4 sm:pr-4

        /* iPHONES + VERY SMALL SCREENS (<640px) */
        pl-2 pr-2

        transition-all duration-300
      "
    >
      <div className="max-w-[650px] w-full mx-auto">
        <h1 className="text-lg font-semibold text-[#ededed] mb-3">
          AI Glossary
        </h1>

        <p className="text-[#bababa] text-sm leading-relaxed mb-8">
          An interactive way to understand the core concepts behind artificial
          intelligence.
        </p>

        <section id="token" className="mb-14">
          <h2 className="text-base font-semibold text-[#ededed] mb-2">Token</h2>

          <p className="text-[#cfcfcf] text-sm leading-relaxed mb-6">
            The smallest unit of text a model processes. It can be a word, part
            of a word, or even a symbol.
          </p>

          <div
            className="
              border border-[#2a2a2a]
              rounded-xl
              p-6
              w-full
              bg-[#161616]
              min-h-[180px]
              flex items-center justify-center
              sm:min-h-[160px]
              min-h-[140px]
            "
          >
            <div className="flex gap-2 flex-wrap justify-center">
              {["The", "dragon", "rests", "in", "agony", "."].map((t) => (
                <span
                  key={t}
                  className="
                    px-3 py-1 rounded-md
                    border border-[#333]
                    text-[#ededed] text-xs
                  "
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-[#b5b5b5] text-xs mt-4 leading-relaxed">
            Text is split into small units the model can read. <br />
            Each token is linked to a number—its own ID.
          </p>
        </section>
      </div>
    </div>
  );
}
