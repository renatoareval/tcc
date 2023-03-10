import { publicacoes } from "../../../../dados"

export default function PublicacoesId(req, res) {

    const { id } = req.query
    const publicacoesFiltrada = publicacoes.find(p => p.id == id)

    res.status(200).json(publicacoesFiltrada)
}