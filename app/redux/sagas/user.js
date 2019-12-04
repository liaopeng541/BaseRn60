import {takeEvery,put,delay} from "redux-saga/effects"
function* test() {
  yield delay(2000)
  yield  put({type:"addb"})
}
export default function* watch() {
  yield takeEvery("add",test)
}