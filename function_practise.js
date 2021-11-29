"use strict";

let numberOfNews;

function startProject() {
    numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?");

    while(numberOfNews == "" || numberOfNews == null || isNaN(numberOfNews)) {
        numberOfNews = +prompt("Siz qancha yangilik ko'rdingiz?")
    }
}

startProject()

const personalNewsDB = {
    count: numberOfNews,
    news: {},
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberNews() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
        b = prompt("Unga qancha baho bergan bo'lar edingiz?");
    
        if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            console.log('Good :)');
        }else {
            console.log('Error');
            i--;
        }
    }
}
rememberNews();

function showPersonalLevel() {
    if (personalNewsDB.count <= 10) {
        console.log("Juda oz sonli yangiliklar o'qilibdi");
    } else if (personalNewsDB.count <= 30) {
        console.log("Siz klassik tomoshabinsiz");
    } else if (personalNewsDB.count > 30) {
        console.log("Siz yangilklar ishqibozisiz.");
    }else {
        console.log("Type Erroe");
    }
}

showPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalNewsDB);
    }
}
showMyDB(personalNewsDB.privat)


function showMyDB(a, b) {
    if (a !== b) {
        console.log("Xato");
    }else {
        console.log("");
    }
}
showMyDB(7, 4)