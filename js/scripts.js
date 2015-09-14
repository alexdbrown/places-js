$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputPlaceName = $("input#new-place-name").val();
    var inputHighlight = $("input#new-place-highlight").val();
    var inputTime = $("input#new-place-time").val();
    var inputDuration = $("input#new-place-duration").val();

    var newPlace = { placeName: inputPlaceName, highlight: inputHighlight, time: inputTime, duration: inputDuration };

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $("input#new-place-name").val("");
    $("input#new-place-location").val("");
    $("input#new-place-time").val("");
    $("input#new-place-duration").val("");
  });
});
