import { tagColors } from "../config/settings";

export function ProjectTag({ name }: { name: string }) {

  if (name) {
    return (
      <div className="flex items-center space-x-2">
        <div className={["size-4 rounded-full", tagColors[name] ? tagColors[name] : tagColors.default ].join("")}>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          React
        </span>
      </div>
    );
  }
}