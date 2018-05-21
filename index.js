// const app = "I don't do much."


function destructivelyAppendKitten(name, a){
  return name.push(a);
}
destructivelyAppendKitten();

function destructivelyPrependKitten(name, a){
  return name.unshift(a);
}
destructivelyPrependKitten();

function destructivelyRemoveLastKitten(name, a){
  return name.pop(a);
}
destructivelyRemoveLastKitten();

function destructivelyRemoveFirstKitten(name, a){
  return name.shift(a);
}
destructivelyRemoveFirstKitten();

function removeFirstKitten(a){
  return a.slice(1);
}
removeFirstKitten();