const sendVerificationEmail = (emailObject) => {
    console.log(`sending verification email to ${emailObject.email}`)
}

const sendWelcomeEmail = (emailObject) => {
    console.log(`sending Welcome email to ${emailObject.email}`)
}

module.exports = {
    verifyEmail: sendVerificationEmail,
    sendWelcomeEmail: sendWelcomeEmail
}

