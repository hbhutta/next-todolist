import TaskList from "./TaskList";

interface SubBoardType {
  board_type: String;
}

export default function SubBoard() {
  /**
   * We need to filter Task.find() by the type of the task, and each subboard displays
   * the task of the correct type
   */
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Todo</h1>
      <div className="rounded-lg bg-slate-300 p-3 mx-2 my-1">
        <TaskList />
      </div>
    </div>
  );
}
