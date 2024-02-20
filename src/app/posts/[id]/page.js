

const DetailsPage = async ({ params }) => {

    const result = await fetch(`http://localhost:5000/posts/${params.id}`)
    const post = await result.json();
    return (
        <div>
            <h2>Post Details</h2>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p>{post.description}</p>
                    <p>Like: {post.likeCount}</p>
                    
                </div>
            </div>
        </div>
    )
};

export default DetailsPage;