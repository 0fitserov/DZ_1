const main = document.querySelector(".main__container");

const infoBlock = document.querySelector(".info__block");

console.log(main);

const infRate = function(n) {
    let fill = "<img src='img/cat-fill.svg'>";
    let stroke = "<img src='img/cat-stroke.svg'>";
    let rate = "";
    let count = 10;
    for (let i = 0; i < count; i++) {
       rate += i < n ? fill : stroke; 
    } 
    return rate;
}

const getCard = function (data) {
    const card = `
        <div class="card">
            <div class="card__img" style="background-image: url(${data.img_link})"></div>
            <h3 class="card__name">${data.name}</h3>
            <p class="rate">${infRate(data.rate)}</p>
        </div>
    `
    main.innerHTML += card;
}

cats.forEach(cat => {
    getCard(cat);
});

const getWord = function (n, w1, w2, w0) {
    if (n % 100 < 11 || n % 100 > 14) {
        if (n % 10 === 1) {
            return w1;
        } else if (n % 10 >= 2 && n % 10 <= 4) {
            return w2;
        } else {
            return w0;
        }
    } else {
        return w0;
    }
}

const showInfo = function (data) {
    infoBlock.classList.add("active");
    infoBlock.firstElementChild.innerHTML = `
        <img class="info__img" src="${data.img_link}" alt="${data.name}">
        <div class="info">
            <h2>${data.name}</h2>
            <h3>${data.age} ${getWord(data.age, "год", "года", "лет")}</h3>
            <p>${data.description}</p>
        </div>
        <div class="info__close" onclick="closeInfo()"></div>
    `;
}

const closeInfo = function () {
    infoBlock.classList.remove("active");
}

const cards = document.getElementsByClassName("card");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function(e) {
        showInfo(cats[i]);
    })
}