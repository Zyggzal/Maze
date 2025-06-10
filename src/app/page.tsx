'use client';

import useTyper from "@/hooks/typer";
import { useEffect } from "react";

export default function Home() {
  const { output, startTyping } = useTyper();

  useEffect(() => {
    setTimeout(() => {
      startTyping('Hello, world!', 100, 1000, () => {
        console.log('Typed out the message');
      });
    }, 2000);
  }, []);

  const onTypeButtonClick = () => {
        startTyping(prompt('what to type?') || '', 300, 1000, () => {
        console.log('Typed out the message');
      });
  }

  return (
    <div>
      {output}
      <button onClick={onTypeButtonClick}>Type message</button>
    </div>
  );
}
