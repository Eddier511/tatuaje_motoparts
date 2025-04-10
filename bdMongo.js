/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = 'Tatuaje_Moto_Parts';
const collection = 'usuarios';
const collectionm = 'motos';
const collections = 'servicios';
const collectionpr = 'proveedores';
const collectionpe = 'pedidos';
const collectionc = 'citas';
const collectionf = 'facturas';
const collectionp = 'productos';
const collectione = 'empleados';
const collectionca = 'categorias';

// Create a new database.
use(database);

// Create a new collection.
db.createCollection(collection);
db.createCollection(collectionm);
db.createCollection(collections);
db.createCollection(collectionpr);
db.createCollection(collectionpe);
db.createCollection(collectionc);
db.createCollection(collectionf);
db.createCollection(collectionp);
db.createCollection(collectione);
db.createCollection(collectionca);

// The prototype form to create a collection:
/* db.createCollection( <name>,
  {
    capped: <boolean>,
    autoIndexId: <boolean>,
    size: <number>,
    max: <number>,
    storageEngine: <document>,
    validator: <document>,
    validationLevel: <string>,
    validationAction: <string>,
    indexOptionDefaults: <document>,
    viewOn: <string>,
    pipeline: <pipeline>,
    collation: <document>,
    writeConcern: <document>,
    timeseries: { // Added in MongoDB 5.0
      timeField: <string>, // required for time series collections
      metaField: <string>,
      granularity: <string>,
      bucketMaxSpanSeconds: <number>, // Added in MongoDB 6.3
      bucketRoundingSeconds: <number>, // Added in MongoDB 6.3
    },
    expireAfterSeconds: <number>,
    clusteredIndex: <document>, // Added in MongoDB 5.3
  }
)*/

// More information on the `createCollection` command can be found at:
// https://www.mongodb.com/docs/manual/reference/method/db.createCollection/
