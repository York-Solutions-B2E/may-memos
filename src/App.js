import './App.css';
import {useState} from "react";
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";
import {MemoEdit} from "./components/memo-edit/MemoEdit";
import {useSelector} from "react-redux";

function App(props) {

    const {
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        _MemoEdit = MemoEdit,

    } = props;

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const selectedMemo = useSelector(state => state.selectedMemo);

    if (!isLoggedIn) {
        return <div className={'d-flex justify-content-center p-5'}>
            <_Login/>
        </div>
    }

    if (selectedMemo) {
        return  <_MemoEdit/>
    }

    return <>
        <_MemoAdd/>
        <_MemoList/>
    </>
}

export default App;
