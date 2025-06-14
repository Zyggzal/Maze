'use client';

import useAPI from "@/hooks/api";
import useTyper from "@/hooks/typer";
import { useEffect } from "react";

export default function Home() {
  const { output, startTyping } = useTyper();
  const api = useAPI();

  useEffect(() => {
    const timeout = setTimeout(() => {
      startTyping('Hello, world!', 100, 1000, () => {
        console.log('Typed out the message');
      });

      const login = async () => {
        const res = await api.Login('valeraslp1@gmail.com', 'popik888');
        console.log(res);
      }

      login();
    }, 2000);

    return () => {
      clearTimeout(timeout);
    }
  }, []);

  const onTypeButtonClick = () => {
        startTyping(prompt('what to type?') || '', 300, 1000, () => {
        console.log('Typed out the message');
      });
  }

  return (
    <>
      {output}
      <button onClick={onTypeButtonClick}>Type message</button>
    </>
  );
}
