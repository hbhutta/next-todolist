export default function AddTask() {
    return (
        <form className="flex flex-col gap-3">
            <input type="text" placeholder='Title' className="border-slate-500 px-8 py-2"></input>
            <input type="text" placeholder='Description' className="border-slate-500 px-8 py-2"></input>
            <button className="bg-green-600 font-bold text-white px-3 py-6">Add task</button>
        </form>
    )
}