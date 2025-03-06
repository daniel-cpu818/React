import { useState, useEffect, useRef } from 'react';
import './App.css';
import phrases from './utils/phrases.json';
import bgArr from './utils/bgArr.json';
import getRandomFromArr from './services/getRandomFromArr';
import Phrase from './components/Phrase';
import ButtonPhrase from './components/ButtonPhrase';
import gsap from 'gsap';

function App() {
  const [phraseRandom, setPhraseRandom] = useState(getRandomFromArr(phrases));
  const [bgApp, setBgApp] = useState(getRandomFromArr(bgArr));

  // Ref for the cookie animation
  const cookieRef = useRef(null);

  // GSAP Animation when phrase changes
  useEffect(() => {
    if (cookieRef.current) {
      gsap.fromTo(
        cookieRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.5)' },
      );
    }
  }, [phraseRandom]); // Se ejecuta cada vez que cambia la frase

  return (
    <>
      <div className="app" style={{ backgroundImage: `url(${bgApp})` }}>
        <h1 id="titleGalleta">Galleta de la fortuna</h1>
        <div className="divisor">
          <h2 className="frases" ref={cookieRef}>
            <Phrase phraseRandom={phraseRandom} />
          </h2>
          <article ref={cookieRef}>
            <ButtonPhrase setPhraseRandom={setPhraseRandom} setBgApp={setBgApp} />
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
