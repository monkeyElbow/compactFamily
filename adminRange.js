module.exports = (req, res, next) => {
    res.header('Content-Range', 'posts 0-20/20')
    next()
}

// this doesn't seem to be necessary for admin