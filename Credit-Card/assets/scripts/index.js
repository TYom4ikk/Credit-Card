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
arrayIfEverythingIsFull = [false, false, false, false,false];

for(let i = 1; i < 13;i++){
    select_mounth.innerHTML += `<option id="mounth" value="${i}">${i}</option>`;
}

select_year.innerHTML += `<option id="year" value="99">99</option>`;

for(let i = 0; i<100;i++){
    select_year.innerHTML += `<option id="year" value="${i}">${i}</option>`;
}

const inputElement = document.getElementsByClassName('number_input');

for(let i =0;i<4;i++){
    inputElement[i].addEventListener('keyup', function(event) {

        console.log('Клавиша отпущена: ' + event.key);
        if(inputElement[i].value.length === 4){
            arrayIfEverythingIsFull[i] = true;
        }
        Check();
    });
}

const inputName = document.getElementById('Name_Petya');
    inputName.addEventListener('keyup', function(event) {
        console.log('Клавиша отпущена: ' + event.key);

        let what = false;

        let namePlace = inputName.value.split(' ');
        console.log(namePlace);
        if(namePlace.length == 2 && namePlace[1] != ''){
            arrayIfEverythingIsFull[4] = true;
        }
        else{
            arrayIfEverythingIsFull[4] = false;
        }
        Check();
    });

    const card_front = document.getElementsByClassName("front");
    const card_back = document.getElementsByClassName("back");
    

function Check(){
    console.log('Проверка!');
    let isFull = true;
    for(let item of arrayIfEverythingIsFull){
        if(item === false){
            isFull = false;
        }
        console.log('isFull - ' + isFull);
        console.log(arrayIfEverythingIsFull);
    }

    if(isFull){
        card_front[0].style.display = 'none';
        card_back[0].style.display = 'block';
    }
}

const Civivi = document.getElementById('Civivi');

Civivi.addEventListener('keyup', function(event) {
        console.log('Клавиша отпущена: ' + event.key);
        if(Civivi.value.length === 3){
            alert("Бабки спизжены!");
        }
});


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