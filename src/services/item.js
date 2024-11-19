
async function createItem(name, price, quantity) {
    return{
        name,
        price,
        quantity,
        subtotal: () => {
            const total = price * quantity;
            
            return Math.round(total * 100) / 100; 
        },
    };
}

export default createItem;