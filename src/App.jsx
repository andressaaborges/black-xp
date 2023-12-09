import { Cores } from './components/Cores';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Impact } from './components/Impact';
import styles from './App.module.css';
import './global.css';
import { Partness } from './components/Partness';
import { Actions } from './components/Actions';
import { Footer } from './components/Footer';
import { Founders } from './components/Founders';
import { History } from './components/History';
import VLibras from '@djpfs/react-vlibras';
import EventLocation from './components/EventLocation';


function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          {/* <VLibras forceOnload={true} /> */}
          <Home />
          <History />
          <Founders />
          <Cores />
          <Impact />
          <Actions />
          <EventLocation />
          <Partness />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App