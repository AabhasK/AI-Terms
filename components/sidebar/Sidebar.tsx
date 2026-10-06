import { allTerms } from "@/lib/glossary";

// One compact flat list, sized to fit the screen so the sidebar never needs
// its own scrollbar.
export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 hidden h-dvh w-[30vw] overflow-hidden pt-16 pl-[8vw] lg:block">
      <div className="fixed top-4 left-4 z-10">
        <a href="https://github.com/AabhasK" aria-label="GitHub profile">
          <img
            src="/me.jpg"
            alt="Profile photo"
            className="pointer-events-none size-10 rounded-full grayscale hover:grayscale-0"
          />
        </a>
      </div>

      <h2 className="mb-4 text-lg font-semibold text-text">AI Glossary</h2>

      <nav aria-label="Glossary terms">
        <ul>
          {allTerms.map((term) => (
            <li key={term.id}>
              <a
                href={`#${term.id}`}
                className="block py-px text-[0.7rem] leading-4 text-text hover:text-muted"
              >
                {term.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
