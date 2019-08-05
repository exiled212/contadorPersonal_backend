(()=>{
    module.exports = (app)=>{
        return new Promise((resolve)=>{
            const express = require('express');
            const fs = require('fs');
            const path = require('path');

            const router = express.Router();
            const modulesPath = path.join(__dirname, '..', 'modules');
            const modules = fs.readdirSync(modulesPath);

            for(let i in modules){
                const module = modules[i];
                const modulePath = path.join(modulesPath, module);
                const moduleInfo = fs.statSync(modulePath);

                if(moduleInfo.isDirectory()){
                    const filepath = path.join(modulePath, 'routes.js');
                    require(filepath)(router);
                }
            }
            app.use(router);
            resolve(app);
        })
    }
})();
