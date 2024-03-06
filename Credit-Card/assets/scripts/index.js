let numbers = document.getElementsByClassName("number_input");
document.addEventListener("keydown", function(){
    for(let i = 0; i<numbers.length;i++){
        if(numbers[i].value.length != 4){
            console.log("Заполните поле!");
        }
    }
});




const select_mounth = document.getElementById('mounths');
const select_year = document.getElementById('year');

for(let i = 1; i < 13;i++){
    select_mounth.innerHTML += `<option id="mounth" value="${i}">${i}</option>`;
}

select_year.innerHTML += `<option id="year" value="99">99</option>`;

for(let i = 0; i<41;i++){
    select_year.innerHTML += `<option id="year" value="${i}">${i}</option>`;
}
// const card_front = document.getElementsByClassName("front");
// const card_back = document.getElementsByClassName("back");

// const mounth = document.getElementById('mounth');
// const year = document.getElementById('year');

// var mounth_arr = ["02", "03", "04", "05","06","07","08","09","10","11","12"];
// //mounth.setAttribute(mounth_arr, mounth_arr);

// //month.set

// //var year_arr = []
// //var inputs = front.querySelectorAll('input');
// //back.style.display = 'none';



// function ShowBack() {
//     card_front[0].style.display = 'none';
//     card_back[0].style.display = 'block';
// }

// function ShowFront() {
//     card_front[0].style.display = 'block';
//     card_back[0].style.display = 'none';
// }

// // document.addEventListener('keydown', ()=>{
// //     if(inputs !== null){
// //         ShowBack();
// //     }
// // });