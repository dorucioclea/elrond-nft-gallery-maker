import { createContext } from 'react';
import Gallery from './components/gallery/Gallery'
import WalletSearch from './components/wallet-search/WalletSearch'

import './App.css';
import { useInterpret, useSelector } from '@xstate/react';
import mainMachine from './state-machines/main-machine';

import { InterpreterFrom } from 'xstate';

export const MachineProvider = createContext({ mainService: {} as InterpreterFrom<typeof mainMachine> })

function App() {
  const appMachine = useInterpret(mainMachine);

  const walletAddress = useSelector(appMachine, (value: any) => {
    return value.context.walletAddress
})

  return (
    <MachineProvider.Provider value={{ mainService: appMachine }}>
    <div className="App">
      <header className="App-header">
      </header>
      <div className ="main-content">
        <WalletSearch />
        {walletAddress && <Gallery address={walletAddress}/>}
      </div>
    </div>
    </MachineProvider.Provider>
  );
}

export default App;
