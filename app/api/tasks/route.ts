import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

export async function POST(request: any) {
  await connectMongoDB(); // Create connection instance to database
  try {
    const { title, description } = await request.json(); // Destructure JSON
    await Task.create({ title, description }); // Create (and save) a new entry into the database with data from the JSON
    return NextResponse.json({ message: "Task Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export async function GET(request: any, title: String) {
  await connectMongoDB();
  const Tasks = await Task.find({});
  return NextResponse.json({ Tasks });
}

export async function DELETE(request: any) {
  await connectMongoDB();
  await Task.deleteOne({});
  return NextResponse.json({ message: "Task deleted" }, { status: 201 });
}

// export async function getCount(request: any) {
//   await connectMongoDB();
//   const count = Task.count({});
//   return NextResponse.json({ count });
// }
