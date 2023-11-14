// "use client";

import React from "react";
import Board from "@/components/Board";

export default function Home() {
  // const router = useRouter();

  // const defaultPostInput: TaskType = {
  //   title: "some_title",
  //   description: "some_desc",
  // };

  // const [taskInput, setTaskInput] = useState<TaskType>(defaultPostInput);

  // const METHODS = [
  //   {
  //     method: "DELETE",
  //     function: async function deleteTask() {
  //       const res = await fetch("http://localhost:3000/api/tasks", {
  //         method: "DELETE",
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to delete task.");
  //       }
  //     },
  //   },
  //   {
  //     method: "POST",
  //     function: async function postTask() {
  //       const res = await fetch("http://localhost:3000/api/tasks", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(taskInput),
  //       });

  //       if (!res.ok) {
  //         throw new Error("Failed to post task.");
  //       }
  //     },
  //   },
  // ];

  // const methods_elems = METHODS.map((method) => (
  //   <button
  //     onClick={method.function}
  //     className={`${
  //       method.method == "POST"
  //         ? "bg-blue-500 shadow-blue-500  hover:bg-blue-300"
  //         : method.method == "DELETE"
  //         ? "bg-red-500 shadow-red-500 hover:bg-red-300"
  //         // : method.method == "GET"
  //         // ? "bg-green-500 shadow-green-500 border-green-500 hover:border-green-600 hover:bg-green-700"
  //         : ``
  //     } http-button`}
  //   >
  //     {method.method.toLocaleLowerCase()}
  //   </button>
  // ));

  // const tasks = await getTasks();
  // const tasks_elems = tasks.Tasks.map((task: any) => (
  //   <Task title={task.title} description={task.description} />
  // ));

  return (
    <Board/>
  );
}

// async function getTasks() {
//   const res = await fetch("http://localhost:3000/api/tasks", {
//     // How can we change this link later when the website is deployed?
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     alert("Failed to get tasks");
//     throw new Error("Failed to get tasks.");
//   }

//   return res.json();
// }
