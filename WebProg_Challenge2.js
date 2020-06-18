// Question 1
{
let Q1A = document.getElementById("Q1A");
let Q1B = document.getElementById("Q1B");
let Q1C = document.getElementById("Q1C");
let Q1D = document.getElementById("Q1D");
let Q1Atext = document.getElementById("Q1Atext");
let Q1Btext = document.getElementById("Q1Btext");
let Q1Ctext = document.getElementById("Q1Ctext");
let Q1Dtext = document.getElementById("Q1Dtext");
let Q1Ans = 0;
}
// Question 2
{
let Q2A = document.getElementById("Q2A");
let Q2B = document.getElementById("Q2B");
let Q2C = document.getElementById("Q2C");
let Q2D = document.getElementById("Q2D");
let Q2Atext = document.getElementById("Q2Atext");
let Q2Btext = document.getElementById("Q2Btext");
let Q2Ctext = document.getElementById("Q2Ctext");
let Q2Dtext = document.getElementById("Q2Dtext");
let Q2Aimage = document.getElementById("Q2Aimage");
let Q2Bimage = document.getElementById("Q2Bimage");
let Q2Cimage = document.getElementById("Q2Cimage");
let Q2Dimage = document.getElementById("Q2Dimage");
let Q2Ans = 0;
}
let total;
let submit = document.getElementById("submit");

// Question 1
Q1A.onclick = function Q1Afunc() {
    // event.preventDefault();
    console.log("Q1A clicked");
    Q1Ans = 0;
    Q1A.style.backgroundColor ="blue";
    Q1Atext.style.backgroundColor ="blue";
    Q1Atext.style.color ="white";
    Q1B.style.backgroundColor ="grey";
    Q1Btext.style.backgroundColor ="grey";
    Q1Btext.style.color ="black";
    Q1C.style.backgroundColor ="grey";
    Q1Ctext.style.backgroundColor ="grey";
    Q1Ctext.style.color ="black";
    Q1D.style.backgroundColor ="grey";
    Q1Dtext.style.backgroundColor ="grey";
    Q1Dtext.style.color ="black";
}
Q1B.onclick = function Q1Bfunc() {
    // event.preventDefault();
    console.log("Q1B clicked");
    Q1Ans = 1;
    Q1A.style.backgroundColor ="grey";
    Q1Atext.style.backgroundColor ="grey";
    Q1Atext.style.color ="black";
    Q1B.style.backgroundColor ="red";
    Q1Btext.style.backgroundColor ="red";
    Q1Btext.style.color ="white";
    Q1C.style.backgroundColor ="grey";
    Q1Ctext.style.backgroundColor ="grey";
    Q1Ctext.style.color ="black";
    Q1D.style.backgroundColor ="grey";
    Q1Dtext.style.backgroundColor ="grey";
    Q1Dtext.style.color ="black";
}
Q1C.onclick = function Q1Cfunc() {
    // event.preventDefault();
    Q1Ans = 0;
    console.log("Q1B clicked");
    Q1A.style.backgroundColor ="grey";
    Q1Atext.style.backgroundColor ="grey";
    Q1Atext.style.color ="black";
    Q1B.style.backgroundColor ="grey";
    Q1Btext.style.backgroundColor ="grey";
    Q1Btext.style.color ="black";
    Q1C.style.backgroundColor ="yellow";
    Q1Ctext.style.backgroundColor ="orange";
    Q1Ctext.style.color ="white";
    Q1D.style.backgroundColor ="grey";
    Q1Dtext.style.backgroundColor ="grey";
    Q1Dtext.style.color ="black";
}
Q1D.onclick = function Q1Dfunc() {
    // event.preventDefault();
    Q1Ans = 0;
    console.log("Q1B clicked");
    Q1A.style.backgroundColor ="grey";
    Q1Atext.style.backgroundColor ="grey";
    Q1Atext.style.color ="black";
    Q1B.style.backgroundColor ="grey";
    Q1Btext.style.backgroundColor ="grey";
    Q1Btext.style.color ="black";
    Q1C.style.backgroundColor ="grey";
    Q1Ctext.style.backgroundColor ="grey";
    Q1Ctext.style.color ="black";
    Q1D.style.backgroundColor ="lime";
    Q1Dtext.style.backgroundColor ="lime";
    Q1Dtext.style.color ="white";
}
// Question 2
Q2A.onclick = function Q2Afunc() {
    // event.preventDefault();
    console.log("Q2A clicked");
    Q2Ans = 0;
    Q2A.style.backgroundColor ="blue";
    Q2Atext.style.backgroundColor ="blue";
    Q2Atext.style.color ="white";
    Q2Aimage.style.filter = "grayscale(100%)";
    Q2B.style.backgroundColor ="grey";
    Q2Btext.style.backgroundColor ="grey";
    Q2Btext.style.color ="black";
    Q2Bimage.style.filter = "grayscale(100%)";
    Q2C.style.backgroundColor ="grey";
    Q2Ctext.style.backgroundColor ="grey";
    Q2Ctext.style.color ="black";
    Q2Cimage.style.filter = "grayscale(100%)";
    Q2D.style.backgroundColor ="grey";
    Q2Dtext.style.backgroundColor ="grey";
    Q2Dtext.style.color ="black";
    Q2Dimage.style.filter = "grayscale(100%)";
}
Q2B.onclick = function Q2Bfunc() {
    // event.preventDefault();
    console.log("Q2B clicked");
    Q2Ans = 0;
    Q2A.style.backgroundColor ="grey";
    Q2Atext.style.backgroundColor ="grey";
    Q2Atext.style.color ="black";
    Q2Aimage.style.filter = "grayscale(100%)";
    Q2B.style.backgroundColor ="red";
    Q2Btext.style.backgroundColor ="red";
    Q2Btext.style.color ="white";
    Q2Bimage.style.filter = "grayscale(0%)";
    Q2C.style.backgroundColor ="grey";
    Q2Ctext.style.backgroundColor ="grey";
    Q2Ctext.style.color ="black";
    Q2Cimage.style.filter = "grayscale(100%)";
    Q2D.style.backgroundColor ="grey";
    Q2Dtext.style.backgroundColor ="grey";
    Q2Dtext.style.color ="black";
    Q2Dimage.style.filter = "grayscale(100%)";
}
Q2C.onclick = function Q2Cfunc() {
    // event.preventDefault();
    console.log("Q2C clicked");
    Q2Ans = 0;
    Q2A.style.backgroundColor ="grey";
    Q2Atext.style.backgroundColor ="grey";
    Q2Atext.style.color ="black";
    Q2Aimage.style.filter = "grayscale(100%)";
    Q2B.style.backgroundColor ="grey";
    Q2Btext.style.backgroundColor ="grey";
    Q2Btext.style.color ="black";
    Q2Bimage.style.filter = "grayscale(100%)";
    Q2C.style.backgroundColor ="yellow";
    Q2Ctext.style.backgroundColor ="orange";
    Q2Ctext.style.color ="white";
    Q2Cimage.style.filter = "grayscale(0%)";
    Q2D.style.backgroundColor ="grey";
    Q2Dtext.style.backgroundColor ="grey";
    Q2Dtext.style.color ="black";
    Q2Dimage.style.filter = "grayscale(100%)";
}
Q2D.onclick = function Q2Dfunc() {
    // event.preventDefault();
    console.log("Q2D clicked");
    Q2Ans = 1;
    Q2A.style.backgroundColor ="grey";
    Q2Atext.style.backgroundColor ="grey";
    Q2Atext.style.color ="black";
    Q2Aimage.style.filter = "grayscale(100%)";
    Q2B.style.backgroundColor ="grey";
    Q2Btext.style.backgroundColor ="grey";
    Q2Btext.style.color ="black";
    Q2Bimage.style.filter = "grayscale(100%)";
    Q2C.style.backgroundColor ="grey";
    Q2Ctext.style.backgroundColor ="grey";
    Q2Ctext.style.color ="black";
    Q2Cimage.style.filter = "grayscale(100%)";
    Q2D.style.backgroundColor ="lime";
    Q2Dtext.style.backgroundColor ="lime";
    Q2Dtext.style.color ="white";
    Q2Dimage.style.filter = "grayscale(0%)";
}
// Question 3
Q3A.onclick = function Q3Afunc() {
    // event.preventDefault();
    console.log("Q3A clicked");
    Q3Ans = 1;
    Q3A.style.backgroundColor ="blue";
    Q3Atext.style.backgroundColor ="blue";
    Q3Atext.style.color ="white";
    Q3Aimage.style.filter = "grayscale(100%)";
    Q3B.style.backgroundColor ="grey";
    Q3Btext.style.backgroundColor ="grey";
    Q3Btext.style.color ="black";
    Q3Bimage.style.filter = "grayscale(100%)";
    Q3C.style.backgroundColor ="grey";
    Q3Ctext.style.backgroundColor ="grey";
    Q3Ctext.style.color ="black";
    Q3Cimage.style.filter = "grayscale(100%)";
    Q3D.style.backgroundColor ="grey";
    Q3Dtext.style.backgroundColor ="grey";
    Q3Dtext.style.color ="black";
    Q3Dimage.style.filter = "grayscale(100%)";
}
Q3B.onclick = function Q3Bfunc() {
    // event.preventDefault();
    console.log("Q3B clicked");
    Q3Ans = 0;
    Q3A.style.backgroundColor ="grey";
    Q3Atext.style.backgroundColor ="grey";
    Q3Atext.style.color ="black";
    Q3Aimage.style.filter = "grayscale(100%)";
    Q3B.style.backgroundColor ="red";
    Q3Btext.style.backgroundColor ="red";
    Q3Btext.style.color ="white";
    Q3Bimage.style.filter = "grayscale(0%)";
    Q3C.style.backgroundColor ="grey";
    Q3Ctext.style.backgroundColor ="grey";
    Q3Ctext.style.color ="black";
    Q3Cimage.style.filter = "grayscale(100%)";
    Q3D.style.backgroundColor ="grey";
    Q3Dtext.style.backgroundColor ="grey";
    Q3Dtext.style.color ="black";
    Q3Dimage.style.filter = "grayscale(100%)";
}
Q3C.onclick = function Q3Cfunc() {
    // event.preventDefault();
    console.log("Q3C clicked");
    Q3Ans = 0;
    Q3A.style.backgroundColor ="grey";
    Q3Atext.style.backgroundColor ="grey";
    Q3Atext.style.color ="black";
    Q3Aimage.style.filter = "grayscale(100%)";
    Q3B.style.backgroundColor ="grey";
    Q3Btext.style.backgroundColor ="grey";
    Q3Btext.style.color ="black";
    Q3Bimage.style.filter = "grayscale(100%)";
    Q3C.style.backgroundColor ="yellow";
    Q3Ctext.style.backgroundColor ="orange";
    Q3Ctext.style.color ="white";
    Q3Cimage.style.filter = "grayscale(0%)";
    Q3D.style.backgroundColor ="grey";
    Q3Dtext.style.backgroundColor ="grey";
    Q3Dtext.style.color ="black";
    Q3Dimage.style.filter = "grayscale(100%)";
}
Q3D.onclick = function Q3Dfunc() {
    // event.preventDefault();
    console.log("Q3D clicked");
    Q3Ans = 0;
    Q3A.style.backgroundColor ="grey";
    Q3Atext.style.backgroundColor ="grey";
    Q3Atext.style.color ="black";
    Q3Aimage.style.filter = "grayscale(100%)";
    Q3B.style.backgroundColor ="grey";
    Q3Btext.style.backgroundColor ="grey";
    Q3Btext.style.color ="black";
    Q3Bimage.style.filter = "grayscale(100%)";
    Q3C.style.backgroundColor ="grey";
    Q3Ctext.style.backgroundColor ="grey";
    Q3Ctext.style.color ="black";
    Q3Cimage.style.filter = "grayscale(100%)";
    Q3D.style.backgroundColor ="lime";
    Q3Dtext.style.backgroundColor ="lime";
    Q3Dtext.style.color ="white";
    Q3Dimage.style.filter = "grayscale(0%)";
}

submit.onclick = function submit() {
    // event.preventDefault();
    console.log("submit clicked");
    total = Q1Ans + Q2Ans + Q3Ans;
    console.log("total correct = " + total)


submit2.classList.remove("Submit");
submit2.classList.add("Title");
submit2.innerHTML = ("<h2>Congratulations, <br> you got " + total + " out of 3 <br> correct!</h2>");

}

