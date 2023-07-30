const nodemailer = require('nodemailer');
const mailgen = require('mailgen');
const { EMAIL, PASSWORD }= require('../.env')


const signup =  (req, res) => {
   

     res.status(201).json("getbill sucessful...") 
    }


const getbill = (req, res) => {
    const { userEmail,username } = req.body


        let config = {
            service: 'gmail',
            auth: {
                user: EMAIL,
                pass:PASSWORD
            }
       
    }

    let transporter = nodemailer.createTransport(config)

    let Mailgenerator = new mailgen({
        theme: "default",
        product: {
            name: "mailgen",
            link:"https://mailgen.js/"
        }
    })

    let response = {
        body: {
            name:username,
            intro: "your bill just arrived",
            table: {
                data: {
                    item: "nodemailer stack book",
                    description: "A Backend stack application",
                    price:"100 naira"
                }
            }
        },
        outro:"Looking forward to do biz with you"

    }
    let mail = Mailgenerator.generate(response)
    let message = {
        from: EMAIL,
        to: userEmail,
        subject: 'Place Order',
        html:mail
    }
    transporter.sendMail(message).then(() => {
        return res.status(201).json({
            msg: "check your inbox, you should have an email"
        })
    }).catch(error => {
           return res.status(500).json({error})
        })
 
//    res.status(201).json("getbill sucessful...")   
}


module.exports = {
    signup,
    getbill
}