// Query for Equality
db.members.find(
    { _id: ObjectId("61a75d69085a9bab1924763d") }
).pretty()

// Query on Multiple Properties
db.staff.find(
    { first_name: "Ryan", last_name: "Murray" }
).pretty()

// Queries with And/Or Operators
db.classes.find(
    { $or: [
            { "details.duration": 45 },
            { "details.capacity": 25 }
    ] }
).pretty()

// Queries with Comparison Operators
db.orders.find(
    { total_price: { $gte: 30, $lte: 75 } }
).pretty()

// Querying an Array with Comparison Operators
db.orders.find(
    { "products.price": { $gte: 20 } }
).pretty()

// Query with Projection
db.members.find(
    { "membership.type": "direct debit" },
    { first_name: 1, last_name: 1 }
).pretty()

// Queries with Cursor Methods
db.classes.find(
    { "details.duration": { $lte: 60 } }
).count()
