import Link from "next/link";


const PostPage = async () => {

    const result = await fetch('http://localhost:5000/posts');
    const posts = await result.json();
    console.log(posts);

    return (
        <div className="m-10">
            <h1 className="my-10 text-center">Total Posts: {posts.length}</h1>
            <div className="grid md:grid-cols-3 gap-4">
                {
                    posts.map(post => <div key={post.id}>
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title">{post.title}</h2>
                                <p>{post.description}</p>
                                <p>Like: {post.likeCount}</p>
                                <div className="card-actions justify-end">
                                    <Link href={`posts/${post.id}`}><button className="btn">View Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PostPage;