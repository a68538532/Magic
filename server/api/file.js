var path = require('path'),
    fs = require('fs')
var router = require('express').Router()

router.get('/:url', (req, res) => {
    let url = req.params.url
    url = decodeURI(url)

    res.sendFile(
        path.resolve(__dirname, '../imgs/' + url)
    )
})

module.exports = router