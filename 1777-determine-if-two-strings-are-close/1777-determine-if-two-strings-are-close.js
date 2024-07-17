/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function (word1, word2) {
    if (word1.length !== word2.length) {
        return false
    }

    const frequencyMap1 = new Map()
    const frequencyMap2 = new Map()

    for (const char of word1) {
        frequencyMap1.set(char, (frequencyMap1.get(char) || 0) + 1)
    }

    for (const char of word2) {
        frequencyMap2.set(char, (frequencyMap2.get(char) || 0) + 1)
    }

    const characters1 = new Set(frequencyMap1.keys())
    const characters2 = new Set(frequencyMap2.keys())

    if (characters1.size !== characters2.size) {
        return false
    }

    const haveSameChar = [...characters1].every(char => characters2.has(char))

    if (!haveSameChar) return false

    const sortedFrequency1 = Array.from(frequencyMap1.values()).sort((a, b) => a - b)
    const sortedFrequency2 = Array.from(frequencyMap2.values()).sort((a, b) => a - b)

    const areIndentical = sortedFrequency1.join(',') === sortedFrequency2.join(',')

    if (!areIndentical) return false
    return true
};