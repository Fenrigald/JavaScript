console.log('======== 2 задание ========');
        let basket = [
            {
                product: "pen",
                price: 50
            },
            {
                product: "pencil",
                price: 60
            },
            {
                product: "file",
                price: 70
            },
            {
                product: "paper",
                price: 80
            }
        ];
        let basketPrice = 0;
        for (let prod of basket){
            basketPrice += prod.price;
            console.log("Товар " + prod.product + " стоит: " + prod.price);
        }

        console.log("Стоимость корзины: " + basketPrice + " у.е.");