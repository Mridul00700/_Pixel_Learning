


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

// const counterFunction = (initialCounter) =>
//   ((intial) => {
//     let counter = intial; // This variable is private
//     const counterSetup = () => {
//       console.log("Counter is setup with ", counter);
//     };
//     counterSetup();
//     return {
//       decrease(amount) {
//         if (counter >= amount) {
//           counter -= amount;
//           return counter;
//         }
//         return "Counter can't go to zero";
//       },
//       increase(amount) {
//           counter += amount;
//           return counter;
//       },
//     };
//   })(initialCounter);

// const firstCounter = counterFunction(100); // "Counter is setup with 100"
// console.log(firstCounter.counter); // undefined
// console.log(firstCounter.decrease(20)); // 80
// console.log(firstCounter.decrease(30)); // 50
// console.log(firstCounter.counterSetup); // undefined; this method is private
// const secondCounter = counterFunction(20); // "Counter is setup with 20"
// console.log(secondCounter.decrease(30)); // "Counter can't go to zero"
// console.log(secondCounter.decrease(20)); // 0
// console.log(secondCounter.increase(20)); // 20


{/* <StrictMode> lets you find common bugs in your components early during development.


Strict Mode enables the following development-only behaviors:

Your components will re-render an extra time to find bugs caused by impure rendering.
Your components will re-run Effects an extra time to find bugs caused by missing Effect cleanup.
Your components will be checked for usage of deprecated APIs. */}


//React strictmode

// deprecation checks and warnings for its child components
// Since the StrictMode is a developer tool, it runs only in development mode. It does not affect the production build in any way whatsoever.
// Strict Mode enables extra development-only checks for the entire component tree inside the <StrictMode> component.
// Your component function body (only top-level logic, so this doesn’t include code inside event handlers)
// Functions that you pass to useState, set functions, useMemo, or useReducer
// Some class component methods like constructor, render, shouldComponentUpdate




// How is script loaded ? 

<script src="./script.js"></script>

// As soon as the script tag is encountered the HTML doc parsing and building dom stops and script is downloaded and executed then the rest of the HTML is read. 

// If the script is large then it might take some time to load and execute the script meanwhile the user can't see the page. 

// one solution is to move the script at the end of body tag 
//But this is not an ideal solution.

// Here comes the Async and deger script attibute

// Async and defer scripts

// 
// The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
// Scripts with defer never block the page.
// Scripts with defer always execute when the DOM is ready (but before DOMContentLoaded event).

// aysnc
// The browser doesn’t block on async scripts.
// Other scripts don’t wait for async scripts, and async scripts don’t wait for them.
// DOMContentLoaded and async scripts don’t wait for each other:

//Async  

// The async attribute is non blocking, it tells the browser to download the script in background and run it when its done downloading
// Async scripts are executed as soon as the script is loaded, so it doesn't guarantee the order of execution (a script you included at the end may execute before the first script file)


//Defer
// The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built.
// Defer scripts guarantee the order of execution in which they appear in the page.

// Async second one is loaded and ran first then first 
// Defer first one is always ran first then second 
{/* <script async src="https://javascript.info/article/script-async-defer/long.js"></script>
<script async src="https://javascript.info/article/script-async-defer/small.js"></script> */}