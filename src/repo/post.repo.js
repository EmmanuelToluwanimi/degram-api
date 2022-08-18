const Posts = require("../model/post.model");
const User = require("../model/user.model");

const postOptions = {
    attributes: {
        exclude: ['createdAt', 'updatedAt']
    },
    include: [{
        model: User,
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt']
        }
    }],
    order: [ [ 'createdAt', 'DESC' ]]
}

const getSinglePost = async (postId) => {
    try {
        return await Posts.findOne({
            where: {
                id: postId
            },
            ...postOptions
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
        return await user.getPosts(postOptions);
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
        return await Posts.findAll(postOptions);
    } catch (error) {
        throw error;
    }
}

const verifyPost = async (user, postId) => {
    try {
        return await user.hasPost(postId);
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