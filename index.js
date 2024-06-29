const container = document.getElementById('text-container');
const text = '30 DAYS OF JAVASCRIPT CHALLENGE 2020 ASABENEH YETAYEH';

const fonts = ['Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Courier New', 'Georgia'];
function changeStyle() {
    container.innerHTML = ''; 
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.color = getRandomColor();
        span.style.fontFamily= getRandomFont();
        container.appendChild(span);
}
}

   function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
 
   function getRandomFont(){
    return fonts[Math.floor(Math.random() * fonts.length )]
}
   function RandomBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}
    RandomBackgroundColor();
    changeStyle();
    setInterval(changeStyle, 3000);

   
