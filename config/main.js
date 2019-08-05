(()=>{
    var logger = require('morgan');
    var express = require('express');

    module.exports = (app)=>{
        return new Promise((resolve)=>{
            app.use(logger('dev'));
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
            resolve(app);
        })
    }
})();
