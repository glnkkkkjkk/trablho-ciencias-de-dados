import { getCSS, tickConfig } from "./common.js"
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
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Redes sociais com mais usuários',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                color: getCSS('--font')
            }
        },
        xaxis: {
            tickfront: tickConfig
            title: {
                text: "Nome das redes",
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Bilhões de usuários ativos',
                font: {
                    color: getCSS("--secondary-color")
                }

            }
        }
    }

    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('garfico-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidaedeUsuariosPorRede()
