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


//################################################### Rota Get ######################################################################################################


app.get('/Ferramentas',  async (req, res) => {
    
    const listaFerramenta = await prisma.ferramentas.findMany()

    res.status(200).json(listaFerramenta)

})

app.get('/FerramentaHistorico',  async (req, res) => {
    
    const listaFerramenta = await prisma.ferramentaHistorico.findMany()

    res.status(200).json(listaFerramenta)

})

app.get('/Empresa',  async (req, res) => {
    
    const holding = await prisma.empresa.findMany()

    res.status(200).json(holding)

})

app.get('/CentroCusto',  async (req, res) => {
    
    const Classe = await prisma.centroCusto.findMany()

    res.status(200).json(Classe)

})

//################################################### Rota Post ######################################################################################################


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

app.post('/FerramentaHistorico', async (req, res) => {

    await prisma.ferramentaHistorico.create({
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
            DataDevolvida: req.body.DataDevolvida,
            DateAlterado: req.body.DateAlterado
        }
    })

    res.status(201).json(req.body)
})

app.post('/Empresa', async (req, res) => {

    await prisma.empresa.create({
        data: {
            Empresa: req.body.Empresa,
            StatusDelete: req.body.StatusDelete
        }
    })

    res.status(201).json(req.body)
})

app.post('/CentroCusto', async (req, res) => {

    await prisma.centroCusto.create({
        data: {
            CentroCusto: req.body.CentroCusto,
            StatusDelete: req.body.StatusDelete
        }
    })

    res.status(201).json(req.body)
})

//################################################### Rota Put ######################################################################################################

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


app.put('/FerramentaHistorico/:id', async (req, res) => {

    await prisma.ferramentaHistorico.update({
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
            DataDevolvida: req.body.DataDevolvida,
            DateAlterado: req.body.DateAlterado
        }
    })

    res.status(201).json(req.body)
})

app.put('/Empresa/:id', async (req, res) => {

    await prisma.empresa.update({
        where: {
            id:req.body.id
        },
        data: {
            Empresa: req.body.Empresa,
            StatusDelete: req.body.StatusDelete
        }
    })

    res.status(201).json(req.body)
})

app.put('/CentroCusto/:id', async (req, res) => {

    await prisma.centroCusto.update({
        where:{
            id:req.body.id
        },
        data: {
            CentroCusto: req.body.CentroCusto,
            StatusDelete: req.body.StatusDelete
        }
    })

    res.status(201).json(req.body)
})

//################################################### Rota Delete ######################################################################################################


app.delete('/Ferramentas/:id', async (req, res) => {

    await prisma.ferramentas.delete({
        where: {
            id:req.params.id
        },
    })
    res.status(201).json({message: "Usuario Deletado com Sucesso!"})
})


app.delete('/FerramentaHistorico/:id', async (req, res) => {

    await prisma.ferramentaHistorico.delete({
        where: {
            id:req.params.id
        },
    })
    res.status(201).json({message: "Usuario Deletado com Sucesso!"})
})



app.listen(3000);

