import "./style.css";

interface ICard {
    icone?: string;
    cor?: string;
    titulo: string;
    descricao: string;
    tecnologias: string[];
    link: string;
}

export default function Card({ icone, cor, titulo, descricao, tecnologias, link } : ICard ) {
    return (
        <div className="card" style={{ backgroundColor: '#fff' }}>
            <div className="imagem-card" style={{ backgroundColor: cor ?? 'transparent' }}>
                {icone && <img src={icone} alt={titulo} />}
            </div>
            <h3 className="titulo-card">{titulo}</h3>
            <p className="descricao-card">{descricao}</p>
            <div className="tags-card">
                {tecnologias.map((tec, index) => (
                    <div key={index}>{tec}</div>
                ))}
            </div>
            <a href={link} className="projeto-card">Ver Projeto</a>
        </div>
    );
}
