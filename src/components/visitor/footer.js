import { Component } from "react";
import '../../assets/style.css';

class Footer extends Component{
    render(){
        return (
          <div>
            <div className="contact1">
              <h2 style={{color: "white"}}>
                Pour plus d'infos contactez nous sur:
              </h2>
              <br />
              <p>
                <span id="email">&#128231;</span>
                <a href="mailto:YouseikanBudo@gmail.com">YouseikanBudo@gmail.com</a>
              </p>
              <br />
              <p>
                <span id="telephone">&#128222;</span>
                <a href="tel:+213779717734">+213779717734</a>
              </p>
              <br />
              <p style={{fontSize: "larger", color: "white"}}>
                &copy; copyright 2022. aymen_khoukhi
              </p>
            </div>
          </div>
        );
    }
}

export default Footer;
