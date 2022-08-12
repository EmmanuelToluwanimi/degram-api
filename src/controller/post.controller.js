const {
    allPosts,
    addPost,
    removePost,
    singlePost,
    getAllUserPosts
} = require("../service/post.service");
const { errorResponse, okResponse } = require("../utils/constants");


const createPostController = async (req, res) => {
   
    try {
        const {id} = req?.user;
        const {post} = req.body;

        const {posts} = await addPost(id, post)

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Post created successfully",
            data: posts
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing request",
        })
    }
}

const getAllPostsController = async (req, res) => {
   
    try {
        const {posts} = await allPosts()

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: posts
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing request",
        })
    }
}

const deletePostController = async (req, res) => {
   
    try {
        const {id} = req.params;
        const {posts} = await removePost(id)

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Post deleted successfully",
            data: posts
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing request",
        })
    }
}

const getSinglePostController = async (req, res) => {
       
    try {

        const {id} = req.params;
        const {post} = await singlePost(id)
        
        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: post
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing request",
        })
    }
}

const getAllUserPostsController = async (req, res) => {
       
    try {

        const {id} = req?.user;
        const {posts} = await getAllUserPosts(id)

        return okResponse({
            res,
            status: "success",
            statusCode: 200,
            message: "Successful request",
            data: posts
        })
    } catch (error) {
        console.log(error?.message || error);
        return errorResponse({
            res,
            status: "fail",
            message: "Error occurred while processing request",
        })
    }
}

module.exports = {
    createPostController,
    getAllPostsController,
    deletePostController,
    getSinglePostController,
    getAllUserPostsController
}