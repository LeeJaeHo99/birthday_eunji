// const qTitle = [

// ]

// 정답 버튼 누를 시 다음 문제 fadeIn
for(let i = 1; i < 5; i++){
    $(`.q-${i} .answer-btn`).click(() => {
        $(`.q-${i}`).fadeOut();
        setTimeout(() => {
            $(`.q-${i + 1}`).fadeIn();
        }, 700);
    })
}