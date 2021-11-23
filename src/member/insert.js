// ObjectId("619bfe0c9da296c82857de48")
db.members.insertOne(
    {
        first_name: "Bryan",
        last_name: "Keane",
        contact: {
            email: "fakebryankeane@gmail.com",
            number: 0851717171
        },
        membership: {
            expiry_date: 12/5/2022,
            type: "yearly"
        }
    }
)