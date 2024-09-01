const {Client, ID, Storage} = require("node-appwrite");
const {InputFile} = require("node-appwrite/file")

const client = new Client()
    .setEndpoint(process.env.appwrite_endpoint)
    .setProject(process.env.appwrite_PROJECT_ID)
    .setKey(process.env.appwrite_API_KEY);

const appStore = new Storage(client);
module.exports = { appStore, ID, InputFile }