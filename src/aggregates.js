db.orders.distinct( "products.name" )

db.orders.aggregate(
    [
        { $match: {} },
        { $group: { _id: "$member", total: { $sum: "$total_price" } } },
        { $sort: { total: -1} }
    ]
).pretty()

db.classes.aggregate(
    [
        { 
            $project: {
                _id: 0,
                name: "$details.type",
                attendants: { $size: "$members" }
            }
        },
        { $sort: { attendants: -1 } }
    ]
).pretty()