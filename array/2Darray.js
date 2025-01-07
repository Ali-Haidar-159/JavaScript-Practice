
function findHighestScore(players)
{
    var i , j , highScoreIndex , highScore ;

    highScore = players[0][1] ;

    for(i=1 ; i<players.length ; i++)
    {
        if(players[i][1] > highScore)
        {
            highScore = players[i][1] ; 
            highScoreIndex = i ;
        }           
    }

    return players[highScoreIndex][0] ;

}


var playersInfo = [
    ["Kamal" , 100] ,
    ["Ali" , 120] ,
    ["Matin" , 95] ,
    ["Samad" , 110] ,
    ["Jabbar" , 703] ,
    ["Anik" , 85]
]

var playerName = findHighestScore(playersInfo) ;

console.log("The highest score holder name is : "+playerName) ;

