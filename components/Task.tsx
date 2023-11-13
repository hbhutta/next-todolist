import { TaskType } from "@/types/TaskType";
import { TfiTrash, TfiWrite } from "react-icons/tfi";

export default function Task({ title, description }: TaskType) {
  return (
    <div className="flex-col justify-start bg-red-300 pl-2 pr-2 mb-3 rounded-lg border border-red-400">
      <div className="flex justify-between">
        <span className="text-3xl font-bold">{title}</span>
        <div className="w-fit p-1 grid grid-rows-1">
          <button onClick={deleteTask}>
            <TfiTrash className="text-red-500 text-lg m-1" />
          </button>
          <TfiWrite className="text-blue-500 text-lg m-1" />
        </div>
      </div>

      <p className="text-lg">{description}</p>
    </div>
  );
}

async function deleteTask() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete task.");
  }
}
