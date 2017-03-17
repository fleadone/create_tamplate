$(function() {
    $('#btn').click(function(e) {
        e.preventDefault();
        $('#drop').css('display','block');
    })
})
$(function() {
    $('#back').click(function(e) {
        e.preventDefault();
        $('#drop').css('display', 'none');
    })
})