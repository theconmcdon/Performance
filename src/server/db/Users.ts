import { Query } from "./index";

const getUserID = async (username: string) => Query(`
    select Users.id
    from Users
    where Users.username = ?
`, [username])

const getUserType = async (username: string) => Query(`
    select Users.profileType
    from Users
    where Users.username = ?
`, [username])

const getUserProfile = async (username: string) => Query(`
    select Users.id, Users.username, Users.email, Users.profileName, Users.profileLocation, Users.profileBio, Users.profileType, Users.profilePhoto, Users.popularity, Users.tag1, Users.tag2, Users.tag3
    from Users
    where Users.username = ?
`, [username])

const editUserProfile = async (username: string, email: string, profileName: string, profileBio: string, profileLocation: string, profilePhoto: string, tag1: string, tag2: string, tag3: string, oldUsername: string) => Query(`
    UPDATE Users
    SET username = ?,email = ?,profileName = ?,profileBio = ?,profileLocation = ?,profilePhoto = ?,tag1 = ?,tag2 = ?,tag3 = ?
    WHERE Users.username = ?;
`, [username, email, profileName, profileBio, profileLocation, profilePhoto, tag1, tag2, tag3, oldUsername])

export default {
    getUserID,
    getUserType,
    getUserProfile,
    editUserProfile
}