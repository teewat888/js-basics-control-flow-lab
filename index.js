function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!';
  } else if ((feet > 2000) && (feet <= 2500)) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  const result =
    city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let result;
  switch (tip) {
    case 'generous':
      result = 'Thank you so much.';
      break;
    case 'not as generous':
      result = 'Thank you.';
      break;
    default:
      result = 'Bye.';
  }
  return result;
}

//console.log(scuberGreetingForFeet(2501));
//console.log(ternaryCheckCity('NYC'));
console.log(switchOnCharmFromTip('not as generous'));