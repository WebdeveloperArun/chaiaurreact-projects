import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class Auth {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        this.login({ email, password });
        return "success";
      } else {
        return userAccount;
      }
    } catch (error) {
      console.log("Appwrite createAccount Error: ", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.log("Appwrite login Error: ", error);
    }
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite logout Error: ", error);
    }
  }

  async getUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite getUser Error: ", error);
    }

    return null;
  }
}

const auth = new Auth();

export default auth;
