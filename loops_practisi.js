("use strict");

/**Shart operatorlari amallar */




const numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?")

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: [],
    genres: [],
    privat: false,
};

let i = 0
while (i < 2) {
    i++;
    const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
    b = prompt("Unga qancha baho bergan bo'lar edingiz?");

    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        console.log('Good :)');
    }else {
        console.log('Error');
        i--;
    }
}

if (personalNewsDB.count <= 10) {
    console.log("Juda oz sonli yangiliklar o'qilibdi");
} else if (personalNewsDB.count <= 30) {
    console.log("Siz klassik tomoshabinsiz");
} else if (personalNewsDB.count > 30) {
    console.log("Siz yangilklar ishqibozisiz.");
}else {
    console.log("Type Erroe");
}

console.log(personalNewsDB);











// const a = prompt("x", "");
// console.log(a);
/*
const numberOfNews = +prompt('Siz qancha yangilik ko\'rdingiz ?');

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    actors: {},
    genres: [],
    privat: false,
};


for (let i = 0; i < 2; i++) {
    const a = prompt("Oxirgi ko'rgan yangiligingiz ?"),
    b = +prompt('Unga nechi baho berasiz ?')
    if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalNewsDB.news[a] = b;
        console.log('Good');
    }else {
        console.log('Error');
    }
}

if(personalNewsDB.count < 10) {
    console.log('Juda oson yangiliklar o\'qilibdi');
} else if(personalNewsDB.count >= 10) {
    console.log('Siz classik tomoshabinsiz');
} else if (personalNewsDB.count >= 30) {
    console.log('Yangiliklar ishqibozisiz');
} else {
    console.log('Xatoyuz berdi');
}


console.log(personalNewsDB);

*/