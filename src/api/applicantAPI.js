import { GET_APPLICANT, GET_MOMAPPLICANT } from '../modules/applycant';
import { CLOSE_MODAL } from '../modules/petSittermodal';

//전체 참가자 조회
export const getApplicantListAPI = (applicantId) => {

    const URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/applicant/${applicantId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        }).then(response => response.json())

        if (result.status === 200) {
            dispatch({ type: GET_APPLICANT, payload: result.data });
        }
    }
}

export const getMyApplyListAPI = (currentPage) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/applicant/mypetsitters?page=${currentPage}&memberId=${token.memberId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json())

        if (result.status === 200) {
            dispatch({ type: GET_APPLICANT, payload: result.data });
            console.log(result);
        }
    }
}

//내가 신청한 맘
export const getMyMomApplyListAPI = (currentPage) => {
    const token = JSON.parse(window.localStorage.getItem('accessToken'));

    let URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/momApplicant/mypetmoms?page=${currentPage}&memberId=${token.memberId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        })
            .then(response => response.json())

        if (result.status === 200) {
            dispatch({ type: GET_MOMAPPLICANT, payload: result.data });
            console.log(result);
        }
    }
}


export const getMomApplicantList = (applicantId) => {

    const URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/momApplicant/${applicantId}`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            }
        }).then(response => response.json())

        if (result.status === 200) {
            dispatch({ type: GET_MOMAPPLICANT, payload: result.data });
        }
    }
}

export const registMomApplicantAPI = (form) => {
    const URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/momApplicant/regist`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(form)
        }).then(response => response.json())

        if (result.status === 200) {
            alert(result.message);
            dispatch({ type: CLOSE_MODAL });

        }
    }
}

export const registApplicantAPI = (form) => {

    const URL = `http://${process.env.REACT_APP_RESTAPI_URL}/api/v1/applicant/regist`;

    return async (dispatch, getState) => {

        const result = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "*/*",
            },
            body: JSON.stringify(form)
        }).then(response => response.json())

        if (result.status === 200) {
            alert(result.message);
            dispatch({ type: CLOSE_MODAL });

        }
    }
}