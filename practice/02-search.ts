/**
 * Search
 * `cmd+f` -> `enter`/`shift+enter`
 *
 * Replace (also works when already searching)
 * `cmd+shift+f`
 *
 * @todo Find the word "worts" and replace it with "words"
 */
const spelling =
  "One of these words is not spelled words, but more like worts. Does it even belong to the set of words?";

/**
 * `cmd+g` and `cmd+shift+g` also goes through search results outside the search form
 *
 * @todo Find the next "wort" without focusing the search form.
 */
const wort = "again";

/**
 * Toggle search mode
 * case:       `cmd+opt+c`
 * regex:      `cmd+opt+r`
 * word:       `cmd+opt+w`
 * selection:  `cmd+opt+l`
 *
 * @todo search for "word." and toggle different modes
 */
const dict = {
  word: { meaning: "word" },
  Word: { meaning: "Word" },
  otherWord: { meaning: "otherWord" },
};
console.log(dict.word.meaning);
console.log(dict.Word.meaning);
console.log(dict.otherWord.meaning);
console.log(dict.word["meaning"]);
console.log(dict.Word["meaning"]);
console.log(dict.otherWord["meaning"]);

/**
 * Replace preserving case (button in search modal)
 *
 * @todo replace "List" with "Array"
 */
const List = () => ({ printList: () => {} });
const list = List();
list.printList();

/**
 * Go through search history
 * `up/down`
 *
 * @todo Search for "wort" again, but navigate search history
 */
const worts = "don't die";
