 class Vehicle  {
        constructor (wheels  = 4, speed  = 100) {
            this.wheels = wheels
            this.speed = speed
            Vehicle.counter += 1
        }
          static comparingSpeed(v1, v2) {
            if (v1.speed > v2.speed){
                console.log('the frist Vehicle is faster than the secound Vehicle');
            } else  if (v1.speed < v2.speed){
                console.log('the second Vehicle is faster than the frist Vehicle');
            } else {
                console.log('the 2 vehicle have the same speed');
            }
        }
    
    }
Vehicle.counter = 0;
    class Bike  extends Vehicle  {
        constructor (wheels=2, speed=10, basket= false) {
            super(wheels, speed)
            this.basket = basket
        }
    }

