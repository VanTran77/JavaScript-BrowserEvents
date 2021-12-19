// var numOne = document.getElementById('num-1');
// var numTwo = document.getElementById('num-2');
// var addSum = document.getElementById('add-sum');

// numOne.addEventListener('input', add);
// numTwo.addEventListener('input', add);

// function add(){
//     var one = parseFloat(numOne.value) || 0;
//     var two = parseFloat(numTwo.value) || 0;
//     // var one = numOne.value;
//     // var two = numTwo.value;
//     // addSum.innerHTML = "Your sum is  -: " + (one+two);
//     addSum.innerHTML = "Your sum is: " + (one+two);
//     }

// Hide Pictures
var netherlands1 = document.getElementById("netherlands");
// var netherlandsPic = document.getElementById("netherlands-pic");
var france1 = document.getElementById("france");
// var francePic = document.getElementById("france-pic");
var england1 = document.getElementById("england");
// var englandPic = document.getElementById("england-pic");

// same code below
netherlands1.addEventListener("click", picLink);
france1.addEventListener("click", picLink);
england1.addEventListener("click", picLink);
function picLink(){
    // hide every image
    var allImages = document.querySelectorAll("img");
    for (var i = 0; i < allImages.length; i++){
        allImages[i].className = "hide";
    }

    var picId = this.attributes["data-img"].value;
    // console.log(picId);
    var pic = document.getElementById(picId);
    if (pic.className === "hide"){
                pic.className = "";
            } else {
                pic.className = "hide";
            }
}

// netherlands.addEventListener("click", function(){
//     if (netherlandsPic.className === "hide"){
//         netherlandsPic.className = "";
//     } else {
//         netherlandsPic.className = "hide";
//     }
// });
// france.addEventListener("click", function(){
//     if (francePic.className === "hide"){
//         francePic.className = "";
//     } else {
//         francePic.className = "hide";
//     }
// });
// england1.addEventListener("click", function(){
//     if (englandPic.className === "hide"){
//         englandPic.className = "";
//     } else {
//         englandPic.className = "hide";
//     }
// });