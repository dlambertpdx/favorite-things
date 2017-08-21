$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var color     = $("input#color").val();
    var number    = parseInt($("input#number").val());
    var animal    = $("input#animal").val();
    var result    = [color, number, animal];
    var newArray  = [];
    result.push(color[0], number[1], animal[2]);

    $(".color").text(color);
    $(".number").text(number);
    $(".animal").text(animal);

    $("#output").show();
  });
});
