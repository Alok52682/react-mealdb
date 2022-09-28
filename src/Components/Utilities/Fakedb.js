const addToDb = (id) => {
    let cart = {};

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }

    // let quantity = cart[id];
    // if (quantity) {
    //     // const newQuantity = quantity + 1;
    //     // cart[id] = newQuantity;
    // }
    // else {
    // cart[id] = 1;
    // }
    const legnth = Object.keys(cart).length;
    if (legnth === 5) {
        alert('you have added maximum')
        return;
    }
    else {
        cart[id] = 1;
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}


const getCart = () => {
    let cart = {};

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;

}

const clearDb = () => {
    localStorage.clear()
    // localStorage.removeItem('cart');
}

export {
    addToDb,
    getCart,
    clearDb
}