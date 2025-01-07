"use strict"
console.clear() ;

function magic1 (callBackForMAgic2)
{
    console.log("MAGIC - 1") ;
    callBackForMAgic2(magic3) ;
}

function magic2 (callBackForMAgic3)
{
    setTimeout(fun,4000) ;

    function fun()
    {
        console.log("MAGIC-2")
        callBackForMAgic3(magic4) ;
    }
    
}


function magic3 (callBackForMAgic4)
{
    console.log("MAGIC - 3") ;
    callBackForMAgic4() ;
}


function magic4 ()
{
    console.log("MAGIC - 4") ;
}

magic1(magic2) ;



