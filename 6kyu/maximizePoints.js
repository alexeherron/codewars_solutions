//MAXIMIZE POINTS
// Two teams are playing a game of tennis. The team sizes are the same and each player from the first team plays against the corresponding player from the second team.
// Each player has a certain power level. If a player has a higher power level than her opponent, she is guaranteed to win and her team would get 1 point for that win while the opponents get a 0.
// You are the coach of the first team and you know the power levels of all the players before the game starts. You want to rearrange the players in your team to earn the highest possible total score.
// Input/Output

//     [input] integer array team1

// The power levels of the players in the first team. Teams have less than 100 players and each power level is less than 100.

//     [input] integer array team2

// Array of the same length as team1, the power levels of the players of the second team.

//     [output] an integer

// The maximum number of points the first team can get.
// Example
// For team1 = [3,2,4] and team2 = [1,2,3], the output should be 3.
// If you don't rearrange the players in the first team, it will get 2 points, since 3 > 1, 2 = 2 and 4 > 3.
// However, if you rearrange the order of the players to [2, 3, 4], the first team will get 3 points.

//MY SOLUTION
function tennis(team1, team2){
    let sortOne = team1.sort((a,b) => b-a);
    let sortTwo = team2.sort((a,b) => b-a);
    let score = 0;
    for(i = 0; i < team1.length; i++){
        let ind = sortTwo.findIndex(el => sortOne[i] > el);
        if(ind >= 0){
            score += 1;
            sortTwo = sortTwo.slice(ind + 1);
        }else{
            return score;
        }
    }
    return score;
}

//OTHER CLEVER SOLUTION
function maximizePoints(team1, team2) {
    var t1=team1.slice().sort((a,b)=>a-b);
    var t2=team2.slice().sort((a,b)=>a-b);
    for (var c=0,j=0,i=0;i<t1.length;i++,j++) if (t1[i]>t2[j]) c++; else j--; 
    return c
}