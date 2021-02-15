window.addEventListener("load", () => {
    
    let second = 0;
    let imagenes = Array.from(document.querySelectorAll('img'))
    function switchImage(data) {
        imagenes.forEach(image => {
            if (image.classList.contains(data)) {
                image.classList.replace('visible')
            } else {
                image.classList.add('hidden')
            }
        })
    }


    setInterval(() => {
        console.log(image.classList)
        if (second >= 0 && second <= 4) {
            
        }
        if (second >= 5 && second <= 9) {
              
        }
        if (second >= 10 && second <= 14) {
               
        }
        if (second >= 15 && second <= 19) {
                  
        }
        second++; 
        if (second == 20) {
            second = 0;
        }
    }, 1000)
})