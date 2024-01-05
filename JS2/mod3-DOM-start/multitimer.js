function my(i =0, step = 5, tick = 1000) {
    function a(){
        if (i < step) {
            i++;
            console.log(i)
            setTimeout(a, tick)
            console.log(`Тайме сработал на ${new Date().toLocaleString()}`)
        }
    }
    a()
}

my();