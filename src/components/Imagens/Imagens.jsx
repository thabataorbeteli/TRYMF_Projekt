import './Imagens.css'
import homem from '../../assets/Cetico-800x500px_Prancheta-1-scaled-1200x628-cropped 1.png'
import serviços from '../../assets/porto-1140x641 1.png'

export default function Imagens(){

    return(
        <>
           <section class ="imagens">
                <img id = "imagem1" src = {homem} />
                <img id = "imagem2" src = {serviços} />
            </section>
        </>
    )
}