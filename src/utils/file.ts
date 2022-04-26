export const getStaticIconFile = (name: string) => {
  return new URL(`../static/icons/${name}.svg`, import.meta.url).href
}
