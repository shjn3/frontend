function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);    // Round up to ensure inclusivity
    max = Math.floor(max);   // Round down to ensure inclusivity
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default getRandomInt