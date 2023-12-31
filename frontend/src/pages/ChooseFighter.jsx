import { useNavigate, useRouteLoaderData } from "react-router-dom";
import { PropTypes } from "prop-types";
import { useState, useEffect, useContext, useRef } from "react";
import HeroesCard from "../components/HeroesCard";
import HeroLoaderContext from "../contexts/HeroLoaderContext";

function ChooseFighter() {
  const { selectHero1, setSelectHero1, selectHero2, setSelectHero2 } =
    useContext(HeroLoaderContext);
  const audio = useRef(null);

  const allHeroes = useRouteLoaderData("app");
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/fight");
  };
  const [heroName1, setHeroName1] = useState("");
  const [heroName2, setHeroName2] = useState("");
  useEffect(() => {
    audio.current.muted = false;
    audio.current.play();
    const hero1 = allHeroes.find((hero) => hero.data.image.url === selectHero1);
    const hero2 = allHeroes.find((hero) => hero.data.image.url === selectHero2);
    if (hero1) {
      setHeroName1(hero1.data.name);
    }
    if (hero2) {
      setHeroName2(hero2.data.name);
    }
  }, [allHeroes, selectHero1, selectHero2]);

  function handleDeclick() {
    if (selectHero1) {
      setSelectHero1("");
    }
  }

  function handleDeclickBox() {
    if (selectHero2) {
      setSelectHero2("");
    }
  }

  function changeTitle() {
    if (selectHero1 === "") {
      return "Choose Your Hero";
    }
    if (selectHero1 && selectHero2 !== "") {
      return "Ready For The Fight";
    }
    return "Choose Your Enemy";
  }

  return (
    <div className="ChooseFighter">
      <audio className="epicIntro" ref={audio} muted>
        <track kind="captions" />
        <source src="/sons/epic-extreme-short-109130.mp3" type="audio/mp3" />
      </audio>
      <h1 className="titlePage">{changeTitle()}</h1>
      <div className="BoxParent">
        <div className="fighterContainer">
          {selectHero1 === "" ? (
            <div className="boxSelected">
              <div className="inlineDiv" />
            </div>
          ) : (
            <div className="displayHeroesSelected">
              <img
                className="selectHero1 boxSelected"
                onClick={handleDeclick}
                role="presentation"
                src={selectHero1}
                alt="fighter1"
              />
              <div className="namePersoLeft">{heroName1}</div>
            </div>
          )}
          <p className="vs">VS</p>

          {selectHero2 === "" ? (
            <div className="boxSelected">
              <div className="inlineDiv" />
            </div>
          ) : (
            <div className="displayHeroesSelected">
              <img
                className="selectHero2 boxSelected"
                onClick={handleDeclickBox}
                role="presentation"
                src={selectHero2}
                alt="fighter2"
              />
              <div className="namePersoRight">{heroName2}</div>
            </div>
          )}
        </div>

        {selectHero1 !== "" && selectHero2 !== "" ? (
          <button type="button" className="buttonFight" onClick={handlePage}>
            Fight
          </button>
        ) : (
          ""
        )}
      </div>
      <HeroesCard
        selectHero1={selectHero1}
        selectHero2={selectHero2}
        setSelectHero1={setSelectHero1}
        setSelectHero2={setSelectHero2}
      />
    </div>
  );
}

ChooseFighter.propTypes = {
  heros: PropTypes.arrayOf(PropTypes.string).isRequired,
}.isRequired;

export default ChooseFighter;
