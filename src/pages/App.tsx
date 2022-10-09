import React, {useState} from 'react';
import '../App.css';
import Form from "../components/Form";
import List from "../components/List";
import style from './App.module.scss';
import Stopwatch from "../components/Stopwatch";
import {ITask} from "../components/types/ITask";

function App() {

    const [tasks, setTasks] = useState<ITask[] | []>([]);
    const [selectedTask, setSelectedTask] = useState<ITask>();

    function selectTask(selectedTask: ITask) {
        setSelectedTask(selectedTask);
        setTasks(prevState => prevState.map(value => ({
            ...value,
            selected: value.id === selectedTask.id
        })));
    }

    return (
        <div className={style.AppStyle}>
            <Form setTasks={setTasks} />
            <List selectTask={selectTask} tasks={tasks}/>
            <Stopwatch selectedTask={selectedTask} />
        </div>
    );
}

export default App;
