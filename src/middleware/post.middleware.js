const postSchema = require("../schema/post.schema");
const { errorResponse, formatJoiMessage } = require("../utils/constants");
const multer = require("multer");

const validatePostInput = (req, res, next) => {
  const { imgUrl, caption } = req.body;
  if (!imgUrl && !caption) {
    const message = "Please provide all required fields";
    return errorResponse({
      res,
      statusCode: 422,
      status: "fail",
      message,
    });
  }

  const { error } = postSchema.validate(req.body);
  if (error?.message) {
    const message = formatJoiMessage(error.message);
    console.log(error?.message || error);
    return errorResponse({
      res,
      statusCode: 422,
      status: "fail",
      message,
    });
  }

  next();
};

const validatePostQuery = (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    const message = "Please provide all required fields";
    return errorResponse({
      res,
      statusCode: 422,
      status: "fail",
      message,
    });
  }

  next();
};

const generateRandomeNumber = () => {
  return Math.floor(Math.random() * 1000000).toString();
};

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, generateRandomeNumber()+file.originalname);
  },
});

const uploadImage = multer({ storage: storage });

module.exports = { validatePostInput, validatePostQuery, uploadImage };
