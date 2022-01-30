const $body = $('body')
const $footer = $('footer')
const $homeDiv = $('.home-div')
const $flexMain = $('.flex-main')
const $homeText = $('.home-text')
const $aboutMeDiv = $('<div>').addClass('about-me-div')
const $reasons = $('.reasons')
const $r1Div = $('<div>')
const $r1H1= $('<h1>')
const $r1p = $('<p>')
const $r2Div = $('<div>')
const $r2H1 = $('<h1>')
const $r2p = $('<p>')
const $r3Div = $('<div>')
const $r3H1 = $('<h1>')
const $r3p = $('<p>')
const $r4Div = $('<div>')
const $r4H1 = $('<h1>')
const $r4p = $('<p>')
const $projectDiv = $('<div>')
const $projectH1 = $('<h1>')
const $projectP = $('<p>').addClass('Game')
const $projectPAside = $('<aside>')
const $playButton = $('<button>')
$playButton.attr('id','playbutton')
const $lawnMowStart = $('<button>')
$lawnMowStart.attr('id', 'LawnMowStart')
const $lawnMowContinue = $('<button>')
$lawnMowContinue.attr('id', 'LawnMowContinue')
const $lawnMowContainer = $('<div>')
const $shopButton = $('<button>')
$shopButton.attr('id', 'shopButton')
const $aboutMeH1 = $('<h1>')
$aboutMeH1.text('About Brian "Jacob"')
$aboutMeDiv.append($aboutMeH1)
const $aboutMeP = $('<p>')
$aboutMeP.text('I am 21, and one of the best possible workforce additions you as a company could make. As mentioned throughout the site as well as my resume, I have expierence in all kinds of different feilds. I have never left a job for any reason other than school. Throughout my life, I have always strove to exceed expectations, continously hone my skills, and to connect with everyone around me. This is across all aspects of my life. Wether it be sports, learning something new, or work. I like to be the best at what I do, and although that\'s not always possible, it is always something that I will work towards. I don\'t believe that the route of self improvement ever ends. I am a business minded individual, always looking for ways to further increase my income. I am also not afraid of taking risks. With my now tenured expierence in the Stock Market, as well as previously competing in professional eSports tournaments, risk is something that I have entertwined myself with. No matter what would be required, I have 100% confidence that I will be able to adapt to the environment, and do the job that needs to be done. I work well both solo and with teams, although I prefer to work on small teams over anything. I have continuously been referred to as a go-to guy who\'s a jack of all trades, and I will strive to continue to be that person as I break into the professional world.')
$aboutMeDiv.append($aboutMeP)




const button1 = () => {
  $lawnMowContainer.hide()
  $r2Div.hide()
  $r3Div.hide()
  $r4Div.hide()
  $r1Div.show()
  $('.reasons').prepend($r1Div)
  $r1H1.text('Innovative/Analytical Thinker')
  $r1Div.append($r1H1)
  $r1p.text('Across many different fields I have been able to improve around the workplace processess by developing faster and more efficent ways to do things, with regards to company policy. For example, at my intership with Armada Hedge, I was able to create spreadsheets on Excel faster than others previously by introducing new Excel shortcuts that the team did not know prior. I was also able to showcase my innovative thinking in this internship as I was able to pitch my personal method of trading directional options with a small percentage of the fund, to potentially furhter the funds success')
  $r1Div.append($r1p)
}

const button2 = () => {
  $lawnMowContainer.hide()
  $r1Div.hide()
  $r3Div.hide()
  $r4Div.hide()
  $r2Div.show()
  $('.reasons').prepend($r2Div)
  $r2H1.text('Fast Learner')
  $r2Div.append($r2H1)
  $r2p.text('No matter the job field, I have always managed to pick up instructions very quickly. This has been seen from my frist job as an electrians assisstant where as the job went on I only gained increasing responsibilities, to my latest internship at Armada Hedge, where I had to quickly learn the funds startegy to be able to help them direct what we would do in the coming weeks.')
  $r2Div.append($r2p)
}

const button3 = () => {
  $lawnMowContainer.hide()
  $r1Div.hide()
  $r2Div.hide()
  $r4Div.hide()
  $r3Div.show()
  $('.reasons').prepend($r3Div)
  $r3H1.text('Team Leader')
  $r3Div.append($r3H1)
  $r3p.text('Both inside the workplace and out I have expierence leading small teams. Despite being out of the workplace, I consider my professional endevor into SMITE (A Video Game), one of the core expierences that allowed this talent to be built. As my team was ranked top 300 in each position out of over 30 Million Globally, we were competing for monetary compensation, where my decision making as the lead shotcaller, had the ability to make or break games, and in turn, the monetary outcome. This has led me to be extremely confident in my decision making abilities even under stress and when fast decisions are required.')
  $r3Div.append($r3p)
}

const button4 = () => {
  $lawnMowContainer.hide()
  $r1Div.hide()
  $r2Div.hide()
  $r3Div.hide()
  $r4Div.show()
  $('.reasons').prepend($r4Div)
  $r4H1.text('Result Driven')
  $r4Div.append($r4H1)
  $r4p.text('Across all of my jobs, there is only one thing that matters to me and that is results. Wether it was while I was a caddy and trying to lose the least amount of balls as possible, to working demo crew and trying to demo out a place with a small team as quickly as possible, as best as possible. I strive to create work of the highest possible quality, in the least amount of time, allowing me to then take on extra responsibilites with the extra time saved and no loss of quality.')
  $r4Div.append($r4p)
}
const goToProjects = () => {
 $lawnMowContainer.hide()
 $('.home-div').hide()
 $('.about-me-div').hide()
 $projectDiv.show()
 $projectH1.text('Finished Projects:')
 $projectP.text('Lawnmower Game')
 $projectDiv.append($projectH1)
 $projectDiv.append($projectP)
 $('body').append($projectDiv)
 $playButton.text('Play')
 $playButton.css('margin-left', '10')
 $projectP.append($playButton)
}

const returnToHome = () => {
$lawnMowContainer.hide()
$projectDiv.hide()
$('.about-me-div').hide()
$('.home-div').show()
}

const goToAboutMe = () => {
  $('.home-div').hide()
  $projectDiv.hide()
  $lawnMowContainer.hide()
  $body.append($aboutMeDiv)
  $aboutMeDiv.show()
}
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////LAWN MOWER GAME LAWN MOWER GAME LAWN MOWER GAME LAWN MOWER GAME//////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
const lawnMowGame = () => {
  const $square = $('<square>').addClass('square')
  const $moneyTotal = $('<p>').addClass('money-total')
  const $bagItems = $('<p>').addClass('bag-items')
  const $equippedTool = $('<p>').addClass('equipped-tool')
  const $shopDial = $('<p>').addClass('shop-dial')
  const $shopTitle = $('<p>').addClass('shop-title')
  const $square2 = $('<square>').addClass('square2')

  $projectDiv.hide()
  $lawnMowContainer.show()
  $body.append($lawnMowContainer)
  $lawnMowStart.text('Start Game')
  $lawnMowContinue.text('Continue Game')
  $shopButton.text('Shop')
  $lawnMowContainer.append($lawnMowStart,$lawnMowContinue,$shopButton)
  $lawnMowContainer.css('background', 'url(https://media.istockphoto.com/photos/aerial-view-of-a-ride-on-mower-on-a-green-field-picture-id1069488344?k=20&m=1069488344&s=612x612&w=0&h=I5f7Ce3JaMhLJFLIM7YEYJiO4iSSR36Osw4hUTf1Hoo=)')
  $lawnMowContainer.css('background-size', 'cover')
  $lawnMowContainer.css('width','100%')
  $lawnMowContainer.css('height','100%')
  $lawnMowContainer.css('background-repeat','no-repeat')
  $lawnMowContainer.append($square)
  $('.money-total').css('font-size', '16px')
  $('.money-total').css('padding','10px')
  $('.bag-items').css('padding','10px')
  $('.bag-items').css('font-size', '16px')
  $('.equipped-tool').css('padding','10px')
  $('.equipped-tool').css('font-size', '16px')
  $square.css('background','white')
  $square.css('border-style','solid')
  $square.css('border-radius', '5px')
  $square.css('border-color', 'blue')
  $square.css('width', '25%')
  $square.css('height', '40%')
  $square.css('display', 'block')
  $moneyTotal.text('Money:')
  $bagItems.text('Bag:')
  $equippedTool.text('Equipped Tool:')
  $square.append($moneyTotal)
  $square.append($bagItems)
  $square.append($equippedTool)
  $shopTitle.text('The Shop:')
  $square.append($shopTitle)
  $square.append($shopDial)
  $lawnMowContainer.append($square2)
  $square2.css('display','block')
  $square2.css('width','100%')
  $square2.css('height', '32%')
  $square2.css('border-style','solid')
  $square2.css('border-color', 'blue')
  $square2.css('border-radius', '5px')
  $square2.css('background', 'white')
  $square2.css('bottom', '0')
  $square2.css('margin-top', '200')


  let player = {
    money: 0,
    tools: ['teeth'],
    equippedTool: ['teeth']
  }
  let winMoney = 1000
  let turnCount = 0

  const equipTool = (tool) => {
    if (tool.toLowerCase() === 'teeth'){
    $square2.empty()
    $square2.append('You equipped your teeth');
    player.equippedTool.pop()
    player.equippedTool.push('Teeth')
    $('.equipped-tool').append(tool)
    }
      if (tool.toLowerCase('') === 'rusty scissors') {
        $square2.empty()
        $square2.append('You equipped Rusty Scissors');
        player.equippedTool.pop()
        player.equippedTool.push('Rusty Scissors')
        $('.equipped-tool').empty()
        $('.equipped-tool').append(tool)
      }
      if (tool.toLowerCase('')=== ('lawnmower'||'old lawnmower')) {
        $square2.empty()
        $square2.append('You equipped the old lawnmower');
        player.equippedTool.pop()
        player.equippedTool.push('Old Lawnmower')
        $('.equipped-tool').empty()
        $('.equipped-tool').append(tool)
      }
      if (tool.toLowerCase('')===('fancy lawnmower')) {
        $square2.empty()
      $square2.append('You equipped the fancy lawnmower');
      player.equippedTool.pop()
      player.equippedTool.push('Fancy Lawnmower')
      $('.equipped-tool').empty()
      $('.equipped-tool').append(tool)
    }
    if (tool.toLowerCase('')===('team of starving students')) {
      $square2.empty()
      $square2.append('You equipped the team of starving students');
      player.equippedTool.pop()
      player.equippedTool.push('Team of Starving Students')
      $('.equipped-tool').empty()
      $('.equipped-tool').append(tool)
    }
  }
  //////
  const goToShop = () => {
    const $shopContainer = $('<div>')
    const $shopItemDiv = $('<div>')
    const $shopSquare = $('<square>')
    const $buyButton = $('<button>')
    $shopContainer.attr('id', 'shop-container')
    $shopContainer.append($shopItemDiv)
    $buyButton.attr('id', 'buyButton')
    const $leaveShop = $('<button>')
    $leaveShop.attr('id', 'leaveButton')
    $buyButton.text('Buy Item')
    $leaveShop.text('Leave Shop')
    $lawnMowContainer.hide()
    $shopDial.text('You\'ve arrived at the shop!');
    $shopSquare.append($shopDial)
    $shopContainer.css('background', '#1DACD6')
    $shopContainer.css('background-size', 'cover')
    $shopContainer.css('width', '100%')
    $shopContainer.css('height', '100%')
    $body.append($shopContainer)
    $shopContainer.prepend($shopSquare)
    $shopSquare.css('background','white')
    $shopSquare.css('width','30%')
    $shopSquare.css('height','15%')
    $shopContainer.append($buyButton)
    $shopContainer.append($leaveShop)
    $buyButton.css('margin-top', '400px')
    $buyButton.css('margin-left', '250px')
    $shopSquare.css('margin-left', '53px')
    $shopSquare.css('bottom', '300px')

  if (player.money>=5) {
    $shopSquare.append('There\'s a pair of rusty scissors on display.')
  }
  if (player.money>=25)[
    $shopSquare.append('There\'s an old lawnmower on display')
  ]
  if (player.money>=250){
    $shopSquare.append('There\'s a fancy lawnmower on display')
  }
  if (player.money>=500){
    $shopSquare.append('There\'s a team of hungry students on display')
  }
  if (player.money < 5) {
    $shopSquare.empty()
    $shopSquare.append('The shopkeeper says they dont have time for broke people. Better mow more lawns');
  }
    // $leaveShop.css('margin-left', '200px')

    const leaveShop = () => {
      $shopContainer.hide()
      $lawnMowContainer.show()
    }

    if (player.equippedTool[0] === 'teeth' && player.money>=5) {
      $shopSquare.empty()
    $shopSquare.append('The Items on display are: Rusty Scissors for $5');
      // let buyPrompt = prompt('You have at least $5. Would you like to buy the pair of Rusty Scissors? Yes/No?')
      $shopSquare.append('You have at least $5. Would you like to buy the pair of Rusty Scissors? Yes/No?')
    }
    if ((player.equippedTool[0] === 'Rusty Scissors' || player.equippedTool[0]==='rusty scissors') && player.money>=25) {
      $shopSquare.empty()
      $shopSquare.append('The Item on display is a old lawnmower!');
        let buyPrompt2 = prompt('You have at least $25. Would you like to buy the old lawnmower? Yes/No:    ')
      }
      if ((player.equippedTool[0] === 'Old Lawnmower' || player.equippedTool[0] === 'old lawnmower') && player.money>=250) {
        $shopSquare.empty()
        $shopSquare.append('The Item on display is a Fancy Lawnmower!');
      //  if (player.money >= 250) {
          let buyPrompt3 = prompt('You have at least $250. Would you like to buy the fancy lawnmower? Yes/No')
        }
        if ((player.equippedTool[0] === 'fancy lawnmower'|| player.equippedTool[0]==='Fancy Lawnmower') && player.money>=500) {
          $shopSquare.empty()
        $shopSquare.append('The item on display is a team of starving students!');
          let buyPrompt4 = prompt('You have at least $500. Would you like to buy the team of starving students? Yes/No')
        }

      ////////
    //  const buyItem = () => {

  //     if (buyPrompt.toLowerCase('')==='yes'|| buyPrompt.toLowerCase('')==='y') {
  //       player.money -=5
  //       $('.money-total').empty()
  //       $('.money-total').append('money:',player.money)
  //       $shopSquare.empty()
  //       $shopSquare.append('You bought the Rusty Scissors!');
  //       player.tools.push('Rusty Scissors')
  //       $('.bag-items').append('Rusty Scissors')
  //         let equipPrompt = prompt('Would you like to equip the Rusty Scissors? Y/N')
  //         if (equipPrompt.toLowerCase('')===('y'||'yes')) {
  //           equipTool('Rusty Scissors')
  //           $shopSquare.empty()
  //           $shopSquare.append('You equipped the Rusty Scissors.');
  //           }   else {
  //                 $square2.append('You did not equip the Rusty Scissors.');
  //                 }
  //     }if (buyPrompt.toLowerCase('') === 'no'||buyPrompt.toLowerCase('')==='n') {
  //         $shopSquare.empty()
  //         $shopSquare.append('You decided not to buy anything');
  //       }
  //
  //
  //
  //   // if ((player.equippedTool[0] === 'Rusty Scissors' || player.equippedTool[0]==='rusty scissors') && player.money>=25) {
  //   //   $shopSquare.empty()
  //   //   $shopSquare.append('The Item on display is a old lawnmower!');
  //   //     let buyPrompt2 = prompt('You have at least $25. Would you like to buy the old lawnmower? Yes/No:    ')
  //       if (buyPrompt2.toLowerCase('')==='yes'|| buyPrompt2.toLowerCase('')==='y')
  //         player.money -= 25
  //           $('.money-total').empty()
  //         $('.money-total').append('money:',player.money)
  //         $shopSquare.empty()
  //         $shopSquare.append('You bought the old lawnmower');
  //         player.tools.push('Old Lawnmower')
  //         $('.bag-items').append('Old Lawnmower')
  //         let equipPrompt = prompt('Would you like to equip the Old Lawnmower? Y/N')
  //         if (equipPrompt.toLowerCase('')===('y'||'yes')) {
  //           equipTool('lawnmower')
  //           $shopSquare.empty()
  //           $shopSquare.append('You equipped the Old Lawnmower.');
  //           }   else {
  //                 $shopSquare.empty()
  //                 $shopSquare.append('You did not equip the Old Lawnmower.');
  //                 }
  //
  //       if (buyPrompt2.toLowerCase('') === 'no'||buyPrompt2.toLowerCase('')==='n') {
  //         $shopSquare.empty()
  //         $shopSquare.append('You decided not to buy anything');
  //       }
  //     // } if (player.money < 25) {
  //     //   console.log('The shopkeeper says that they don\'t have time for broke people. Better mow more lawns.');
  //     // }
  //
  //
  //   // if ((player.equippedTool[0] === 'Old Lawnmower' || player.equippedTool[0] === 'old lawnmower') && player.money>=250) {
  //   //   $shopSquare.empty()
  //   //   $shopSquare.append('The Item on display is a Fancy Lawnmower!');
  //   // //  if (player.money >= 250) {
  //   //     let buyPrompt3 = prompt('You have at least $250. Would you like to buy the fancy lawnmower? Yes/No')
  //       if (buyPrompt3.toLowerCase('')==='yes'|| buyPrompt3.toLowerCase('')==='y'){
  //           $('.money-total').empty()
  //         player.money -= 250
  //         $('.money-total').append('money',player.money)
  //         $shopSquare.empty()
  //         $shopSquare.append('You bought the fancy lawnmower');
  //         player.tools.push('Fancy Lawnmower')
  //         $('.bag-items').append('Fancy Lawnmower')
  //         let equipPrompt = prompt('Would you like to equip the Fancy Lawnmower? Y/N')
  //         if (equipPrompt.toLowerCase('')===('y'||'yes')) {
  //           equipTool('Fancy Lawnmower')
  //           $shopSquare.empty()
  //           $shopSquare.append('You equipped the Fancy Lawnmower.');
  //           }   else {
  //             $shopSquare.empty()
  //                 $shopSquare.append('You did not equip the Fancy Lawnmower.');
  //                 }
  //       }
  //     if (buyPrompt3.toLowerCase('') === 'no'||buyPrompt3.toLowerCase('')==='n') {
  //       $shopSquare.empty()
  //         $shopSquare.append('You decided not to buy anything');
  //       }
  //      if (player.money < 250) {
  //       $shopSquare.empty()
  //       $shopSquare.append('The shopkeeper says they don\'t have time for broke people. Better mow more lawns and come back when I have more money');
  //     }
  //
  //   if ((player.equippedTool[0] === 'fancy lawnmower'|| player.equippedTool[0]==='Fancy Lawnmower') && player.money>=500) {
  //     $shopSquare.empty()
  //   $shopSquare.append('The item on display is a team of starving students!');
  //     let buyPrompt4 = prompt('You have at least $500. Would you like to buy the team of starving students? Yes/No')
  //     if (buyPrompt4.toLowerCase('')==='yes'|| buyPrompt4.toLowerCase('')==='y'){
  //       player.money -= 500
  //         $('.money-total').empty()
  //       $('.money-total').append(player.money)
  //       $shopSquare.empty()
  //       $shopSquare.append('You bought the team of starving students');
  //       player.tools.push('Team of Starving Students')
  //       $('.bag-items').append('Team of Starving Students')
  //       let equipPrompt = prompt('Would you like to equip the team of starving students? Y/N')
  //       if (equipPrompt.toLowerCase('')===('y'||'yes')) {
  //         equipTool('Team of Starving Students')
  //         $shopSquare.empty()
  //         $shopSquare.append('You equipped the Team of Starving Students.');
  //         }   else {
  //           $square2.empty()
  //               $square2.append('You did not equip the Team of Starving Students.');
  //               }
  //     }
  //     if (buyPrompt4.toLowerCase('') === 'no'||buyPrompt4.toLowerCase('')==='n') {
  //       $shopSquare.empty()
  //       $shopSquare.append('You decided not to buy anything');
  //     }
  //    if (player.money < 500) {
  //      $shopSquare.empty()
  //     $shopSquare.append('The shopkeeper says they don\'t have time for broke people. Better mow more lawns and come back when I have $500.');
  //   }
  // }

  $(() => {
    $buyButton.on('click', )
    $leaveShop.on('click', leaveShop )
  })

  }


  ///////////
  const winCondition = () => {
    if ((player.money >= 1000)&&(player.equippedTool[0] === 'Team of Starving Students')) {
      $square2.empty()
    $square2.append('You Won!');
  }
  }


  ///////////
  const mowWithStudents = () => {
    const $footerH3 = $('<h3>')
    $footerH3.remove()
    $square2.empty()
    $footerH3.text('You spend all day sending the team of starving students to mow lawns. You earned $250. Haha Capitalizm');
    $square2.append($footerH3)
    player.money += 250
    $('.money-total').eq(0).empty()
    $('.money-total').eq(0).append(player.money)
  }
  //////////
  const mowWithFancyLawnmower = () => {
    const $footerH3 = $('<h3>').addClass('day-text')
    $footerH3.remove()
    $square2.empty()
    $footerH3.text('You spend all day mowing lawns with the Fancy Lawnmower. You earned $100.');
    $square2.append($footerH3)
    player.money +=100
    $('.money-total').eq(0).empty()
    $('.money-total').eq(0).append(player.money)
  }
  /////////
  const mowWithOldLawnmower = () => {
    const $footerH3 = $('<h3>').addClass('day-text')
    $footerH3.remove()
    $square2.empty()
    $footerH3.text('You spend all day mowing lawns with the old lawnmower. You earned $50.');
    $square2.append($footerH3)
    player.money +=50
    $('.money-total').eq(0).empty()
    $('.money-total').eq(0).append('money:',player.money)
  }
  ///////
  const mowWithRustyScissors = () => {
    const $footerH3 = $('<h3>').addClass('day-text')
    $square2.empty()
    $('.day-text').remove()
    $footerH3.text('You spend all day mowing lawns with the Rusty Scissors. You earned $5.');
    $square2.append($footerH3)
    player.money += 5
    $('.money-total').eq(0).empty()
    $('.money-total').eq(0).append('money:',player.money)
  }
  ////////
  const mowWithTeeth = () =>{
    const $footerH3 = $('<h3>').addClass('day-text')
    $square2.empty()
    $('.day-text').remove()
    $footerH3.text('You spend all day mowing lawns with your teeth. since it takes so long, you only make $1');
    $square2.append($footerH3)
    player.money += 1
    $('.money-total').eq(0).empty()
    $('.money-total').eq(0).append('money',player.money)
  }
  /////

  // console.log('you are starting a landscaping business, but all you have are your teeth.');
  // //////
  const startGame = () => {

  // for (let i = 0; player.money < winMoney ; i++) {
  let startPrompt = prompt('Do you want to mow a lawn with the equipped tool,[Yes] Or equip a different item, check equipped tool, or check money? Type exit to end the game.')
  if (startPrompt.toLowerCase('') === 'check equipped tool') {
    $square2.empty()
    $square2.append('you have'+ ' '+player.equippedTool+' '+'equipped.');
  }
  if (startPrompt.toLowerCase('') === 'check money'){
    $square2.empty()
    $square2.append('you have $'+player.money);
  }
  if (startPrompt.toLowerCase('') === 'exit') {
     player.money = 1000
  }
  if (startPrompt.toLowerCase('') === 'equip a different item') {
    let itemEquipPrompt = prompt('What item would you like to equip from you\'r tools?' + player.tools)
    if (itemEquipPrompt.toLowerCase('') === 'teeth') {
      $square2.empty()
      $square2.append('you equipped your teeth');
      player.equippedTool.pop()
      player.equippedTool.push('teeth')
      process.exit()
    }
    if (itemEquipPrompt.toLowerCase('') === 'rusty scissors') {
      $square2.empty()
      $square2.append('you equipped your rusty scissors');
      player.equippedTool.pop()
      player.equippedTool.push('Rusty Scissors')
    }
    if (itemEquipPrompt.toLowerCase('') === 'old lawnmower') {
      $square2.empty()
      $square2.append('you equipped your Old Lawnmower');
      player.equippedTool.pop()
      player.equippedTool.push('Old Lawnmower')
    }
    if (itemEquipPrompt.toLowerCase('') === 'fancy lawnmower') {
      $square2.empty()
      $square2.append('you equipped your Fancy Lawnmower');
      player.equippedTool.pop()
      player.equippedTool.push('fancy lawnmower')
    }
    if (itemEquipPrompt.toLowerCase('') === 'team of starving students') {
      $square2.empty()
      $square2.append('you equipped your team of starving students');
      player.equippedTool.pop()
      player.equippedTool.push('Team of Starving Students')
    }
  }
  if (startPrompt.toLowerCase('') ==='yes') {
    if (player.equippedTool[0] === ('teeth'||'Teeth')) {
      mowWithTeeth()
      }

    if (player.equippedTool[0] === 'Rusty Scissors') {
    mowWithRustyScissors()
    }
    if (player.equippedTool[0] === 'Old Lawnmower') {
      mowWithOldLawnmower()
    }
    if (player.equippedTool[0] === 'Fancy Lawnmower') {
      mowWithFancyLawnmower()
    }
    if (player.equippedTool[0] === 'Team of Starving Students') {
      mowWithStudents()
    }
  }
    if (startPrompt.toLowerCase('') === 'no'|| startPrompt.toLowerCase('')==='n') {
      $square2.empty()
    $square2.append('this is a mowing game. come back when you\'re ready to mow.');
  }
  }
  const continueGame = () => {
    let startPrompt = prompt('Do you want to mow a lawn with the equipped tool,[Yes] Or equip a different item, check equipped tool, or check money? Type exit to end the game.')
    if (startPrompt.toLowerCase('') === 'check equipped tool') {
      $square2.empty()
      $square2.append('you have'+ ' '+player.equippedTool+' '+'equipped.');
    }
    if (startPrompt.toLowerCase('') === 'check money'){
      $square2.empty()
      $square2.append('you have $'+player.money);
    }
    if (startPrompt.toLowerCase('') === 'exit') {
       player.money = 1000
    }
    if (startPrompt.toLowerCase('') === 'equip a different item') {
      let itemEquipPrompt = prompt('What item would you like to equip from you\'r tools?' + player.tools)
      if (itemEquipPrompt.toLowerCase('') === 'teeth') {
        $square2.empty()
        $square2.append('you equipped your teeth');
        player.equippedTool.pop()
        player.equippedTool.push('teeth')
      }
      if (itemEquipPrompt.toLowerCase('') === 'rusty scissors') {
        $square2.empty()
        $square2.append('you equipped your rusty scissors');
        player.equippedTool.pop()
        player.equippedTool.push('Rusty Scissors')
      }
      if (itemEquipPrompt.toLowerCase('') === 'old lawnmower') {
        $square2.empty()
        $square2.append('you equipped your Old Lawnmower');
        player.equippedTool.pop()
        player.equippedTool.push('Old Lawnmower')
      }
      if (itemEquipPrompt.toLowerCase('') === 'fancy lawnmower') {
        $square2.empty()
        $square2.append('you equipped your Fancy Lawnmower');
        player.equippedTool.pop()
        player.equippedTool.push('fancy lawnmower')
      }
      if (itemEquipPrompt.toLowerCase('') === 'team of starving students') {
        $square2.empty()
        $square2.append('you equipped your team of starving students');
        player.equippedTool.pop()
        player.equippedTool.push('Team of Starving Students')
      }
    }
    if (startPrompt.toLowerCase('') ==='yes') {
      if (player.equippedTool[0] === ('teeth'||'Teeth')) {
        mowWithTeeth()
        }

      if (player.equippedTool[0] === 'Rusty Scissors') {
      mowWithRustyScissors()
      }
      if (player.equippedTool[0] === 'Old Lawnmower') {
        mowWithOldLawnmower()
      }
      if (player.equippedTool[0] === 'Fancy Lawnmower') {
        mowWithFancyLawnmower()
      }
      if (player.equippedTool[0] === 'Team of Starving Students') {
        mowWithStudents()
      }
    }
    if (startPrompt.toLowerCase('') === 'no'|| startPrompt.toLowerCase('')==='n') {
      $square2.empty()
      $square2.append('this is a mowing game. come back when you\'re ready to mow.');
    }

  //   if (player.money % 5 === 0) {
  //   let shopPrompt = prompt('After a hard days work, go to the shop?')
  //   if (shopPrompt.toLowerCase('')===('yes'||'y')) {
  //     goToShop()
  //   }
  //   else {
  //     $square2.empty()
  //     $square2.append('You decided not to go to the shop');
  //   }
  // }
    // $square2.empty()
    // $square2.append('You now have' + ' ' +player.money+' ' +'Dollars');
    winCondition()
  //}
  if ((player.money <= winMoney)&&(player.equippedTool)==='team of starving students') {
    $square2.empty()
    $square2.append('You Won!');
  }
  }
  $(() => {
    $lawnMowStart.on('click', startGame)
    $lawnMowContinue.on('click', continueGame)
    $shopButton.on('click', goToShop)
  })
}
$(() => {
  $('#1').on('click', button1);
  $('#2').on('click', button2);
  $('#3').on('click', button3);
  $('#4').on('click', button4);
  $('#home').on('click', returnToHome)
  $('#projects').on('click', goToProjects)
  $('#about-me').on('click', goToAboutMe)
  $playButton.on('click',lawnMowGame)


})
