
var photos = ["./java.png","./html.png","./css.png","./sql.png"] ;
var count = 0 ;
var imageTag = document.querySelector("#image")  ;

function previous()
{
    count-- ;
    imageTag.src = photos[count] ;

    if(count < 0)
    {
        count = photos.length-1 ;
        imageTag.src = photos[count] ;
    }
}

function next()
{
    count++ ;
    imageTag.src = photos[count] ;

    if(count >= photos.length)
    {
        count = 0 ;
        imageTag.src = photos[count] ;
    }
}

