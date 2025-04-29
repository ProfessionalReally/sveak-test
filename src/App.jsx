import Header from "./components/Header/Header.jsx";
import Sidebar from "./components/Sidebar/Sidebar.jsx";
import {SidebarProvider} from './contexts/SidebarContext';
import './styles/components/app.scss';
import Card from "./components/Card/Card.jsx";
import Footer from "./components/Footer/Footer.jsx";
import BurgerButton from "./components/ui/BurgerButton/BurgerButton.jsx";
import {LOREM_TEXT, LOREM_TITLE, LOREM_ITEMS} from "./constants/lorem.js";

export default function App() {
    return (
        <SidebarProvider>
            <div className={'app'}>
                <BurgerButton/>
                <Header/>
                <section className={'app__section'}>
                    <main className={'app__main'}>
                        <Sidebar items={LOREM_ITEMS}/>
                        <div className={'app__content-list'}>
                            {LOREM_ITEMS.map((item, index) => (
                                <Card text={item.content} key={index}/>
                            ))}
                        </div>
                    </main>
                    <Footer title={LOREM_TITLE} text={LOREM_TEXT}/>
                </section>
            </div>
        </SidebarProvider>
    )
}

