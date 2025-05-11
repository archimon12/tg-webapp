async function getGift() {
    const response = await fetch("https://ваш-api.render.com/api/gift");
    const data = await response.json();
    document.getElementById("result").innerText = "Вы получили: " + data.gift;
}