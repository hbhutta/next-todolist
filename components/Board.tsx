

// import { Status } from "@/types/enums/Status";
import SubBoard from "./SubBoard";

export default function Board() {
  return (
    <div className="m-auto grid grid-cols-3 items-center w-full h-full">
        {/* <p>testing bbboard</p> */}
      <SubBoard board_type="todo_tasks" />
      <SubBoard board_type="inprogress_tasks" />
      <SubBoard board_type="completed_tasks" />
    </div>
  );
}
