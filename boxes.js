$( document ).ready(docReady);

function docReady() {
  //EXERCISE 1
  alert("ready for DOM manipulation");
  
  //EXERCISE 2
  //1. Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  var secretBox = $('#secretBox');
  secretBox.css('background-color', 'white');
  secretBox.append('<h1>secret box!</h1>');

  //2. Find all child divs of the first row. Set the class for each div to boxType3.
  $('#row1 > .box').removeClass('boxType1 boxType2').addClass('boxType3');

  //3. Make the last box in the last row disappear. 
  //(Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
  $('#row3 > .box:last').removeClass('box boxType3');

  //4. Change all red boxes to white.
  $('.boxType1').css('background', 'white');
}