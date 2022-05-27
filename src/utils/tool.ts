import debug from 'debug'

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

function createDebugLogger(name: string): debug.Debugger {
  return debug(name)
}

export { getProperty, createDebugLogger }
