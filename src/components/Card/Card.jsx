import '../../styles/components/card.scss';

export default function Card({text}) {
    return (
        <article className={'card'}>
            <p className={'card__text'}>
                {text}
            </p>
        </article>
    )
}

