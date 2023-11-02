// for(i = 0; i <= 7; i++){
//     console.log(i);
// }
// money=100;
// while(money > 0){
//     console.log(money);
//     money--;
// }
// const numsArr = [
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// ];
// function linearSearch(number, array){
//     let found;
//         //for loop is iteration
//     for(let i = 0; i < array.length; i++){
//         //evalutaions if statements, are selection  
//         if(array[i] === number){
//             found = array[i];
//             break;
//         }
//         else{
//             console.log("Still finding");
//         }
//     }
//     if (!found){
//         console.log("This value does not exist");
//     }
//     else{
//     console.log(found);
//     }
//     return found;
// }

// // linearSearch(500, numsArr);
// let today = prompt("Parking Space Occupied Today");
// let yesterday = prompt("Parking Space Occupied Yesteday");
// // function 
// // for (let i = 0; i )
// let interger = prompt("Input number from 1-100");
// let yesterday = prompt("Occupied Parking Spaces yesterday");
// let today = prompt("Occupied Parking Spaces Today");
// for (let i = 0; i <= interger; i++){
//     if()
// }





function spaces (s, yesterday, today){
    let total = 0;
    for(let i =0; i <= s; i++){
        if(yesterday[i] === "C" && today[i] === "C"){
            total++;
        }
    }
    console.log(total);
}
spaces(5, "CC..C", ".CC..");
