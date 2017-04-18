var stripe = require('stripe');

module.exports = function (ctx, req, res) {
    stripe(ctx.secrets.sk_test_ANNOfDQOVANuROwt9Um0VSS5).charges.create({
        amount: 3000,
        currency: 'usd',
        source: ctx.body.stripeToken,
        description: 'Laundry Serrvice'
    }, function (error, charge) {
        var status = error ? 400 : 200;
        var message = error ? error.message : 'Thanks for ordering!'; 
        res.writeHead(status, { 'Content-Type': 'text/html' });
        return res.end('<h1>' + message + '</h1>');
    });
};
