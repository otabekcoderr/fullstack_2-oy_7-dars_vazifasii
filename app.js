// 21.Fermada turli xildagi hayvonlar mavjud. Shunday funksiya
// yasangki, ushbu funksiya jami fermadagi hayvonlar oyoqlari
// nechta ekanligini hisoblab qaytarsin. Bunda funksiya birinchi
// argument sifatida tovuqlar sonini, ikkinchi argument sifatida
// qo’ylarni va uchinchi argument sifatida sigirlarning sonini
// qabul qiladi.

// function oyoqlar(tovuq, qoy, sigir) {
//   return (tovuq * 2) + (qoy * 4) + (sigir * 4);
// }
// console.log(oyoqlar(2, 3, 5));

//====================================================================

// 22.Javascriptda “&&” matiqiy operatori mavjud. Ushbu operator ikkita mantiqiy ifoda qabul qiladi. Quyidagi namunaga
// muvofiq keladigan funskiya yasang. Ushbu operatordan foydalangan holda!

// const trueOrfalse = function (first, second) {
//   return first && second;
// };

// console.log(trueOrfalse(false, false));

//====================================================================

// 23.Funksiya 2ta son qiymat qabul qiladi. Agar 1-son 2-songa
// teng bo’lsa rost, aks holda yolg’on qiymat qaytsin. Bunda ikkala
// qiymatning ma’lumot turi bir xil bo’lsin.

// const tengmi = (x, y) => (x === y ? true : false);
// console.log(tengmi(2, 2));

//====================================================================

// 24.Futbolda ochkoni hisoblaydigan funksiya yasang. Bunda
// funksiya yutishlar soni, duranglar soni va mag’lubiyatlar sonini
// qabul qiladi. 1ta yutish = 3 ochko, 1ta durang = 1 ochko, 1ta
// mag’lubiyat = 0 ochko hisoblanadi.

// function ochkoHisobla(yutish, durang, maglubiyat) {
//   return yutish * 3 + durang * 1;
// }

// console.log(ochkoHisobla(0, 0, 1));

//====================================================================

// 25.Funskiya soatlar va minutlarni argument sifatida qabul
// qiladi. Ushbu funkisya soatlar va minutlarni sekundga o’girib
// ularning yig’indisini qaytarsin.

// const sekundlar = function (soat, minut) {
//   return soat * 3600 + minut * 60;
// };

// console.log(sekundlar(0, 0));

//=========================================================================

// 26.Quyidagi namunalarni kuzatgan holda funksiya yasang.
// Namuna:
// fun(4) ᔍ false
// fun(9) ᔍ false
// fun(7) ᔍ true

// const tubSonlar = (num) => {
//   if (num <= 1) return false;
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// };
// console.log(tubSonlar(9));

//=======================================================================

// 27.Funskiay 2ta istalgan turdagi qiymatlar qabul qiladi. Agar
// ushbu 2ta qiymat ham qiymat jihatidan ham ma’lumot turi
// jihatidan teng bo’lsa rost, aks holda funkisya yolg’on qiymat
// qaytarsin.

// function tengMi(x, y) {
//   return x === y;
// }
// console.log(tengMi(0, 0));

//=======================================================================
// 28.Funksiya boolean qiymat qabul qiladi. Ushbu funksiya
// boolean qiymatni stringga o’girib qaytarib bersin.

// const booleanTostring = function (boolean) {
//   return String(boolean);
// };
// console.log(booleanTostring(true));

//=======================================================================

// 29.Arrow funksiyasini yarating ushbu funksiya shunchaki
// berilgan qiymatni qaytarsin

// const oziniQaytar = (data) => data;
// console.log(oziniQaytar(undefined));

//=======================================================================

//30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// 14
// EDABIT
// minutlar va 1 sekundda nechta framelar soni aylanishini argument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.

// function FrameSoni(minut, frame) {
//   return frame * 60 * minut;
// }
// console.log(FrameSoni(10, 1));

//=======================================================================

// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi. Ushbu funksiya matematik ifodani bajarib natijani qaytarsin

// const cacl = function (str) {
//   return eval(str);
// };
// console.log(cacl("2+4"));

//=======================================================================

// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.

// const teng10 = (x, y) => x === 10 || y === 10 || x + y === 10;
// console.log(teng10(10, 10));

//=======================================================================

// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu masofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.

// function listMasofa(num) {
//   return num * 10+100;
// }

// console.log(listMasofa(15));

//=======================================================================

//34.Quyidagi namunaga nazar tashlagan holda funksiya yasang

// const kattaniTop = function (x, y) {
//   return x > y ? x : y;
// };
// console.log(kattaniTop(5, 4));

//=======================================================================

//35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argumentdan iborat massiv qaytarsin

// const massiveQaytar = (x, y) => [x, y];
// console.log(massiveQaytar(3, 4));

//======================================================================

// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lumotlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir17
// DASTURLASHDAN MASALALAR
// birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks hold
// yolg’on.

// function lengthniTengla(str1, str2) {
//   return str1.length === str2.length ? true : false;
// }
// console.log(lengthniTengla("g", "er"));

//======================================================================
// 37. Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// aks holda false.

// const boshStr = function(str) {
//   return str === "";
// }

// console.log(boshStr(""));

//======================================================================

// 38. Shunday funksiya yasang. Unda butun son argument qilib
// beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// qaytarsin, aks holda false.

// const bolinsin5 = (son) => son % 5 === 0;

// console.log(bolinsin5(5));

//======================================================================

// 39. Shunday funksiya yasang. Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// qaytarsin, aks holda false.

// function bolinsin100(son) {
//   return son % 100 === 0;
// }

// console.log(bolinsin100(1));

//======================================================================

// 40. Shunday funksiya yasangki, ushbu funksiya stringni ichida
// nechta belgi borligini aytsin. Bunda length propertisidan foydalanmang
// va rekursiv funksiya ishlating.

const uzunlik = function (str) {
  if (str === "") {
    return 0;
  }
  return 1 + uzunlik(str.slice(1));
};

console.log(uzunlik("apple"));
