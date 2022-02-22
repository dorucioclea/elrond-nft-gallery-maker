import { createMachine } from "xstate";
import { sendParent } from "xstate/lib/actions";

const walletSearchMachine = createMachine({
    tsTypes:{} as import("./WalletSearchMachine.typegen").Typegen0,
    schema: {
    },
    id: 'reddit',
    initial: 'idle',
    states: {
      idle: {},
      selected: {}
    },
    on: {
      SELECT: {
        target: '.selected',
        actions: () => {
            console.log('sending parent another even')
            sendParent({ type: 'ANOTHER_EVENT' })
        }
        // actions: assign<WalletContext, SelectEvent>({
        //     walletAddress: (context, event) => {
        //         console.log('the address entered is:', event.walletValue)
        //         return event.walletValue
        //     }
        // })
      }
    }
  });
  
  export default walletSearchMachine