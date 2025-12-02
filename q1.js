
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
  calculateAverage() {
    return this.marks.reduce((a,b)=>a+b,0) / this.marks.length;
  }
  getGrade() {
    const avg = this.calculateAverage();
    if (avg >= 90) return "A";
    if (avg >= 75) return "B";
    if (avg >= 50) return "C";
    return "F";
  }
}

const s1 = new Student("Prerita", [90,95,88]);
const s2 = new Student("Riya", [70,75,68]);
const s3 = new Student("Aman", [45,55,50]);

console.log(s1.name, s1.getGrade());
console.log(s2.name, s2.getGrade());
console.log(s3.name, s3.getGrade());
