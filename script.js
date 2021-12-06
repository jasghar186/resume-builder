
$("document").ready(function () {

    // declare variables
    var counter = 0;
    var mainHeading = $(".main_title");
    var inputContainer = $(".first_input");
    var nextBtn = $(".next_Wrapper .next");
    getNextVal()


    function getNextVal() {
        $.get("form.json", function (data) {
            $(mainHeading).html(data[counter].title)
            $(inputContainer).html(data[counter].fields)
            $(".sum").html((data[counter].experience)); counter++;
        })
    }

    
        $(".add_add_skill").click(function(){
            if(y == "") {
                return false ;
            }
            else{
                $(".last_list").append(`<li style="list-style:circle;">${y}</li>`) ;
                $(".name_field").val("") ;
                y= ""
            }
         
        
        })

   


    // input functions
    $(inputContainer).on("input", ".name_field", function () {
        let x = $(this).attr("data-target") ;
        if (x == ".last_list") {
            $(".add_add_skill").show() ;
         y = $(this).val() ;
         $(".done").show() ;
         $(".next").hide()
            return false;
        }
        else {
            $(".add_add_skill").hide();
            $(x).html($(this).val())
        }

    })




    // button function
    $(nextBtn).click(getNextVal)


    // done function
    $(".done").click(function(){
      $(this).parent().parent().parent().hide()  
    })




})