
export const FOODS = [ 
    {
        "id": 1,
        "name": "salmon",
        "serving": 4,
        "imageUrl": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "price": 12.5,
        "orderList": []
    },
    {
        "id": 5,
        "name": "House special Steak ",
        "serving": 3,
        "imageUrl": "./../../assets/images/alex-munsell-auIbTAcSH6E-unsplash.jpg",
        "price": 30.99,
        "orderList": []
    },
    {
        "id": 6,
        "name": "Healthy most wanted chicken",
        "serving": 3,
        "imageUrl": "./../../assets/images/alex-munsell-Yr4n8O_3UPc-unsplash.jpg",
        "price": 20.19,
        "orderList": []
    },
    {
        "id": 7,
        "name": "Sweet and spicy chicken",
        "serving": 3,
        "imageUrl": "./../../assets/images/andres-rodriguez-So4EHYeShUM-unsplash.jpg",
        "price": 20.11,
        "orderList": []
    },
    {
        "id": 8,
        "name": "Salad with tomato",
        "serving": 2,
        "imageUrl": "./../../assets/images/isaac-matthew-LvKjODlDYTI-unsplash.jpg",
        "price": 9.99,
        "orderList": []
    },
    {
        "id": 9,
        "name": "Lemonade with mint",
        "serving": 2,
        "imageUrl": "./../../assets/images/juliet-frias-WDgN0XclV_w-unsplash.jpg",
        "price": 3.99,
        "orderList": []
    },
    {
        "id": 10,
        "name": "Grilled chicken",
        "serving": 2,
        "imageUrl": "./../../assets/images/ksv-billi-7XYezj9RxYM-unsplash.jpg",
        "price": 17.99,
        "orderList": []
    },
    {
        "id": 11,
        "name": "Expresso maison",
        "serving": 3,
        "imageUrl": "./../../assets/images/lex-sirikiat-cUI21fhe810-unsplash.jpg",
        "price": 17.99,
        "orderList": []
    },
    {
        "id": 12,
        "name": "Expresso maison",
        "serving": 4,
        "imageUrl": "./../../assets/images/visual-stories-micheile-t05q7TZObzc-unsplash.jpg",
        "price": 10.23,
        "orderList": []
    },
    {
        "id": 4,
        "name": "Meatballs",
        "serving": 4,
        "imageUrl": "https://images.unsplash.com/photo-1529042410759-befb1204b468?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
        "price": 10.5,
        "orderList": [
            {
                "id": 4,
                "quantity": 1,
                "customerOrderList": [
                    {
                        "id": 10,
                        "date": "2022-01-31"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Ataya ",
        "serving": 1,
        "imageUrl": "./../../assets/images/ataya.jpeg",
        "price": 5.99,
        "orderList": [
            {
                "id": 2,
                "quantity": 4,
                "customerOrderList": [
                    {
                        "id": 8,
                        "date": "2022-01-31"
                    }
                ]
            },
            {
                "id": 3,
                "quantity": 1,
                "customerOrderList": [
                    {
                        "id": 9,
                        "date": "2022-01-31"
                    }
                ]
            },
            {
                "id": 5,
                "quantity": 1,
                "customerOrderList": []
            }
        ]
    }
];