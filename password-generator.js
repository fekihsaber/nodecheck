const generatePassword=require('generate-password');
function generateRandomPassword() {
    const password=generatePassword.generate({
        length:15,
        numbers: true,
        symbols: true,
        uppercase:true,

    });

    console.log('Generated password:',password);
}
generateRandomPassword();
