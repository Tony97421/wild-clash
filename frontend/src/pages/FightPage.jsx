import { useContext, useRef, useEffect } from "react";
import HeroLoaderContext from "../contexts/HeroLoaderContext";
import FightButton from "../components/FightButton";
import HealthBar from "../components/HealthBar";

function FightPage() {
  const { selectHero1, selectHero2 } = useContext(HeroLoaderContext);
  const audio = useRef(null);
  const audio2 = useRef(null);

  useEffect(() => {
    if (audio.current) {
      audio.current.muted = false;
      audio.current.play();
    }
    setTimeout(() => {
      if (audio2.current) {
        audio2.current.muted = false;
        audio2.current.play();
      }
    }, 3800);
  }, [audio]);

  return (
    <div className="fightPage">
      <audio ref={audio} muted>
        <track kind="captions" />
        <source
          src="/sons/three-two-one-fight-deep-voice-38382.mp3"
          type="audio/mp3"
        />
      </audio>
      <audio ref={audio2} muted>
        <track kind="captions" />
        <source
          src="/sons/techno-syndrome-mortal-kombat-song-by-the-immortals_NaxR0wNS.mp3"
          type="audio/mp3"
        />
      </audio>
      <div className="logoBox">
        <p>1st Trial : RUMBLE !</p>
        <img
          className="logoFight"
          src="/images/logo_projet2.png"
          alt="Logo Clash Heroes"
        />
      </div>
      <HealthBar selectHero1={selectHero1} selectHero2={selectHero2} />
      <FightButton selectHero1={selectHero1} selectHero2={selectHero2} />
    </div>
  );
}

export default FightPage;
