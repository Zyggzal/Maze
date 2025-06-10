'use client';

import { createContext, useEffect, useState } from "react";
import dialogueJson from '../data/dialogue.json' assert { type: 'json '};
import { TDialogueContext, DialogueData } from "@/app/types";

export const DialogueContext = createContext<TDialogueContext|null>(null);

const DialogueProvider = ({ children } : { children: React.ReactNode }) => {
  const [dialogue, setDialogue] = useState<DialogueData|null>(null);

  useEffect(() => {
    setDialogue(dialogueJson as DialogueData);
  }, []);

  const dialogueById = (id: string) => {
    if(!dialogue) return;

    return dialogue[id];
  }

  return (
    <DialogueContext.Provider value={{ dialogue, dialogueById }}>
        {children}
    </DialogueContext.Provider>
  );
}

export default DialogueProvider;
