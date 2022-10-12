import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";
import {timeToSeconds} from "../../common/utils/date";
import {ITask} from "../types/ITask";
import {useEffect, useState} from "react";

interface Props {

    selectedTask: ITask | undefined,
    endTask: () => void;

}

export default function Stopwatch({ selectedTask, endTask }:Props) {
    const [time, setTime]  = useState<number>(timeToSeconds(String(selectedTask?.time)));

    useEffect(() => {
       if (selectedTask?.time) {
           setTime(timeToSeconds(selectedTask.time));
       }
    }, [selectedTask]);

    function regressiva(time: number = 0) {
        setTimeout(() => {
            if (time > 0) {
                setTime(time - 1);
                return regressiva(time - 1);
            }
            endTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time} />
            </div>
            <Button onClick={() => regressiva(time)}>
                Começar!
            </Button>
        </div>
    )
}