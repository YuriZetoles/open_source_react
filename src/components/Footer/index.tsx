import "./style.css";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-description">
                        <p>
                            Código aberto (do inglês Open Source) é o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto" target="_blank" rel="noopener noreferrer">código-fonte</a> que é disponibilizado gratuitamente para consulta, exame, modificação e redistribuição. Os produtos incluem permissão para usar o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte" target="_blank" rel="noopener noreferrer">código-fonte</a>, documentos de design ou conteúdo do produto.
                        </p>
                        <p>
                            Fonte: <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto" target="_blank" rel="noopener noreferrer">https://pt.wikipedia.org/wiki/C%C3%B3digo_aberto</a>
                        </p>
                        <p>
                            Software livre é o software que concede liberdade ao usuário para executar, acessar e modificar o <a href="https://pt.wikipedia.org/wiki/C%C3%B3digo-fonte" target="_blank" rel="noopener noreferrer">código fonte</a>, e redistribuir cópias com ou sem modificações. Sua definição é estabelecida pela <a href="https://www.fsf.org/" target="_blank" rel="noopener noreferrer">Free Software Foundation</a> em conjunto com o projeto <a href="https://www.gnu.org/" target="_blank" rel="noopener noreferrer">GNU</a>.
                        </p>
                        <p>
                            Fonte: <a className="footer-highlight" href="https://pt.wikipedia.org/wiki/Software_livre" target="_blank" rel="noopener noreferrer">https://pt.wikipedia.org/wiki/Software_livre</a>
                        </p>
                    </div>
                </div>
            </footer>
            <div className="footer-logos-bar">
                <div className="footer-logos">
                    <img src="/images/ifro.png" alt="INSTITUTO FEDERAL Rondônia" />
                    <img src="/images/fslab.png" alt="FS Lab" />
                </div>
            </div>
        </>
    );
}
