const card_front = document.getElementsByClassName("front");
const card_back = document.getElementsByClassName("back");
card_front[0].addEventListener('mouseover', function() {
    card_front[0].style.display = 'none';
    card_back[0].style.display = 'block';
});

// card_back[0].addEventListener('mouseover', function() {
//     card_front[0].style.display = 'block';
//     card_back[0].style.display = 'none';
// });