class Student {
    constructor(id, first_name, last_name, class_id, email, phone_number, dob) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.class_id = class_id;
      this.email = email;
      this.phone_number = phone_number;
      this.dob = new Date(dob);
    }
  
    getFullName() {
      return `${this.last_name} ${this.first_name}`;
    }
  
    getCurrentAge() {
      const currentDate = new Date();
      const birthDate = this.dob;
      const ageInMilliseconds = currentDate - birthDate;
      const ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
      const ageInYears = Math.floor(ageInDays / 365);
      return `${ageInYears} tuổi; ${ageInDays} ngày tuổi`;
    }
  }
  
  const studentList = [
    new Student(1, "Nguyễn", "Văn A", 1, "a@gmail.com", "123456789", "1995-01-01"),
    new Student(2, "Trần", "Thị B", 2, "b@gmail.com", "123456789", "1996-02-02"),
    new Student(3, "Phạm", "Văn C", 1, "c@gmail.com", "123456789", "1997-03-03"),
    new Student(4, "Lê", "Thị D", 2, "d@gmail.com", "123456789", "1998-04-04"),
    new Student(5, "Hoàng", "Văn E", 1, "e@gmail.com", "123456789", "1999-05-05"),
  ];
  
  studentList.sort((a, b) => a.dob - b.dob);
  
  console.log("Danh sách sinh viên theo thứ tự số tuổi (tính theo ngày) từ thấp đến cao:");
  for (const student of studentList) {
    console.log(`${student.getFullName()} - ${student.getCurrentAge()}`);
  }
  
  console.log(`Width của màn hình là ${window.innerWidth}px`);
  console.log(`Height của màn hình là ${window.innerHeight}px`);
  