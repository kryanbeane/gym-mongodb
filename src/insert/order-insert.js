// ObjectId("61a78707085a9bab19247661")
db.orders.insertOne(
    {
        total_price: 22.50,
        member: ObjectId("61a67f9fab9d06907bc147d0"),
        order_date: new Date(2021-12-01),
        products: [
            { name: "tank top", price: 9.62, vat: 2.88, quantity: 1 },
            { name: "shorts", price: 7.70, vat: 2.30, quantity: 1 }
        ]
    }
)

// ObjectId("61a78707085a9bab19247662")
db.orders.insertOne(
    {
        total_price: 30.00,
        member: ObjectId("61a67f9fab9d06907bc147d4"),
        order_date: new Date(2021-10-01),
        products: [
            { name: "pre-workout", price: 11.55, vat: 2.45, quantity: 2 }
        ]
    }
)

// ObjectId("61a78707085a9bab19247663")
// ObjectId("61a78707085a9bab19247664")
// ObjectId("61a78707085a9bab19247665")
db.orders.insertMany( 
    [
        {
            total_price: 55.30,
            member: ObjectId("61a67f9fab9d06907bc147d3"),
            order_date: new Date(2021-11-20),
            products: [
                { name: "5inch shorts", price: 10, vat: 2.30, quantity: 1 },
                { name: "pre-workout", price: 10.01, vat: 2.99, quantity: 1 },
                { name: "hoodie", price: 23.10, vat: 6.90, quantity: 1 }
            ]
        },
        {
            total_price: 12.50,
            member: ObjectId("61a67f9fab9d06907bc147d1"),
            order_date: new Date(2021-11-20),
            products: [
                { name: "tank top", price: 9.62, vat: 2.88, quantity: 1 }
            ]
        },
        {
            total_price: 72.50,
            member: ObjectId("61a67f9fab9d06907bc147d0"),
            order_date: new Date(2021-11-20),
            products: [
                { name: "hoodie", price: 23.10, vat: 6.90, quantity: 2 },
                { name: "tank top", price: 9.62, vat: 2.88, quantity: 1 }
            ]
        }
    ]
)


