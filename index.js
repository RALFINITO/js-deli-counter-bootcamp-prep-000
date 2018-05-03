var katzDeli = []

function takeANumber(katzDeliLine, personName){
 katzDeliLine.push(personName)
 return (`Welcome, ${personName}. You are number ${katzDeliLine.length} in line.`) 
 
}

function nowServing(katzDeliLine){
  var strServing
  if(katzDeliLine.length === 0){
    strServing = "There is nobody waiting to be served!"
  } else{
    strServing = `Currently serving ${katzDeliLine[0]}.`
    katzDeliLine.shift()
  }
  return strServing
}

function 