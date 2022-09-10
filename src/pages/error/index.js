import { Error404Style } from './styles/404';

export default function Error404() {
    return (
        <div className='404-page'>
            <main>
                <style>
                    <Error404Style/>
                </style>
                <section>
                    <span>404</span>
                    <p>The requested path could not be found</p>
                </section>
            </main>
        </div>
    )
}