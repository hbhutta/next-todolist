import connectMongoDB from '@/libs/mongodb';
import Person from '@/models/Person';

async function getCount() {
    await connectMongoDB();
    const count = await Person.count({});
    return count;
}


export default getCount;
