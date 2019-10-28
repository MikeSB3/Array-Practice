$(document).ready(function() {

  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var gList = [1,2,3,4,5,6].map(function(index) {
      return $("input#item" + index).val();
    });

    gList.sort().forEach(function(list,index) {
      $("#list" + (index + 1)).text(list.toUpperCase());
    });





        console.log(effectedList);

    $("#effectedList").show();
    $("#blanks").hide();
  });

});
