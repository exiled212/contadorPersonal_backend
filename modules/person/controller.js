(()=>{

    const Person = require('./model/Person.js');

    module.exports = {
        getAll(req, res){
            let db = req.db;
            let person = Person(db);
            person.getAll()
                .then(data=>res.status(200).json({data}))
                .catch(err=>res.status(500).json({err}));
        },
        create(req, res){
            let db = req.db;
            let body = req.body;
            let person = Person(db);
            person.create(body)
                .then(data=>res.status(200).json({data:data.ops}))
                .catch(err=>res.status(500).json({err}));
        }
    }
})();
