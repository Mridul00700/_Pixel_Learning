


// for(let i=0; i<3; i++){
//   setTimeout(()=>{
//     console.log(i++);
//   },1000);
// }

// for(var j=0; j<3; j++){
//   setTimeout(()=>{
//     console.log(j++)
//   },1000);
// }

const counterFunction = (initialCounter) =>
  ((intial) => {
    let counter = intial; // This variable is private
    const counterSetup = () => {
      console.log("Counter is setup with ", counter);
    };
    counterSetup();
    return {
      decrease(amount) {
        if (counter >= amount) {
          counter -= amount;
          return counter;
        }
        return "Counter can't go to zero";
      },
      increase(amount) {
          counter += amount;
          return counter;
      },
    };
  })(initialCounter);

const firstCounter = counterFunction(100); // "Counter is setup with 100"
console.log(firstCounter.counter); // undefined
console.log(firstCounter.decrease(20)); // 80
console.log(firstCounter.decrease(30)); // 50
console.log(firstCounter.counterSetup); // undefined; this method is private
const secondCounter = counterFunction(20); // "Counter is setup with 20"
console.log(secondCounter.decrease(30)); // "Counter can't go to zero"
console.log(secondCounter.decrease(20)); // 0
console.log(secondCounter.increase(20)); // 20