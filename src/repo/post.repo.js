const Posts = require("../model/post.model");
const User = require("../model/user.model");

const getSinglePost = async (postId) => {
    try {
        return await Posts.findOne({
            where: {
                id: postId
            }
        });
    } catch (error) {
        throw error;
    }
}

const createPost = async (user, post) => {
    try {
        return await user.createPost(post);
    } catch (error) {
        throw error;
    }
}

const getUserPosts = async (user) => {
    try {
        return await user.getPost();
    } catch (error) {
        throw error;
    }
}

const deletePost = async (postId) => {
    try {
        return await Posts.destroy({
            where: {
                id: postId
            }
        })
    } catch (error) {
        throw error;
    }
}

const getAllPosts = async () => {
    try {
        return await Posts.findAll();
    } catch (error) {
        throw error;
    }
}

const verifyPost = async (user, postId) => {
    try {
        const post = await getSinglePost(postId);
        if (post.userId === user.id) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getSinglePost,
    createPost,
    getUserPosts,
    deletePost,
    getAllPosts,
    verifyPost
}