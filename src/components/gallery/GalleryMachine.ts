import { assign, createMachine } from "xstate"
import { WalletContext } from "../../state-machines/main-machine"
import { ElrondNft } from "../../types/ElrondNft"

async function fetchWalletInfo(context: WalletContext) {
    const { walletAddress } = context
    const response = await fetch(`https://api.elrond.com/accounts/${walletAddress}/nfts`) 
    let tempNfts:ElrondNft[] = await response.json()
    tempNfts = tempNfts.filter((nft: ElrondNft) => !nft.collection.includes('LKFARM'))
    const collection: Map<string, ElrondNft[]> = new Map();
    tempNfts.forEach((nft:ElrondNft) => {
        if(collection.has(nft.collection)) {
            collection.get(nft.collection)?.push(nft)
        }
        else {
            const col = []
            col.push(nft)
            collection.set(nft.collection, col)
        }
    });
    return collection
  }

  export const createGalleryMachine = (walletAddress: string) => {
    return createMachine({
        tsTypes: {} as import("./GalleryMachine.typegen").Typegen0,
        schema: {
            context: {} as WalletContext,
            services: {} as {
              fetchWalletInfo: {
                data: WalletContext
              }
            }
        },
        id: 'gallery-machine',
        initial: 'loading',
        context: {
            walletAddress,
            collection: null
        },
        states: {
          idle: {},
          loading: {
            initial: 'loading',
            states: {
              loading: {
                invoke: {
                  id: 'fetch-wallet-info',
                  src: fetchWalletInfo,
                  onDone: {
                    actions: assign<WalletContext, any>({
                      collection: (context, event) => event.data
                    })
                  },
                  onError: 'failed'
                }
              },
              loaded: {},
              failed: {}
            }
          }
        }
    })
}