// const tower = (number) => {
//     for(let i = 0; i < number; i++) {
//         let output = '';
//     for (let j = 0; j < number - i; j++)
//         output += '';
//     for (let k = 0; k <= i; k++)
//         output += '*';
//         console.log(output)
//     }
// }

// tower(5)

const tower = (number) => {
    //towers height
    for (var y= 1; y <= number; y++) {
        var str = ''
    //towers width
    for (var x = 1; x <= (2 * number - 1); x++) {
        if (x >= number + 1 - y && x <= number - 1 + y) {
            // console.log(number)
            str += '*'
            }
        else {
            str += ' '
         }
        }
    console.log(str)
    }
}
tower(3)