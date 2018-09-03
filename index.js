// Index.js
const app = require('./app/index');

let port = (process.argv[2] || (process.env.npm_package_config_port || 3000));

app.listen(port, () => {
    console.log("Conectado a porta " + port);
})
