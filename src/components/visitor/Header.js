import { Component } from "react";
import { NavLink} from "react-router-dom";
import '../../assets/style.css';



class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false, // État pour contrôler la visibilité du menu
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuVisible: !prevState.menuVisible,
    }));
  };

  render() {
    return (
      <div>
        <header>
          <div className="logo">
            <img src="https://res.cloudinary.com/dp360bhny/image/upload/v1735486116/logo_akpz86.png" alt="error" width="90px" />
          </div>
          <button
            className="menu-toggle"
            id="menu-toggle"
            onClick={this.toggleMenu} // Lorsque le bouton est cliqué, l'état du menu change
          >
            ☰
          </button>
          <ul className={this.state.menuVisible ? 'active' : ''}>
            <li>
              <NavLink
                end
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Page Principale
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="regle_de_jeu"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Regle de jeu
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="Acceuil"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Acceuil
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to="Quiz"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Quiz
              </NavLink>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default Header;