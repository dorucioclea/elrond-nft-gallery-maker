import React, { useState } from 'react'
import { ElrondNft } from '../../types/ElrondNft'

export default function WalletSearch() {

    const [walletAddress, setWalletAddress] = useState('')
    const [nfts, setNfts] = useState<ElrondNft[]>([])

    function walletInputUpdate(event: React.ChangeEvent<HTMLInputElement>) {
        setWalletAddress(event.target.value)
    }

    async function search() {
        const response = await fetch(`https://api.elrond.com/accounts/${walletAddress}/nfts`) 
        let tempNfts:ElrondNft[] = await response.json()
        tempNfts = tempNfts.filter((nft: ElrondNft) => !nft.collection.includes('LKFARM'))
        setNfts(tempNfts)
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
    }

    return (
        <div className="wallet-info">
          <input type="text" value={walletAddress} onChange={walletInputUpdate}/>
          <button onClick={search}>search</button>
        </div>        
    )
}