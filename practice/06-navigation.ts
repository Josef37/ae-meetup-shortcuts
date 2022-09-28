/**
 * Jump to matching bracket
 * (US) `cmd+shift+\`
 * (DE) `cmd+opt+ctrl+7`
 */
const functionWithNesting = () => {
  const doAnything = () => {
    if (true) {
      console.log("yeah!");
    } else {
      console.log("how?");
    }
  };

  doAnything();
};

/**
 * Go back/forward
 * `ctrl+-` / `ctrl+shift+-`
 */

/**
 * Go to next error
 * `f8`
 */
const not = "right";
console.log(not.left);

/**
 * FOLDING
 *
 * Toggle
 *   `cmd+k cmd+l`
 * Open/Close
 *   (US) `cmd+opt+]` / `cmd+opt+[`
 * Open/Close recursively
 *   (US) `cmd+k cmd+]` / `cmd+k cmd+[`
 *   (DE) `cmd+opt+ctrl+5` / `cmd+opt+ctrl+6`
 * Fold levels
 *   `cmd+k cmd+1/2/...`
 * Fold all
 *   `cmd+k cmd+0`
 * Unfold all
 *   `cmd+k cmd+j`
 * Fold others
 *   `cmd+k cmd+-`
 */
const anotherFunctionWithNesting = () => {
  const doAnything = () => {
    if (true) {
      console.log("yeah!");
    } else {
      console.log("how?");
    }
  };

  doAnything();
};
