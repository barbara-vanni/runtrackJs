

$(document).ready(function(){
    $('button').click(function(){
        $('#quote').text("Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.");
        $('#hideButton').show();
    });

    $('#hideButton').click(function(){
        $('#quote').text("");
        $(this).hide();
    });
}); 