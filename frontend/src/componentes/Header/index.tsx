import logo from '../../assets/img/logo.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="sales-analysis-logo-container">
                <img src={logo} alt="Sales Analysis"/>
                    <h1>Sales Analysis</h1>
                    <p>
                        Desenvolvido por
                        <a href="https://github.com/AlexsanderGS">github.com/AlexsanderGS</a>
                    </p>
            </div>
        </header>
    )
}

export default Header