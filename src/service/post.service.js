const {
    getAllPosts,
    createPost,
    deletePost,
    getSinglePost,
    getUserPosts,
    verifyPost
} = require("../repo/post.repo");


const allPosts = async () => {
    try {
        const posts = await getAllPosts();
        return {
            posts
        }
    } catch (error) {
        throw error;
    }
}

const addPost = async (userId, post) => {
    try {
        const user = await findUserById(userId);
        await createPost(user, post);

        const posts = await getAllPosts();
        return {
            posts
        }
        return;
    } catch (error) {
        throw error;
    }
}

const removePost = async (postId) => {
    try {

        const check = await verifyPost(postId);
        if (!check) {
            return {
                message: "You are not authorized to delete this post",
                statusCode: 401
            }
        }
        await deletePost(postId);
        
        const posts = await getAllPosts();
        return {
            posts
        }
    } catch (error) {
        throw error;
    }
}

const singlePost = async (postId) => {
    try {
        const post = await getSinglePost(postId);
        return {
            post
        }
    } catch (error) {
        throw error;
    }
}

const getAllUserPosts = async (userId) => {
    try {
        const user = await findUserById(userId);
        const posts = await getUserPosts(user);
        return {
            posts
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    allPosts,
    addPost,
    removePost,
    singlePost,
    getAllUserPosts
}