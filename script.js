let css = document.getElementById('ls')

    setTimeout(() => {
        css.style.letterSpacing = '10px'
        setTimeout(() => {
            css.style.letterSpacing = '2px'
        }, 4000);
    },4000);
    



