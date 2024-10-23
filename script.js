let circularProgress = document.querySelector(".circular-progress"),
progressValue = document.querySelector(".progress-value");

let progressStartValue = 0,
 progressEndtValue = 90,
speed = 100;

let progress = setInterval(() => {
    progressStartValue++;

    progressValue.textContent = `${progressStartValue}%`
    circularProgress.style.background = `conic-gradient(blueviolet ${progressStartValue * 3.6}deg, #e6e6e6 0deg)`

    if(progressStartValue == progressEndtValue){
        clearInterval(progress);
    }
    console.log(progressStartValue)
}, speed);

//css progress

let cssProgress = document.querySelector(".css-progress"),
cssValue = document.querySelector(".css-value");

let cssProgressStartValue = 0,
 cssProgressEndtValue = 65,
cssSpeed = 150;

let progress2 = setInterval(() => {
    cssProgressStartValue++;

    cssValue.textContent = `${cssProgressStartValue}%`
    cssProgress.style.background = `conic-gradient(blueviolet ${cssProgressStartValue * 3.6}deg, #e6e6e6 0deg)`

    if(cssProgressStartValue == cssProgressEndtValue){
        clearInterval(progress2);
    }
    console.log(cssProgressStartValue)
}, cssSpeed);

//bootstrap progress

let bootstrapProgress = document.querySelector(".bootstrap-progress"),
bootstrapValue = document.querySelector(".bootstrap-value");

let bootstrapProgressStartValue = 0,
 bootstrapProgressEndtValue = 10,
bootstrapSpeed = 150;

let progress3 = setInterval(() => {
    bootstrapProgressStartValue++;

    bootstrapValue.textContent = `${bootstrapProgressStartValue}%`
    bootstrapProgress.style.background = `conic-gradient(blueviolet ${bootstrapProgressStartValue * 3.6}deg, #e6e6e6 0deg)`

    if(bootstrapProgressStartValue == bootstrapProgressEndtValue){
        clearInterval(progress3);
    }
    console.log(bootstrapProgressStartValue)
}, bootstrapSpeed);

//sass progress

let sassProgress = document.querySelector(".sass-progress"),
sassValue = document.querySelector(".sass-value");

let sassProgressStartValue = 0,
 sassProgressEndtValue = 5,
sassSpeed = 150;

let progress4 = setInterval(() => {
    sassProgressStartValue++;

    sassValue.textContent = `${sassProgressStartValue}%`
    sassProgress.style.background = `conic-gradient(blueviolet ${sassProgressStartValue * 3.6}deg, #e6e6e6 0deg)`

    if(sassProgressStartValue == sassProgressEndtValue){
        clearInterval(progress4);
    }
    console.log(sassProgressStartValue)
}, sassSpeed);

//tailwind progress


let tailwindProgress = document.querySelector(".tailwind-progress"),
tailwindValue = document.querySelector(".tailwind-value");

let tailwindProgressStartValue = 0,
 tailwindProgressEndtValue = 8,
tailwindSpeed = 150;

let progress5 = setInterval(() => {
    tailwindProgressStartValue++;

    tailwindValue.textContent = `${tailwindProgressStartValue}%`
    tailwindProgress.style.background = `conic-gradient(blueviolet ${tailwindProgressStartValue * 3.6}deg, #e6e6e6 0deg)`

    if(tailwindProgressStartValue == tailwindProgressEndtValue){
        clearInterval(progress5);
    }
    console.log(tailwindProgressStartValue)
}, tailwindSpeed);

//JavaScript progress


let jsProgress = document.querySelector(".js-progress"),
jsValue = document.querySelector(".js-value");

let jsProgressStartValue = 0,
 jsProgressEndtValue = 12,
jsSpeed = 150;

let progress6 = setInterval(() => {
    jsProgressStartValue++;

    jsValue.textContent = `${jsProgressStartValue}%`
    jsProgress.style.background = `conic-gradient(blueviolet ${jsProgressStartValue * 3.6}deg, #e6e6e6 0deg)`

    if(jsProgressStartValue == jsProgressEndtValue){
        clearInterval(progress6);
    }
    console.log(jsProgressStartValue)
}, jsSpeed);

