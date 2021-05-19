import { all } from "redux-saga/effects"
import { selectionWatcher } from "./selection";
import { userDadtaWatcher } from "./user";

export function* rootWatcher() {
    yield all([userDadtaWatcher(), selectionWatcher()])
}