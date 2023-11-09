import { Cores } from './components/Cores';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Impact } from './components/Impact';

import styles from './App.module.css';
import './global.css';
import { Inspirations } from './components/Inspirations';
import { Partness } from './components/Partness';
import { Actions } from './components/Actions';
import { Press } from './components/Press';
import { Footer } from './components/Footer';
import { Actives } from './components/Actives';
import { Founders } from './components/Founders';
import { History } from './components/History';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Home />
          <History />
          <Founders />
          <Impact />
          <Actions />
          <Cores />
          <Inspirations />
          <Actives />
          <Partness />
          <Press />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App