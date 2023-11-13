import { TaskType } from "@/types/TaskType";

export default function Task({title, description} : TaskType) {
    return (
        <div className="flex-col justify-start bg-red-300 pl-2 pr-2 mb-3 rounded-lg border border-red-400">
            <span className="text-3xl font-bold">{title}</span>
            <p className="text-lg">{description}</p>
        </div>
    )
}