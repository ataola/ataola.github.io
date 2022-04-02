export type TNavBarItemChildren = {
  text: string
  value: string
  router?: string
  link?: string
}

export type TNavBarItem = {
  text: string
  value: string
  router?: string
  link?: string
  children: TNavBarItemChildren[]
}

export type TNavBarItems = Array<TNavBarItem>
