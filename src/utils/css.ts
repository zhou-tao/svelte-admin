const defaultNamespace = 'q-'
const statePrefix = 'is-'

export function _bem(namespace: string, block: string, element?: string, modifier?: string) {
  return `${namespace}${block}${element ? `__${element}` : ''}${modifier ? `--${modifier}` : ''}`
}

export function useNamespace(block: string) {
  const b = () => _bem(defaultNamespace, block)
  const be = (element?: string) => element ? _bem(defaultNamespace, block, element) : ''
  const bm = (modifier?: string) => modifier ? _bem(defaultNamespace, block, '', modifier) : ''
  const bem = (element?: string, modifier?: string) => element && modifier ? _bem(defaultNamespace, block, element, modifier) : ''
  const is = (name: string, state: boolean) => name && state ? `${statePrefix}${name}` : ''
  const gen = (...classes: string[]) => classes.filter(c => c).join(' ')
  return {
    b,
    be,
    bm,
    bem,
    is,
    gen
  }
}
