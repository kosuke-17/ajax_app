const quiz = [
  {
   question: 'ゲーム市場、もっとも売れたげ向きは次のうちどれ?',
   answers: [
     'スーパーファミコン',
     'プレイステーション2',
     'ニンテンドースイッチ',
     'ニンテンドーDS'
   ],
   correct: 'ニンテンドーDS'
  }, {
   question: '糸井重里が企画に関わった、任天堂の看板ゲームといえば?',
   answers: [
     'MOTHER2',
     'スーパーマリオブラザーズ3',
     'スーパードンキーコング',
     '星のカービイ'
   ],
   correct: 'MOTHER2'
  }, {
   question: 'ファイナルファンタジーⅣの主人公の名前は?',
   answers: [
     'フリオニール',
     'クラウド',
     'ディーダ',
     'セシル'
   ],
   correct: 'セシル'
  }
 ];
 
 const quizLength = quiz.length;
 let quizIn = 0;
 let score = 0;
 
 const $button = document.getElementsByTagName('button');
 let buttonLength = $button.length;


 //クイズの問題文、選択肢を定義
 onload= function(){
   document.getElementById('js-question').textContent = quiz[quizIn].question;
   let buttonIn = 0;
   
   while(buttonIn < buttonLength){
   $button[buttonIn].textContent = quiz[quizIn].answers[buttonIn];
   //ここに命令
   buttonIn++;
   
   }
 }
 
 const clickHandler = (e) => {
   if(quiz[quizIndex].correct === e.target.textContent){
     window.alert('正解！');
     score++;
   } else {
     window.alert('不正解！');
   }
   quizIndex++;
   if(quizIndex < quizLength){
     //問題数がまだあればこちらを実行
     setupQuiz();
   } else {
     //問題数がもうなければこちらを実行
     window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
   }
 };
 
 //ボタンをクリックしたら正誤判定
 let handlerIndex = 0;
 while (handlerIndex < buttonLength) {
   $button[handlerIndex].addEventListener('click', (e) => {
     clickHandler(e);
   });
   handlerIndex++;
 }