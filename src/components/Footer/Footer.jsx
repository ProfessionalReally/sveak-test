import '../../styles/components/footer.scss';

export default function Footer({title, text}) {
    return (
        <footer className={'footer'}>
            <h3 className={'footer__title'}>
                {title}
            </h3>
            <p className={'footer__text'}>
                {text}
            </p>
        </footer>
    )
}

