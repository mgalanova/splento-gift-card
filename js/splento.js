$( document ).ready(function() {
    console.log('document ready');
    var imgHeight=$(".background-img").height();
    $(".splento-margin").css({'margin-top':imgHeight/100*31+"px"});
});

console.log("script is here");
console.log('Docuent state: ' + document.readyState);
