import React, { Component } from "react";
import "../../../assets/style.css";

class Acceuil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRow: null, // Ligne actuelle affichée
      index: 0 // Suivi de l'index actuel dans les données
    };

    this.intervals = [0,12, 5, 8, 7, 5, 5, 8, 12, 8, 14, 64, 8, 16, 30, 25, 37, 13, 7, 6, 30]; // Intervalles en secondes
    this.tableau = [
      ["0", "0"],
      ["0", "1"],
      ["0", "2"],
      ["0", "3"],
      ["1", "3"],
      ["2", "3"],
      ["2", "4"],
      ["3", "4"],
      ["4", "4"],
      ["5", "4"],
      ["5", "5"],
      ["5", "6"],
      ["5", "7"],
      ["5", "8"],
      ["6", "8"],
      ["7", "8"],
      ["7", "9"],
      ["7", "10"],
      ["8", "10"],
      ["9", "10"],
      ["9", "11"]
    ];
  }

  componentDidMount() {
    this.executeWithIntervals();
  }

  executeWithIntervals = () => {
    let delay = 0;

    this.intervals.forEach((interval, idx) => {
      delay += interval * 1000; // Convertir les secondes en millisecondes

      setTimeout(() => {
        if (this.state.index < this.tableau.length) {
          this.setState((prevState) => ({
            currentRow: this.tableau[prevState.index], // Mettre à jour la ligne actuelle
            index: prevState.index + 1 // Passer à l'index suivant
          }));
        }
      }, delay);
    });
  };

  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <center>
          <video
            id="video-player"
            width="500"
            height="315"
            autoPlay // Démarre automatiquement la vidéo
          >
            <source src="https://res.cloudinary.com/dp360bhny/video/upload/v1735646544/Yoseikan-Budo-Franceitalie-Equipe-Armeswmv_Jqaw26nc_1_2_1_pvfot1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture des vidéos.
          </video>
        </center>
        <br />
        <br />
        <center>
          <table className="score">
            <caption>SCORE</caption>
            <thead>
              <tr>
                <th>AKA</th>
                <th>AO</th>
              </tr>
            </thead>
            <tbody>
              {this.state.currentRow && (
                <tr>
                  <td>{this.state.currentRow[0]}</td>
                  <td>{this.state.currentRow[1]}</td>
                </tr>
              )}
            </tbody>
          </table>
        </center>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Acceuil;

