

var language = document.querySelectorAll("input[name=language]") ;
// console.log(language) ;

var languageArr = Array.from(language) ;

languageArr.forEach(function(item){
    item.addEventListener("change",fun) ;
}) ;

function fun (e)
{
    if(e.target.checked)
    {
        console.log(e.target.value) ;
    }
}



