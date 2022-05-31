import {screen, render} from "@testing-library/react";
import {MemoList} from "./MemoList";

test(
    "should render a Memo comp for each item in the list prop",
    () => {
        const listData = [1, 2, 3, 4, 5, 6]
        const _Memo = () => {
            return <div>MOCK</div>
        }

        render(<MemoList list={listData} _Memo={_Memo}/>)

        const memoComps = screen.getAllByText('MOCK')
        expect(memoComps.length).toBe(listData.length)
    }
)

test('should pass correct Memo prop, onEditMemo, and onMemoDelete to  each memo comp', () => {
    const _list = [1]
    const _onEditSelect = true;
    const _onMemoDelete = true;

    let memoProp;
    let onEditSelectProp;
    let onMemoDeleteProp
    const _Memo = ({memo, onEditSelect, onDelete}) => {
        memoProp = memo;
        onEditSelectProp = onEditSelect;
        onMemoDeleteProp = onDelete;
        return <div>MOCK</div>
    }

    render(<MemoList list={_list} onEditSelect={_onEditSelect}  onDelete={_onMemoDelete} _Memo={_Memo}/>)
    expect(memoProp).toBe(_list[0])
    expect(onEditSelectProp).toBe(_onEditSelect)
    expect(onMemoDeleteProp).toBe(_onMemoDelete)
})

test('should split finished memos and pending memos into two lists', () => {
    const list = [
        {id: 1, finished: true},
        {id: 2, finished: false},
        {id: 3, finished: true},
        {id: 4, finished: false}
    ]

    let finishedList = []
    let pendingList = []
    const _Memo = ({memo}) => {
        if (memo.finished) {
            finishedList.push(memo.id)
        } else {
            pendingList.push(memo.id)
        }
        return <div>MOCK</div>
    }

    render(<MemoList list={list} _Memo={_Memo}/>)

    expect(finishedList).toStrictEqual([1,3])
    expect(pendingList).toStrictEqual([2,4])
})