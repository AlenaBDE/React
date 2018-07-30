export function getRandomInt(min, max) {
    let randomMixer = new Date().getSeconds(); // get seconds now
    let result = 0;
    let i = 0;
    do {
        result = Math.floor(Math.random() * (max - min + 1)) + min;
        i++;
    } while (i < randomMixer);

    return result;
}

