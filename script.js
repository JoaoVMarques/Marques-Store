function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Comprar';
  button.classList.add('item-button');
  return button;
}

function createTexts(classText, itemText) {
  const text = document.createElement('p');
  text.classList.add(classText);
  text.textContent = itemText;
  return text;
}

function createDisplayChilds(item) {
  const figure = document.createElement('figure');
  const img = document.createElement('img');
  img.setAttribute('src', item.src);
  img.classList.add('figure-img', item.size);
  figure.appendChild(img);
  return figure;
}

function ShowItemsInCard(item) {
  const itemCard = document.createElement('div');
  itemCard.classList.add('item-Card');
  itemCard.appendChild(createDisplayChilds(item));
  itemCard.appendChild(createTexts('item-title', item.title));
  itemCard.appendChild(createTexts('item-price', item.price));
  itemCard.appendChild(createButton());
  return itemCard;
}


window.onload = () => {
  const products = document.getElementsByClassName('items-products');
  let count = 1;
  let item = 0;
  items.forEach(element => {
    products[item].appendChild(ShowItemsInCard(element));
    if (count === 4) {
      item += 1;
    }
    count += 1;
  });
}