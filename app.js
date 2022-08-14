const express = require('express');
const cors = require('cors');
const app = express();

const Home = require('./models/Home');

app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization");
    app.use(cors());
    next();
})

app.get('/', async(req, res) => {

    await Home.findOne({
        attributes: ['text_one', 'text_two', 'text_three', 'btn_title', 'btn_link']
    });
        then( (datahome) => {
            return res.json({
                erro: false,
                datahome
            });
        }).catch( () => {
            return res.status(400).json({
                erro: true,
                mensagem: "Erro: nenhum valor encontrado para a página home!"
        });
    });

});

app.post('/add-home', async(req, res) => {


    const dataHome = await Home.findOne();

    if(dataHome) {

        return res.status(400).json({
            erro: true,
            mensagem: "ERRO: Dados da página home não cadastrados com sucesso!A página home já possui um registro "
        });

    }

    await Home.create(req.body)
    .then( () => {
        return res.json({
            erro: false,
            mensagem: "Dados da página home cadastrados com sucesso"
        }).catch( () => {
            return res.status(400).json({
                erro: true,
                mensagem: "ERRO: Dados da página home não cadastrados com sucesso!"
            })
        })
    })

   
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080');
});