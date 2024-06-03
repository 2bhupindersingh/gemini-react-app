import { createContext, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [previousPrompt, setPreviousPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const newChat =()=> {
    setLoading(false);
    setShowResult(false);
  }
  const onSent = async (prompt) => {
    setResultData("");
    setLoading(true);
    setShowResult(true);
    setInput("");
    let response;

    if (prompt !== undefined) {
      response = await runChat(prompt);
      setRecentPrompt(prompt);
    } else {
      setPreviousPrompt((prev) => [...prev, input]);
      setRecentPrompt(input);
      response = await runChat(input);
    }

    // setRecentPrompt(input);
    // setPreviousPrompt(prev=> [...prev, input]);
    // const response = await runChat(input);
    let responseArray = response.split("**");
    let newResponse="";
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponse += responseArray[i];
      } else {
        newResponse += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponse1 = newResponse.split("*").join("<br/>");
    let newResponseArray = newResponse1.split(" ");
    for (let i = 0; i < newResponseArray.length; i++) {
      const nextWord = newResponseArray[i];
      delayPara(i, nextWord + " ");
    }
    // setResultData(newResponse1);
    setLoading(false);
    
  };

  // onSent("What is react js?");

  const contextValue = {
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
  };
  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
