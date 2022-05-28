import debug from 'debug'

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

function createDebugLogger(name: string): debug.Debugger {
  return debug(name)
}

function getCurrentUrlInfo(): string {
  const { hostname, hash } = window.location
  const hashStr = hash.slice(1).replaceAll('/', ':')
  return `${hostname}${hashStr}`
}

export { getProperty, createDebugLogger, getCurrentUrlInfo }
