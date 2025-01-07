console.clear() ;

var mainDiv = document.querySelector("#mainDiv") ;
// console.log(mainDiv) ;

var p1 = mainDiv.children[0];
p1.innerHTML = "<strong>Full URL : </strong>" + location.href;

var p2 = mainDiv.children[1];
p2.innerHTML = "<strong>Protocol : </strong>" + location.protocol;

var p3 = mainDiv.children[2];
p3.innerHTML = "<strong>HostName : </strong>" + location.hostname;

var p4 = mainDiv.children[3];
p4.innerHTML = "<strong>Port : </strong>" + location.port;

var p5 = mainDiv.children[4];
p5.innerHTML = "<strong>Path : </strong>" + location.pathname;


var button = document.querySelector("button") ;
button.addEventListener("click",()=>{
    location.assign("https://alihaidarewu.blogspot.com") ;
    // location.href = "https://alihaidarewu.blogspot.com" ;
}) ;


