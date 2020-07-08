let Q1 = ":مرحباً بك في برنامج توظيف المبرمجين، يرجى الاجابة عن الاسئلة التالية"

console.log(Q1);

let name = prompt("ما اسمك؟");

let age = prompt("كم عمرك؟");

let exp = prompt("كم عدد سنوات الخبرة لديك؟");

let languages = ["html","javascript","CSS","PHP","swift","Java"];

console.log("لغة البرمجة:");

console.log("1. " + languages[0]);
console.log("2. " + languages[1]);
console.log("3. " + languages[2]);
console.log("4. " + languages[3]);
console.log("5. " + languages[4]);
console.log("6. " + languages[5]);

let needed_lan = 2;

let choose_lan = prompt("اختر لغة برمجة تتقنها من االغات المذكورة بادخال رقمها:");

let choose_lan2 = prompt("اختر لغة مرمجة اخرى:");

if (age > 23 && age <33 && exp > 3 && choose_lan == needed_lan || choose_lan2 == needed_lan){

    console.log(name + "," + "انت مقبول");
} else{
    console.log(name + "," + "انت مرفوض");   
}

// TASK 3 START :



function total() {

let quizes = parseInt(document.getElementById("Q").value);

let midterm = parseInt (document.getElementById("M").value);

let final = parseInt (document.getElementById("F").value);

let oral = parseInt (document.getElementById("O").value);

let totalGrade = (parseInt(quizes) + parseInt(midterm) + parseInt(final) + parseInt(oral));

alert("your total grade is" + totalGrade)

// document.getElementById("calc_total").innerHTML = totalGrade;

if (totalGrade >= 90 && totalGrade <= 100){

    alert("you got Got an A")
} 

if (totalGrade >= 80 && totalGrade <= 89 ){

    alert("you got Got an B")
} 

if (totalGrade >= 70 && totalGrade <= 79){

    alert("you got Got an C")
} 

  

if (totalGrade >= 60 && totalGrade <= 69){

    alert("you got Got an D")
} 

if (totalGrade >= 0 && totalGrade <= 59){

    alert("you got Got an F")
} 

}


