// create the document ready function, this holds all other functions
// in HTML need to add script tags referencing jquery and this js file
$(function() {
  // listen for an event to trigger the function
  // use jquery to call the ID of the button that we are listening to
  $("#stopButton").click(() => {
    // this is how you can test your targetting, open the app and use dev tools to see the console
    console.log("clicked the stop button");
clearLights()
    // need to change the background color of #stopLight to ready
    // you COULD add or toggle a class, but you would need to write that in class
    // you can also change a CSS property with jquery
    // list the property, and then the new value
    $("#stopLight").css("backgroundColor", "red");
    // also accepts background_color
  });

// slowLight
$('#slowButton').click(() => {
  clearLights()
  $('#slowLight').css('backgroundColor', 'yellow')
})
// goLight
$('#goButton').click(() => {
  clearLights()
  $('#goLight').css('backgroundColor', 'green')
})

// need to clear all lights with each click, which means setting them back to black
// otherwise the css colors will all be on at the same time
function clearLights() {
  $('.bulb').css('backgroundColor', 'black')
}
// the function is declared, now you need to CALL it and when it needs to be called
// place this BEFORE the color assignments in each function

});
