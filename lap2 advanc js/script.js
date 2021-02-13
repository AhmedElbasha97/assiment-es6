const arrayOfFood = ["burger", "pizza", "donuts", "pizza", "koshary", "donuts", "seafood","burger"];
let setOfFood = new Set(arrayOfFood);
console.log(setOfFood); 
setOfFood.add('pasta');
console.log(setOfFood); 
setOfFood.delete('burger'); 
console.log(setOfFood); 
function checkingSize (setOfArr){
    if (setOfArr.size > 2){
        setOfArr.clear();
        console.log(setOfArr)
    }else{
        console.log("you are good to go");
    }
}
