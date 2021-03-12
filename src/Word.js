// Class for storing words, both the text and the letters.
// The word is stored in lower-case

class Word {
  // Construct from a string
  constructor(word) {
    this.text = word.toLowerCase();

    this._deconstruct();
  }

  // Takes either a String, Word, or Letter Map
  canBeMadeFrom(other) {
    if (other instanceof Word) {
      other = other.letterMap;
    } else if (!(other instanceof Map)) {
      other = new Word(other).letterMap;
    }

    let ok = true;

    this.letterMap.forEach((value, key) => {
      ok = ok && other.has(key) && other.get(key) >= value;
    });

    return ok;
  }

  // Takes either a String, Word, or Letter Map
  isAnagramOf(other) {
    if (other instanceof Word) {
      other = other.letterMap;
    } else if (!(other instanceof Map)) {
      other = new Word(other).letterMap;
    }

    if (this.letterMap.size !== other.size) return false;

    this.letterMap.forEach((value, key) => {
      const othervalue = other.get(key);

      if (!othervalue || othervalue !== value) return false;
    });

    return true;
  }

  _deconstruct() {
    this.letterMap = new Map();

    [...this.text].forEach((char) => {
      const count = this.letterMap.get(char);

      this.letterMap.set(char, count + 1 || 1);
    });
  }
}

export default Word;
