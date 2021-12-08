// function test() {
// // alert("hello world from me");
//     console.log("Hello world form paul")
// }

// test();

// function floor(diameter) {
//     var radius = diameter/2;
//     var floorArea = Math.PI * (radius* radius)
//     return floorArea;
// }

// function walls(diameter, height) {
//     var radius = diameter/2;
//     var circumference = 2 * Math.PI + radius;
//     var wallArea = circumference * height;
//     return wallArea;
// }

// function materialsNeeded() {
    
    
    
//     var d = document.getElementById("across").value;
//     var h = document.getElementById("height").value;

//     var carpetNeeded = Math.ceil(floor(d));
//     var paintNeeded = Math.ceil(walls(d, h));

//     console.log('Carpet needed is'+carpetNeeded+'sqft');
//     console.log('paint needed'+paintNeeded+'sqft');





// } //end of function

// materialsNeeded()

// floor(8);
// walls(8, 10);

// var i = 1;
// while (i<=100) {
//     i=i+2;
//     console.log(i)
//     i=i+1;
//     console.log(i)
// }

// for (i = 100; i>1; i=i-5) {
//     console.log(i);
// }

// var elementID = document.getElementById('state');
// console.log(elementID);

// console.log(elementID.length);




// // for (i=0; i<elementID.length; i++) {

// // console.log(elementID[i].text)
// // console.log(elementID[i].value)
// // }

// function showStuff(el) {
//     var elementID = document.getElementById(el)
//     for (i=0; i < elementID.length; i++) {

//         console.log(elementID[i].text)
//         console.log(elementID[i].value)
//         console.log(elementID[i].selected);

//         if (elementID[i].selected === true) {
//             var x = elementID[i].text;
            

//         }
//     }
//     return x;
// }

// function showMore(el) {
//     var elementID = document.getElementsByName(el);
//     // console.log(elementID.length);
//     var mycheck = "";
//     for (i=0; i<elementID.length; i++) {
//         // console.log(elementID[i].checked);
//         // console.log(elementID[i].value);
//         if (elementID[i].checked === true) {
//             mycheck = mycheck + elementID[i].value + '<br>';
//         }
//     }
//     return mycheck;
// }

// function evaluatePage() {
//     var feedbackState = showStuff("state");
//     var feedbackHome = showStuff("home");
//     var feedbackLight = showMore('bulb');
//     document.getElementById("output").innerHTML = feedbackState + '<br>' + feedbackHome + '<br>'+ feedbackLight;
// }

function myFunction() {
    var elem = document.getElementById("chooseMe");
    var fortuneNum = elem.options[elem.selectedIndex].value;
    var fortuneMessage;
    console.log(fortuneNum); 

switch (+fortuneNum) {
    // case 1:
    //     dayName = "Sunday";
    //     break;
    // case 2:
    //     dayName = "Monday";
    //     break;
    // case 3:
    //     dayName = "Tuesday";
    //         reak;
    // case 4:
    //     dayName = "Wednesday";
    //     break;
    // case 5:
    //     dayName = "Thursday";
    //     break;
    // case 6:
    //     dayName = "Friday";
    //     break;
    // case 7:
    //     dayName = "Saturday";
    //     break;
    // default:
    //     dayName = "Out of Range";
    case 1:
    case 3:
    fortuneMessage = "You will inherit a fortune";
    break;
    case 2:
    case 4:
    fortuneMessage = "You will win a new car";
    break;
}



    document.getElementById('feedback').innerHTML = fortuneMessage;
}

