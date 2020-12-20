window.addEventListener("load", () => {
    
    let second = 0;
    //let lightRed = document.querySelector('.light.red')
    //let lightYellow = document.querySelector('.light.yellow')
    //let lightGreen = document.querySelector('.light.green')

    let light = Array.from(document.querySelectorAll('.light'))

    function switchLight(data) {
        light.forEach(light => {
            light.classList.remove('active')
            if (light.classList.contains(data)) {
                light.classList.replace('inactive','active')
            } else {
                light.classList.add('inactive')
            }
        })
    }

    setInterval(() => {
        if (second >= 0 && second <= 9) {
            //lightGreen.classList.remove('active')
            //lightGreen.classList.add('inactive')
            //lightRed.classList.remove('inactive')
            //lightRed.classList.add('active')
            switchLight('red')
        }
        if (second >= 10 && second <= 14) {
            //lightRed.classList.remove('active')
            //lightRed.classList.add('inactive')
            //lightYellow.classList.remove('inactive')
            //lightYellow.classList.add('active')  
            switchLight('yellow')         
        }
        if (second >= 15 && second <= 20) {
            //lightYellow.classList.remove('active')
            //lightYellow.classList.add('inactive') 
            //lightGreen.classList.remove('inactive')
            //lightGreen.classList.add('active') 
            switchLight('green')        
        }
        second++; 
        if (second == 21) {
            second = 0;
        }
    }, 1000)
})