$( document ).ready(docReady);

function docReady() {
  //EXERCISE 1
  alert("ready for DOM manipulation");
  
  // //EXERCISE 2
  // //1. Find the secretBox on the page. Set the background color to white. Add an h1 tag that says, "secret box!"
  // var secretBox = $('#secretBox');
  // secretBox.css('background-color', 'white');
  // secretBox.append('<h1>secret box!</h1>');

  // //2. Find all child divs of the first row. Set the class for each div to boxType3.
  // $('#row1 > .box').removeClass('boxType1 boxType2').addClass('boxType3');

  // //3. Make the last box in the last row disappear. 
  // //(Hint, look into the dispaly style. Also, you should only get back one element from your selector.).
  // $('#row3 > .box:last').removeClass('box boxType3');

  // //4. Change all red boxes to white.
  // $('.boxType1').css('background', 'white');

  // //5. Get the first two divs in the second row. Take away all styling from the divs.
  // $('#row2 > .box:lt(2)').removeClass('box boxType2 boxType3');

  // //6. Get all divs inside the container that are not row divs and are not the secret box div. 
  // //Set the width of the divs to 2 pixels.
  // $('div > div > div:not(#secretBox)'.css('width', '2px'));
  // var nonSecretBoxes = $('div > div > div:not(#secretBox)');
  // nonSecretBoxes.css('width', '2px');

  //EXERCISE 3
  //1. Add an on click handler to the container div. Console log the x and y position of the click.
  $('#container').on('click', function(e) {
    //pageX and pageY refer to the coordinate (in pixels) of the X and Y coordinate of "e" (our event target)
    console.log(e.pageX, e.pageY);
  });

  //2. Add links inside all red box divs that take the user to galvanize. Then add an on click handler that 
  //alerts the user that you can never leave the page. Make sure the user won't leave the page after the alert!
  var gLink = $('.boxType1').append('<a href="http://www.galvanize.com">Go to Galvanize</a>');
  gLink.on('click', function(e) {
    e.preventDefault();
    alert("Ha Ha Ha. You can NEVER leave the page");
  });

  //3. For all box divs, add a click handler that adds an image of a cute puppy to the box. 
  //If the image is clicked again, remove the cute puppy.
  var boxes = $('.box');
  boxes.on('click', function() {
    //See style.css for 'puppy' class
    $(this).toggleClass("puppy");
  });
}