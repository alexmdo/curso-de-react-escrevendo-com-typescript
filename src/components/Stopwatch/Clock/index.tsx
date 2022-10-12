import style from "./Clock.module.scss";

interface IProps {
    time: number | undefined
}

export default function Clock({time = 0}:IProps) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteDecimal, minuteUnit] = String(minutes).padStart(2, '0');
    const [secondDecimal, secondUnit] = String(seconds).padStart(2, '0');
    return (
        <>
            <span className={style.relogioNumero}>{minuteDecimal}</span>
            <span className={style.relogioNumero}>{minuteUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondDecimal}</span>
            <span className={style.relogioNumero}>{secondUnit}</span>
        </>
    )
}