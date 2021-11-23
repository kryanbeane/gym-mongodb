
db.classes.insertOne(
    {
        instructor: ObjectId("619bcf2b9da296c82857de470"),
        details: {
            type: "spin",
            date: 22/11/2021,
            start_time: "11am",
            duration: 45,
            capacity: 25
        },
        members: [
            {member_id: ObjectId("619bfe0c9da296c82857de48")}
        ]
    }
)