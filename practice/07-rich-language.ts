/**
 * Expand/shrink selection
 * `cmd+ctrl+shift+right/left`
 *
 * @todo select the whole object
 */
const anotherObject = {
  spanning: {
    multiple: "lines",
  },
};

/**
 * Trigger suggestion
 * `ctrl+space`
 *
 * Trigger parameter hints
 * `cmd+shift+space`
 *
 * @todo Complete the function call
 */
const weirdFunc = (some: string, random: string, arguments: number) => {};
weirdFunc("what's", "next");

/**
 * Rename
 * `f2`
 *
 * @todo Rename `wortAgain`, but not `wortOnceMore`. Also rename `other` to `some`.
 */
const wortAgain = { some: "value" };
const wortOnceMore = { other: "value" };
console.log(wortAgain.some);
console.log(wortOnceMore.other);

/**
 * Quick fix / Refactor
 * `cmd+.` / `ctrl+shift+r`
 * Often do the same thing...
 *
 * @todo Add braces to the arrow function
 */
const arrow = (argument: string) => argument;

/**
 * Definition/References
 *
 * Go to definition
 * `f12` or `cmd+click`
 * Open definition to side
 * `cmd+k f12` or `cmd+opt+click`
 *
 * Show hover
 * `cmd+k cmd+i`
 */

/**
 * Change language + Format
 * `cmd+k m` + `opt+shift+f`
 */

/**
 * Outline/breadcrumb navigation
 * `cmd+shift+.`
 *
 * Go to symbol (in editor)
 * `cmd+shift+o`
 *
 * Go to symbol (in workspace)
 * `cmd+t`
 *
 * @todo Go to `anotherObject.spanning.multiple`
 */
