const {
    getAllPosts,
    createPost,
    deletePost,
    getSinglePost,
    getUserPosts,
    verifyPost
} = require("../repo/post.repo");
const { findUserById } = require("../repo/user.repo");


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

const removePost = async (userId, postId) => {
    try {
        const user = await findUserById(userId);
        const check = await verifyPost(user, postId);
        console.log(check);
        if (!check) {
            return {
                message: "You are not authorized to perform this action",
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
        if (!post) {
            return {
                message: "No post found",
                statusCode: 404
            }
        }

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
        if (!user) {
            return {
                message: "No user found",
                statusCode: 404
            }
        }

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