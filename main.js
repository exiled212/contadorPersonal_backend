(()=>{
    // Configs
    const init = require('./config/init.js');
    const main = require('./config/main.js');
    const corns = require('./config/corns.js');
    const db = require('./config/db.js');
    const middleware = require('./config/middleware.js');
    const routes = require('./config/routes.js');
    const errors = require('./config/errors.js');
    const server = require('./config/server.js');

    init() // Init Express
        .then(main) // Config main
        .then(corns) // Config Corns
        .then(db) // DB config
        .then(middleware) // Config Middlerware
        .then(routes) // Routes config
        .then(errors) // Errors Config
        .then(server) // Create Server
    ;
})();
