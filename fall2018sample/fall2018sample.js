/* Don't use <script> tags in a linked js file! */

let file = ("verse3-4.txt")  // sets default verse element
$("#choose-content").val(file); // changes menu option to default
$("#content").load(file);   // retrieves only default element

$("#choose-content").change(function() {
    file = $(this).val();
    $("#content").load(file); 
});


$("ul").on("click", ".init", function() {
    $(this).closest("ul").children('li:not(.init)').toggle();
});

var allOptions = $("ul").children('li:not(.init)');
$("ul").on("click", "li:not(.init)", function() {
    allOptions.removeClass('selected');
    $(this).addClass('selected');
    $("ul").children('.init').html($(this).html());
    allOptions.toggle();
});