window.addEventListener("load", () => {
    let display = document.getElementById('display');

    document.getElementById('btn-next').addEventListener('click', () => {
        if (display.innerHTML < 100) {
            let acum = Number(display.innerHTML) + 1;
            if (display.innerHTML < 9) {
                display.innerHTML = `0${acum}`;
            } else {
                display.innerHTML ++
            }
        }
    })
    document.getElementById('btn-prev').addEventListener('click', () => {
        if (display.innerHTML > 0) {
            let acum = Number(display.innerHTML) - 1;
            if (display.innerHTML <= 10) {
                display.innerHTML = `0${acum}`;
            } else {
                display.innerHTML --
            }
        }
    })
    document.getElementById('btn-reset').addEventListener('click', () => {
        display.innerHTML = "00";
    })
})