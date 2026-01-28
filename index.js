// ジャンケンの値の配列
const jankenHands = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
};

function executeJanken(){
    // プレイヤーの選択したじゃんけんの手を取得する
    let playerHands = document.getElementById('player-hands');

    // プレイヤーのじゃんけんの手が未選択の場合（playerHands.valueが空文字だった場合）
    if (playerHands.value === ""){
        // アラートで「出す手を選んでください」と表示する
        alert("出す手を選んでください")
    } else { // 何かしらの手が選択されていた場合
        // 相手の手を格納するための変数を作成
        let opponentHands = null;
        // 乱数を作成
        let randomNum = Math.floor(Math.random()*3);
        console.log(randomNum);

        // グーを出す
        if(randomNum === 0) {
            opponentHands = jankenHands.rock;
        // パーを出す
        } if(randomNum === 1) {
            opponentHands = jankenHands.paper;
        // チョキを出す
        } if(randomNum === 2) {
            opponentHands = jankenHands.scissors;
        }
        console.log(opponentHands)

        // コンソールにプレイヤーと相手が選択した手を表示する
        console.log(`自分の手「${playerHands.value}」 vs 相手の手「${opponentHands}」`);

    }
}



