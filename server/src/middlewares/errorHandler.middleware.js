//! server.js, after all routes to handle errors

const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  const status = err.status || 500;

  res.status(status).json({
    success: false,
    message: err.message || "Something went wrong",
  });
};

export default errorHandler;