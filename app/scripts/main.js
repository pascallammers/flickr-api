console.log('\'Allo \'Allo!');

function FlickrPhotoSet(){

    'use strict';

    var URL = 'http://api.flickr.com/services/feeds/photos_public.gne';
    var ID = '25053835@N03';
    var jsonFormat = '&format=json&jsoncallback=?';
    var ajaxURL = URL + '?id=' + ID + jsonFormat;
    $.getJSON(ajaxURL,function(data) {
        $('.flickr_container h1').text(data.title);
        $.each(data.items,function(i,photo) {
            var photoHTML = '<span class="image">';
            photoHTML += '<a href=' + photo.link + '>';
            photoHTML += '<img src=' + photo.media.m.replace('_xl','_l') + '>';
            photoHTML += '</a>';
            $('#photos').append(photoHTML);
        }); // end each
    }); // end get JSON

}


$('#flickrbtn').click(function(e){
    'use strict';

    console.log('jetzt gehts los');

    e.preventDefault();
    new FlickrPhotoSet();
});