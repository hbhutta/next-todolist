import { TaskType } from "@/types/TaskType";
import { FaPlus } from "react-icons/fa";

export default function AddTask() {
  return (
    <div className="flex justify-center bg-red-300 p-3 mb-3 rounded-lg border-2 border-red-400 hover:border-4 transition-all duration-200 hover:cursor-pointer">
      <button>
        <FaPlus className="text-2xl text-opacity-80 font-semibold text-red-800" />
      </button>
    </div>
  );

  async function addTask() {
    console.log('Adding task...')
    // const res = await fetch("http://localhost:3000/api/tasks", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ title, description, task_status }),
    // });

    // if (!res.ok) {
    //   throw new Error("Failed to post task.");
    // }
  }
}
