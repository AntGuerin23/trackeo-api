require('dotenv').config();
const database = process.env.DB;
const {ObjectId, MongoClient} = require("mongodb");
//const url = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@trackeo_database:27017`;
const url = `mongodb://trackeo_database:27017`;

exports.findAll = async function (collectionName) {
    return await query(collectionName, (collection) => {
        return collection.find().toArray();
    })
};

exports.findOne = function (collectionName, search) {
    return query(collectionName, (collection) => {
        return collection.find(search).next();

    })
};

exports.findById = async function (collectionName, id) {
    return await exports.findOne(collectionName, {'_id': ObjectId(id)});
};

exports.insertOne = async function (collectionName, object) {
    return await query(collectionName, (collection) => {
        return collection.insertOne(object);
    })
};

exports.deleteOne = function (collectionName, object) {
    return query(collectionName, (collection) => {
        return collection.deleteOne(object);
    })
};

async function query(collection, callback) {
    const client = await MongoClient.connect(url);
    let db = client.db(database);
    const result = await callback(db.collection(collection));
    client.close();
    return result;
};
