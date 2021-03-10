var app = new Vue({
    el: '#app',
    data: {
        product: 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory: 15,
        details: ["80% Cotton",
                "20% Polyester",
                "Gender Neutral",
                "One Size"],
        variants: [
            {
                variantID: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})