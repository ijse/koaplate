import * as requireDir from 'require.dir'

const serviceMap:any = requireDir('.')

const output:any = {}

;(<any>Object).entries(serviceMap)
  .forEach((item:any) => {
    const [name, mod] = item
    output[name] = mod.default
  })

export default output
