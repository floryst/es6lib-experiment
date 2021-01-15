import { SomeConstant } from '@/Rendering'
import { Inflate } from 'pako'

export const LuckyConstant = () => `I found a lucky constant! ${SomeConstant}`
export default () => {
  console.log('Time to inflate myself into a bird', Inflate)
}
