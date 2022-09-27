/**
 * Select next occurrence
 * `cmd+d`
 *
 * Undo cursor
 * `cmd+u`
 *
 * @todo Duplicate the code and replace "foo" with "bar"
 */
const foo = { some: "value" };
console.log(foo.some);

/**
 * Select all occurrences
 * `cmd+shift+l`
 *
 * @todo Overwrite all occurrences of "Project" with "Item"
 */
const Project = () => ({ findProject: () => {} });
const ProjectInstance = Project();
ProjectInstance.findProject();

/**
 * Multi-cursor
 * `opt+click`
 * `cmd+opt+up/down`
 *
 * @todo Add an "s" to the end of all strings.
 */
const collections = [
  "Plant",
  "Project",
  "Contract",
  "Partner",
  "Asset",
  "Tariff",
];

/**
 * Box selection
 * `opt+shift+click`
 *
 * @todo Select the prefix, i.e. "12345_", and get rid of it.
 */
const uselessPrefix = [
  "12345_Plant",
  "12346_Project",
  "12347_Contract",
  "12345_Partner",
  "22345_Asset",
  "52245_Tariff",
];

/**
 * Add cursors to line ends
 * `opt+shift+i`
 *
 * @todo Add an "s" to the end of all strings, but this time select the item first with `shift+click`
 */
const collectionsAgain = [
  "Plant",
  "Project",
  "Contract",
  "Partner",
  "Asset",
  "Tariff",
  "Plant",
  "Project",
  "Contract",
  "Partner",
  "Asset",
  "Tariff",
  "Plant",
  "Project",
  "Contract",
  "Partner",
  "Asset",
  "Tariff",
];
