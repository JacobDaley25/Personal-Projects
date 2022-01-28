const $body = $('body')
const $homeDiv = $('.home-div')
const $flexMain = $('.flex-main')
const $homeText = $('.home-text')
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


const button1 = () => {
  $r2Div.hide()
  $r3Div.hide()
  $r4Div.hide()
  $r1Div.show()
  $('.reasons').prepend($r1Div)
  $r1H1.text('Reason 1')
  $r1Div.append($r1H1)
  $r1p.text('aslkdaslkdjas')
  $r1Div.append($r1p)
}

const button2 = () => {
  $r1Div.hide()
  $r3Div.hide()
  $r4Div.hide()
  $r2Div.show()
  $('.reasons').prepend($r2Div)
  $r2H1.text('Reason 2')
  $r2Div.append($r2H1)
  $r2p.text('hashahsa')
  $r2Div.append($r2p)
}

const button3 = () => {
  $r1Div.hide()
  $r2Div.hide()
  $r4Div.hide()
  $r3Div.show()
  $('.reasons').prepend($r3Div)
  $r3H1.text('Reason 3')
  $r3Div.append($r3H1)
  $r3p.text('jasjdasjd')
  $r3Div.append($r3p)
}

const button4 = () => {
  $r1Div.hide()
  $r2Div.hide()
  $r3Div.hide()
  $r4Div.show()
  $('.reasons').prepend($r4Div)
  $r4H1.text('Reason 4')
  $r4Div.append($r4H1)
  $r4p.text('asdadasd')
  $r4Div.append($r4p)
}
const goToProjects = () => {
 $('.home-div').hide()
 $('.about-me-div').hide()
 $('.projects-div').show()
}

const returnToHome = () => {
$('.projects-div').hide()
$('.about-me-div').hide()
$('.home-div').show()
}

const goToAboutMe = () => {
  $('.home-div').hide()
  $('.projects-div').hide()
  $('.about-me-div').show()
}
$(() => {
  $('#1').on('click', button1);
  $('#2').on('click', button2);
  $('#3').on('click', button3);
  $('#4').on('click', button4);
  $('#home').on('click', returnToHome)
  $('#projects').on('click', goToProjects)
  $('#about-me').on('click', goToAboutMe)
})
