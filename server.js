import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()
const app = express();
app.use(express.json());


const allowedOrigins = [
    'http://localhost:5173', 
    'https://patrimonioqually.vercel.app'
];

app.use(cors({
    origin: '*', // Permite todas as origens
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));


//################################################### Rota Get ######################################################################################################

app.get('/Ferramentas', async (req, res) => {
    try {
        const {
            StatusDelete,
            StatusEmprestado,
            TipoDeCadastro,
            Status,
            Empresa,
            CentroDeCusto,
        } = req.query;

        const whereConditions = {};

        if (StatusDelete === 'true' || StatusDelete === 'false') {
            whereConditions.StatusDelete = StatusDelete === 'true';
        }

        if (StatusEmprestado === 'true' || StatusEmprestado === 'false') {
            whereConditions.StatusEmprestado = StatusEmprestado === 'true';
        }
        if (TipoDeCadastro) {
            whereConditions.TipoDeCadastro = TipoDeCadastro;
        }

        if (Status) {
            whereConditions.Status = Status;
        }

        if (Empresa) {
            whereConditions.Empresa = Empresa;
        }

        if (CentroDeCusto) {
            whereConditions.CentroDeCusto = CentroDeCusto;
        }

        const listaFerramenta = await prisma.ferramentas.findMany({
            where: whereConditions,
        });

        res.status(200).json(listaFerramenta);
    } catch (error) {
        console.error('Erro ao buscar ferramentas:', error);
        res.status(500).json({ error: 'Erro ao buscar ferramentas' });
    }
});


app.get('/FerramentaHistorico', async (req, res) => {
    const listaFerramentaHistorico = await prisma.ferramentaHistorico.findMany()
    res.status(200).json(listaFerramentaHistorico)
})

app.get('/Empresa', async (req, res) => {
    const { StatusDelete } = req.query;
    const holding = await prisma.empresa.findMany({
      where: {
        StatusDelete: StatusDelete === 'true' ? true : StatusDelete === 'false' ? false : undefined
      }
    });
  
    res.status(200).json(holding);
  });
  
  // Rota para obter centros de custo
  app.get('/CentroCusto', async (req, res) => {
    const { StatusDelete } = req.query;
    const classe = await prisma.centroCusto.findMany({
      where: {
        StatusDelete: StatusDelete === 'true' ? true : StatusDelete === 'false' ? false : undefined
      }
    });
  
    res.status(200).json(classe);
  });

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
            DataDevolvida: req.body.DataDevolvida,
            StatusEmprestado: req.body.StatusEmprestado
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
            DateAlterado: req.body.DateAlterado,
            StatusEmprestado: req.body.StatusEmprestado
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
            DataDevolvida: req.body.DataDevolvida,
            StatusEmprestado: req.body.StatusEmprestado
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
            DateAlterado: req.body.DateAlterado,
            StatusEmprestado: req.body.StatusEmprestado
        }
    })

    res.status(201).json(req.body)
})

app.put('/Empresa/:id', async (req, res) => {

    await prisma.empresa.update({
        where: {
            id:req.params.id
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
            id:req.params.id
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