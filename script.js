var students = ["Leslie", "Monserrat", "Adonis"];

$("#studentButton").click(function() {
  var random = Math.floor(Math.random() * students.length);
  $("#studentDisplay").append(students[random]);
});

var teachers = ["Zach", "Aaron", "Julia", "Justin", "Alyxe", "Ms. Williams"];

$("#teacherButton").click(function() {
  var random = Math.floor(Math.random() * teachers.length);
  $("#teacherDisplay").append(teachers[random]);
});
