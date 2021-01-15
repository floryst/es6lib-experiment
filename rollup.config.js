import * as path from 'path'
import * as glob from 'glob'

import alias from '@rollup/plugin-alias'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import glslify from 'rollup-plugin-glslify'

const entries = glob
  .sync('src/**/*/index.js')
  .reduce((acc, file) => {
    const name = path.parse(file).dir
    acc[name] = path.join(path.resolve(__dirname), file)
    return acc
  }, {})


export default {
  input: entries,
  output: {
    dir: 'dist-rollup',
    format: 'es',
    entryFileNames: '[name].js'
  },
  plugins: [
    nodeResolve(),
    glslify(),
    alias({
      entries: [
        { find: '@', replacement: path.resolve(__dirname, 'src')}
      ]
    })
  ]
}
