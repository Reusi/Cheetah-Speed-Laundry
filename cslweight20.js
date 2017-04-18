var stripe = require("stripe")("sk_test_A6y8k03vHkuGhVs5wXEVjpjJ");

module.exports = function (ctx, req, res) {
    stripe(ctx.secrets.stripeSecretKey).charges.create({
        amount: 3000,
        currency: 'usd',
        source: ctx.body.stripeToken,
        description: 'Laundry Service'
    }, function (error, charge) {
        var status = error ? 400 : 200;
        var message = error ? error.message : 'Thanks for ordering!'; 
        res.writeHead(status, { 'Content-Type': 'text/html' });
        return res.end('<h1>' + message + '</h1>');
    });
};
