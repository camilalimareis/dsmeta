import logo from "../../assets/img/logo.svg"
import "./styles.css"
function Header() {
  return(
    <header>
    <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p>
          Exercício feito por
          <a href="www.linkedin.com/in/camila-bianca-dos-reis-lima
"> @Camila Reis</a>
        </p>
    </div>
</header>
  )
}

export default Header