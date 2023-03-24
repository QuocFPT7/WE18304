// Cho kết quả bằng chuỗi rỗng
var number = "";
// Get element của input có id = ketqua và gắn vào idResult
var idResult = document.getElementById("ketqua");
function gan(value) {
  // Gắn number = value button
  number += value;
  // Gắn value của id ketqua bằng biến number
  idResult.value = number;
}
function xoa() {
  // Gắn biến number bằng 0
  number = "0";
  // Gắn value của id ketqua bằng number
  idResult.value = number;
}
function result() {
  // Nếu number bằng chuỗi rỗng hoặc bằng 0 thì thông báo "Vui lòng nhập phép tính"
  if (number == "" || number == 0) {
    alert("Vui lòng nhập phép tính");
  }
  // Gắn value của ketqua bằng kết quả
  idResult.value = eval(idResult.value);
  // Gắn number bằng kết quả
  number = idResult.value;
}