/**
* The first letter of each word is capitalized
* @param {string} str
*/
export const capitalize = (str) =>
		str.toLowerCase().replace(
			/(^|\s)([a-z])/g,
			(m,p1,p2) => p1+p2.toUpperCase()
		);
