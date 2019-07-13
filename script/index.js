$(".dropdown-trigger").dropdown({
  inDuration: 300,
  outDuration: 225,
  constrainWidth: true, // Does not change width of dropdown to that of the activator
  hover: true, // Activate on hover
  gutter: 0, // Spacing from edge
  belowOrigin: true,
  coverTrigger: false, // Displays dropdown below the button
  alignment: "left", // Displays dropdown with edge aligned to the left of button
  stopPropagation: false // Stops event propagation
});

$(document).ready(function() {
  $(".fixed-action-btn").floatingActionButton();
  $(".modal").modal();
});
