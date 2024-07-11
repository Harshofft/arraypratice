const arrays = [2, 7, 3, 4, 5, 6, 9, 8, 20 ];
let max = arrays[0];
  for (let i = 1; i < arrays.length; i++) {
    if (arrays[i]> max) {
    
        max = arrays[i];
    }
}
console.log('This is largest no of this array : '+max);
// for smallest no.
console.log(arrays);
    let min = arrays[0];
     for (let i = 1 ; i < arrays.length; i++){
         if (min > arrays[i]) {
            min = arrays[i];
         }
     }
     console.log('This is smallest no of this array : '+min);