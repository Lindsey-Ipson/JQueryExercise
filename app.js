// 1. When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”

$(document).ready(function() {console.log("Let's get ready to party with jQuery!")});
/* or $(function () {
    console.log("Let's get ready to party with jQuery!")}) */

// 2. Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).

$('article img').addClass('image-center');

// 3. Remove the last paragraph in the article.

$('article p').last().remove(); // or  $("article p:last-child").remove();

// 4. Set the font size of the title to be a random pixel size from 0 to 100.

$('#title').css('font-size', Math.floor(Math.random() * 100))

// 5. Add an item to the list; it can say whatever you want.

$('ol').append("<li>Hi! I'm a new list item!</li>")
/* or $("ol").append($("<li>", {text: "I can add to lists with jQuery!"})); */

// 6. Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.

$('aside').html('<p>I do apologize about the previous list! Hopefully I am a much better element. Paragraphs are better than lists anyway!</p>');
/* or $("aside").empty().append($("<p>", {text: I do apologize about the previous list! Hopefully I am a much better element. Paragraphs are better than lists anyway!})); */

// 7. When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.

$('.form-control').on('keyup', function () {
    const red = $('.form-control').eq(0).val();
    const blue = $('.form-control').eq(1).val();
    const green = $('.form-control').eq(2).val();
    $('body').css('background-color',
        `rgb(${red}, ${green}, ${blue})`)
  });

// 8. Add an event listener so that when you click on the image, it is removed from the DOM.

$('img').on('click', function(e) {
    $(e.target).remove()
    }
);