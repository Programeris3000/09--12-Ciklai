// console.log('- ' + 1)
// console.log('- ' + 2)
// console.log('- ' + 3)
// console.log('- ' + 4)
// console.log('- ' + 5)
// console.log('- ' + 6)
// console.log('- ' + 7)
// console.log('- ' + 8)
// console.log('- ' + 9)
// console.log('- ' + 10)
// console.log('- ' + 11)
// console.log('- ' + 12)
// console.log('- ' + 13)
// console.log('- ' + 14)
// console.log('- ' + 15)
// console.log('- ' + 16)
// console.log('- ' + 17)
// console.log('- ' + 18)
// console.log('- ' + 19)
// console.log('- ' + 20)


// count(1)
// count(2)
// count(3)
// count(4)
// count(5)
// count(6)
// count(7)
// count(8)
// count(9)
// count(10)
// count(11)
// count(12)
// count(13)
// count(14)
// count(15)
// count(16)
// count(17)
// count(18)
// count(19)
// count(20)



// FOR CIKLAS (LOOP)
// 1. Iniciavimo žodelis - for
// 2. Paprasti skliaustai - ()
// 2.1. Sukuriamas kintamasis (dažniausiai jo pavadinimas yra i)
// 2.2. Sąlyga
// 2.3. Kintamojo vertės keitimas
// 3. Riestiniai skliaustai - {}

// Sukurti funkcijas, kurios paleidžia ciklą su skaičiais nuo 1 iki 100. Šie ciklai:
// 1. Padaugina skaičių iš 2.
// 2. Padaugina skaičių iš 5.
// 3. Prideda prie skaičiaus 5.
// 4. Atima iš skaičiaus 2.
// 5. Pakelia skaičių kvadratu.
// 6. Pakelia skaičių kūbu.



// //8. Kiekvienos užduoties išvesties tekstą suformuluoti, jog būtų parašytas užduoties sprendimas, pvz.: 
// 1 * 2 = 2
// 2 * 2 = 4
// 3 * 2 = 6
// ir t.t.

// 9. Papildyti funkcijas, jog jos priimtu šiuos argumentus:
// 9.1. Nusakytų nuo kokio skaičiaus prasidės ciklas.
// 9.2. Nusakytų iki kokio skaičiaus veiks ciklas.
// 9.3. Nusakytų kelinto ciklo metu turi išvesti atsakymą į konsolę.

function timesTwo(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i <= tillWhere; i = i + wichCycle){
   let result = i * number
   let output = `${i} * ${number} = ${result}`
   console.log(output)
  } 
}
// timesTwo(2, 1, 100, 1)

function reverseTimesTwo(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i >= tillWhere; i = i - wichCycle){
   let result = i * number
   let output = `${i} * ${number} = ${result}`
   console.log(output)
  } 
}
// reverseTimesTwo(2, 100, 1, 1)

function timesFive(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i <= tillWhere; i = i + wichCycle){
    let result = i * number
    let output = `${i} * ${number} = ${result}`
    console.log(output)
  }
}

// timesFive(5, 1, 100, 1)
function reverseTimesFive(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i >= tillWhere; i = i - wichCycle){
  let result = i * number
  let output = `${i} * ${number} = ${result}`
  console.log(output)
  }
}
// reverseTimesFive(5, 100, 1, 1)


function plusFive(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i <= tillWhere; i = i + wichCycle){
    let result = i + number
    let output = `${i} + ${number} = ${result}`
    console.log(output)
  }
}
// plusFive(5, 1, 100, 1)

function reversePlusFive(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i >= tillWhere; i = i - wichCycle){
    let result = i + number
    let output = `${i} + ${number} = ${result}`
    console.log(output)
}
}
// reversePlusFive(5, 100, 1, 1)

function minusTwo(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i <= tillWhere; i = i + wichCycle){
    let result = i - number
    let output = `${i} - ${number} = ${result}`
    console.log(output)
  }
}
// minusTwo(2, 1, 100, 1)

function reverseMinusTwo(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i >= tillWhere; i = i - wichCycle){
    let result = i - number
    let output = `${i} - ${number} = ${result}`
    console.log(output)
  }
}
// reverseMinusTwo(2, 100, 1, 1)

function powerTwo(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i <= tillWhere; i = i + wichCycle){
    let result = Math.pow(i, number)
    let output = `${i} ** ${number} = ${result}`
    console.log(output)
  }
}
// powerTwo(2, 1, 100, 1)

function reversePowerTwo(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i >= tillWhere; i = i - wichCycle){
    let result = Math.pow(i, number)
    let output = `${i} ** ${number} = ${result}`
    console.log(output)
  }
}
// reversePowerTwo(2, 100, 1, 1)



function powerThree(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i <= tillWhere; i = i + wichCycle){
    let result = Math.pow(i, number)
    let output = `${i} *** ${number} = ${result}`
    console.log(output)
  }
}
// powerThree(3, 1, 100, 1)

function reversePowerThree(number, startPoint, tillWhere, wichCycle){
  for(let i = startPoint; i >= tillWhere; i = i - wichCycle){
    let result = Math.pow(i, number)
    let output = `${i} *** ${number} = ${result}`
    console.log(output)
}
}
// reversePowerThree(3, 100, 1, 1)


// function loopPattern(){
//   for(let i = startPoint; i <= tillWhere; i = i + wichCycle){
//     let result = i - number
//     let output = `${i} - ${number} = ${result}`
//     console.log(output)
//   }
// }














