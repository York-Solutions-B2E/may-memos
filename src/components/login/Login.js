import {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {initiateLogin} from "../../modules/memos";

export function Login() {

    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {loginPending, loginFailed} = useSelector(state => ({
        loginPending: state.loginPending,
        loginFailed: state.loginFailed
    }))

    // const loginPending = useSelector(state => state.loginPending)
    // const loginFailed = useSelector(state => state.loginFailed)

    function onFormSubmit(event) {
        event.preventDefault();
        dispatch(initiateLogin({username, password}))
    }

    function onUsernameChange(event) {
        setUsername(event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(event.target.value)
    }

    return <Card className={'w-50 text-center'}>
        <Form className={'p-3'} onSubmit={onFormSubmit}>
            <Form.Group className={'mb-3'}>
                <Form.Label>Username</Form.Label>
                <Form.Control onChange={onUsernameChange} value={username} type={'text'} placeholder={"username"}/>
            </Form.Group>

            <Form.Group className={'mb-3'}>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={onPasswordChange} value={password} type={'password'} placeholder={"password"}/>
            </Form.Group>

            <Button variant="primary" type="submit" disabled={loginPending}>
                Login
            </Button>

            {loginFailed && <h2>Username and password are incorrect</h2>}
            {/*{loginFailed ? <h2>Username and password are incorrect</h2> : <h2></h2>}*/}
        </Form>
    </Card>

}