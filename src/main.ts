import { deepStrictEqual } from "node:assert";
/**
 * Determine whether the items are equal or not by deep equality comparison.
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean} Determine result.
 */
export default function equal(a: unknown, b: unknown): boolean {
	try {
		deepStrictEqual(a, b);
		return true;
	} catch {
		return false;
	}
}
