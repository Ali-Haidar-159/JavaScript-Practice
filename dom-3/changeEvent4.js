

console.clear() ;

var dept = document.querySelector("select[name=programmingLanguage]") ;
dept.addEventListener("change",fun) ;

function fun (e)
{
    console.log(e.target.value) ;
}

