export const getStaticIconFile = (name: string): string => {
  return new URL(`../static/icons/${name}.svg`, import.meta.url).href
}
