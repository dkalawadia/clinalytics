module.exports = function(app) {
    // 
    // index.js
    // Author: Janakiraman Gopinath 
    //
    var index = function(req, res) {
        res.render('index' , {info: {'title' : 'Login'}});
    };
    app.get('/', index);
}
