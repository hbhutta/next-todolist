"use client";

import Task from "./Task";

export default async function TaskList() {
  const tasks = await getTasks();
  const tasks_elems = tasks.Tasks.map((task: any) => (
    <Task title={task.title} description={task.description} />
  ));

  /**
   * Get task list filtered by task type from database and
   * map over to transform into displayable elements
   */
  return (
    <div className="bg-zinc-500">
      {tasks_elems}
    </div>
  );
}

async function getTasks() {
  const res = await fetch("http://localhost:3000/api/tasks", {
    // How can we change this link later when the website is deployed?
    cache: "no-store",
  });

  if (!res.ok) {
    alert("Failed to get tasks");
    throw new Error("Failed to get tasks.");
  }

  return res.json();
}
