// import { Status } from "@/types/enums/Status";
import TaskList from "./TaskList";

interface SubBoardType {
  board_type: String;
}

export default function SubBoard({ board_type }: SubBoardType) {
  return (
    <div className="m-3 p-2 bg-red-500 h-full shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold text-center mt-3">
        {board_type == "todo_tasks"
          ? "Todo"
          : board_type == "inprogress_tasks"
          ? "In-progress"
          : "Completed"}
      </h1>
      <TaskList tasklist_type={board_type} />
    </div>
  );
}
