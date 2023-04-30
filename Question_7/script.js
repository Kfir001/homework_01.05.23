document.getElementById("form").addEventListener("submit", function (event) {//? תפיסת אלמנט והוספת אירוע האזנה
  event.preventDefault(); //? מניעת התנהגות דיפולטיבית של הטופס
  let username = document.getElementById("username").value; //? תפיסת אלמנט של שם המשתמש
  let password = document.getElementById("password").value; //? תפיסת אלמנט של הסיסמה
  let message = document.getElementById("message"); //? תפיסת אלמנט של ההודעה
  if (password.length < 6) { //? הגדרת תנאי לאורך סיסמה
    message.textContent = "Password must be at least 6 characters long";
    document.getElementById("password").style.backgroundColor = "#ff0f5b";
  } else if (username === "admin" && password === "password123") { //? הגדרת תנאי לפרמטרים הנכונים על מנת להתחבר
    message.textContent = "You have successfully logged in";
  } else { //? הגדרת שגיאה למשתמש במידה והפרמטרים שגואים
    message.textContent = "Invalid username or password";
    document.getElementById("username").style.backgroundColor = "#ff0f5b";
    document.getElementById("password").style.backgroundColor = "#ff0f5b";
  }
});
