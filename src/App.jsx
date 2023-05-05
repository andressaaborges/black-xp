import { Attributes } from './components/Attributes';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Operation } from './components/Operation';
import { Services } from './components/Services';
import styles from './App.module.css';
import './global.css';
import { Talents } from './components/Talents';
import { Companies } from './components/Companies';
import { Testimonials } from './components/Testimonials';
import { Press } from './components/Press';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Home />
          <Services />
          <Operation />
          <Attributes />
          <Talents />
          <Companies />
          <Testimonials />
          <Press />
          <Faq />
        </main>
      </div>
      <Footer/>
    </div>
  )
}

export default App