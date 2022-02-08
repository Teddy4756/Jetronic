const router = require('express').Router();
const funcs_email = require('./utilitaires/envoiDeMail/index');

router.get('/', async (req, res) => {
    try {
        res.render('index.html');
    } catch (error) {
        console.log(error)
    }
});

router.post('/contact', async (req, res) => {
    try {
        console.log(req.body);
        await funcs_email.contact(req.body);
        return res.status(200).json({ reponse: 'ok' });
    } catch(error) {
        console.log(error);
        return res.status(500).json({ reponse: 'Erreur serveur' });
    }
});

module.exports = router;