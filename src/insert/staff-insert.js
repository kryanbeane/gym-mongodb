//ObjectId("61a76016085a9bab19247642")
db.staff.insertOne(
    {
        first_name: "John",
        last_name: "Doe",
        dob: new Date(1993-11-25),
        contact: {
            email: "johndoe43@gmail.com",
            number: 0879188780
        },
        address: {
            line_1: "10 Grove Road",
            county: "Waterford",
            eircode: "Y35A932"
        }
    }
)

//ObjectId("61a76016085a9bab19247643")
db.staff.insertOne(
    {
        first_name: "Adam",
        last_name: "Jacob",
        dob: new Date(1998-09-02),
        contact: {
            email: "adamjacob123@gmail.com",
            number: 0831818789
        },
        address: {
            line_1: "14 Crescent Drive",
            county: "Waterford",
            eircode: "X91A411"
        },
        clients: []
    }
)

//ObjectId("61a76017085a9bab19247644")
db.staff.insertOne(
    {
        first_name: "Liz",
        last_name: "Russell",
        dob: new Date(1999-11-12),
        contact: {
            email: "foleyjack1234@hotmail.com",
            number: 0834478671
        },
        address: {
            line_1: "Apt 3, Henrystreet Apartments",
            county: "Waterford",
            eircode: "X91AD77"
        },
        clients: []
    }
)

//ObjectId("61a76017085a9bab19247645")
//ObjectId("61a76017085a9bab19247646")
db.staff.insertMany(
    [
        {
            first_name: "Ryan",
            last_name: "Murray",
            dob: new Date(1991-03-11),
            contact: {
                email: "ryanmurray242@gmail.com",
                number: 0851299893
            },
            address: {
                line_1: "27 The Grange",
                county: "Waterford",
                eircode: "X91HKK2"
            }
        },
        {
            first_name: "Jack",
            last_name: "Foley",
            dob: new Date(1999-11-12),
            contact: {
                email: "foleyjack1234@hotmail.com",
                number: 0834478671
            },
            address: {
                line_1: "Apt 3, Henrystreet Apartments",
                county: "Waterford",
                eircode: "X91AD77"
            }
        },
    ]
)

