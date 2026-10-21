export function toAnchor(section: string) {
  return section.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "");
}