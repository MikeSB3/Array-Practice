$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var items = [1,2,3,4,5,6].map(function(item) {
      return $("input#item" + item).val();
    });

    items.sort().forEach(function(item, index) {
      $("#list" + (index + 1)).text(item.toUpperCase());
    });





        console.log(effectedList);

    $("#effectedList").show();
    $("#blanks").hide();
  });

});
