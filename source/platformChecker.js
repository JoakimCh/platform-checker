
export const nodejs = (globalThis.Buffer && globalThis.process) ? process.version : undefined
export const deno = globalThis.Deno?.version?.deno
export const browser = globalThis.navigator?.userAgent

export const platform = (()=>{
  if (deno) return 'Deno'
  if (browser) return 'Browser'
  if (nodejs) return 'Node.js'
})()
export const platformVersion = deno || browser || nodejs
