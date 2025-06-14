export type LineChunk = {
    talker?: string,
    cadence: number,
    lines: string[]
};

export type DialogueData = {
  [key: string]: LineChunk[];
};

export type TDialogueContext = {
    dialogue: DialogueData|null,
    dialogueById: (id: string) => LineChunk[] | null
}