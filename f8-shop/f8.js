/**
 Giới thiệu 1 số hàm built-in
    1. alert    /tạo box thông báo
    2. console
    3. confirm  /tạo box xác nhận
    4. prompt   /tạo box điền thông tin
    5. setTimeout/
    // setTimeout(function() {
    //     alert('Thong bao')
    // }, 5000)
    6. setInterval

 */

/*
            Toan tu
    1. Toán tử số học - Arithmetic
    2. Toán tử gán - Assigment
    3. Toán tử so sánh - Comparison
// if(a<b){
//     alert('Dung');
// }    
    4. Toán tử logic - logical

*/

let daily = '1';
let coding = 2;
let habit = 3;

[daily, coding] = [habit++, daily++ + coding++];
habit = (daily+coding)%5;

console.log(habit);













