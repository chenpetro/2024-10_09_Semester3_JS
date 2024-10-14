// const message = 'Welcome to Bahamas!';
// Breaks the string by a delimiter, in this case it is a space
// console.log(message.split(' ')[1].toUpperCase());
// console.log(message.split(''));
// const splitMessage = message.split(' ')
// console.log(splitMessage[1].toUpperCase());
// console.log(splitMessage);
// splitMessage [1] = splitMessage [1].toUpperCase()
// console.log(splitMessage.join('-'));

// const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// console.log(clients.indexOf('Poly')); // 2
// console.log(clients.indexOf('Monkong')); // -1

// console.log(clients.includes('Poly')); // true
// console.log(clients.includes('Monkong')); // false
// clients.push('Petro') // addes last
// console.log(clients); 
// clients.pop() // deletes last
// clients.unshift('1983') // addes first
// console.log(clients); 
// clients.shift('1983') // deletes first
// console.log(clients); 

// const massNum  = [54, 76, 5454, 78678, 5454]
// massNum.push(7777)
// console.log(massNum);

// const mass  = ['BMW', 'Mercedes', 'Tesla']
// mass.pop()
// console.log(mass);

// const Numbers = [3, 6, 65, 34, 7]
// console.log(Numbers.indexOf(3));

// const mass  = ['BMW', 'Mercedes', 'Tesla', 'Opel', 'Toyota']
// // mass.join(',')
// // console.log(mass);

// const uniqueClients = mass.slice(1,3)
// console.log(uniqueClients);
// console.log(mass);
// const uniqueClientsone = mass.splice(1,3)
// console.log(mass);

// const copyClients = ['Petro', 'Marko', 'Nadiia']
// const fullClients = mass.concat(copyClients)
// console.log(fullClients);

// const title = 'Top 10 benefits of React framework'
// let titleNew = title.toLowerCase()
// titleNew = title.split(' ')
// titleNew = titleNew.join('-')
// console.log(titleNew);


// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const array = array1.concat(array2)
// console.log(array);

// let sum = 0
// for (let index = 0; index < array.length; index++) {
//     sum = sum + array[index]
// }
// console.log(sum);


// 3.	const message = 'Welcome to Ukraine!'. Розбити цю строку по буквам в масив, вивести цей масив в консоль. Також вивести в консоль індекс літери l (Л англійська маленька) за допомогою вбудованого метода. Після цього елементи масива поєднати в строку і вивести строку в консоль.

// const message = 'Welcome to Ukraine!'
// let messageOne = message.split('')
// console.log(messageOne);

// console.log(messageOne.indexOf('l'));

// messageOne = messageOne.join();
// console.log(messageOne);


// let players = ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Marko'];
// for (let index = 0; index < players.length; index++) {
// players[index] = players[index]+'-'+ Number(index+1)   
// }
// console.log(players);


// const date = document.querySelector('.date')
// document.addEventListener('keydown',function(event){
//     date.textContent+=event.key
// })


// const date = document.querySelector('.date')
// document.addEventListener('keydown',function(event){
//     if(event.code =='KeyG'){
//         document.querySelector('body').style.background = 'green'
//     } else if (event.code =='KeyR'){
//         document.querySelector('body').style.background = 'red'
//     } 
//     date.textContent+=event.key
// })


setInterval(function(){
    document.querySelector('body').style.background = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
}, 1000

)