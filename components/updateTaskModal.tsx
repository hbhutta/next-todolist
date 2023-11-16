"use client";
import { useState } from "react";
import * as React from "react";

export default function UpdateTaskPopUp() {
  const formButtons = [
    {
      text: "Update",
      function: () => {
        // Update task (make PUT request)
        // TODO
      },
    },
    {
      text: "Cancel",
      function: () => {
        // Cancel task update
      },
    },
  ];
  const formButtonElems = formButtons.map((button) => (
    <input
      type="submit"
      value={button.text}
      onClick={button.function}
      className={`form-button ${
        button.text == "Update"
          ? "bg-green-500 hover:bg-green-400 border-green-600"
          : "bg-red-500 hover:bg-red-400 border-red-600"
      }`}
    />
  ));

  /**
   * Update pop-up layout:
   * - Centered div
   * - Update and cancel buttons/inputs at the bottom end-justified
   */

  return (
    <form className="p-12 bg-slate-200 bg-opacity-50 flex w-1/2 h-fit m-auto rounded-lg border-2 border-zinc-200 flex-col justify-start center">
      <label id="task_title" className="form-label">
        Title your task:
      </label>
      <input
        type="text"
        placeholder="Another chore..."
        className="form-input"
      ></input>
      <label id="task_description" className="form-label">
        Describe your task:
      </label>
      <input
        type="text"
        placeholder="Wash the dishes before 6:00 pm"
        className="form-input"
      ></input>
      <div className="form-button-container">{formButtonElems}</div>
    </form>
  );
}

async function updateThisTask(title: String) {
  // const title = .replace('/\s/g', '_');

  console.log("Deleting task...");
  const res = await fetch("http://localhost:3000/api/tasks/" + title, {
    method: "PUT",
  });

  if (!res.ok) {
    throw new Error(`Failed to update task titled ${title}`);
  }
}
