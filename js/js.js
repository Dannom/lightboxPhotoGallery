// variables for image arrays
var images = [], imagesThumb = [];

// Get modal element
var modal=document.querySelector('.practice--modal');

// Get modal inner element
var modalImage = document.querySelector('.modal--image');


var img = undefined;
var imgClicked = undefined;
var realSizeImage = undefined;
//Making an array of images from the img directory
for (var i=0;i<=12;i++){
    images.push('img/'+ i + '.jpeg');
    imagesThumb.push('img-thumb/' + i + '.jpg');

    
}

var container = document.querySelector('.container');



/* A Function to create the Bootstrap classes to the elements*/
    
function bsFunc(image){
         image.classList.add('col-6');
         image.classList.add('col-md-4');
         image.classList.add('col-lg-3');
    }
// Open the modal function
    function openModal(e){
        modal.style.display = "block";
        imgClicked = (e.target.dataset['index'])%13;
        realSizeImg = document.createElement('img');
        realSizeImg.classList.add('realSizeImage');
        modalImage.appendChild(realSizeImg);
        realSizeImg.src = images[imgClicked];
        realSizeImg.addEventListener('click', function (e){
            e.stopPropagation();
        })
        createArrows();
    }

// function to build two functioning arrows along side the realSizeImg

    function createArrows(){
        arrowRight = document.createElement('div');
        arrowRight.classList.add('arrow-right')
        arrowLeft = document.createElement('div');
        arrowLeft.classList.add('arrow-left');
        modal.appendChild(arrowRight);
        modal.appendChild(arrowLeft);
        arrowLeft.addEventListener('click',moveLeft);
        arrowRight.addEventListener('click',moveRight);

    }

//scroll image function

function moveLeft(e) {
    
    imgClicked= (imgClicked-1+images.length)%images.length;
    realSizeImg.src = images[imgClicked];
    e.stopPropagation();
    
}

function moveRight(e) {
    
    imgClicked= (imgClicked+1+images.length)%images.length;
    realSizeImg.src = images[imgClicked];
    e.stopPropagation();
    
}


// close modal event listener

function closeModal (e){ 
        modal.removeChild(arrowRight);
        modal.removeChild(arrowLeft);
        modalImage.removeChild(realSizeImg);
        modal.style.display="none";
}

modal.addEventListener('click', closeModal,false);

function loadImg(i){
    img = document.createElement('img');
    container.appendChild(img);
    img.src=imagesThumb[(i%13)];
    img.classList.add("grid-image");
    bsFunc(img);
    img.dataset['index'] = i;
    img.addEventListener('click',openModal);
};

for (var i=0; i<=12; i++){
    loadImg(i);
}
