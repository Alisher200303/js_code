




/* Darsga topshiriq:
1) o'zgaruvchan numberOfNews yarating va foydalanuvchidan savolga javobini qo'ying:
"Siz qancha yangilik ko'rdingiz?"
2) personalNewsDB obyektini yarating va unga quyidagi xususiyatlarni qo'ying:
- count - birinchi savolga javob shu erda beriladi
- news - bu ob'ektga bo'sh ob'ektni qo'ying
- actors - shuningdek, bo'sh ob'ekt joylashtiradilar
- genres - bu erda bo'sh massivni qo'ying
- privat - bu xususiyatga mantiqiy (boolean) false qiymatini qo'ying
3) foydalanuvchiga ikkita savol bering:
  - "Oxirgi ko'rgan yangiliklarizdan biri?"
  - 'Unga qancha baho bergan bo'lar edingiz?'
Javoblar alohida o'zgaruvchilarga joylashtirilishi kerak.
Yangiliklar ob'ektiga javoblarni quyidagi shaklda yozing:
  news: {
    'BBC': '8.1'
  }
Konsolda hamma narsa xatosiz ishlashini tekshiring */



/********* Loops ********/


/* Darsga topshiriq:
1) Tsiklni yordamida foydalanuvchiga yangiliklar haqidagi savollarni avtomatlashtirish
2) Foydalanuvchi javobni bo'sh satr sifatida qoldirmasligi uchun shunday qiling,
javobni bekor qilish yoki 50 belgidan uzunroq yangilik nomini kiritish. Agar bu sodir bo'lsa -
foydalanuvchini yana savollarga qaytaring. (Har qanday satrga quyidagicha kirish mumkin
str.length - va uzunligini oling)
3) Shartlardan foydalanib, personalMovieDB.count-ni tekshiring, agar u 10 dan kam bo'lsa - xabarni ko'rsating
"Juda oz sonli yangiliklar o'qilibdi", agar 10 dan 30 gacha bo'lsa - "Siz klassik tomoshabinsiz", agar ko'proq bo'lsa -
- Siz yangilklar ishqibozisiz. Va agar u biron bir variantga mos kelmasa - "Xato yuz berdi"
4) Amaliy mashg'ulot va tsiklni yana ikkita usulda qayta yozing  */




/************ Function ***************/


/* Darsga topshiriq:
1) Darsga muvofiq topshiriqning birinchi qismini takrorlang
2) Privat xususiyatlarini tekshiradigan showMyDB funktsiyasini yarating. Agar pozitsiya false turgan
bo'lsa dasturning asosiy ob'ektini konsolga ko'rsatadi
3) writeYourGenres funktsiyasini yarating, unda foydalanuvchi savolga 3 marta javob beradi
"Sizning sevimli janringiz - $ {ketma-ket raqam}". Har bir javob ma'lumotlar genres qatoriga yoziladi
P.S. Funksiyalarni chaqirish shart emas */


/******  OOP ********/

/* Darsga topshiriq:
1) Bizda allaqachon alohida funktsiyalardan iborat ishlaydigan dastur mavjud. Buni tasavvur qiling
sizning vazifangiz uni qayta yozishdir, shunda barcha funktsiyalar personalNewsDB ob'ektining uslubiga aylanadi
Bu texnologiyalarni o'zgartirganda yoki dastur arxitekturasiga yondashishda haqiqiy mahsulotlarda sodir bo'ladi.

2) toggleVisibleMyDB usulini yarating, u chaqirilganda privat mulkini tekshiradi. Agar u yolg'on bo'lsa, u
uni "true" ga o'zgartiradi, "true" bo'lsa - "false" ga o'zgartiradi. ShowMyDB bilan sinab ko'ring.

3) writeGenres usulida foydalanuvchini "bekor qilish" tugmachasini bosishiga yoki bo'sh satr qoldirishiga 
yo'l qo'ymang.

Agar u buni qilgan bo'lsa, uni xuddi shu savolga qaytaring. Barcha janrlar kiritilgandan so'ng -
ForEach usuli yordamida xabarlarni konsolga quyidagi shaklda chop eting:
"Sevimli janr # (tartib tartibida, 1 dan boshlab) bu ​​(massivdan nom)" */



"use strict";


const personalNewsDB = {
  count: 0,
  news: {},
  actors: {},
  genres: [],
  privat: false,
  startProject: function () {
    personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");

    while (personalNewsDB.count == "" ||
    personalNewsDB.count == null || 
    isNaN(personalNewsDB.count)) {
        personalNewsDB.count = +prompt("Siz qancha yangilik ko'rdingiz?");
    }
  },
  rememberNews: function() {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan yangiliklarizdan biri?"),
        b = prompt("Unga qancha baho bergan bo'lar edingiz?");
      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalNewsDB.news[a] = b;
        console.log("tayyor");
      } else {
        console.log("Error");
        i--;
      }
    }
  },
  showPesonalLevel: function() {
    if (personalNewsDB.count < 10) {
      console.log("Juda oz sonli yangiliklar o'qilibdi");
    } else if (personalNewsDB.count >= 10 && personalNewsDB.count < 30) {
      console.log("Siz klassik tomoshabinsiz");
    } else if (personalNewsDB.count >= 30) {
      console.log("Siz yangilklar ishqibozisiz");
    } else {
      console.log("Xato yuz berdi");
    }
  },showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalNewsDB);
    }
  },

  toggleVisibleMyDB: function() {
    if (personalNewsDB.privat) {
      personalNewsDB.privat = false;
    }else {
      personalNewsDB.privat = true;
    }
  },

  writeYourGenres: function () {
  //   for(let i = 0; i < 2; i++) {
  //   let genre = prompt(`Sizning sevimli janringiz: nomer ${i}`)
  //   if(genre === "" || genre === null) {
  //     console.log("Siz noto'g'ri ma'lumot kirittingiz");
  //     i--;
  //   } else {
  //     personalNewsDB.genres[i - 1] = genre;
  //   }
  // }
  for (let i = 1; i < 2; i++) {
    let genre = prompt(
      `Sizning sevimli janringiz, vergul yordamida yozing`
    ).toLowerCase();  
    if (genre === "" || genre === null) {
      console.log("Siz noto'g'ri ma'lumot kirittingiz");
      i--;
    }else {
      personalNewsDB.genres = genre.split(", ");
      personalNewsDB.genres.sort();
    }
  }
  

  personalNewsDB.genres.forEach((item, i) => {
    console.log(`Sizning sevimli janringiz: nomer ${i + 1} bu ${item}`);
  });
  },
};

// personalNewsDB.writeYourGenres();


