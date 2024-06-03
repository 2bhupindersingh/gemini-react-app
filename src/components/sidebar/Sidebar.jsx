import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [closeMneu, setCloseMenu] = useState(false);
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
    newChat
  } = useContext(Context);

  const handleMneu = () => {
    setCloseMenu(!closeMneu);
  };

  const loadPrompt = async (propmpt) => {
    setRecentPrompt(propmpt)
    await onSent(propmpt);
  };
  return (
    <div className={closeMneu ? "sidebar" : "sidebar active"}>
      <div className="top">
        <div className="menu">
          <img onClick={handleMneu} src={assets.menu_icon} alt="img" />
        </div>

        <div className="new-chat" onClick={()=> newChat()}>
          <img src={assets.plus_icon} alt="img" />
          <p>New Chat</p>
        </div>
        <div className="recent">
          <p className="recent-title">Recent</p>
          {previousPrompt.map((item, index) => (
            <div className="recent-entry" key={index} onClick={()=> loadPrompt(item)}>
              <img src={assets.message_icon} alt="img" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="img" />
          <p>Help</p>
        </div>
        {/* <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="img" />
          <p>Activity</p>
        </div> */}
        {/* <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="img" />
          <p>Setting</p>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
