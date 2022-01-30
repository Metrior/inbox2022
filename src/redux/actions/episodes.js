import * as actionTypes from "./types";
import axios from "axios"
import {baseUrl} from "../../constants"

export const getEpisodesAsync = async(page) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${baseUrl}/api/polls?page=${page}`)
            dispatch(getEpisodes(response))
        } catch (e) {
            dispatch(callFail(e.message))
        }
    }
}

export const getEpisodes = (data) => {
    return {
        type: actionTypes.GET_EPISODES,
        payload: data
    }
};

export const getSingleEpisodeAsync = async(page) => {
    return async dispatch => {
        try {
            const response = await axios.post(`${baseUrl}/api/polls?page=${page}`)
            dispatch(getSingleEpisode(response))
        } catch (e) {
            dispatch(callFail(e.message))
        }
    }
}

export const getSingleEpisode = (data) => {
    return {
        type: actionTypes.GET_SINGLE_EPISODE,
        payload: data
    }
};

export const callFail = (data) => {
    return {
        type: actionTypes.EPISODES_ERROR,
        payload: data
    }
};
