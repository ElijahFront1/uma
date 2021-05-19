import { put, takeEvery, call } from 'redux-saga/effects'
import { FETCH_SELECTION, setSelection } from '../store/selectionReducer'

const fetchSelection = () => fetch(`https://looks.umastyle.club/custapi/allrest/fashion/listfashionprod?fashionId=1`)

function* fetchSelectionWorker() {
    const data = yield call(fetchSelection)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setSelection(json))
}

export function* selectionWatcher() {
    yield takeEvery(FETCH_SELECTION, fetchSelectionWorker)
}