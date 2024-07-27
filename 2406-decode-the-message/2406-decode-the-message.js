/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function (key, message) {
    let decode = new Map()
    let str = []
    let j = 97 // character 'a'

    for (let i = 0; i < key.length && j <= 122; i++) {
        if (key[i] !== ' ' && !decode.has(key[i])) {
            decode.set(key[i], String.fromCharCode(j))
            j++
        }
    }

    for (let i = 0; i < message.length; i++) {
        if (message[i] !== ' ') {
            str.push(decode.get(message[i]))
        } else {
            str.push(message[i])
        }
    }

    return str.join('')
};