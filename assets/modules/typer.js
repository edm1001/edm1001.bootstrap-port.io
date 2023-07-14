// for hero page
const typed = new Typed('#typer', {
  strings: ['Welcome to my Website', ' Im  a Software Engineer', 'Contact Me Below', 'Enjoy your Time', 'Have a Great Day!'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

let valueNumbers=document.querySelectorAll(".exp-number");
let interval = 2500;

valueNumbers.forEach((valueNumber) => {
    let startValue=0;
    let endValue = parseInt(valueNumber.getAttribute("data-val"));
    duration = Math.floor(interval/endValue);
    let counter= setInterval(()=> {
        startValue += 1;
        valueNumber.textContent=startValue;
        if (startValue==endValue) {
            clearInterval(counter);
        }
    },duration)
})

document.addEventListener("click", function(e){
    if(e.target.classList.contains("gallery-item")){
        const src=e.target.getAttribute("src");
        document.querySelector(".modal-img").src=src;
        const myModal  = new bootstrap.Modal(document.getElementById('gallery-modal'))
        myModal.show();
    }
})

