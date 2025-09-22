/* Parters Page*/
$(function() {
    $(".el-input__inner").click(function(event){
        $(this).closest(".el-select").find(".el-select-dropdown").show();
        $(this).closest(".el-select").find(".el-scrollbar").show();
        $(this).closest(".el-select").find(".el-select-dropdown__empty").hide();
    });
    $(".el-select-dropdown__item").click(function(event){
        var select = $(this).closest(".el-select")
        select.find(".el-select-dropdown").hide();
        select.find(".el-scrollbar").hide();
        select.find(".el-select-dropdown__empty").hide();
        select.find(".el-input__inner").val($(this).find("span").text())
    });
    $(".el-checkbox").click(function () {
      var $checkbox = $(this).find(".el-checkbox__original");
      var $inputBox = $(this).find(".el-checkbox__input");
    
      var newState = !$checkbox.prop("checked");
      $checkbox.prop("checked", newState);
    
      // set/remove class properly
      $inputBox.toggleClass("is-checked", newState);
    });
});
/* Parters Page*/

/* Supports Plans Page*/
$(function(){
                $(".option .option-title").click(function(event){
                    $(".option").removeClass("active");
                    var option = $(this).closest(".option");
                    option.addClass("active");
                    //option.find(".option-text").toggle();
                });
            })
            
            $(window).on("scroll", function () {
              if ($(this).scrollTop() > 50) {
                   $(".header").removeClass("header-transparent");
              } else {
                $(".header").addClass("header-transparent");
               }
            });
/* Supports Plans Page*/