import Banner from 'componentes/Banner'
import styles from './Favorito.module.css'
import Titulo from 'componentes/Titulo'
import Card from 'componentes/Card'

function Favoritos() {
    return (
        <>
            <Banner imagem="favoritos" />
            <Titulo>
                <h1>Meus Favoritos</h1>
            </Titulo>
            <section className={styles.container}>
                <Card id='1' titulo='Pyke' capa='https://rare-gallery.com/uploads/posts/330061-Pyke-LoL-4K-iphone-wallpaper.jpg' />
            </section>
        </>
    )
}

export default Favoritos