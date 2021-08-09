module.exports = (req, res, next) => {
    console.log('__Request__ ',`path: ${req.path} , method: ${req.method}`);

    next();
};