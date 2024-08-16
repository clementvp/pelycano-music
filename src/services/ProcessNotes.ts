import { normalizeNote } from "./NormalizeNote";

const processNotes = (notes: string[]) => {
  return notes.map((note) => {
    let processedNote = note;
    const { root, alteration, octave } = normalizeNote(note);
    if (octave) {
      const intOctave = parseInt(octave);
      if (intOctave) {
        if (root === "b" || root === "B") {
          if (alteration === "#" || alteration === "##") {
            processedNote = `${root}${alteration}${intOctave + 1}`;
          }
        }
      }
    }
    return processedNote;
  });
};

export default processNotes;
