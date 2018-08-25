
$('document').ready(function(){
    $( "#mainHeader" ).addClass("himg2");
    sliderHeader()
});

function sliderHeader()
{
    var x = document.getElementsByClassName("masthead");
    //console.log($( "#mainHeader" ).hasClass( "himg1" ));
    if($("#mainHeader").hasClass( "himg1" )){
        $("#mainHeader").removeClass("himg1");
        $( "#mainHeader" ).addClass("himg2");
    }

    if($( "#mainHeader" ).hasClass( "himg2" )){
        $( "#mainHeader" ).removeClass("himg2" );
        $( "#mainHeader" ).addClass("himg1" );
    }

    setTimeout(sliderHeader, 2000);
}