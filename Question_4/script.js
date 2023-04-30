let dayOfWeek = Number(prompt("Please enter number from 1 to 7")); //? הגדרת משתנה כמספר בדפדפן

if (dayOfWeek === 1) { //? הגדרת תנאי ראשון
  console.log("good week");
} else if (dayOfWeek >= 2 && dayOfWeek <= 4) { //? הגדרת תנאי שני
  console.log("good day");
} else if (dayOfWeek >= 5 && dayOfWeek <= 7) { //? הגדרת תנאי שלישי
  console.log("happy weekend !");
} else { //? הגדרת שגיאה אם יש חריגה מהפרמטרים
  console.log("Only numbers from 1 to 7 please");
}
