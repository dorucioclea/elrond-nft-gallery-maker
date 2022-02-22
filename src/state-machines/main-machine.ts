import { createMachine, assign } from 'xstate'
import { ElrondNft } from '../types/ElrondNft'

export interface WalletContext { 
  walletAddress: string,
  collection: Map<string, ElrondNft[]> | null
}

interface SelectEvent {
  type: 'SELECT', 
  walletValue: string 
}


const mainMachine = createMachine({
  tsTypes:{} as import("./main-machine.typegen").Typegen0,
  schema: {
    context: {} as WalletContext,
    events: {} as SelectEvent 
  },
  id: 'main',
  initial: 'idle',
  context: {
    walletAddress: '', // no address entered
    collection: null
  },
  states: {
    idle: {
      on: {
        SELECT: {
          actions: assign<WalletContext, SelectEvent>({
              walletAddress: (context, event) => {
                  console.log('the address entered is:', event.walletValue)
                  return event.walletValue
              }
          })
        }
      }
    },
  },
});

export default mainMachine