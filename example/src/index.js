import { deflateBricks } from 'es6lib/dist-rollup/src/Filters/Brickify'
import { shader } from 'es6lib/dist-rollup/src/Rendering'

deflateBricks()
console.log('I found a shader! Let us crack it open to see what is inside.\n', shader)
