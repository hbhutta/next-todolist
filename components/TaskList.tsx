"use server";

import AddTask from "./AddTask";
import Task from "./Task";

interface TaskListType {
  tasklist_type: String;
}

export default async function TaskList({ tasklist_type }: TaskListType) {
  let tasks = await getTasks(tasklist_type);
  console.log(tasklist_type);
  console.log(tasks.Tasks);
  const task_elems = tasks.Tasks.map((task: any) => (
    <Task
      title={task.title}
      description={task.description}
      task_status={task.task_status}
    />
  ));

  /**
   * Get task list filtered by task type from database and
   * map over to transform into displayable elements
   */
  return (
    <div className="flex-col p-2 m-3">
      {task_elems}
      <AddTask />
    </div>
  );
}

async function getTasks(tasklist_type: String) {
  // completed_tasks
  const api_get_route = "http://localhost:3000/api/tasks/" + tasklist_type;
  const res = await fetch(api_get_route, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get tasks.");
  }

  return res.json();
}

// async function getInProgressTasks() {
//   const res = await fetch("http://localhost:3000/api/inprogress_tasks", {
//     // How can we change this link later when the website is deployed?
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     alert("Failed to get tasks");
//     throw new Error("Failed to get tasks.");
//   }

//   return res.json();
// }

// async function getTodoTasks() {
//   const res = await fetch("http://localhost:3000/api/todo_tasks", {
//     // How can we change this link later when the website is deployed?
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     alert("Failed to get tasks");
//     throw new Error("Failed to get tasks.");
//   }

//   return res.json();
// }
