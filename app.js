const sections = document.querySelector(".counts");

// sections.addEventListener("mouseover", function (event) {
function changeNumberOnce() {
  if (window.scrollY > 0) {
    const totalStudents = 213;
    let studentCounter = 150;
    const studentInterval = setInterval(() => {
      document.getElementById("students").innerHTML = studentCounter;
      studentCounter++;
      if (studentCounter > totalStudents) {
        clearInterval(studentInterval);
      }
    }, 50);
    sections.removeEventListener("mouseover", changeNumberOnce);
  }
}
// });

sections.addEventListener("mouseover", changeNumberOnce);

function changeNumberonline() {
  if (window.scrollY > 0) {
    const totalStudents = 17;
    let studentCounter = 0;
    const studentInterval = setInterval(() => {
      document.getElementById("online").innerHTML = studentCounter;
      studentCounter++;
      if (studentCounter > totalStudents) {
        clearInterval(studentInterval);
      }
    }, 180);
    sections.removeEventListener("mouseover", changeNumberonline);
  }
}
sections.addEventListener("mouseover", changeNumberonline);

function changeNumbercountries(event) {
  if (window.scrollY > 0) {
    const totalStudents = 15;
    let studentCounter = 0;
    const studentInterval = setInterval(() => {
      document.getElementById("countries").innerHTML = studentCounter;
      studentCounter++;
      if (studentCounter > totalStudents) {
        clearInterval(studentInterval);
      }
    }, 230);
    sections.removeEventListener("mouseover", changeNumbercountries);
  }
}
sections.addEventListener("mouseover", changeNumbercountries);

function changeNumberstudents(event) {
  if (window.scrollY > 0) {
    const totalStudents = 11923;
    let studentCounter = 11700;
    const studentInterval = setInterval(() => {
      document.getElementById("teachers").innerHTML = studentCounter;
      studentCounter++;
      if (studentCounter > totalStudents) {
        clearInterval(studentInterval);
      }
    }, 12);
    sections.removeEventListener("mouseover", changeNumberstudents);
  }
}

sections.addEventListener("mouseover", changeNumberstudents);
