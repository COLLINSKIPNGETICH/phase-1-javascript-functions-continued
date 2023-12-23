// 1. saturdayFun
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}

// 2. mondayWork
function mondayWork(activity = 'go to the office') {
  return `This Monday, I will ${activity}.`;
}

// 3. wrapAdjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Example of using wrapAdjective
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 
//=> "You are !!!a dedicated programmer!!!"

