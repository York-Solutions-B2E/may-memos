import {Memo} from "../memo/Memo";
import {useSelector} from "react-redux";


// list.map((memoData) => {
//     return <Memo memo={memoData}/>
// })

export function MemoList({onEditSelect, onDelete, _Memo = Memo}) {

    const list = useSelector(state => state.memoList)

    function sortMemoList(a, b) {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    }

    const pendingList = list.filter(m => !m.finished)
    const finishedList = list.filter(m => m.finished)

    return <>
        <h1>Pending</h1>
        {
            pendingList.sort(sortMemoList)
                .map((memoData, idx) => {
                    return <div key={idx} className={'m-3'}>
                        <_Memo memo={memoData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                    </div>
                })
        }
        <h1>Finished</h1>
        {
            finishedList.sort(sortMemoList)
                .map((memoData, idx) => {
                    return <div key={idx} className={'m-3'}>
                        <_Memo memo={memoData} onEditSelect={onEditSelect} onDelete={onDelete}/>
                    </div>
                })
        }
    </>
}