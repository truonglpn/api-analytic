gtag('event', 
    'view_item_list', 
    // select_content => measure product click
    // view_item => measure product detail views 
    // add_to_cart => measure additions to and removals 'remove_from_cart' from shopping cart
    // 
    {
    "items": [
        {
            "id": 1,
            "name": 'Sneaker One',
            "list_name": "Search result",
            "brand": "Sneaker Vietnam",
            "category": "Sneaker TA",
            "variant": "Black",
            "list_position": 1,
            "quantity": 1,
            "price": 380000, 
        },
        {
            "id": 2,
            "name": 'Sneaker Two',
            "list_name": "Search result",
            "brand": "Sneaker Vietnam",
            "category": "Sneaker TB",
            "variant": "White",
            "list_position": 1,
            "quantity": 1,
            "price": 420000, 
        },
    ],
});

gtag('event', 'begin_checkout', {
    "items": [{//list product
    },
     // begin checkout => measure each step checkout items
     // checkout_progress => measure each subsequent checkout step,
    ],
    "coupon": "", // checkout_progress => "coupon" : "SUMMER_DISCOUNT"

});


// set check out option
gtag('event', 'set_checkout_option', {
    "checkout_step" : 1,
    "checkout_option" : "shipping method",
    "value" : 3,
});

// measure promotion impressions 

gtag('event', 'view_promotion', {
    "promotion": [
        {
            "id" : "abc123",
            "name" : "summer_promo",
        },
        {
            "id": "xyc987",
            "name": "spring savings",
        }
    ]
});

// promotion click

gtag('event', 'select_content', {
    "promotion" : [
        {
            "id" : "abc123",
            "name": "summer_promo",
        },
    ]
});


// measure purchases

gtag('event', 'purchase', {
    "transaction_id" : "24.013412341234",
    "affiliation" : "Sneaker Store BB",
    "value" : 23.03,
    "currency" : "USD",
    "tax": 1.25,
    "shippings": 0,
    "items": [
        {
            "type" : "product",
            "id" : "864155",
            "name": "Sneaker Two-Hd2",
            "sku" : "541231234556",
            "brand" : "Sneaker",
            "main_category" : "sport Shoes",
            "category_lv_1" : "Sneaker ",
            "category_lv_2" : "Shoes",
            "price" : 380000,
            "quantity" : 1,
        },
        {
            "type" : "product",
            "id" : "864155",
            "name": "Sneaker Third - PB3",
            "sku" : "541231234556",
            "brand" : "Sneaker",
            "main_category" : "sport Shoes",
            "category_lv_1" : "Sneaker ",
            "category_lv_2" : "Shoes",
            "price" : 320000,
            "quantity" : 1,
        },
    ]
});

// measure refund or partial refund by event with the transaction Id and the items to be refunded
gtag('event', 'refund', {
    "transaction_id" : "Sn12341",
});
