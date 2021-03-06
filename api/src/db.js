require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,API_KEY } = process.env;
const axios = require("axios")
const {faker} = require("@faker-js/faker")


let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/adopcat`,
        {
          logging: false, // set to console.log to see the raw SQL queries
          native: false, // lets Sequelize know we can use pg-native for ~30% more speed
        }
      )

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {Breed,Cat,User} =
  sequelize.models;

Breed.hasOne(Cat);
Cat.belongsTo(Breed);  

User.belongsToMany(Cat, { through: 'Favorites' });
Cat.belongsToMany(User, { through: 'Favorites' });

User.hasMany(Cat);
Cat.belongsTo(User);



//Carga de datos a la tabla Breed
//Ejecutar una vez, luego comentar la funcion para un funcionamiento mas optimo
async function ChargeBreed(){ 
  try{
     const resp = await axios.get(`https://api.thecatapi.com/v1/breeds?api_key=${API_KEY}`)
     resp.data.forEach(async (breed)=>{
     try{
       await Breed.findOrCreate({where:{
      name:breed.name,
      img: (breed.image && breed.image.url) || null
    }})
     }catch(err){
        console.log(err)
     } 
  })
  }catch(err){
    console.error(err)
  }
}

// ChargeBreed()

//Carga de datos a la tabla Cat
//Ejecutar una vez, luego comentar la funcion para un funcionamiento mas optimo
async function ChargeCats(){ 
  try{
    var i = 0;
     while(i<100){
         const caty = await Cat.findOrCreate({where:{
      name:faker.name.firstName(),
      age:faker.random.numeric(),
      img:faker.image.cats(),
      address:faker.address.streetAddress(),
      description: "I'm a cute cat that needs a lot of love, adopt me please!",
      phone_number:faker.phone.phoneNumber(),
      BreedId:Math.floor(Math.random() * (67 - 1) + 1)
    }})
    i++;
     }
 

  }catch(err){
    console.error(err)
  }   
}

// ChargeCats()




  module.exports = {
    ...sequelize.models,
    conn: sequelize,  
  };