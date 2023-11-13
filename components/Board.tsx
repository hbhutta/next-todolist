import SubBoard from "./SubBoard";

export default function Board() {
    return (
        <div className="m-auto flex justify-center bg-slate-200">
            <SubBoard/>
            <SubBoard/>
            <SubBoard/>
        </div>
    )
}