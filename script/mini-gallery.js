$(document).ready(function(){


    $('.grid_illustr').magnificPopup({
    
        delegate:'a',
        type:'image',
        gallery: {
    // options for gallery
        enabled: true
        },
        image: {
        titleSrc: function(item) {
        return  item.el.attr('title');
        }
    }
    
    });
    
    $('.grid_concept').magnificPopup({
    
        delegate:'a',
        type:'image',
        gallery: {
        // options for gallery
        enabled: true
        },
        image: {
        titleSrc: function(item) {
        return  item.el.attr('title');
        }
    }
    
    });
    
    });