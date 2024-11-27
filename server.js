import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}))

app.get('/Ferramentas',  async (req, res) => {
    
    const listaFerramenta = await prisma.ferramentas.findMany()

    res.status(200).json(listaFerramenta)

})

app.post('/Ferramentas', async (req, res) => {

    await prisma.ferramentas.create({
        data: {
            Nome: req.body.Nome,             
            Valor: req.body.Valor,           
            Patrimonio: req.body.Patrimonio,        
            Observacao: req.body.Observacao,       
            Empresa: req.body.Empresa,           
            CentroDeCusto: req.body.CentroDeCusto,     
            NomeDeResponsavel: req.body.NomeDeResponsavel, 
            TipoDeCadastro: req.body.TipoDeCadastro,    
            Status:req.body.Status,
            StatusDelete:req.body.StatusDelete,
            ObsEmprestado:req.body.ObsEmprestado,
            ResponsavelEmprestado:req.body.ResponsavelEmprestado,
            DataEmprestado:req.body.DataEmprestado,
            DataDevolvida: req.body.DataDevolvida
        }
    })

    res.status(201).json(req.body)
})

app.put('/Ferramentas/:id', async (req, res) => {

    await prisma.ferramentas.update({
        where: {
            id:req.params.id
        },
        data: {
            Nome: req.body.Nome,             
            Valor: req.body.Valor,           
            Patrimonio: req.body.Patrimonio,        
            Observacao: req.body.Observacao,       
            Empresa: req.body.Empresa,           
            CentroDeCusto: req.body.CentroDeCusto,     
            NomeDeResponsavel: req.body.NomeDeResponsavel, 
            TipoDeCadastro: req.body.TipoDeCadastro,    
            Status:req.body.Status,
            StatusDelete:req.body.StatusDelete,
            ObsEmprestado:req.body.ObsEmprestado,
            ResponsavelEmprestado:req.body.ResponsavelEmprestado,
            DataEmprestado:req.body.DataEmprestado,
            DataDevolvida: req.body.DataDevolvida
        }
    })

    res.status(201).json(req.body)
})

app.delete('/Ferramentas/:id', async (req, res) => {

    await prisma.ferramentas.delete({
        where: {
            id:req.params.id
        },
    })
    res.status(201).json({message: "Usuario Deletado com Sucesso!"})
})



app.listen(3000);

