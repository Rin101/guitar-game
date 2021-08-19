const notes = [
    "A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"
    // "A", "C"
]

const strings = [
    "1st", "2nd", "3rd", "4th", "5th", "6th"
]

const chords = [
    "Major", "minor", "7th", "Power chord"
]

export const mondaiNote = () => {
    const randomNote = notes[Math.floor(Math.random() * notes.length)]
    const string = strings[Math.floor(Math.random() * strings.length)]

    return randomNote + " on " + string + " string"
}