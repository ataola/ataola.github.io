export type TRObj<T> = {
  readonly [key: string]: T
}

export type TObj<T> = {
  [key: string]: T
}

export type Partial<T> = {
  [K in keyof T]?: T[K]
}

export type Exclude<T, K> = T extends K ? never : T

export type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

export type Concat<T extends any[], U extends any[]> = [...T, ...U]

export type TPage = {
  page: string
  type: string
  id?: string | number
  row?: any
}

export type TFile = {
  name: string
  url: string
  type: string
  ext?: string
  fullname?: string
}

export type TOption = {
  label: string
  value: string | number
  alias?: string
  code?: string | number
}
