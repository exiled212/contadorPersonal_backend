(()=>{
    module.exports = (app)=>{
        return new Promise((resolve)=>{
            app.all('/*', function(req, res, next) {
                res.header('Access-Control-Allow-Origin', "*");
                res.header('Access-Control-Allow-Headers', 'Content-Type');
                res.header('Access-Control-Allow-Credential', 'true');
                next();
            });
            resolve(app);
        })
    }
})();
