import React from "react";
import { assets } from "../../assets/assets";


const Cards = () => {
  return (
      <div className="cards">
        <div className="card">
          <p>Suggest beautiful places to see on an upcoming road trip</p>
          <img src={assets.compass_icon} alt="img" />
        </div>
        <div className="card">
          <p>Briefly summarize this concept: urban planning</p>
          <img src={assets.bulb_icon} alt="img" />
        </div>
        <div className="card">
          <p>Brainstorm team bonding activities for our work retreat</p>
          <img src={assets.message_icon} alt="img" />
        </div>
        <div className="card">
          <p>Tell me about React js and React native</p>
          <img src={assets.code_icon} alt="img" />
        </div>
      </div>
  );
};

export default Cards;
