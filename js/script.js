const qTitle = [
    '2. 얼굴에 점은 어느쪽에 있을까?',
    '3. 우리의 마지막 여행은?',
    '4. 우리의 마지막 여행은?',

]
const qScore = [
    '(3점)',
    '(3점)',
    '(4점)',
]

const  aRed = [
    '왼쪽',
    '가평',
    '평',
]
const  aBlue = [
    '오른쪽',
    '충주',
    '주',
]

//< 문제 html 출력 >
// for(let i = 2; i < 11; i++){
//     $('main .inner').append(`<div class="question q-${i} dn">
//                         <div class="question-title">
//                             <div class="question-text">${qTitle[i - 2]}</div>
//                             <div class="question-score">${qScore[i - 2]}</div>
//                         </div>
//                         <div class="question-img"><img src="./images/question-${i}.jpg" alt=""></div>
//                         <div class="question-btn">
//                             <button class="answer-btn btn--red">${aRed[i - 2]}</button>
//                             <button class="answer-btn btn--blue">${aBlue[i - 2]}</button>
//                         </div>
//                     </div>`);
// }

// for(let i = 2; i < 11; i++){
//         if($(`${i} == 2`)){
//             $(`.q-${i} .btn--red`).addClass('correct');
//         }else{
//             $(`.q-${i} .btn--blue`).addClass('correct');
//         }
// }
// $('.answer-btn.correct').click(() => {
//     let correct = 1;
//     correct++;

// })


//< 정답 버튼 누를 시 다음 문제 fadeIn >
const qLength = $('.question').length;
for(let i = 1; i < qLength; i++){
    $(`.q-${i} .answer-btn`).click(() => {
        $(`.q-${i}`).fadeOut();
        setTimeout(() => {
            $(`.q-${i + 1}`).fadeIn();
        }, 700);
    })
}

let score = 0;
$('.correct').click(function(){
    score  += 1;
    console.log(score);
})

$('.last-btn').click(() => {
    $('.scoreing').css('display', 'block');
    setTimeout(function(){
        $('.scoreing').css('display', 'none');
        $('.score-see').css('display', 'flex');
        if(score >= 0 && score <= 3){
            $('.score-see').append(`<div>언니 <span>${score}점</span>이야...</div><img src="./images/0.jpg" alt="">`)
        }else if(score >= 4 && score <= 6){
            $('.score-see').append(`<div>언니 <span>${score}점</span>이야<br>그래도 좀 공부했네!</div><img src="../images/4.jpg" alt="">`)
        }else if(score >= 7 && score <= 9){
            $('.score-see').append(`<div>언니 <span>${score}점</span>이야!!<br>완전 멋져 짱이다!!</div><img src="../images/7.jpg" alt="">`)
        }else{
            $('.score-see').append(`<div>언니 <span>${score}점</span>이야!!<br>언니가 세상에서 제일 좋아!!<br>사랑해 히히</div><img src="/..images/10.jpg" alt="">`)
        }
    }, 3000)
})


//로고
const load = bodymovin.loadAnimation({
    container : document.querySelector('.scoreing'),
    renderer : 'svg',
    loop : true,
    autoplay : true,
    path : '../images/load.json',
});