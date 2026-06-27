import { Fragment } from "react"

/** Lightweight markdown renderer: ## headings, - lists, **bold**, paragraphs. */
export function Markdown({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\n+/)

  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        const trimmed = block.trim()

        if (trimmed.startsWith("## ")) {
          return (
            <h2 key={i} className="mt-10 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {renderInline(trimmed.slice(3))}
            </h2>
          )
        }

        const lines = trimmed.split("\n")
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i} className="space-y-2 pl-1">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-2.5 text-base leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <span>{renderInline(l.trim().slice(2))}</span>
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p key={i} className="text-base leading-relaxed text-muted-foreground">
            {renderInline(trimmed)}
          </p>
        )
      })}
    </div>
  )
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
