import { getCSS } from "./common.js"
async function quantidaedeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fatch(url)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y:quantidadeDeUsuarios,
            type: 'bar' ,
            maker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color')
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('garfico-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidaedeUsuariosPorRede()