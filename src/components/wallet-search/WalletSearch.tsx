import { useContext, useRef } from 'react'
import { MachineProvider } from '../../App';

export default function WalletSearch() {

    const globalMachine = useContext(MachineProvider);
    const { send } = globalMachine.mainService

    const addressRef = useRef<HTMLInputElement>(null)

    function sendSearchEvent() {
        if(addressRef.current)
            send({type: 'SELECT', walletValue: addressRef.current.value})
    }

    return (
        <div className="wallet-info">
          <input type="text" ref={addressRef} />
          <button onClick={sendSearchEvent}>search</button>
        </div>        
    )
}