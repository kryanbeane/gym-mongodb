//ObjectId("61a9f5acd60b0fc8cc79cb6d")
db.classes.insertOne(
    {
        instructor: ObjectId("61a76016085a9bab19247642"),
        details: {
            type: "spin",
            date: new Date(2021-11-22),
            start_time: "11am",
            duration: 45,
            capacity: 25
        },
        members: [
            {member: ObjectId("61a75d69085a9bab1924763d")},
            {member: ObjectId("61a75d69085a9bab1924763e")}
        ]
    }
)

// ObjectId("61a9f5cad60b0fc8cc79cb6e")
db.classes.insertOne(
    {
        instructor: ObjectId("61a76016085a9bab19247643"),
        details: {
            type: "strength and conditioning",
            date: new Date(2021-11-28),
            start_time: "9am",
            duration: 60,
            capacity: 20
        },
        members: [
            {member: ObjectId("61a75d69085a9bab1924763f")},
            {member: ObjectId("61a75d69085a9bab19247640")},
            {member: ObjectId("61a75d69085a9bab19247641")}
        ]
    }
)

// ObjectId("61a9f5cad60b0fc8cc79cb6f")
db.classes.insertOne(
    {
        instructor: ObjectId("61a76017085a9bab19247646"),
        details: {
            type: "hot yoga",
            date: new Date(2021-12-05),
            start_time: "6am",
            duration: 30,
            capacity: 25
        },
        members: [
            {member: ObjectId("61a75d69085a9bab19247641")},
            {member: ObjectId("61a75d69085a9bab1924763f")},
            {member: ObjectId("61a75d69085a9bab1924763e")},
            {member: ObjectId("61a75d69085a9bab19247640")},
        ]
    }
)

// ObjectId("61a9f5cad60b0fc8cc79cb70")
// ObjectId("61a9f5cad60b0fc8cc79cb71")
db.classes.insertMany(
    [
        {
            instructor: ObjectId("61a76016085a9bab19247643"),
            details: {
                type: "yoga",
                date: new Date(2021-12-21),
                start_time: "8pm",
                duration: 60,
                capacity: 20
            },
            members: [
                {member: ObjectId("61a75d69085a9bab1924763d")}
            ]
        },
        {
            instructor: ObjectId("61a76017085a9bab19247645"),
            details: {
                type: "hr spinzone",
                date: new Date(2021-11-30),
                start_time: "6:30pm",
                duration: 30,
                capacity: 30
            },
            members: [
                {member: ObjectId("61a75d69085a9bab1924763e")},
                {member: ObjectId("61a75d69085a9bab19247640")}
            ]
        }
    ]
)