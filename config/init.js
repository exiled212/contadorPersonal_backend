(()=>{
    module.exports = ()=>{
        return new Promise((resolve)=>{
            const express = require('express');
            const app = express();
            resolve(app);
        })
    }
})();
