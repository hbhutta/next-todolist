"use client";

import { TaskType } from "@/types/TaskType";
import { TfiTrash, TfiWrite } from "react-icons/tfi";
import * as React from "react";


export default function Task({ title, description }: TaskType) {

  return (
    <div className="flex-col justify-start bg-red-300 pl-2 pr-2 mb-3 rounded-lg border-2 border-red-400">
      <div className="flex justify-between">
        <span className="text-xl font-semibold">{title}</span>
        <div className="flex items-start">
          <button onClick={displayUpdateTaskModal}>
            <TfiWrite className="text-blue-500 text-lg m-1" />
          </button>
          <button onClick={deleteThisTask}>
            <TfiTrash className="text-red-500 text-lg m-1 hover:text-red-600 hover:text-xl transition-all duration-200" />
          </button>
        </div>
      </div>
      <p className="text-base">{description}</p>
    </div>
  );

  async function deleteThisTask() {
    console.log('Deleting task...')
    const res = await fetch("http://localhost:3000/api/tasks/" + title, {
      method: "DELETE",
    });
  
    if (!res.ok) {
      throw new Error("Failed to delete task.");
    }
  }

  /**
   * 1. Display update modal
   * 2. Update (or cancel upaate) options will be in the modal
   */
    function displayUpdateTaskModal() {

    }
}

