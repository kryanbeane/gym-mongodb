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

// Now do update for a members plan and PT
db.members.updateOne(
    {  }
)