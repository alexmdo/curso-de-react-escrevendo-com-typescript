import React from "react";
import style from "./List.module.scss";
import Item from "./Item";
import {ITask} from "../types/ITask";

interface Props {
    tasks: ITask[],
    selectTask: (selectedTask: ITask) => void
}

function List({tasks, selectTask} : Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map(value => (
                    <Item
                        key={value.id}
                        {...value}
                        selectTask={selectTask}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;