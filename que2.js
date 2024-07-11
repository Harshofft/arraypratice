let arr =[ 5,7,9,6,8,3];
let sum =0;
for (let i = 1; i <= arr.length; i++) {
    if (arr[i]%2==1) {
        sum = sum + arr[i];
    }
    
}
console.log(sum);