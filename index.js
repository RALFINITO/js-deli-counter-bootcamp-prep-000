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

function currentLine(katzDeliLine){
    var strLine
    if(katzDeliLine.length === 0){
    strLine = "The line is currently empty."
  } else{
    strLine
    for(i = 0; i < katzDeliLine.length; i++)
    
  }
}