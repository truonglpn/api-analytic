let subTotal = document.getElementById('subTotal');
let url = window.location.href;

class Shoes {
    constructor(id, name, unitPrice, quantity, image) {
        this.id = id;
        this.name = name;
        this.unitPrice = unitPrice;
        this.quantity = quantity;
        this.image = image;
    }
}

let shoes = [
    new Shoes(1, 'Sneaker One', 180.00, 1, 'https://picsum.photos/200'),
    new Shoes(2, 'Sneaker Two', 200.00, 1, 'https://picsum.photos/202'),
    new Shoes(3, 'Sneaker Three', 220.00, 1, 'https://picsum.photos/222'),
]; 

function showShoes() {
    try {
        let tbShoes = document.querySelector('#tbShoes');
        tbShoes.innerHTML = "";
        shoes.forEach(function(shoe, index) {
            tbShoes.innerHTML += 
            `
                <tr id="tr_${shoe.id}" class="${index}">
                    <td class="td-shoes">
                        <img src="${shoe.image}" class="img-shoes">
                    </td>
                    <td class="td-shoes">${shoe.name}</td>
                    <td class="td-shoes">${shoe.unitPrice}</td>
                    <td class="td-shoes">${shoe.quantity}</td>
                    <td class="td-shoes">${shoe.unitPrice * shoe.quantity}</td>
                    <td class="td-shoes">
                        <button onclick="move(${shoe.id})">Move</button>
                    </td>
                    <td class="td-shoes">
                        <button onclick="edit(${shoe.id})">Edit</button>
                        <button class="btn btn-save none" onclick="save(${shoe.id})">Save</button>
                    </td>
                    <td class="td-shoes">
                        <button data-id="${shoe.id}" class="removeBtn" onclick="removeShoe(${shoe.id})">Icon Remove</button>
                    </td>
                </tr>
            `
        })
    } catch (e) {
        console.error(e);
    }
   
}

function findIndexById(id) {
    try {
        return shoes.findIndex(function(shoe) {
            return shoe.id == id;
        })    
    } catch (e) {
        console.error(e);
    }
    
}

function removeShoe(id) {
    try {
        let index = findIndexById(id);
        let shoe  = shoes[index];
        if (index != -1) {
            shoes.splice(index, 1);
            web_event.track("product", "remove_cart", {
                items: [{
                    "type": "product",
                    "id": `${shoe.id}`,
                    "name": `${shoe.name}`,
                    "sku": "5261971730647",
                    "brand": "Samsung",
                    "main_category": "Điện tử - Điện Lạnh",
                    "category_level_1": "Tivi",
                    "category_level_2": "Tivi samsung",
                    "price": `${shoe.unitPrice}`,
                    "quantity": `${shoe.quantity}`,
                    "image_url": `${shoe.image}`,
                    "page_url": `${url}`,
                }]
            })
            showShoes();
        }
    } catch (e) {
        console.error(e);
    }
   
}

function edit(id) {
    try {

    let index = findIndexById(id);
    let shoe = shoes[index];
    
    let tr = document.querySelector(`#tr_${id}`);
    
    tr.querySelector("td:nth-child(3)").innerHTML = 
        `<input id="price${id}" type="number" value="${shoe.unitPrice}" />`;

    tr.querySelector("td:nth-child(4)").innerHTML = 
        `<input id="quantity${id}" type="number" value="${shoe.quantity}" />`;

    let actionBtn = tr.querySelector("td:nth-child(7)");
    actionBtn.children[0].classList.add('none');
    actionBtn.children[1].classList.remove('none');
    } catch (e) {
        console.error(e);
    }

}


function save(id) {
    try {
        let index = findIndexById(id);
        let shoe = shoes[index];

        shoe.unitPrice = document.querySelector(`#price${id}`).value;
        shoe.quantity = document.querySelector(`#quantity${id}`).value;

        showShoes();    
    } catch(e) {
        console.error(e);
    }
    
}

function move() {
    window.alert('Sorry. The function developing');
}

// window.addEventListener('DOMContentLoaded', function () {
    
    // let tr = document.querySelector('.tbShoes');
    
    // let temp = document.querySelector('.tbShoes').children.length;
    // let temp2 = document.querySelector('.tbShoes').children;

    // let temp2 = document.querySelector('.tbShoes').children.tr_i;
    // for (let i = 1; i <= temp; i++) {
        
    // }

    // let removeBtn = document.getElementsByClassName('removeBtn');
    // let tempValue;
    // for (let i = 0; i < removeBtn.length; i++) {
    //     tempValue = removeBtn[i].getAttribute('data-id');
    //         removeBtn[i].addEventListener('click', function() {
    //             removeShoe(tempValue);
    //             console.log(tempValue);
    //         })
    // }

// });

showShoes();


try {
    window.addEventListener('DOMContentLoaded', function() {
        console.log('event view cart...');
        web_event.track("product", "view_cart", {
        items: [{
            "type": "product",
            "id": "864115",
            "name": `${shoes[0].name}`,
            "sku": "5261971730647",
            "brand": "Samsung",
            "main_category": "Điện tử - Điện Lạnh",
            "category_level_1": "Tivi",
            "category_level_2": "Tivi samsung",
            "price": 4999000,
            "quantity": 1,
            "image_url": "http://...",
            "page_url": "http://..."
        }]
    });

    // let btnRemoveCart = document.getElementById('removeCart');
    // btnRemoveCart.onclick = function () {
    //     web_event.track("product", "remove_cart", {
    //     items: [{
    //         "type": "product",
    //         "id": "864115",
    //         "name": "Samsung Tivi 32 inch",
    //         "sku": "5261971730647",
    //         "brand": "Samsung",
    //         "main_category": "Điện tử - Điện Lạnh",
    //         "category_level_1": "Tivi",
    //         "category_level_2": "Tivi samsung",
    //         "price": 4999000,
    //         "quantity": 1,
    //         "image_url": "http://...",
    //         "page_url": "http://..."
    //     }]
    // });
    // }

    let btnCartToCheckout = document.getElementById('cartCheckout');
    btnCartToCheckout.onclick = function () {
        console.log('event checkout Cart...');
        web_event.track("product", "checkout_cart", {
            items: [{
                "type": "product",
                "id": "864115",
                "name": "Samsung Tivi 32 inch",
                "sku": "5261971730647",
                "brand": "Samsung",
                "main_category": "Điện tử - Điện Lạnh",
                "category_level_1": "Tivi",
                "category_level_2": "Tivi samsung",
                "price": 4999000,
                "quantity": 1,
                "image_url": "http://...",
                "page_url": `${url}`,    
            }]
        });
    }


    let paymentInfo = document.getElementById('paymentInfo');
    paymentInfo.onclick = () => {
    window.open('checkout.html', '_blank');
    }

})
} catch (e) {
    console.error(e);
}
 
