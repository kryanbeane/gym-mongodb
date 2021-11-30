// ObjectId("61a67ff65d32725156efdffa")
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
            county: "Waterford",
            eircode: "Y35A932"
        }
    }
)

// ObjectId("61a67ff65d32725156efdffb")
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
            eircode: "X91A411"
        },
        clients: []
    }
)

// ObjectId("61a67ff65d32725156efdffc")
db.staff.insertOne(
    {
        first_name: "Liz",
        last_name: "Russell",
        dob: 12/11/1999,
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

// ObjectId("61a67ff65d32725156efdffd")
// ObjectId("61a67ff65d32725156efdffe")
db.staff.insertMany(
    [
        {
            first_name: "Ryan",
            last_name: "Murray",
            dob: 11/3/1991,
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
            dob: 12/11/1999,
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

