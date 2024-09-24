const config = {
    local: {
        mode: 'local',
        app:"Local Marvel App",
        port: 5000, 
        connectionString: "mongodb://"+process.env.MONGODB_URL+":27017/marvelWar",
        secret: "5B1EC64C6939A2769364FD22D39C81B3E5FB985C33B81F7A54E6E8CB3C"
    },
    staging: {
        mode: 'staging',
        app:"Staging Marvel App",
        port: 5400, 
        connectionString: "mongodb://"+process.env.MONGODB_URL+":27017/marvelWar",
        secret: "A195134EB539E243AA3F6C111B2BE24B96F2D9B41EF23B31D628DEA3C5"
    },
    production: {
        mode: 'production',
        app:"Marvel War",
        port: 8080, 
        connectionString: "mongodb://"+process.env.MONGODB_URL+":27017/marvelWar",
        secret: "B7454777BF9359C846F582A383CBAB8EA9AC6468657D6A268DC68E263F"
    },
    kubernetes: {
        mode: 'kubernetes',
        app:"Marvel War",
        port: 5000, 
        connectionString: "mongodb://"+process.env.MONGODB_URL+":27017/marvelWar",
        secret: "B7454777BF9359C846F582A383CBAB8EA9AC6468657D6A268DC68E263F"
    }
} 
export default function(mode) {
    console.log(process.env.MONGODB_URL);
    return config[process.argv[2] || mode  || 'local'] || config.local;
}