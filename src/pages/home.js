import { GlobalStyles } from '../global-styles';
import Navbar from '../components/Navbar/Navbar';
import { FooterContainer } from '../containers/footer';

export default function Home() {
    return (
        <div className='home-page'>
            <header>
                <Navbar/>
            </header>
            <GlobalStyles></GlobalStyles>

            <h1 align="center">ZBI LA MOUCHE</h1>

            <footer>
                <FooterContainer/>
            </footer>
        </div>
    )
}