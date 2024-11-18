//API - GET route
export async function GET() {
    return Response.json({
        message: "Hello from server... api route testing..",
        comments,
    },
        //Set cookie in routes 
        {
            headers: {
                "Set-Cookie": "theme=dark"
            }
        })
}

//API - POST route 
export async function POST(request) {
    const newComment = await request.json();
    comments.push({
        id: comments.length + 1,
        text: newComment.text
    })
    return Response.json({
        message: "new comment add",
        comments,
    })
}

const comments = [
    {
        id: "1",
        text: "comment 1"
    },
    {
        id: "2",
        text: "comment 2"
    },
    {
        id: "3",
        text: "comment 3"
    },
]