let product = [{
    p_Name: 'Aqualite Slip-Resistance Running Shoes for Men',
    p_price: '₹ 699',
    img: 'https://m.media-amazon.com/images/I/81eRaxbrsuL._SL1500_.jpg'
}, {
    p_Name: 'PICAASO MAX-2 Sports Shoes for Men',
    p_price: '₹ 1299',
    img: 'https://m.media-amazon.com/images/I/61AsXO8JufL._SL1500_.jpg'
}, {
    p_Name: 'KOBURG Sidus Mens Sport Shoes ',
    p_price: '₹ 1599',
    img: 'https://m.media-amazon.com/images/I/71AMNioqOyL._SL1500_.jpg'
}, {
    p_Name: 'Red Tape Sports Walking Shoes for Men',
    p_price: '₹ 1539',
    img: 'https://m.media-amazon.com/images/I/61ee6sCUbDL._SL1500_.jpg'
}, {
    p_Name: 'ASIAN Mens Wonder - 13 Sports Running Shoes ',
    p_price: '₹ 621',
    img: 'https://m.media-amazon.com/images/I/61utX8kBDlL._SL1100_.jpg'
}, {
    p_Name: 'Campus Mens Royce - 2 Running Shoes ',
    p_price: '₹ 802',
    img: 'https://m.media-amazon.com/images/I/617QtLqfSlL._SL1440_.jpg'
}, {
    p_Name: 'Campus Mens Bull Pro Running Shoes ',
    p_price: '₹ 783',
    img: 'https://m.media-amazon.com/images/I/71nbgibXEIL._SL1500_.jpg'
}, {
    p_Name: 'Woodland Mens Gc 2577117ws Sneaker',
    p_price: '₹ 1,639',
    img: 'https://m.media-amazon.com/images/I/81T-n5Nv7BL._SL1500_.jpg'
}, {
    p_Name: 'Sparx Mens Sm-661 Running Shoe',
    p_price: '₹ 1154',
    img: 'https://m.media-amazon.com/images/I/61SVQjnjCeL._SL1500_.jpg'
}];
wrapper.innerHTML = product.map((x) => {
    return ` <div class="products">
        <img src="${x.img}" alt="">
        <h1>${x.p_Name}</h1>
        <h3>${x.p_price}</h3>
        <div class="btn">
        <button>Add To Cart</button>
        </div>
    </div>`
}).join('')