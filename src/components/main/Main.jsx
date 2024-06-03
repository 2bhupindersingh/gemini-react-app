import React, { useContext } from "react";
import Nav from "./Nav";
import Greet from "./Greet";
import Cards from "./Cards";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    setRecentPrompt,
    input,
    setInput,
    previousPrompt,
    setPreviousPrompt,
    showResult,
    setShowResult,
    loading,
    setLoading,
    resultData,
    setResultData,
  } = useContext(Context);
  return (
    <div className="main">
      <Nav />
      <div className="main-container">
        {/* <Greet />
        <Cards /> */}

        {!showResult ? (
          <>
            {" "}
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
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
              <div className="card" >
                <p>Tell me about React js and React native</p>
                <img src={assets.code_icon} alt="img" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="img" />
              {recentPrompt}
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="img" />
              {loading ? (
                <div className="loader"></div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here"
              value={input}
              onChange={(event) => setInput(event.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} width="30" alt="img" />
              <img src={assets.mic_icon} width="30" alt="img" />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  width="30"
                  alt="img"
                />
              ) : (
                ""
              )}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
