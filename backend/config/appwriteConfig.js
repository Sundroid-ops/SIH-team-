const {Client, ID, Storage, InputFile} = require("node-appwrite");

const client = new Client()
    .setEndpoint(process.env.appwrite_endpoint)
    .setProject(process.env.appwrite_PROJECT_ID)
    .setKey(process.env.appwrite_API_KEY);

const appStore = new Storage(client);
module.exports = { appStore, ID, InputFile }