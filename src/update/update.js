db.members.updateOne(
    { _id: ObjectId("61a75d69085a9bab1924763d") },
    {
        $addToSet: {
            orders: {
                $each: [
                    ObjectId("61a78707085a9bab19247661"),
                    ObjectId("61a78707085a9bab19247662"),
                    ObjectId("61a78707085a9bab19247665") 
                ]
            }
        }
    }
)

db.members.updateOne(
    { _id: ObjectId("61a75d69085a9bab1924763e") },
    {
        $addToSet: {
            orders: {
                $each: [
                    ObjectId("61a78707085a9bab19247663"),
                    ObjectId("61a78707085a9bab19247664"),
                ]
            }
        }
    }
)

db.staff.updateOne(
    { _id: ObjectId("61a76016085a9bab19247643") },
    {
        $push: {
            clients: ObjectId("61a75d69085a9bab1924763e")
        }
    }
)

db.staff.updateOne(
    { _id: ObjectId("61a76017085a9bab19247644") },
    {
        $push: {
            clients: ObjectId("61a75d69085a9bab1924763d")
        }
    }
)

db.members.updateOne(
    { _id: ObjectId("61a75d69085a9bab1924763e") },
    {
        $set: {
            trainer: ObjectId("61a76016085a9bab19247643"),
            plan: ObjectId("61a769a5085a9bab19247647")
        }
    }
)


db.members.updateOne(
    { _id: ObjectId("61a75d69085a9bab1924763d") },
    {
        $set: {
            trainer: ObjectId("61a76017085a9bab19247644"),
            plan: ObjectId("61a769b3085a9bab19247648")
        }
    }
)
