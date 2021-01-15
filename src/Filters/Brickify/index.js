import { Deflate } from 'pako'

export function deflateBricks() {
  console.log('deflating some bricks with Deflate. Do we have deflate?', !!Deflate)
}
