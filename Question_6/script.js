let holiday = (prompt("מה החג האהוב עלייך,לכתוב בעברית בבקשה")) //? הגדרת משתנה בדפדפן

if (holiday === "פורים") { //? הגדרת תנאי ראשון
    console.log("happy purim");
} else if (holiday === "פסח") { //? הגדרת תנאי שני
    console.log("Clean the house");
} else if (holiday === "שבועות") { //? הגדרת תנאי שלישי
    console.log("Eat dairy");
} else if (holiday === "סוכות") { //? הגדרת תנאי רביעי
    console.log("Build a sukkah");
}else { //? הגדרת שגיאה אם יש חריגה מהפרמטרים
    console.log("מצטער,אבל החג הזה לא נמצא ברשימה");
  }