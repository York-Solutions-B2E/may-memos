import {useState} from "react";

export function MemoInput({onSubmit}) {

    const newMemo = {
        id: new Date().getMilliseconds(),
        title: '',
        desc: '',
        date: new Date(),
        finished: false
    }

    const [formState, setFormState] = useState(newMemo);

    function onFormSubmit(event) {
        event.preventDefault()
        onSubmit({...formState})
        setFormState(newMemo);
    }

    function onTitleChange(event) {
        setFormState({
            ...formState,
            title: event.target.value
        })
    }

    function onDescChange(event) {
        setFormState({
            ...formState,
            desc: event.target.value
        })
    }

    function onDateChange(event) {
        setFormState({
            ...formState,
            date: new Date(event.target.value)
        })
    }

    function onFinishedChange(event) {
        setFormState({
            ...formState,
            finished: event.target.checked
        })
    }

    return <form onSubmit={onFormSubmit}>
        <input onChange={onTitleChange} value={formState.title} type={'text'} placeholder={"Title"}/>
        <input onChange={onDescChange} value={formState.desc} type={'text'} placeholder={"Description"}/>
        <input onChange={onDateChange} value={formState.date.toISOString().substring(0,10)} type={'date'} placeholder={"Date"}/>
        <label>
            Finished:
            <input onChange={onFinishedChange} value={formState.finished} type={'checkbox'}/>
        </label>

        <button>Submit</button>
    </form>
}