import { NextResponse } from 'next/server';

export const GET = async (req: Request, res: NextResponse) => {
    const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const post = await res1.json();

    return Response.json({ post });
};
