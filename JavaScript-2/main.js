//---------------Davaleba_6-----------//
function Task6(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function printTask6() {
    const min = 5;
    const max = 50;
    const Number = Task6(min, max);
    document.write(Number);
  }
  printTask6();
  document.write("<hr>")
  


//---------------Davaleba_7----------------//
  function Task7(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  function printTask7(a, b) {
    const min = a;
    const max = b;
    const Number = Task7(min, max);
    document.write(Number);
  }
  printTask7(20, 70); 
  document.write("<hr>")



//---------------Davaleba_8--------------//
  function printTask8(a, b) {
    const Number = Math.floor(Math.random() * (b - a + 1)) + a;
    document.write(Number);
  }
  printTask8(10, 60);
  document.write("<hr>")
  
  


//---------------Davaleba_9--------------//
  function printTask9(a, b) {
    for (let i = 0; i < 10; i++) {
      const Number = Math.floor(Math.random() * (b - a + 1)) + a;
      document.write(Number);
      document.write("<br>")
    }
  }
  printTask9(10, 50); 
  document.write("<hr>")



//---------------Davaleba_10-----------//
  function printask10(n, a, b) {
    for (let i = 0; i < n; i++) {
      const Number = Math.floor(Math.random() * (b - a + 1)) + a;
      document.write(Number);
      document.write("<br>")
    }
  }
  printask10(10, 10, 100);
  document.write("<hr>")





//---------------Davaleba_11-----------//
  function getTask11() {
    const days = ['კვირა', 'ორშაბათი', 'სამშაბათი', 'ოთხშაბათი', 'ხუთშაბათი', 'პარასკევი', 'შაბათი'];
    const random = Math.floor(Math.random() * 7);
    return days[random];
  }
  const weekday = getTask11();
  document.write('დღეს არის: ' + weekday);
  document.write("<hr>")





//---------------Davaleba_16--------------//
  function getTask16() {
    const Number = Math.floor(Math.random() * 31) + 1;
    return Number;
  }
  const Month = getTask16();
  document.write(Month);
  document.write("<hr>")