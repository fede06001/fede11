console.log("Hello, World!");

let btn = document.querySelector("button");

console.dir(btn);
btn.style.backgroundColor = "red";


/*btn.onclick = () => {
    let img = document.createElement("img");
    img.src = "https://i.pinimg.com/originals/6c/f3/89/6cf3898779df04fa0efc095b47607c06.jpg";
    img.alt = "Errore";
    img.style.width = "100px";
    document.body.appendChild(img);

    setTimeout(() => {
        img.remove();
    }, 5000); // 5000 ms = 5 secondi
};*/

btn.onclick =  () =>  {
    alert("errore") ;
}

btn.addEventListener("click", () => {
    console.log("errore");
});