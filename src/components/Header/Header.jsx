import './Header.css'
import logo from '../../assets/Logo_Holding_PortoSeguro_Positivo 2.png'

export default function Header(){

    return(
        <>
            <header>
                <nav>
                    <ul class="nav-list">
                        <li class="nav-item">Seguro</li>
                        <li Class="nav-item">Planos</li>
                        <li Class="nav-item">Desenvolvedores</li>
                        <li Class="nav-item">Links</li>
                        <li Class="nav-item">Ajuda</li>
                    </ul>
                </nav>
                <div id ="linha"></div>
                <h1>Bem vindo novamente!</h1> 
                <img src = {logo} />
            </header>
        </>

    )
}