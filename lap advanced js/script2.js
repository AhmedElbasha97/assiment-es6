const restaurant = {
  name: "ES-Snacks",
  drinks: {
    hot: ["coffee", "tea"],
    cold: ["pepsi", "7up", "fanta", "juice"],
  },
  meals: ["burger", "pizza"],
    
};
restaurant.order = function (obj) {
    var { name, order: { meal, drink } } = obj;
    if (drink.hasOwnProperty("c")) {
        drink = this.drinks.cold[drink.c];
    }
    else if (drink.hasOwnProperty("h")) {
        drink = this.drinks.hot[drink.h];
    }
    setTimeout(() => {
        console.log(`Thank you for ordering from ES-Snacks 
    \norder Summary \n=============\nMr/Ms:"${name} \n"Order: "${this.meals[meal - 1]}", "${drink}"
    `)
    }, 2000)
}
const[...coldDrinks]=restaurant.drinks.cold
function filtering(){
    let i=0;
    let filteredArr=[];
    for (value of coldDrinks){
        if(value.includes('u')){
            filteredArr[i] = value
            i++
        }
    }
            return filteredArr

}
let order = {
  meal: 0,
  drink: {
      h:0,
      c:0,
  },
};

const handler = {
  get: function (order, prop) {
    
      return order[prop];
    
  },
  set: function (order, prop, value) {
    if (!Object.keys(order).includes(prop)) {
      throw new Error(`You cannot add a property ${prop} `);
    }
    if (prop === "meal") {
      if (isNaN(value)) {
        throw new Error("meal should be a number");
      }else if ((value>2)||(value<0)){
            throw new Error("meal should be less than 2");
        }else{
            order[prop] = value
        }
    }
       if (prop === "drink") {
      if (typeof value !== "object") {
        throw new Error("This should be an object");
      }else{
            order[prop] = value
        }
       
    }
    }, 
  
};

const proxy1 = new Proxy(order, handler);
const meals={
    name:"shehab",
    order:proxy1,
}
