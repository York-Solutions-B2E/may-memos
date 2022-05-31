import './App.css';
import {useState} from "react";
import {Login} from "./components/login/Login";
import {MemoAdd} from "./components/memo-add/MemoAdd";
import {MemoList} from "./components/memo-list/MemoList";
import {MemoEdit} from "./components/memo-edit/MemoEdit";

function App(props) {

    const {
        _isLoggedIn = false,
        _selectedMemo = null,
        _Login = Login,
        _MemoAdd = MemoAdd,
        _MemoList = MemoList,
        _MemoEdit = MemoEdit,

    } = props;

    const [isLoggedIn, setIsLoggedIn] = useState(_isLoggedIn)
    const [memoList, setMemoList] = useState([])
    const [selectedMemo, setSelectedMemo] = useState(_selectedMemo);

    console.log(memoList)

    function onLogin(creds) {
        if (creds.username === 'admin' && creds.password === 'pass') {
            setIsLoggedIn(true)
        }
    }

    function onMemoAdd(memo) {
        setMemoList([
            ...memoList,
            memo
        ])
    }

    function onMemoEdit(memo) {
        console.log(memo)
    }

    function onEditSelect(memo) {
        setSelectedMemo(memo)
    }

    function onMemoDelete(memoToDelete) {
        setMemoList(
            [
                ...memoList.filter((memo) => {
                    return memo.id !== memoToDelete.id
                })
            ]
        )
    }

    if (!isLoggedIn) {
        return <_Login onSubmit={onLogin}/>
    }

    if (selectedMemo) {
        return <_MemoEdit memo={selectedMemo} onSubmit={onMemoEdit}/>
    }

    return <>
        <_MemoAdd onMemoAdd={onMemoAdd}/>
        <_MemoList list={memoList} onEditSelect={onEditSelect} onMemoDelete={onMemoDelete}/>
    </>
}

export default App;
