// const tower = (num) => {
//     for(var i = 1; i <= num; i++){
//         var str = ''
//     for (var j = 1; j <= (num * 2 - 1); j++) {
//         if (j >= num + 1 - i && j <= num - 1 + i) {
//             str += '*'
//     }
//      else {
//         str += ' ' 
//     }
// } 
// console.log(str)
//     }
// }
// tower(3)

//Mentor Answer
function towerBuild(floors) {
    const tower = [];
    var star = '*';
for (var i = 0; i < floors; i++) {
    tower.push(star);
    star += "**";
for (var j = 0; j < i; j++) {
    tower[j] = ' ' + tower[j] + ' '
        }
    }
    console.log(tower)
}
towerBuild(3)