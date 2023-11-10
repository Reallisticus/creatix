import clientPromise from '../../lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db(); // Add your database name
    const email = body.email;

    // Add email to your database
    await db.collection('subscribers').insertOne({ email });
    return Response.json(
      { message: 'Success' },
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    if (error instanceof Error) {
      return Response.json(
        { message: error.message },
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    } else {
      return Response.json(
        { message: 'An unknown error occurred' },
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }
  }
}
