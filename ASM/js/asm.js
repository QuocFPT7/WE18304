// Lấy thẻ span dùng để hiển thị thời gian đếm ngược
const countdownElement = document.getElementById("countdown");

// Hàm tính toán thời gian đếm ngược vô hạn
function countdown() {
  // Lấy thời gian hiện tại
  const now = new Date().getTime();

  // Tính toán thời gian kế tiếp có dạng 00:00:00
  const nextTime = new Date();
  nextTime.setHours(24);
  nextTime.setMinutes(0);
  nextTime.setSeconds(0);
  nextTime.setMilliseconds(0);

  // Tính toán khoảng cách thời gian giữa hiện tại và thời gian kế tiếp
  const distance = nextTime.getTime() - now;

  // Tính toán số giờ, phút, giây còn lại
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị thời gian đếm ngược
  countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  // Chờ 1 giây trước khi tính toán thời gian đếm ngược tiếp theo
  setTimeout(countdown, 1000);
}

// Bắt đầu tính toán thời gian đếm ngược
countdown();
