function sortDrinkByPrice(drinks) {
    for (let i = 0; i < drinks.length - 1; i++) {
        for (let j = 0; j < drinks.length - i - 1; j++) {
            if ((Number(drinks[j].price) || 0) > (Number(drinks[j + 1].price) || 0)) {
                [drinks[j], drinks[j + 1]] = [drinks[j + 1], drinks[j]];
            }
        }
    }
    return drinks;
}

const drinks = [
    {name: "lemonade", price: 50},
    {name: "lime", price: 10}
];

console.log(sortDrinkByPrice(drinks));
