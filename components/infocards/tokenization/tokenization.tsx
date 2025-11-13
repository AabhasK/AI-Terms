"use client";

export default function Tokenization() {
  return (
    <div
      className="
        w-full
        
        flex flex-col
        items-start
        justify-start
         
        pl-[35vw] pr-45
        hide-pad
        transition-all duration-300
      "
    >
      <div className="max-w-[650px] mx-auto w-full">
        {/* First Term */}
        <section id="token" className="mb-20">
          <h2 className="text-base font-semibold text-[#ededed] mb-2">Token</h2>

          <p className="text-[#cfcfcf] text-sm max-w-[650px] leading-relaxed mb-6">
            The smallest unit of text a model processes. It can be a word, part
            of a word, or even a symbol.
          </p>

          {/* Card Box */}
          <div
            className="
              border border-[#2a2a2a]
              rounded-xl
              p-6
              w-full
              h-[220px]
              bg-[#161616]
              flex items-center justify-center
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

          {/* Footer text */}
          <p className="text-center text-[#b5b5b5] text-xs mt-5 leading-relaxed">
            Text is split into small units the model can read.
            <br />
            Each token is linked to a number—its own ID.
          </p>
        </section>
      </div>
    </div>
  );
}
