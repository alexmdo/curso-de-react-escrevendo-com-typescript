import {ITask} from "../../types/ITask";
import style from "./Item.module.scss";

interface Props extends ITask{
    selectTask: (selectedTask: ITask) => void
}

export default function Item({ selectTask, task, time, selected, completed, id }: Props) {
    return (
        <li className={`${style.item} ${selected ? style.itemSelecionado : ''}`} onClick={() => selectTask({
            task,
            time,
            selected,
            completed,
            id
        })}>
            <h3>{task}</h3>
            <span>{time}</span>
        </li>
    )
}