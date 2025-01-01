import React from 'react';
import { Component } from "react";
import { connect } from 'react-redux';
import '../../../assets/style.css';

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.qaSet = []; // Références pour les questions
    this.timer = null; // Timer
  }

  componentDidMount() {
     this.startTimer(); // Initialiser le timer
     this.props.resetQuestion(); // Réinitialiser currentQuestion à 0
  }

  componentWillUnmount() {
    // Nettoyer le timer
    clearInterval(this.timer);
  }


  componentDidUpdate(prevProps) {
    if (this.props.duration === 0 && prevProps.duration !== 0) {
      this.nextQuestion();
    }
  }

  // Fonction pour démarrer le timer
  startTimer = () => {
    this.timer = setInterval(() => {
      const { duration} = this.props;

      if (duration === 0) {
        this.props.nextQuestion(); // Passe à la question suivante si le temps expire
      } else {
        this.props.decrementDuration(); // Décrémenter la durée
      }
    }, 1000);
  };


  // Fonction pour passer à la question suivante
  nextQuestion = () => {
    const { currentQuestion} = this.props;

    // Vérifier la question actuelle et trouver la réponse correcte
    const currentQaSet = this.qaSet[currentQuestion];
    const validInput = currentQaSet.querySelector('input[valid="valid"]');
    const selectedInput = currentQaSet.querySelector("input:checked");

    if(selectedInput){
    // Ajouter un délai avant de passer à la prochaine question
    setTimeout(() => {
      // Si la réponse est correcte, augmentez le score
      if (selectedInput === validInput) {
        console.log("green")
        const parentDiv = selectedInput.parentElement;
        this.props.incrementScore(); // Action Redux pour mettre à jour le score (+20 points)
        this.props.nextQuestion(); // Action Redux pour passer à la question suivante
        this.props.resetDuration(); // Réinitialiser la durée
        parentDiv.style.backgroundColor = "green"; // Réponse correcte
        parentDiv.style.color = "white";
      }else{
        console.log("red")
        const parentDiv = selectedInput.parentElement;
        this.props.nextQuestion(); // Action Redux pour passer à la question suivante
        this.props.resetDuration(); // Réinitialiser la durée
        parentDiv.style.backgroundColor = "red"; // Réponse correcte
        parentDiv.style.color = "white";

      }

      // Désactiver la question actuelle
      if (this.qaSet[currentQuestion]) {
        this.qaSet[currentQuestion].className = "qa_set";
      }

      // Activer la prochaine question
      if (this.qaSet[currentQuestion + 1]) {
        this.qaSet[currentQuestion + 1].className = "qa_set active";
      }

      

      // Arrêter le timer si c'était la dernière question
      if (currentQuestion === 4) {
        clearInterval(this.timer);
      }
    }, 900); // Délai de 1 seconde

   } else {
    // Cas où aucune réponse n'est sélectionnée
    setTimeout(() => {
      // Désactiver la question actuelle
      if (this.qaSet[currentQuestion]) {
        this.qaSet[currentQuestion].className = "qa_set";
      }

      // Activer la prochaine question
      if (this.qaSet[currentQuestion + 1]) {
        this.qaSet[currentQuestion + 1].className = "qa_set active";
      }

      this.props.nextQuestion(); // Passer à la prochaine question
      this.props.resetDuration(); // Réinitialiser la durée

      // Arrêter le timer si c'était la dernière question
      if (currentQuestion === 4) {
        clearInterval(this.timer);
      }
    }, 100); // Délai de 900ms
  }
  };

  render() {

    const { currentQuestion} = this.props;
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

        <div className="qa_box">
          <div className="qa_header">
            <span>
              Score: <span id="score">{this.props.score}</span>
            </span>
            <span id="countDown">{this.props.duration}</span>
          </div>

          <div className="qa_body">
            <div className="qa_set active" ref={(el) => (this.qaSet[0] = el)}>
              <h4>1-Le créateur de youseikan budo?</h4>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a1"
                  onChange={() => this.nextQuestion()}
                />
                <span>Gichin Funakochi</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a1"
                  onChange={() => this.nextQuestion()}
                />
                <span>Hirro Mochizuki</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a1"
                  valid="valid"
                  onChange={() => this.nextQuestion()}
                />
                <span>Mitchi Mochizuki</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a1"
                  onChange={() => this.nextQuestion()}
                />
                <span>james Figg</span>
              </div>
            </div>

            <div className="qa_set" ref={(el) => (this.qaSet[1] = el)}>
              <h4>2-le youeikan budo est composé de?</h4>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a2"
                  valid="valid"
                  onChange={() => this.nextQuestion()}
                />
                <span>11 discipline</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a2"
                  onChange={() => this.nextQuestion()}
                />
                <span>10 discipline</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a2"
                  onChange={() => this.nextQuestion()}
                />
                <span>5 discipline</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a2"
                  onChange={() => this.nextQuestion()}
                />
                <span>8 discipline</span>
              </div>
            </div>

            <div className="qa_set" ref={(el) => (this.qaSet[2] = el)}>
              <h4>3-Le youseiakn budo est fondé officiellment le?</h4>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a3"
                  onChange={() => this.nextQuestion()}
                />
                <span>1972</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a3"
                  onChange={() => this.nextQuestion()}
                />
                <span>1973</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a3"
                  onChange={() => this.nextQuestion()}
                />
                <span>1974</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a3"
                  valid="valid"
                  onChange={() => this.nextQuestion()}
                />
                <span>1975</span>
              </div>
            </div>

            <div className="qa_set" ref={(el) => (this.qaSet[3] = el)}>
              <h4>4-La lettre "bu" dans le mot yoseikan budo vaut dire?</h4>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a4"
                  valid="valid"
                  onChange={() => this.nextQuestion()}
                />
                <span>recherche de la paix</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a4"
                  onChange={() => this.nextQuestion()}
                />
                <span>grand maison</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a4"
                  onChange={() => this.nextQuestion()}
                />
                <span>droiture</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a4"
                  onChange={() => this.nextQuestion()}
                />
                <span>éducation</span>
              </div>
            </div>

            <div className="qa_set" ref={(el) => (this.qaSet[4] = el)}>
              <h4>5- La première Coupe du Monde a eu lieu en ? </h4>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a5"
                  onChange={() => this.nextQuestion()}
                />
                <span>1996</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a5"
                  valid="valid"
                  onChange={() => this.nextQuestion()}
                />
                <span>1997</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a5"
                  onChange={() => this.nextQuestion()}
                />
                <span>1998</span>
              </div>
              <div className="qa_ans_row">
                <input
                  type="radio"
                  name="a5"
                  onChange={() => this.nextQuestion()}
                />
                <span>1999</span>
              </div>
            </div>

            <div className="qa_set" ref={(el) => (this.qaSet[5] = el)}>
              <h4>
                votre Score total:
                <span id="ScoreTotal">{this.props.score}</span> sur 100
              </h4>
            </div>
          </div>

          {currentQuestion < 5 && (
            <div className="qa_footer">
              <span
                className="btn1"
                id="suivant"
                onClick={() => this.nextQuestion()}
              >
                Suivant
              </span>
            </div>
          )}
        </div>
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




// Fonction pour connecter l'état Redux aux props du composant
function mapStateToProps(state){
    return{
        score: state.score,
        currentQuestion: state.currentQuestion,
        duration: state.duration,
    }
  };
  
  // Fonction pour connecter les actions Redux aux props du composant
  function mapDispatchToProps(dispatch){
    return{
        incrementScore: () => dispatch({ type: 'INCREMENT_SCORE' }),
        nextQuestion: () => dispatch({ type: 'NEXT_QUESTION' }),
        resetDuration: () => dispatch({ type: 'SET_DURATION' }),
        decrementDuration: () => dispatch({ type: 'DECREMENT_DURATION' }),
        resetQuestion: () => dispatch({ type: 'RESET_QUESTION' })
    }
  }
  


  export default connect(mapStateToProps,mapDispatchToProps)(Quiz);
