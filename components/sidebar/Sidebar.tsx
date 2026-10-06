import { glossary } from "@/lib/glossary";

export default function Sidebar() {
  return (
    <aside
      className="
        fixed top-0 left-0
        h-dvh w-[30vw]
        pl-[8vw] pr-6 pt-24 pb-10
        overflow-y-auto [scrollbar-width:none]
        hidden lg:block
      "
    >
      <div className="fixed top-4 left-4 z-10">
        <a href="https://github.com/AabhasK" aria-label="GitHub profile">
          <img
            src="/me.jpg"
            alt="Profile photo"
            className="pointer-events-none size-10 rounded-full grayscale hover:grayscale-0"
          />
        </a>
      </div>

      <nav aria-label="Glossary terms" className="flex max-w-[220px] flex-col gap-6">
        {glossary.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 font-display text-[0.8rem] font-semibold text-muted">
              {group.title}
            </h3>
            <ul className="flex flex-col border-l border-line">
              {group.terms.map((term) => (
                <li key={term.id}>
                  <a
                    href={`#${term.id}`}
                    className="-ml-px block border-l border-transparent py-[3px] pl-3 text-[0.75rem] text-faint hover:border-accent hover:text-text"
                  >
                    {term.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
