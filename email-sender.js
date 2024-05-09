const nodemailer=require('nodemailer');
const transporter=nodemailer.createTransport({
    service:'Gmail',
    auth:{
        user:'',
        pass:'',

    },
});

const mailOptions={
    from:'',
    to:'',
    subject:'Test my first server',
    text:'Hello from Node.js',
};

transporter.sendMail(mailOptions,(error,info)=>{
    if (error) {
        console.error('Error sending email:',error);
    }else{
        console.log('Email sent:',info.response);
    }
    
});