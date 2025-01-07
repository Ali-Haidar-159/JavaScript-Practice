
console.clear() ;

var colorSet = document.querySelector("#colorSetId") ;
colorSet.addEventListener("change",fun) ;

function fun(e)
{
    var hexaDecimalColorCode = e.target.value ;

    setColorOnDiv(hexaDecimalColorCode);

}

var testDiv = document.querySelector("#testDiv") ;

function setColorOnDiv(hexaDecimalColorCode)
{
    testDiv.style.backgroundColor = hexaDecimalColorCode ;
}

