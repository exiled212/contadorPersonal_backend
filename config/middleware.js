(()=>{
    module.exports = (elements)=>{
        return new Promise((resolve)=>{
            let app = elements.app;
            let db = elements.db;
            app.use(function(req, res, next) {
                req.db = db;
                next();
            });
            resolve(app);
        })
    }
})();
