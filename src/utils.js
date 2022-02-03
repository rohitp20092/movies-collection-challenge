export const movieImage = [
    "1-the-phantom-manace.jpg",
    "2-attack-of-the-clones.jpg",
    "3-regenve-of-the-sith.jpg",
    "4-a-new-hope.jpg",
    "5-empire-strikes-back.jpg",
    "6-return-of-the-jedi.jpg",
]

export const convertToRoman = (num) => {
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}

