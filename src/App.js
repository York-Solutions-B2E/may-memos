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

    function onMemoEdit(newMemo) {
        setSelectedMemo(null)
        setMemoList(
            memoList.map((memo) => {
                if (memo.id !== newMemo.id) {
                    return memo
                }

                return newMemo
            })
        )
    }

    function onMemoDelete(memo) {
        setMemoList(
            memoList.filter(cMemo => cMemo.id !== memo.id)
        )
    }

    function onEditSelect(memo) {
        setSelectedMemo(memo)
    }

    if (!isLoggedIn) {
        return <div className={'d-flex justify-content-center p-5'}>
            <_Login onSubmit={onLogin}/>
        </div>
    }

    if (selectedMemo) {
        return <_MemoEdit memo={selectedMemo} onSubmit={onMemoEdit}/>
    }

    return <>
        <_MemoAdd onMemoAdd={onMemoAdd}/>
        <_MemoList list={memoList} onEditSelect={onEditSelect} onDelete={onMemoDelete}/>
    </>
}

export default App;
