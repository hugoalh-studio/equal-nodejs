import { deepStrictEqual } from "node:assert";
/**
 * @function equal
 * @description Whether the items are equal or not by deep equality comparison.
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean} Determine result.
 */
function equal(a, b) {
    try {
        deepStrictEqual(a, b);
        return true;
    }
    catch {
        return false;
    }
}
export default equal;
