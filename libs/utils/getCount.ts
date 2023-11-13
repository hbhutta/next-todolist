import connectMongoDB from '@/libs/mongodb';
import Person from '@/models/Person';

export default async function getCount() {
    await connectMongoDB();
    const count = await Person.count();
    return count;
}

