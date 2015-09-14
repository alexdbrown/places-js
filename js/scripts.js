$(document).ready(function() {
  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputPlaceName = $("input#new-place-name").val();
    var inputHighlight = $("input#new-place-highlight").val();
    var inputTime = $("input#new-place-time").val();
    var inputDuration = $("input#new-place-duration").val();

    var newPlace = { placeName: inputPlaceName, placeHighlight: inputHighlight, placeTime: inputTime, placeDuration: inputDuration };

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-contact h2").text(newPlace.placeName);
      $(".place-name").text(newPlace.placeName);
      $(".place-highlight").text(newPlace.placeHighlight);
      $(".place-time").text(newPlace.placeTime);
      $(".place-duration").text(newPlace.placeDuration);

    });

    $("input#new-place-name").val("");
    $("input#new-place-highlight").val("");
    $("input#new-place-time").val("");
    $("input#new-place-duration").val("");
  });
});
