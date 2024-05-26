import { types } from "../interfaces/types";

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.loguin:
            return{
                ...action.payload,
                logged:true
            }
        case types.logout:
            return {
                logged:false
            }
        default:
            return state;
    }
}