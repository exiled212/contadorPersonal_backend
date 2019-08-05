(()=>{
    module.exports = function(db){
        let self = this;
        let model = db.collection('person');

        self.create = function(person){
            return model.insertOne(person);
        };

        self.getAll = function(){
            return model.find({}).toArray();
        };

        return self;
    }
})();
