import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_USER, setUser } from '../store/userReducer'

const fetchUserData = () => fetch(`https://looks.umastyle.club/custapi/allrest/fashion/publicuser?mnem=tanya_tilcha`)

function* fetchUserDadtaWorker() {
    const data = yield call(fetchUserData)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUser(json))
}

export function* userDadtaWatcher() {
    yield takeEvery(FETCH_USER, fetchUserDadtaWorker)
}