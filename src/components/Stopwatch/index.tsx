import Button from "../Button";
import Clock from "./Clock";
import style from "./Stopwatch.module.scss";
import {timeToSeconds} from "../../common/utils/date";
import {ITask} from "../types/ITask";
import {useState} from "react";

interface Props {

    selectedTask: ITask | undefined

}

export default function Stopwatch({ selectedTask }:Props) {
    const [time, setTime]  = useState<number>();
    if (selectedTask?.time) {
        setTime(timeToSeconds(selectedTask.time));
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}