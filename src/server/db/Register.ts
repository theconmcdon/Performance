import { Query } from "./index";

const register = async (username: string, email: string, password: string, profileType: string, profilePhoto: string, profileName: string, profileBio: string) => Query(`
    insert into users (username, email, password, profileType, profilePhoto, profileName, profileBio) values (?, ?, ?, ?, ?, ? ,?)
`, [username, email, password, profileType, profilePhoto, profileName, profileBio]);

export default {
    register
}