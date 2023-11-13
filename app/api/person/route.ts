import connectMongoDB from "@/libs/mongodb";
import Person from "@/models/Person";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function POST(request: any) {
  await connectMongoDB(); // Create connection instance to database
  try {
    const { name } = await request.json(); // Destructure JSON
    await Person.create({ name }); // Create (and save) a new entry into the database with data from the JSON
    return NextResponse.json({ message: "Person Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}

export async function GET(request: any) {
  await connectMongoDB();
  const persons = await Person.find({});
  return NextResponse.json({ persons });
}

export async function DELETE(request: any) {
  await connectMongoDB();
  await Person.deleteOne({});
  return NextResponse.json({ message: "Person deleted" }, { status: 201 });
}

export async function getCount(request: any) {
  await connectMongoDB();
  const count = Person.count({});
  return NextResponse.json({ count });
}
