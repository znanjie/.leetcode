var me = function() {
    let a = 4;
    while (a >= 0) {
        console.log('while', a);
        for (let i = 0; i < 5; i++) {
            if (i === 2) return i;
            console.log('for', i);
        }
        a--;
    }
}
console.log(me());