// import { Status } from "@/types/enums/Status";
import TaskList from "./TaskList";

interface SubBoardType {
  board_type: String;
}

export default function SubBoard({ board_type }: SubBoardType) {
  /**
   * We need to filter Task.find() by the type of the task, and each subboard displays
   * the task of the correct type
   */
  return (
    <div className="m-3 p-2 bg-red-500 h-full">
      <p className="text-center">{
        board_type
      }</p>
      <TaskList tasklist_type={board_type} />
    </div>
  );
}
