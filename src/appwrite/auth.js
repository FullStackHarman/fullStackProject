import { Client, Account } from "appwrite";
import conf from "../conf/conf.js";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(conf.appwriteProjectId); // Your project ID

const account = new Account(client);