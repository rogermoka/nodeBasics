const express = require('express');
const nunjucks = require('nunjucks');

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: true,
});

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'njk');

const users = ['Roger Mokarzel', 'Mariana Chiconini Mokarzel', 'Vinicius Altomani'];

// const logMidlleware = (req, res, next) => {
//     console.log(
//         `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
//     );

//     req.appName = "GoNode";

//     return next();
// };

app.get('/', (req, res) => {
    return res.render('list', { users });
});

app.get('/new', (req, res) => {
    return res.render("new");
});

app.post('/create', (req, res) => {
    users.push(req.body.user);
    return res.redirect('/');
});


// app.get('/nome/:name', (req, res) => {
//     return res.json({
//         message: `Bem-vindo, ${req.params.name}`
//     });
// });

app.listen(3000);