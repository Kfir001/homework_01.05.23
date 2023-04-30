let dayOfMonth = Number(prompt("Please enter number from 1 to 31")); //? הגדרת משתנה כמספר בדפדפן

if (dayOfMonth === 1) { //? הגדרת תנאי ראשון
    console.log("good month");
} else if (dayOfMonth >= 2 && dayOfMonth < 10) { //? הגדרת תנאי שני
    console.log("start work");
} else if (dayOfMonth === 10) { //? הגדרת תנאי שלישי
    console.log("get salary");
} else if (dayOfMonth > 10 && dayOfMonth <= 20) { //? הגדרת תנאי רביעי
    console.log("BE HAPPY");
} else if (dayOfMonth > 20 && dayOfMonth < 31) { //? הגדרת תנאי חמישי
    console.log("the end");
} else if (dayOfMonth === 31) { //? הגדרת תנאי שישי
    console.log("BOOM BOOM");
}else { //? הגדרת שגיאה אם יש חריגה מהפרמטרים
    console.log("Only numbers from 1 to 31 please");
  }