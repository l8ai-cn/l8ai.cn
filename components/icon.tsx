type IconProps = {
  name: string
  size?: number
  className?: string
}

const paths: Record<string, string[]> = {
  activity: ["M4 12h4l2-7 4 14 2-7h4"],
  arrow: ["M5 12h14", "M13 6l6 6-6 6"],
  arrowUpRight: ["M7 17L17 7", "M8 7h9v9"],
  blocks: ["M4 4h7v7H4z", "M13 4h7v7h-7z", "M4 13h7v7H4z", "M13 13h7v7h-7z"],
  book: ["M5 5c2-1 4-1 7 1v14c-3-2-5-2-7-1z", "M12 6c3-2 5-2 7-1v14c-2-1-4-1-7 1z"],
  brain: ["M8 7a4 4 0 018 0", "M7 10a4 4 0 000 8", "M17 10a4 4 0 010 8", "M9 12h6", "M12 8v10"],
  chat: ["M5 6h14v9H9l-4 4z", "M8 10h8", "M8 13h5"],
  check: ["M5 12l4 4L19 6"],
  circleCheck: ["M9 12l2 2 4-5", "M12 21a9 9 0 100-18 9 9 0 000 18z"],
  close: ["M6 6l12 12", "M18 6L6 18"],
  compass: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M15 9l-2 5-5 2 2-5z"],
  external: ["M8 8h8v8", "M15 9l-7 7", "M5 5h6", "M5 5v14h14v-6"],
  gauge: ["M5 15a7 7 0 0114 0", "M12 15l4-4", "M6 19h12"],
  layers: ["M12 3l9 5-9 5-9-5z", "M3 12l9 5 9-5", "M3 16l9 5 9-5"],
  link: ["M10 13a5 5 0 007 0l2-2a5 5 0 00-7-7l-1 1", "M14 11a5 5 0 00-7 0l-2 2a5 5 0 007 7l1-1"],
  lock: ["M6 11h12v9H6z", "M9 11V8a3 3 0 016 0v3"],
  menu: ["M4 7h16", "M4 12h16", "M4 17h16"],
  radar: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M12 12l6-6", "M12 7a5 5 0 015 5"],
  rocket: ["M5 19l4-1 9-9 1-4-4 1-9 9z", "M14 6l4 4", "M5 19l-2 2"],
  search: ["M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z", "M16 16l5 5"],
  send: ["M4 12l16-8-6 16-3-7z", "M10 13l10-9"],
  shield: ["M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z", "M9 12l2 2 4-5"],
  spark: ["M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"],
  workflow: ["M5 7h5v5H5z", "M14 12h5v5h-5z", "M10 9h4", "M12 9v5"],
  clock: ["M12 21a9 9 0 100-18 9 9 0 000 18z", "M12 7v5l3 2"],
  user: ["M12 12a4 4 0 100-8 4 4 0 000 8z", "M5 20a7 7 0 0114 0"],
}

export function Icon({ name, size = 22, className }: IconProps) {
  const iconPaths = paths[name] ?? paths.spark

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths.map((d) => (
        <path d={d} key={d} />
      ))}
    </svg>
  )
}
