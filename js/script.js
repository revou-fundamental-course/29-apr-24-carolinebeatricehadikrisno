//Ini Javascript


//Validate function
function validation() {
    let username = document.getElementById('form-username');
    console.log(username.value); 
    if (username.value == '' || username.value == null) {
        username.style.border = '1px solid blue';
        alert('Input anda kosong, mohon periksa kembali')
    }
}

function validation() {
    let username = document.getElementById('form-email');
    console.log(username.value); 
    if (username.value == '' || username.value == null) {
        alert('Input anda kosong, mohon periksa kembali')
    }
}

function validation() {
    let username = document.getElementById('form-password');
    console.log(username.value); 
    if (username.value == '' || username.value == null) {

        alert('Input anda kosong, mohon periksa kembali')
    }
}
document.getElementById('submit-button').addEventListener('click', () => validation())









//Section Slide
let indexSlide = 1; // [0, 1, 2, 3, 4, 5]
showSlide(1);

//Trigger slide
function nextSlide(n) {
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
    
}


//Slide Logic

function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('Banyaknya image: ' + listImage.length);

    //Reset Slide index
    if (index > listImage.length) indexSlide = 1;

    //Hide all images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    //show only one image
    listImage[indexSlide - 1].style.display = 'block';
    console.log('showSlide: ' + index);
}

setInterval(() => nextSlide(1), 4000);

document.getElementById('send-button').addEventListener('click',() => nextSlide(1))

