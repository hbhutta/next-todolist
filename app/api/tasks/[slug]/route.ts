import connectMongoDB from "@/libs/mongodb";
import Task from "@/models/Task";
import { TaskType } from "@/types/TaskType";
import { NextResponse } from "next/server";

/**
 * In PUT and DELETE we are assuming that task title is unique
 * We don't want to use the default id that MongoDB gives each task because
 * it's not human-readable and hard to understand
 */

/**
 * Update a task by title
 * @param request
 * @param param1
 */
export async function PUT(
  request: any,
  { params }: { params: { slug: string } }
) {
  const oldTitle = params.slug  // Replace any underscores with whitespace that was originally there
  const { title, description, task_status, task_id } = request.json();
  try {
    await connectMongoDB();
    const filter = { title: oldTitle };
    const update: TaskType = {
      title: title,
      description: description,
      task_status: task_status,
      task_id: task_id
    };
    await Task.findOneAndUpdate(filter, update);
    return NextResponse.json(
      {
        message: `Task titled ${oldTitle} updated. Recieved params: ${params}`,
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: `Error, ${oldTitle}`,
      },
      { status: 500 }
    );
  }
}

/**
 * Delete a task by title
 * @param request
 * @param param1
 * @returns
 */
export async function DELETE( // Done
  request: any,
  { params }: { params: { slug: any } }
) {
  console.log(params);
  console.log(params.slug); // task._id
  const toDeleteId = params.slug; //  params.slug.replace("_", "/s/g"); // Replace any underscores with whitespace that was originally there
  try {
    await connectMongoDB();
    // const filter = { title: toDeleteTitle };
    await Task.findByIdAndDelete(toDeleteId);
    return NextResponse.json(
      {
        message: `[DELETE Success] Task with ID: ${toDeleteId} deleted. Recieved params: ${params}. Recieved slug: ${params.slug}.`,
        // message: `Success, ${id}`,
      },
      { status: 201 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        message: `[DELETE Error] Task with ID: ${toDeleteId} could not be deleted! Recieved params: ${params}. Recieved slug: ${params.slug}`,
      },
      { status: 500 }
    );
  }
}
