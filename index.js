// ジャンケンの値の配列
const jankenHands = {
    rock: 'rock',
    paper: 'paper',
    scissors: 'scissors'
};

// 勝敗結果
const jankenResult = {
    win: '勝ち',
    rose: '負け',
    draw: '引き分け'
}

function opponentHands() {
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
    console.log(opponentHands);
    return opponentHands;
}

function executeJanken(){
    // プレイヤーの選択したじゃんけんの手を取得する
    let playerHands = document.getElementById('player-hands');

    // プレイヤーのじゃんけんの手が未選択の場合（playerHands.valueが空文字だった場合）
    if (playerHands.value === ""){
        // アラートで「出す手を選んでください」と表示する
        alert("出す手を選んでください")
    } else { // 何かしらの手が選択されていた場合
        let opponentHand = opponentHands();

        // コンソールにプレイヤーと相手が選択した手を表示する
        console.log(`自分の手「${playerHands.value}」 vs 相手の手「${opponentHand}」`);

        // 勝ちの時の判定条件
        if (playerHands.value === jankenHands.rock && opponentHand === jankenHands.scissors || playerHands.value === jankenHands.scissors && opponentHand === jankenHands.paper || playerHands.value === jankenHands.paper && opponentHand === jankenHands.rock) {
            console.log(`あなたの${jankenResult.win}です。`)
            // 負けの時の条件
        } else if (playerHands.value === jankenHands.rock && opponentHand === jankenHands.paper || playerHands.value === jankenHands.scissors && opponentHand === jankenHands.rock || playerHands.value === jankenHands.paper && opponentHand === jankenHands.scissors) {
            console.log(`あなたの${jankenResult.rose}です。`)
            // あいこ
        } else {
            console.log(`${jankenResult.draw}です。`)
        }
    }
}





