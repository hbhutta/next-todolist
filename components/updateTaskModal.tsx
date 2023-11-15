"use client";
import { useState } from "react";
import * as React from "react";

export default function UpdateTaskModal() {
  const formButtons = ["Update", "Delete"].map((button) => (
    <input
      type="submit"
      value={button}
      className={`form-button ${
        button == "Update"
          ? "bg-green-500 hover:bg-green-400 border-green-600"
          : "bg-red-500 hover:bg-red-400 border-red-600"
      }`}
    />
  ));

  /**
   * Update modal layout:
   * - Centered div
   * - Update and cancel buttons/inputs at the bottom end-justified
   */

  return (
    <form className="p-12 bg-slate-200 bg-opacity-50 flex w-1/2 h-fit m-auto rounded-lg border-2 border-zinc-200 flex-col justify-start center">
      <label
        id="task_title"
        className="form-label"
      >
        Title your task:
      </label>
      <input
        type="text"
        placeholder="Another chore..."
        className="form-input"
      ></input>
      <label
        id="task_description"
        className="form-label"
      >
        Describe your task:
      </label>
      <input
        type="text"
        placeholder="Wash the dishes before 6:00 pm"
        className="form-input"
      ></input>
      <div className="form-button-container">{formButtons}</div>
    </form>
  );
}
