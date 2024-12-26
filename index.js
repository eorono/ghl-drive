const axios = require('axios');

async function hacerPeticionPost() {
    const url = 'https://oauth2.googleapis.com/token?client_secret=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&grant_type=refresh_token&refresh_token=1//04WKU73IGaknsCgYIARAAGAQSNwF-L9IruroGUp4IfiiS4fALQ644I2_qstg4OnVdpb_uCvZMsFRHQSPezy6-mMgiQjw4cAUElaA&client_id=1057026582635-cg08m195l884alrn1hj87th340lr2sjt.apps.googleusercontent.com';

    try {
        const response = await axios.post(url);
        const accessToken = response.data.access_token;
        return accessToken;
    } catch (error) {
        console.error('Error en la petición:', error);
    }
}

// Ejemplo de uso
hacerPeticionPost().then(accessToken => {
    console.log(accessToken);
});
