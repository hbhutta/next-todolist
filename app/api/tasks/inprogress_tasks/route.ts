import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

// export async function POST(request: any) {
//   await connectMongoDB(); // Create connection instance to database
//   try {
//     const { title, description, task_status } = await request.json();
//     await Task.create({ title, description, task_status });
//     return NextResponse.json({ message: "Task Created" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error" }, { status: 500 });
//   }
// }

export async function GET(request: any) {
  await connectMongoDB();
  const Tasks = await Task.find({ task_status: "in-progress" });
  return NextResponse.json({ Tasks });
}

// export async function DELETE(request: any) {
//   try {
//     await connectMongoDB();
//     await Task.deleteOne({});
//     return NextResponse.json({ message: "Task deleted" }, { status: 201 });
//   } catch (error) {
//     return NextResponse.json({ message: "Error" }, { status: 500 });
//   }
// }
