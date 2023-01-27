import { all } from "axios"

export const VALID_REGISTER = {
    "email": "eve.holt@reqres.in",
    "password": "pistol"
}

export const INVALID_REGISTER = {
    "email": "sydney@fife"
}
//////
export const LIST_USERS_PARAM = {
    page : 2
}
////
export const SINGLE_USER = {
    "id" : 2
}
export const USER_NOT_FOUND = {
    "id" : 99
}
///
export const SINGLE_RESOURCE = {
    "id" : 2
}

// export const RESOURCE_NOT_FOUND = {
//     "id" : 23
// }
///
export const UPDATE_USER = {
    "name": "morpheus",
    "job": "zion resident"
}
