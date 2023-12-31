import { useRouteLoaderData } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../components/Card";

function WikiHero() {
  const allHeroes = useRouteLoaderData("app");
  const audio = useRef(null);
  useEffect(() => {
    if (audio.current) {
      audio.current.muted = false;
      audio.current.play();
    }
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  const [searchHero, setSearchHero] = useState("");
  const [alignmentHero, setAlignmentHero] = useState("");
  const [selectedFilterGood, setSelectedFilterGood] = useState("");
  const [selectedFilterBad, setSelectedFilterBad] = useState("");

  const handleSearchHero = (event) => {
    const search = event.target.value;
    setSearchHero(search);
  };

  const handleFilterGood = () => {
    setSelectedFilterGood("filterGood");
    if (alignmentHero === "good") {
      setAlignmentHero("");
      setSelectedFilterGood("");
      setSelectedFilterBad("");
    } else {
      setAlignmentHero("good");
      setSelectedFilterBad("");
    }
  };

  const handleFilterBad = () => {
    setSelectedFilterBad("filterBad");
    if (alignmentHero === "bad") {
      setAlignmentHero("");
      setSelectedFilterBad("");
      setSelectedFilterGood("");
    } else {
      setAlignmentHero("bad");
      setSelectedFilterGood("");
    }
  };

  return (
    <div className="wikiHero">
      <audio ref={audio} loop muted>
        <track kind="captions" />
        <source
          src="/sons/elevator-music-bossa-nova-background-music-version-60s-10900.mp3"
          type="audio/mp3"
        />
      </audio>
      <div className="wikiFilters">
        <img
          className={`${selectedFilterGood}`}
          src="/images/filterHeroes.png"
          alt="filtre Heroes"
          onClick={handleFilterGood}
          role="presentation"
        />
        <input
          name="searchHero"
          type="text"
          placeholder="Search your hero..."
          onChange={handleSearchHero}
        />
        <img
          className={`${selectedFilterBad}`}
          src="/images/filterVilain.png"
          alt="filtre Bad Guys"
          onClick={handleFilterBad}
          role="presentation"
        />
      </div>

      <Carousel
        // eslint-disable-next-line react/jsx-boolean-value
        swipeable={true}
        responsive={responsive}
        // eslint-disable-next-line react/jsx-boolean-value
        infinite={true}
        customTransition="all 2s"
        itemClass="carousel-item-padding-40-px"
      >
        {allHeroes.length > 0 &&
          allHeroes
            .filter((align) =>
              align.data.biography.alignment.includes(alignmentHero)
            )
            .filter((search) =>
              search.data.name.toLowerCase().includes(searchHero.toLowerCase())
            )
            .map((filtered) => (
              <Card
                key={filtered.data.name}
                name={filtered.data.name}
                url={filtered.data.image.url}
                fullname={filtered.data.biography["full-name"]}
                aliases={filtered.data.biography.aliases[0]}
                birth={filtered.data.biography["place-of-birth"]}
                intelligence={filtered.data.powerstats.intelligence}
                durability={filtered.data.powerstats.durability}
                strength={filtered.data.powerstats.strength}
                power={filtered.data.powerstats.power}
                speed={filtered.data.powerstats.speed}
                combat={filtered.data.powerstats.combat}
              />
            ))}
      </Carousel>
    </div>
  );
}

export default WikiHero;
