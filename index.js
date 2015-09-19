var falcorExpress = require('falcor-express'),
    Router = require('falcor-router'),
    express = require('express'),
    app = express();
app.use('/myMessage.json',
    falcorExpress.dataSourceRoute(function (req, res) {
    return new Router([
        {
            route: "detailText",
            get: function() {
                return {path:["detailText"], value: "Hello Falcor Developers"};
            }
        }
    ]);
}));
app.use(express.static(__dirname + '/'));
app.listen(4000,function(){
    console.log("Server started at port 4000");
});