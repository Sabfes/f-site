const Router = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwv = require('jsonwebtoken')
const config = require('config')
const {check, validationResult} = require('express-validator')
const router = new Router()
const authMiddleware = require('../midlleware/auth.middleware')

router.post('/registration',
    [
        check('email', 'Uncorrect email').isEmail(),
        check('password', 'Password > 3 and < 12').isLength({min: 3, max: 12,})
    ] ,
    async (req, res)=> {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({message: 'Uncorrected request', errors})
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: `user with email ${email} already exist`})
            }

            const hashPassword = await bcrypt.hash(password, 1)
            const user = new User({email, password: hashPassword})
            await user.save()
            return res.json({message: 'User was created'})

        } catch (error) {
            console.log(error)
            res.send({message: 'Server error'})
        }
})


router.post('/login',
    async (req, res)=> {
        try {

            const {email, password} = req.body
            const user = await User.findOne({email})

            if (!user) {
                return res.status(404).json({message: "user not found"})
            }

            const isPassValid = bcrypt.compareSync(password, user.password)

            if (!isPassValid) {
                console.log(password)
                return res.status(400).json({message: "Invalid password"})
            }

            const token = jwv.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'})

            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    userSpace: user.userSpace,
                    avatar: user.avatar
                }
            })

        } catch (error) {
            console.log(error)
            res.send({message: 'Server error'})
        }
})

router.get('/auth', authMiddleware,
    async (req, res)=> {
        try {
            const user = await User.findOne({_id: req.user.id})
            const token = jwv.sign({id: user.id}, config.get('secretKey'), {expiresIn: '1h'})
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    userSpace: user.userSpace,
                    avatar: user.avatar
                }
            })
        } catch (error) {
            res.send({message: 'Server error'})
        }
    })


module.exports = router
