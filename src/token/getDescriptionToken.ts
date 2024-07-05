import patterns from '../patterns/pattern.json'
import getRandomInt from '../utils/getRandom';
const getDescriptionToken = function (pair: Pair | null) {
    let description = "";
    if (pair?.pairCreatedAt) {
        if (Date.now() - pair.pairCreatedAt <= 1800000) {
            description += patterns.description.new_launch_word[getRandomInt(0, patterns.description.new_launch_word.length - 1)] + " "
        }
    }
    description += `${patterns.description.normal[getRandomInt(0, patterns.description.normal.length - 1)]}`
    return description.split('.').join('\\.')
}

export default getDescriptionToken;