'use client';

import { PopupContext } from "@/contexts/popup";
import useTyper from "@/hooks/typer";
import { TPopupContext } from "@/types/popup";
import { useContext, useEffect, useState } from "react";

export default function Home() {
  const { output, startTyping } = useTyper();
  const { showPopup } = useContext(PopupContext) as TPopupContext;
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTyping('Hello, world!', 100, 1000, () => {
        console.log('Typed out the message');
      });
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  const onTypeButtonClick = () => {
      startTyping(inputText, 300, 1000, () => {
        console.log('Typed out the message');
      });
  };

   const onPopupButtonClick = () => {
      showPopup(inputText, 'Your Input');
  };

  return (
    <>
      <label>Input text: <input type="text" onChange={(e)=>setInputText(e.target.value)}/></label>
      <div>
        <button onClick={onTypeButtonClick}>Type inputed message</button>
        <h1>  {output}</h1>
      </div>
      <button onClick={onPopupButtonClick}>Show text in popup</button>
    </>
  );
};
