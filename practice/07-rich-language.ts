/**
 * Go to symbol (in editor)
 * `cmd+shift+o`
 *
 * Go to symbol (in workspace)
 * `cmd+t`
 *
 * @todo go to the symbol "hiddenVar"
 */

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
 * @todo Find the precious
 */
const some = { deeply: { nested: { object: { with: "precious" as const } } } };
const my = some.deeply.nested.object.with;

/**
 * Trigger parameter hints
 * `cmd+shift+space`
 *
 * @todo Complete the function call
 */
const weirdFunc = (some: string, random: string, arguments: number) => {};
weirdFunc();

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
 * Refactor
 * `ctrl+shift+r`
 *
 * Quick fix
 * `cmd+.`
 *
 * @todo Add braces to the arrow function
 */
const arrow = (argument: string) => argument;

/**
 * Definition/References
 */

/**
 * Change language
 * `cmd+k m`
 *
 * Format document
 * `opt+shift+f`
 */

/**
 * Outline/breadcrumb navigation
 * `cmd+shift+.`
 *
 * @todo Go to `anotherObject.spanning.multiple`
 */

const hiddenVar = "find me :)";
