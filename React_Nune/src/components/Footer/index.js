import './index.scss'

export default function Footer(props) {

    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/assets/image/NunesLogo.png" alt="Logo" className="footer-logo" />
                <div className="social-icons">
                    <a>
                        <img src="/assets/image/x.png" alt="X" className="icon" />
                    </a>
                    <a>
                        <img src="/assets/image/phone.png" alt="Phone" className="icon" />
                    </a>
                    <a>
                        <img src="/assets/image/map.png" alt="Map" className="icon" />
                    </a>
                </div>
            </div>

            <div className="footer-right">
                <ul>
                    <li><a>Site</a></li>
                    <li><a>Sobre</a></li>
                    <li><a>Promoções</a></li>
                    <li><a>Contato</a></li>
                </ul>
            </div>
        </footer>
    )

}