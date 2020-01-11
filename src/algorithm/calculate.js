export function calculate(rank,kill,prevScore){
    rankScore = [0,250,240,235,230,225,220,215,210,205,200,195,190,185,180,175];
    totalScore = rankScore[rank]+(kill*4)+prevScore;
}