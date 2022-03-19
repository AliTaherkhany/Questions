// First Method : Traversing the DOM

// const btns = document.querySelectorAll('.btn');
// const questions = document.querySelectorAll('.question');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         questions.forEach(function (item) {
//             if (item !== question) {
//                 item.classList.remove('show-text');
//             }
//         })
//         question.classList.toggle('show-text');
//     })
// })


// Second Method : Selecting element inside the element

const questions = document.querySelectorAll('.question');

questions.forEach(function (question) {
    const btn = question.querySelector('.btn');
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        questions.forEach(function (item) {
            if (item !== question) {
                item.classList.remove('show-text');
            }
        })
        question.classList.toggle('show-text');
    })
})