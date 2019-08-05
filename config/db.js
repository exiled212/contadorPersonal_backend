(()=>{
    module.exports = (app)=>{
        return new Promise(function(resolve, reject){
            const config = require('../config.json');
            const MongoClient = require('mongodb').MongoClient;
            const uri = `mongodb+srv://${config.db.username}:${config.db.password}@${config.db.context}.mongodb.net/test?retryWrites=true&w=majority`;
            const client = new MongoClient(uri, { useNewUrlParser: true });
            client.connect(err => {
                if(err){
                    client.close();
                    console.log(err);
                    reject(err);
                } else {
                    let db = client.db(config.db.name);
                    resolve({app, db});
                }
            });
        })
    }
})();
