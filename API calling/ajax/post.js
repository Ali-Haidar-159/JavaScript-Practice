function apiCalling(url,method,data)
{
    return $.ajax({
    url: url,
    data : data ,
    method: method,
    // dataType: 'json',
    success: function(data) {
        console.table(data);
    },
    error: function(error) {
        console.log('Error:', error);
    }
    });
}

apiCalling("https://jsonplaceholder.typicode.com/posts" , "POST" , {name:"ali",age:22});
