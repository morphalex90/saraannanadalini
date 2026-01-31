import sgMail from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        sgMail.setApiKey(process.env.SENDGRID_API_KEY || '')
        const { name, email, message } = req.body

        const msg = {
            to: 'saraannanadalini@gmail.com',
            from: name + ' <info@saraannanadalini.com>', // Use the email address or domain you verified above
            replyTo: email,
            subject: 'New contact from ' + name + ' <' + email + '>',
            text: message,
            html: message,
        }

        return sgMail
            .send(msg)
            .then(() => {
                // console.log(sent);
                return res.json({ success: true })
            })
            .catch((err) => {
                // console.log(err);
                return res.status(500).json({ error: err.message, success: false })
            })
    }

    return res.status(404).json({
        error: {
            success: false,
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method.",
        },
    })
}

export default sendEmail
