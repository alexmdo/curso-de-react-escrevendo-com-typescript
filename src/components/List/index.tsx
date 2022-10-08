import React from "react";
import style from "./List.module.scss";
import Item from "./Item";

function List() {
    const tasks = [
        {
            task: 'React',
            time: '02:00:00'
        },
        {
            task: 'Javascript',
            time: '01:00:00'
        },
        {
            task: 'Typescript',
            time: '03:00:00'
        }
    ];
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
                {tasks.map((value, index) => (
                    <Item
                        key={index}
                        {...value}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;