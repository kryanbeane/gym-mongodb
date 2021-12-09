// ObjectId("61a75d69085a9bab1924763d")
db.members.insertOne(
    {
        first_name: "Bryan",
        last_name: "Keane",
        trainer: null,
        plan: null,
        contact: {
            email: "fakebryankeane@gmail.com",
            number: 0851717171
        },
        membership: {
            expiry_date: new Da(2022-05-12),
            type: "year"
        },
        orders : []
    }
)

// ObjectId("61a75d69085a9bab1924763e")
db.members.insertOne(
    {
        first_name: "Laura",
        last_name: "Mahon",
        trainer: null,
        plan: null,
        contact: {
            email: "lauram123@gmail.com",
            number: 0837789612
        },
        membership: {
            expiry_date: new Date(2022-01-12),
            type: "direct debit"
        },
        orders : []
    }
)

// ObjectId("61a75d69085a9bab1924763f")
db.members.insertOne(
    {
        first_name: "James",
        last_name: "Thornberry",
        trainer: null,
        plan: null,
        contact: {
            email: "jtberry888@gmail.com",
            number: 0891777652
        },
        membership: {
            expiry_date: new Date(2022-03-09),
            type: "direct debit"
        },
        orders : []
    }
)

// ObjectId("61a75d69085a9bab19247640")
db.members.insertOne(
    {
        first_name: "Alex",
        last_name: "Power",
        trainer: null,
        plan: null,
        contact: {
            email: "alexpower21@gmail.com",
            number: 0862312289
        },
        membership: {
            expiry_date: new Date(2021-12-20),
            type: "month"
        },
        orders : []
    }
)

// ObjectId("61a75d69085a9bab19247641")
db.members.insertOne(
    {
        first_name: "Marie",
        last_name: "Johnson",
        trainer: null,
        plan: null,
        contact: {
            email: "mjohnson1@gmail.com",
            number: 0850017664
        },
        membership: {
            expiry_date: new Date(2022-04-06),
            type: "year"
        },
        orders : []
    }
)



