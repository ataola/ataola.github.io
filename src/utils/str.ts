import { v4 as uuidv4 } from 'uuid'

export const getUUID = (): string => {
  return uuidv4()
}

export const trim = (str: string): string => {
  return str.replace(/\s/g, '')
}

export const subStr = (str: string, n = 120): string => (str.length < n ? str : `${str.substring(0, n)}...`)
