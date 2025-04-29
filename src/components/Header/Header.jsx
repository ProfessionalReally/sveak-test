import '../../styles/components/header.scss';

export default function Header() {
    return (
        <header className={'header'}>
            <ul className={'header__list'}>
                <li className={'header__item header__item_triangle'}></li>
                <li className={'header__item header__item_circle'}></li>
                <li className={'header__item header__item_square'}></li>
            </ul>
        </header>
    )
}

