"use client";

import { TaskType } from "@/types/TaskType";
import { TfiTrash, TfiWrite } from "react-icons/tfi";
import useState from "react";
import * as React from "react";
import UpdateTaskModal from "./updateTaskModal";

export default function Task({ title, description }: TaskType) {
  // let [taskState, setTaskState] = useState.useState<TaskType>(
  //   {
  //     title: title,
  //     description: description
  //   }
  // )

  return (
    <div className="flex-col justify-start bg-red-300 pl-2 pr-2 mb-3 rounded-lg border-2 border-red-400">
      <div className="flex justify-between">
        <span className="text-xl font-semibold">{title}</span>
        <div className="flex items-start">
          <button onClick={displayUpdateModal}>
            <TfiWrite className="text-blue-500 text-lg m-1" />
          </button>
          <button>
            <TfiTrash className="text-red-500 text-lg m-1" />
          </button>
        </div>
      </div>
      <p className="text-base">{description}</p>
    </div>
  );
}

/**
 * Deletes this task
 * @returns
 */


// const deleteThisTask = async (e: any, taskTitle: String) => {
//   e.preventDefault();
//   const res = await fetch("http://localhost:3000/api/" + taskTitle, {
//     method: "DELETE",
//   });

//   if (!res.ok) {
//     throw new Error("Failed to delete task.");
//   }
//   return;
// }
// async function deleteThisTask(taskTitle: String) {
  // const res = await fetch("http://localhost:3000/api/" + taskTitle, {
  //   method: "DELETE",
  // });

  // if (!res.ok) {
  //   throw new Error("Failed to delete task.");
  // }
// }

function displayUpdateModal() {

}

/**
 * Updates this task
 * @returns
 */
async function updateThisTask(taskTitle: String) {
  return;
}
