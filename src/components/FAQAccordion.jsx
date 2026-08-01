import { useState, useId } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const baseId = useId();

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const triggerId = `${baseId}-trigger-${i}`;
        return (
          <div className="faq-item" key={item.q}>
            <h3 style={{ margin: 0 }}>
              <button
                id={triggerId}
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
              >
                <span>{item.q}</span>
                <ChevronDown size={18} style={{ transform: isOpen ? "rotate(180deg)" : "none" }} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="faq-panel"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              hidden={false}
            >
              <div className="faq-panel-inner">
                <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.75, padding: "0 4px 22px" }}>
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
