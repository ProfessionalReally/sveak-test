import '../../styles/components/sidebar.scss';
import {useSidebar} from "../../contexts/SidebarContext.jsx";

export default function Sidebar({items}) {
    const {isSidebarOpen} = useSidebar();

    return (
        <aside className={`sidebar ${isSidebarOpen ? ' sidebar--open' : ''}`}>
            <div className={'sidebar__content'}>
                <ul className={'sidebar__list'}>
                    {items.map((item, index) => (
                        <li className={'sidebar__item'} key={index}>
                            <div className={'sidebar__icon'}></div>
                            <p className={'sidebar__text'}>
                                {item.content}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}

