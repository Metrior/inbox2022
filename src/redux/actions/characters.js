import * as actionTypes from "./types";
import axios from "axios"
import {baseUrl} from "../../constants"

export const getCharactersAsync = async(page) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${baseUrl}/api/polls?page=${page}`)
            dispatch(getCharacters(response))
        } catch (e) {
            dispatch(callFail(e.message))
        }
    }
}

export const getCharacters = (data) => {
    return {
        type: actionTypes.GET_CHARACTERS,
        payload: data
    }
};

export const getSingleCharacterAsync = async(page) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${baseUrl}/api/polls?page=${page}`)
            dispatch(getSingleCharacter(response))
        } catch (e) {
            dispatch(callFail(e.message))
        }
    }
}

export const getSingleCharacter = (data) => {
    return {
        type: actionTypes.GET_SINGLE_CHARACTER,
        payload: data
    }
};

export const callFail = (data) => {
    return {
        type: actionTypes.CHARACTERS_ERROR,
        payload: data
    }
};
