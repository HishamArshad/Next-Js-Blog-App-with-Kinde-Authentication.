import prisma from "@/lib/db";

const SinglePost = async ({ params }) => {
  const { id } = params;

  try {
    const postId = parseInt(id);
    if (isNaN(postId)) {
      throw new Error("Invalid ID format. Please provide a numeric ID.");
    }

    const post = await prisma.post.findUnique({
      where: {
        id: postId,
      },
    });

    if (!post) {
      return (
        <div className="px-5 pt-32 text-center">
          <h1 className="text-4xl md:text-5xl mb-5 font-bold">
            Post Not Found
          </h1>
          <p className="max-w-[750px] mx-auto leading-8">
            The post you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      );
    }

    return (
      <div className="px-5 pt-32 text-center">
        <h1 className="text-4xl md:text-5xl mb-5 font-bold">{post.title}</h1>
        <p className="max-w-[750px] mx-auto leading-8">{post.body}</p>
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return (
      <div className="px-5 pt-32 text-center">
        <h1 className="text-4xl md:text-5xl mb-5 font-bold">Error</h1>
        <p className="max-w-[750px] mx-auto leading-8">
          {error.message || "An unexpected error occurred. Please try again later."}
        </p>
      </div>
    );
  }
};

export default SinglePost;
