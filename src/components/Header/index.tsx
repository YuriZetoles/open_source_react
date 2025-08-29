import "./style.css";
import Search from "../Search";

export default function Header() {
    return (
        <header className="header">
            <div className="header-background">
                <h1 className="titulo">Projetos Open Source</h1>
            </div>
            <div className="search-wrapper">
                <Search />
            </div>
        </header>
    );
}
