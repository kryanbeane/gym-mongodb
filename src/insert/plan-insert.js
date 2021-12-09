//ObjectId("61a769b3085a9bab19247648")
//Plan for Bryan Keane
db.plans.insertOne(
    {
        member: ObjectId("61a75d69085a9bab1924763d"),
        end_date: new Date(31-12-2021),
        macros: {
            calories: 3304,
            carbs: 330,
            fats: 110,
            protein: 248
        }, workouts: [ {
                name: "full body a",
                exercises: [
                    { name: "bench press", sets: 5, reps: 8 },
                    { name: "squats", sets: 5, reps: 8 },
                    { name: "weighted pull ups", sets: 5, reps: 8 },
                    { name: "dips", sets: 5, reps: 12 },
                    { name: "push press", sets: 5, reps: 15 },
                ] }, {
                name: "full body b",
                exercises: [
                    { name: "bent over rows", sets: 5, reps: 8 },
                    { name: "deadlifts", sets: 5, reps: 8 },
                    { name: "bench press", sets: 5, reps: 8 },
                    { name: "weighted pull ups", sets: 5, reps: 12 },
                    { name: "face pulls", sets: 5, reps: 15 },
                ] }, {
                name: "full body c",
                exercises: [
                    { name: "squats", sets: 5, reps: 8 },
                    { name: "bench press", sets: 5, reps: 8 },
                    { name: "weighted pull ups", sets: 5, reps: 8 },
                    { name: "deadlifts", sets: 5, reps: 12 },
                    { name: "leg press", sets: 5, reps: 15 },
                ]
            },
        ]
    }
)

// ObjectId("61a769a5085a9bab19247647")
// Plan for Laura Mahon
db.plans.insertOne(
    {
        member: ObjectId("61a75d69085a9bab1924763e"),
        end_date: new Date(2022-01-26),
        macros: {
            calories: 2413,
            carbs: 273,
            fats: 62,
            protein: 206
        }, workouts: [ {
                name: "push day",
                exercises: [
                    { name: "bench press", sets: 5, reps: 5 },
                    { name: "incline dumbbell press", sets: 3, reps: 8 },
                    { name: "weighted dips", sets: 3, reps: 10 },
                    { name: "cable flys", sets: 3, reps: 20 },
                    { name: "tricep extensions", sets: 4, reps: 15 },
                ] }, {
                name: "leg day",
                exercises: [
                    { name: "squats", sets: 5, reps: 5 },
                    { name: "deadlifts", sets: 3, reps: 8 },
                    { name: "hack squats", sets: 3, reps: 10 },
                    { name: "leg extensions", sets: 4, reps: 20 },
                    { name: "lying leg curls", sets: 4, reps: 20 },
                ] }, {
                name: "pull day",
                exercises: [
                    { name: "pendlay rows", sets: 5, reps: 5 },
                    { name: "weighted pull ups", sets: 3, reps: 8 },
                    { name: "yates rows", sets: 3, reps: 10 },
                    { name: "face pulls", sets: 3, reps: 20 },
                    { name: "incline bicep curls", sets: 4, reps: 20 },
                ]
            },
        ]
    }
)
