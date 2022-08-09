const PORT = process.env.PORT || 5000;
const ROUTES = {
  HEALTHCHECK: "/api/healthcheck",
  AUTH: "/api/auth",
  USER: "/api/user",
  POST: "/api/posts",
  LOGIN: "/login",
  REGISTER: "/register",
  FOLLOW: "/follow/:id",
  UNFOLLOW: "/unfollow/:id",
  GET_FOLLOWERS: "/followers",
  GET_FOLLOWING: "/following",
  ID: "/:id",
  INDEX: "/",
};

/**
 * Handles management of all failed requests
 * @param res http response object
 */
function errorResponse({
  res,
  message,
  error,
  status,
  statusCode = 500,
}) {
  res.status(statusCode).json({ status, message, ...(error && { error }) });
}

/**
 * Handles sending responses to the front end.
 * @param res http response object
 */
function okResponse({
  res,
  message,
  data,
  status,
  statusCode = 200,
}) {
  res.status(statusCode).json({ status, message, ...(data && { data }) });
}

module.exports = { PORT, ROUTES, errorResponse, okResponse };
