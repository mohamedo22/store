const airf = {
    title: "Air Force",
    price: 119,
    Image: "e_commerce_Img/air.png"
};
const airj = {
    title: "Air Jordan",
    price: 149,
    Image: "e_commerce_Img/air2.png"
};
const blaz = {
    title: "Blazer",
    price: 109,
    Image: "e_commerce_Img/blazer.png"
};
const blaz2 = {
    title: "Crater",
    price: 129,
    Image: "e_commerce_Img/blazer2.png"
};
const Hippie = {
    title: "Hippie",
    price: 99,
    Image: "e_commerce_Img/hippie.png"
};

function changedata(i) {
    let price = document.getElementById("price");
    let image = document.getElementById("img");
    let description = document.getElementById("disc");
    
    if (i == 1) {
        price.textContent = airf.price;
        image.src = airf.Image;
        description.textContent = airf.title;
    }
    if (i == 2) {
        price.textContent = airj.price;
        image.src = airj.Image;
        description.textContent = airj.title;
    }
    if (i == 3) {
        price.textContent = blaz.price;
        image.src = blaz.Image;
        description.textContent = blaz.title;
    }
    if (i == 4) {
        price.textContent = blaz2.price;
        image.src = blaz2.Image;
        description.textContent = blaz2.title;
    }
    if (i == 5) {
        price.textContent = Hippie.price;
        image.src = Hippie.Image;
        description.textContent = Hippie.title;
    }
    price.style.transform = `translateX(${-100})`;
    image.style.transform = `translateX(${-100})`;
    description.style.transform = `translateX(${-100})`;
}
