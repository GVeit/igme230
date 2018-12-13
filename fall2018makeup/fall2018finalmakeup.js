
/* set default */
let file = ("story0.txt")  // sets default verse element
$("#stories").val(file); // changes menu option to default
$("#story").load(file);   // retrieves only default element

/* story0.txt */
$(document).ready(function(){
    $(".submenu, #story0.txt").click(function(){
      $("#story").load("story0.txt");
    });
});

  /* story1.txt */
$(document).ready(function(){
    $(".submenu, #story1.txt").click(function(){
      $("#story").load("story1.txt");
    });
});

  /* story2.txt */
$(document).ready(function(){
    $(".submenu, #story2.txt").click(function(){
      $("#story").load("story2.txt");
    });
});




/* toggle */
$(document).ready(function(){
    $(".menu").click(function(){
        $(".submenu").toggle(500);
    });
});


var button = document.getElementById("increment"),
  count = 0;
button.onclick = function() {
  count += 1;
  button.innerHTML = "Click Me! " + count;
};