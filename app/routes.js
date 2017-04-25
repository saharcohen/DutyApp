/**
 * Created by Sahar-PC on 25/04/2017.
 */


module.exports = function(app) {
    app.get('*', function (req, res) {
        res.sendFile('./public/views/index.html', {root: 'D:\\MyWebProjects\\MEANStack'});
    });
};