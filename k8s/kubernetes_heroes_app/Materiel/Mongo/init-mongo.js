db.createUser(
    {
        user:"Thor",
        pwd:"ragnarok",
        roles :[
            {
                role:"readwrite",
                db:"marvelWar"
            }
        ]
    }
)