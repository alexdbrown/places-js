$(document).ready(function() {
  $("#add-highlight").click(function() {
    $("#new-highlights").append('<div class="new-highlight">' +
                                    '<div class="form-group">' +
                                      '<label for="new-place-highlight">NAME ANOTHER! DO IT!</label>' +
                                       '<input type="text" class="form-control new-place-highlight">' +
                                    '</div>' +
                                '</div>');
  });


  $("form#new-place").submit(function(event) {
    event.preventDefault();

    var inputPlaceName = $("input#new-place-name").val();
    var inputTime = $("input#new-place-time").val();
    var inputDuration = $("input#new-place-duration").val();

    var newPlace = { placeName: inputPlaceName, placeTime: inputTime, placeDuration: inputDuration,  placeHighlights: [] };

    $(".new-highlight").each(function() {
      var inputHighlight = $(this).find("input.new-place-highlight").val();

      var newHighlight = { highlight: inputHighlight };
      newPlace.placeHighlights.push(newHighlight);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.placeName + "</span></li>");

    $(".place").last().click(function() {
      $("#show-place").show();

      $("#show-place h2").text(newPlace.placeName);
      $(".place-time").text(newPlace.placeTime);
      $(".place-duration").text(newPlace.placeDuration);

      $("ul#highlights").text("");
      newPlace.placeHighlights.forEach(function(highlight) {
        $("ul#highlights").append("<li>" + highlight.highlight + "</li>");
      });
    });

    $("input#new-place-name").val("");
    $("input#new-place-time").val("");
    $("input#new-place-duration").val("");
    $("input.new-place-highlight").val("");
  });
});
