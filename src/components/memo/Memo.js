import {Button, Card} from "react-bootstrap";
import {BsFillCheckCircleFill, BsFillCircleFill, BsFillGearFill, BsFillTrashFill} from "react-icons/bs";
import './Memo.css';
import {useDispatch} from "react-redux";
import {ON_MEMO_DELETE, ON_MEMO_SELECT} from "../../modules/memos";

export function Memo({memo, onEditSelect, onDelete}) {

    const dispatch = useDispatch();

    return <Card>
        <Card.Header as="h5">
            <span>{memo.title}</span>
            <span className={'memo-date'}>
                {
                    memo.finished ? <BsFillCheckCircleFill size={'2rem'} color={'green'}/>
                        : <BsFillCircleFill size={'2rem'} color={'blue'}/>
                }
            </span>
            <span className={'memo-date'}>{memo.date?.toString().substring(0, 15)}</span>
        </Card.Header>
        <div className={'p-2'}>{memo.desc}</div>

        <Card.Footer className={'d-flex justify-content-around'}>
            <Button variant="outline-warning" onClick={() => dispatch(
                {type: ON_MEMO_SELECT, memo: memo}
            )}>
                Edit
            </Button>
            <Button variant="outline-danger" onClick={() => dispatch(
                {type: ON_MEMO_DELETE, memo: memo}
            )}>
                Delete
            </Button>
        </Card.Footer>

    </Card>
}