import Word from './Word';

// A word list that stores words and gives candidate answers

class ClientWordList {
  constructor() {
    this._loadWords();
  }

  // Takes either a String, Word, or Letter Map
  canBeMadeFrom(other) {
    if (other instanceof Word) {
      other = other.letterMap;
    } else if (!(other instanceof Map)) {
      other = new Word(other).letterMap;
    }

    return this.words
      .filter((word) => word.canBeMadeFrom(other))
      .map((word) => word.text)
      .sort((a, b) => {
        const lDiff = b.length - a.length;

        if (lDiff !== 0) return lDiff;

        return a < b ? -1 : 1;
      });
  }

  async _loadWords() {
    const response = await fetch('/data/countdown.words.json');
    const words = await response.json();

    this.words = words.map((line) => new Word(line));
  }
}

export default ClientWordList;
