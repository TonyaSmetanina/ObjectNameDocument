// Створити об'єкт "Документ", 
// де визначити властивості "Заголовок, тіло, футер, дата". 
// Створити об'єкт вкладений об'єкт - "Додаток". 
// Cтворити об'єкт "Додаток", вкладені об'єкти, "Заголовок, тіло, футер, дата". 
// Створити методи для заповнення та відображення документа.

const obj = {
    title : prompt ("Ввести заголовок"), 
    body : prompt ("Ввести тіло таблиці"), 
    footer : "футер",
    data : new Date,
    dodatok : {
        title : "Заголовок",
        body : "тіло", 
        footer : "футер",
        data : "дата"
    }
} 

document.write("Введений заголовок: " + obj["title"] + "<br>");
document.write("Введенє тіло: " + obj["body"] + "<br>");
document.write("Сьогоднішня дата: " + obj["data"] + "<br>" );
document.write(`Вивести переклад слова title: ${obj.dodatok.title} <br> `);
document.write(`Вивести переклад слова body: ${obj.dodatok.body} <br> `);
document.write(`Вивести переклад слова footer: ${obj.dodatok.footer} <br> `);
document.write(`Вивести переклад слова data: ${obj.dodatok.data} <br> `);