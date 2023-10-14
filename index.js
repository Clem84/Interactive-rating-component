const sbt = document.getElementById("submit");
const how = document.getElementById("how");
const thanks = document.getElementById("thankhidden");
const selected = document.querySelector(".you");
const ratings = document.querySelector(".ratings");
var rate;
ratings.addEventListener("click",clicked);
sbt.addEventListener("click",thank);
function thank(){
    how.id="howhidden";
    thanks.id="thank";
    selected.textContent=`You selected ${rate} out of 5`;
}
function clicked(){
    rate = document.querySelector(":focus").innerText;
}

