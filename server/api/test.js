var router = require('express').Router()

router.get('/', (req, res) => {
    res.send({
        data: 'test'
    })
    res.end()
})

router.get('/test', (req, res) => {
    let query = req.query
    console.log(query)
    res.send({
        query
    })
    res.end()
})

module.exports = router