$(document).ready(function(){
    $(".toggle").click(function(){
        if($(".item").hasClass("active")){
            $(".item").removeClass("active");
        }
        else{
            $(".item").addClass("active")
        }
    });
});

//TODO add traffic dashboard
//TODO add email form submission
