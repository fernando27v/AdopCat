
const server = require("./src/app.js");
const { conn } = require("./src/db.js");


conn.sync({force: false,alter:true}).then(() => {
  server.listen(process.env.PORT, async () => {
    console.log(`% listening at ${process.env.PORT}`); // eslint-disable-line no-console
  });
}).then(()=> console.log("Database Connected")).catch((err)=> console.error(err));