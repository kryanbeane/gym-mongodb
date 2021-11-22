//////  STAFF INSERTS  //////

// ObjectId("619bcf2b9da296c82857de470")
// Regular staff member: no list of clients
db.staff.insertOne(
    {
        first_name: "John",
        last_name: "Doe",
        dob: 25/11/1993,
        contact: {
            email: "johndoe43@gmail.com",
            number: 0879188780
        },
        address: {
            line_1: "10 Grove Road",
            county: "Carlow",
            eircode: "Y35A932"
        }
    }
)

db.staff.insertOne(
    {
        first_name: "Adam",
        last_name: "Jacob",
        dob: 2/9/1998,
        contact: {
            email: "adamjacob123@gmail.com",
            number: 0831818789
        },
        address: {
            line_1: "14 Crescent Drive",
            county: "Waterford",
            eircode: "Z12A411"
        },
        clients: [
            {client_id: ObjectId("619bfe0c9da296c82857de48")},
        ]
    }
)

db.insertMany(
    [
        {
            first_name: "",
            last_name: "",
            dob: 0/0/0000,
            contact: {
                email: "",
                number: 0
            },
            address: {
                line_1: "",
                county: "",
                eircode: ""
            }
        },
        {
            first_name: "",
            last_name: "",
            dob: 0/0/0000,
            contact: {
                email: "",
                number: 0
            },
            address: {
                line_1: "",
                county: "",
                eircode: ""
            }
        },
    ]
)


//////  MEMBER INSERTS  //////
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

//////  CLASS INSERTS  //////
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

//////  PLAN INSERTS  //////
db.plans.insertOne(
    {
        member_id: ObjectId("619bfe0c9da296c82857de48"),
        end_date: 1/1/2022,
        macros: {
            calories: 3250,
            carbs: 490,
            fats: 70,
            protein: 165
        }, 
        workout: [
            {
                name: "push day",
                exercises: [
                    { name: "barbell bench press", sets: 5, reps: 5 },
                    { name: "incline dumbbell press", sets: 3, reps: 10 },                    
                    { name: "weighted dips", sets: 3, reps: 8 },                    
                    { name: "cable chest flies", sets: 3, reps: 5 },                   
                    { name: "tricep pushdowns", sets: 4, reps: 20 }
                ]
            }
        ]
    }
)