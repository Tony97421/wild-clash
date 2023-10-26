import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
// import { useState } from "react";

function ChooseFighter() {
  // const [position, setPosition] = useState(0);
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/fight");
  };
  const [selectedFighter] = useState(null);
  return (
    <div className="ChooseFighter">
      <div className="BoxParent">
        {selectedFighter && <p>{selectedFighter.nom}</p>}

        <button type="button" onClick={handlePage}>
          Fight !
        </button>
        <p>VS</p>
        <img src="" alt="" />
      </div>
      <div className="BoxImage">
        <section className="lot1">
          <div className="div1">1</div>
          <div className="div2">2</div>
          <div className="div3">3</div>
          <div className="div4">4</div>
          <div className="div5">5</div>
          <div className="div6">6</div>
          <div className="div7">7</div>
          <div className="div8">8</div>
          <div className="div9">9</div>
          <div className="div10">10</div>
          <div className="div11">11</div>
          <div className="div12">12</div>
        </section>
        <section className="lot2">
          <div className="div13">13</div>
          <div className="div14">14</div>
          <div className="div15">15</div>
          <div className="div16">16</div>
          <div className="div17">17</div>
          <div className="div18">18</div>
          <div className="div19">19</div>
          <div className="div20">20</div>
          <div className="div21">21</div>
          <div className="div22">22</div>
          <div className="div23">23</div>
          <div className="div24">24</div>
        </section>
      </div>
    </div>
  );
}

ChooseFighter.propTypes = {
  heros: PropTypes.arrayOf(PropTypes.string).isRequired,
}.isRequired;

export default ChooseFighter;
