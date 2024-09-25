const User = require('../Models/user.model.js')
const bcrypt = require('bcrypt')


const userRegisteration = async (req,res) => {
    try {
        
        const {name, email, password} = req.body
        
        if (!name || !email || !password) {
            throw new Error('Fields Can not be empty')
        } 

        let oldUser = await User.findOne({email})

        if (oldUser) {
            throw new Error('This Account Is Already Exist')
        }

        const hashedPass = await bcrypt.hash(password, 10)

        // Create new user
        let newUser = new User({
            userName: name,
            userEmail: email,
            userPass: hashedPass
        })

        // Save new user in database
        let savedUser = await newUser.save()

        //respons with success
        res.status(200).json({
            message: 'user has been registered successfully',
            data: savedUser
        })
        
        


    } catch(er){

            console.log(er.message ? er.message : er);
            res.status(400).json({
                message: 'server error',
                data: er.message ? er.message : er
            })

    }
}

const userLogin = async (req,res) => {
    try {
        const {email, password} = req.body

        if (!email || !password) {
            throw new Error("All Fields Are Required")
        }

        const oldUser = await User.findOne({userEmail: email})
        if (!oldUser) {
            throw new Error("User Not Found!")
        }
        
        const isMatch = await bcrypt.compare(password, oldUser.userPass)
        if (!isMatch) {
            throw new Error("Password is incorrect")
        }

        
        res.status(200).json({
            message : "user signed in sucessfully"
            
        })

    } catch(er) {
        console.log(er.message? er.message : er)

        res.status(400).json({
            message : "server error",
            data : er.message ? er.message : er
        })

    }
}



module.exports = {

    userRegisteration,
    userLogin

}