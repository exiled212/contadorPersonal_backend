(()=>{
    const controller = require('./controller.js');

    module.exports = (router)=>{
        router.get('/person', controller.getAll);
        router.post('/person', controller.create);
    }
})();
