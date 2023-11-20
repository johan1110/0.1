// 1-Masala: 3-7_Elemanlar ekranga chiqsin
let talabalar = ["Jahongir" , "Lazir", "Muxridin", "Davron", "Shax", "Bektosh", "Afzalshoh", "Khurshed", "Sherzod", "Vohid",]

console.log(talabalar[2]+ " " + talabalar[6]);



// 2-Masala:5_Elementni boshqa elementga o'zgartiring 
let talabalar2 = ["Jahongir" , "Lazir", "Muxridin", "Davron", "Shax", "Bektosh", "Afzalshoh", "Khurshed", "Sherzod", "Vohid",]

talabalar2[4] = "Bobur2004"

console.log(talabalar2);



3-Masala: 6_Elemdan boshlab qolgan barcha elementlatnio o'chiring
let talabalar3 = ["Jahongir" , "Lazir", "Muxridin", "Davron", "Shax", "Bektosh", "Afzalshoh", "Khurshed", "Sherzod", "Vohid",]

talabalar3.pop()
talabalar3.pop()
talabalar3.pop()
talabalar3.pop()

console.log(talabalar3);



4-Masala Ohiridagi elementni Ochiring
let talabalar4 = ["Jahongir" , "Lazir", "Muxridin", "Davron", "Shax", "Bektosh", "Afzalshoh", "Khurshed", "Sherzod", "Vohid",]

talabalar4.pop()

console.log(talabalar4);



5-Masala Boshidagi elementni o'chiring
let talabalar5 = ["Jahongir" , "Lazir", "Muxridin", "Davron", "Shax", "Bektosh", "Afzalshoh", "Khurshed", "Sherzod", "Vohid",]

talabalar5.shift()

console.log(talabalar5);



// 6-Masala Ohiriga va Boshiga yangi talaba ismini qoshing
let talabalar6 = ["Jahongir" , "Lazir", "Muxridin", "Davron", "Shax", "Bektosh", "Afzalshoh", "Khurshed", "Sherzod", "Vohid",]

talabalar6.unshift("Maqsud")
talabalar6.push("Bexruz")

console.log(talabalar6);


