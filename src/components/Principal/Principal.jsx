import './Principal.css'

export default function Principal(){

    return(
        <>
             <section class = "principal">
                <div class = "informacoes">
                    <div id = "integrantes">
                        <h1><span>TRYMF PROJEKT</span></h1>
                        <h1>Desenvolvedores</h1>
                        <ul>
                            <li>Mateus Viana Batista - RM 99530</li>
                            <li>Michael José Bernardi da Silva - RM 99409</li>
                            <li>Ricardo Correia Temple - RM 99721</li>
                            <li>Thábata Orbeteli Viotto Santos - RM 550268</li>
                            <li>Yago Taguchi Ruksenas - RM 97827</li>
                        </ul>
                    </div>
                    <div id = "links">
                        <h1>LINKS</h1>
                        <ul>
                            <li><span>E-mail: </span>trymfproject@gmail.com</li>
                            <br />
                            <br />
                            <li><a href = "https://github.com/thabataorbeteli/TRYMF_Projekt.git"><span>Repositório Gitbhub</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class = 'acionamento'>
                    <div id = "caixa">
                        <h1><span>ACIONAR SEGURO</span></h1>
                        <ul>
                            <li> 
                                <label for="placaVeiculo">Placa do Veículo:</label>
                                {'\n'}
                                <input type="text" id="placaVeiculo" placeholder="Placa do Veículo" />
                            </li>
                            <li>
                                <label for="cpfCnpj">CPF ou CNPJ:</label>
                                {'\n'}
                                <input type="text" id="cpfCnpj" placeholder="CPF ou CNPJ" />
                            </li>
                            <li>
                                <button name="acionarButton"><span>ACIONAR</span></button>
                            </li>
                        </ul>
                    </div>
                    <div id = "chatbot">
                        <div id = "conversa"></div>
                    </div>
                </div>
            </section>
        </>
    )
}