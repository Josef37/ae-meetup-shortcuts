/**
 * Jump to matching bracket
 * `cmd+shift+\`
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
 * Folding
 * Toggle `cmd+k cmd+l`
 * Open/Close `cmd+opt+]` / `cmd+opt+[`
 * Open/Close recursively `cmd+k cmd+]` / `cmd+k cmd+[`
 * Fold levels `cmd+k cmd+1/2/...`
 * Fold all `cmd+k cmd+0`
 * Unfold all `cmd+k cmd+j`
 * Fold others `cmd+k cmd+-`
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
