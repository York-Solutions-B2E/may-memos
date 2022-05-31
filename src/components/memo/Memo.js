export function Memo({memo, onEditSelect, onDelete}) {
    return <>
        <div>{memo.title}</div>
        <div>{memo.desc}</div>
        <div>{memo.date?.toString().substring(0, 15)}</div>
        <div>{memo.finished ? 'Finished' : 'Pending'}</div>
        <button onClick={() => onEditSelect(memo)}>Edit</button>
        <button onClick={() => onDelete(memo)}>Delete</button>
    </>
}