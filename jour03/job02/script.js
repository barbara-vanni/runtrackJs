

$(document).ready(function(){
    $('#shuffleButton').click(function(){
        let images = $('#images img');
        images.sort(function() { return 0.5 - Math.random();
        });
        $('#images').html(images);
        draggableImg();
    });

    function draggableImg(){
        $('.draggable').draggable({revert: 'invalid'});
    }


    draggableImg();


    // $('#images').sortable();

}); 

