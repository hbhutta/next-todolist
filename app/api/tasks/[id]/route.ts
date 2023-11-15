import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/Task";
import { NextResponse } from "next/server";

/**
 * Update a task by title
 * @param request
 * @param param1
 */
export async function PUT(request: any, { params }: any) {
  try {
    const { oldTitle } = params;
    const { newTitle, newDescription } = request.json();
    await connectMongoDB();
    await Task.updateOne({ title: oldTitle }, [
      { title: newTitle },
      { description: newDescription },
    ]);
    return NextResponse.json(
      { message: `Task titled ${oldTitle} updated to task titled ${newTitle}.` },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

/**
 * Delete a task by title
 * @param request 
 * @param param1 
 * @returns 
 */
export async function DELETE(request: any, { params }: any) {
  try {
    const { oldTitle } = params;
    await connectMongoDB();
    await Task.updateOne({ title: oldTitle });
    return NextResponse.json(
        { message: `Task titled ${oldTitle} has been deleted.` },
        { status: 201 }
      );
  } catch (e) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
