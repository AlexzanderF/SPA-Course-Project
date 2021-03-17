module.exports = (err, req, res, next) => {
    if (err.name === "UnauthorizedError") {
        return res.json({ msg: 'Invalid token' });
    }
    next(err, req, res)
}