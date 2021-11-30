db.plans.insertOne(
    {
        end_date: 1/1/2022,
        macros: {
            calories: 3250,
            carbs: 490,
            fats: 70,
            protein: 165
        }, 
        workout: [
            {
                name: "push day a",
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