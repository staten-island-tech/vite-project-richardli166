// for(i = 0; i <= 7; i++){
//     console.log(i);
// }
// money=100;
// while(money > 0){
//     console.log(money);
//     money--;
// }
const numsArr = [
1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
function linearSearch(number, array){
    let found;
        //for loop is iteration
    for(let i = 0; i < array.length; i++){
        //evalutaions if statements, are selection  
        if(array[i] === number){
            found = array[i];
            break;
        }
        else{
            console.log("Still finding");
        }
    }
    if (!found){
        console.log("This value does not exist");
    }
    else{
    console.log(found);
    }
    return found;
}

linearSearch(500, numsArr);
