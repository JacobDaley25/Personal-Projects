


let userShip = {
  name: 'USS Schwarzenegger',
  hull: 20,
  firepower: 5,
  accuracy: .7,
  aliensDestroyed: 0,
}

let aliensEarth = []


let alienShip = [
  {name: 'Alien Ship1',hull: Math.floor(Math.random()*3+3),firepower: Math.floor(Math.random()*2+2),accuracy: Math.floor(Math.random()*.2+.6)},
  {name: 'Alien Ship2',hull: Math.floor(Math.random()*3+3),firepower: Math.floor(Math.random()*2+2),accuracy: Math.floor(Math.random()*.2+.6)},
  {name: 'Alien Ship3',hull: Math.floor(Math.random()*3+3),firepower: Math.floor(Math.random()*2+2),accuracy: Math.floor(Math.random()*.2+.6)},
  {name: 'Alien Ship4',hull: Math.floor(Math.random()*3+3),firepower: Math.floor(Math.random()*2+2),accuracy: Math.floor(Math.random()*.2+.6)},
  {name: 'Alien Ship5',hull: Math.floor(Math.random()*3+3),firepower: Math.floor(Math.random()*2+2),accuracy: Math.floor(Math.random()*.2+.6)},
  {name: 'Alien Ship6',hull: Math.floor(Math.random()*3+3),firepower: Math.floor(Math.random()*2+2),accuracy: Math.floor(Math.random()*.2+.6)},
  {name: 'Alien Ship7',hull: Math.floor(Math.random()*3+3),firepower: Math.floor(Math.random()*2+2),accuracy: Math.floor(Math.random()*.2+.6)},
]

let randomAliens = Math.floor(Math.random()*4+1)


let amountOfAliens = () => {
  for (let i =0; i <= randomAliens ; i++) {
    aliensEarth.push(alienShip[i]);
  }alert(aliensEarth);

}
//amountOfAliens()
//console.log(aliensEarth[0].name.toLowerCase(''));
/////////////////////////
let regenShields = () => {
  alert('You attempt to regenerate your sheilds');
  let regenAmount = Math.floor(Math.random()*4+1)
  regenAmount += userShip.hull
  alert('You gained'+' '+regenAmount+' '+'health');
}



/////////////////////
let lazerTarget = () => {
  alert('Aliens are headed towards Earth! use your lazers to destroy them!');
  amountOfAliens()
  let targetPrompt = prompt('Which aliens would you like to target? All or one?')
  if (targetPrompt.toLowerCase('') === 'all') {

    for (let i = 0; i < aliensEarth.length;i++) {
      aliensEarth[i].hull -= userShip.firepower
      alert('You did'+' '+userShip.firepower+' '+'damage to'+' '+aliensEarth[i].name);
    }
  }

  if (targetPrompt.toLowerCase('')==='one') {
    alert(aliensEarth);
    let selectPrompt = prompt('which ship do you want to shoot?')
    if (aliensEarth[0] !== undefined && selectPrompt.toLowerCase('') === aliensEarth[0].name.toLowerCase('')) {
      alert('you destroyed',aliensEarth[0].name);
    }
    if (aliensEarth[1] !== undefined && selectPrompt.toLowerCase('') === aliensEarth[1].name.toLowerCase('')) {
      alert('you destroyed',aliensEarth[1].name);
    }
    if (aliensEarth[2] !== undefined && selectPrompt.toLowerCase('') === aliensEarth[2].name.toLowerCase('')) {
      alert('you destroyed',aliensEarth[2].name);
    }
    if (aliensEarth[3] !== undefined && selectPrompt.toLowerCase('') === aliensEarth[3].name.toLowerCase('')) {
      alert('you destroyed',aliensEarth[3].name);
    }
    if (aliensEarth[4] !== undefined && selectPrompt.toLowerCase('') === aliensEarth[4].name.toLowerCase('')) {
      alert('you destroyed',aliensEarth[4].name);
    }
    if (aliensEarth[5] !== undefined && selectPrompt.toLowerCase('') === aliensEarth[5].name.toLowerCase('')) {
      alert('you destroyed',aliensEarth[5].name);
    }

  }

}


let winCondition = () => {
  if (userShip.aliensDestroyed > 5) {
    alert('You Won!');
    return true
  } else {
    alert('You need to kill more aliens');
    return false
  }
}

let userAttack = () => {
  alert('you attack the alien ship');
  if (userShip.aliensDestroyed <= 5) {
    for (let i = 0; ((alienShip[i].hull > 0)&&(userShip.hull>0)); i++) {
      alienShip[i].hull -= userShip.firepower
      alert('you did 5 damage');
      alert('the alien ship has'+' '+alienShip[i].hull+' '+'health left.')
      // if (alienShip[i].hull > 0) {
      //   console.log('the alien ship fires back');
      //   userShip.hull -= alienShip.firepower
      //   console.log('You took'+' '+alienShip[i].firepower+' '+'damage');
      //   console.log('You have'+' '+userShip.hull+' '+'health left.');
      //}
      if (alienShip[i].hull > 0) {
        alert('the alien ship fires back');
        userShip.hull -= alienShip.firepower
        alert('You took'+' '+alienShip[i].firepower+' '+'damage');
        alert('You have'+' '+userShip.hull+' '+'health left.');
      }
      if (alienShip[i].hull <= 0) {
        alert('you destroyed the enemy ship!');
        userShip.aliensDestroyed += 1

        //winCondition()
        alert('You\'ve now destroyed' + ' '+ userShip.aliensDestroyed+' '+'alien/s.');
        if (userShip.aliensDestroyed === 6){
          winCondition()
          process.exit()
        }

        alert('You have some time before the next ship approaches?');
        let decision1 = prompt('Retreat? Or continue to next fight?(continue)')

        if (decision1.toLowerCase('') === ('retreat')) {
          alert('You decide to retreat for now. End of Game.');
          userShip.hull = 0
        }
        if (decision1.toLowerCase('')===('continue'||'continue to next fight')) {

          alert('you continue to the next fight.');

        }
      }
    }
  }

}

// const startBattle = () => {
//   let battlePrompt = prompt('An alien ship approaches! You must fight. Enter attack or enter exit to exit.');
// }

//userAttack()
for (let i = 0; userShip.hull > 0; i++) {
  alert('You\'re flying through space and notice a fleet of alien ships coming towards you...');
  let battlePrompt = prompt('An alien ship approaches! You must fight. Enter attack or enter exit to exit.');
  if (battlePrompt.toLowerCase('')==='exit') {
    userShip.hull = 0
  }
  if (battlePrompt.toLowerCase('')==='attack') {
    userAttack()
  }
}
//   if (alienShip.hull === 0) {
//     console.log('You have some time before the next ship approaches?');
//     let decision1 = prompt('Retreat? Or continue to next fight?(continue)')
//       if (decision1.toLowerCase('')==='retreat') {
//       console.log('You decide to retreat for now. End of Game.');
//       userShip.hull = 0
//       }
//       if (decision1.toLowerCase('')===('continue'||'continue to next fight')) {
//         console.log('you continue to the next fight.');
//       }
//   }
// }
