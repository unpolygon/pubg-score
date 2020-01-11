export function calculate(rank,kill,prevScore){

    let rankScore = [0,250,240,235,230,225,220,215,210,205,200,195,190,185,180,175];
    let totalScore = rankScore[parseInt(rank)]+(parseInt(kill)*4)+parseInt(prevScore);
    return totalScore;
}