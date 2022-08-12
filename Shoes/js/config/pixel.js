// tracking standard event
// All tracking standard events by calling Pixel function 'fbq('track')'

fbq('track', 'Purchase', {
    currency: "USD",
    value: 30.00,
},
);

// => event => visitor has completed purchase call function track 


// for example: if you wanted to track a standard purchase event after a visitor has completed
// the purchase, you could call the fbq('track') func on your purchase confirmation page

{/* <body>
    <script>
        fbq('track', 'Purchase', {
            currency: "USD",
            value: 30.00,
        })
    </script>
</body> */}

//  iff instead you wanted yo track a standard purchase event when the visitor clicks a purchase button
// you could tie the fbq('track') func call to the purchase 'button' on your checkout page, like this:
<body>
<button id="addToCartButton">Purchase</button>
<script type="text/javascript">
    var btnAddCart = document.getElementById('addToCartButton');
    btnAddCart.click(function() {
        fbq('track', 'Purchase', 
        { 
            currency : "USD",
            value: 30.00,
        })
    })
</script>
</body>
