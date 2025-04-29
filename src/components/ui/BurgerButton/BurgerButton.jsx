import '../../../styles/components/burger-button.scss';
import {useSidebar} from "../../../contexts/SidebarContext.jsx";

export default function BurgerButton() {
    const {isSidebarOpen, toggleSidebar} = useSidebar();

    return (
        <button className={`burger-button ${isSidebarOpen ? ' burger-button_active' : ''}`} onClick={toggleSidebar}>
            <div className={'burger-button__item'}></div>
            <div className={'burger-button__item'}></div>
            <div className={'burger-button__item'}></div>
        </button>
    )
}

