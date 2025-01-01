import React from 'react';
import { Component } from "react";
import { connect } from 'react-redux';
import '../../../assets/style.css';


class RegleJeu extends Component{

    constructor(props) {
        super(props);
        this.qaSet = []; // Références pour les questions
      }

    componentDidMount() {
        this.props.resetQuestion(); // Réinitialiser currentQuestion à 0
    }



    // Fonction pour passer à la question suivante
    nextQuestion = () => {
    const { currentQuestion } = this.props;
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
    }, 100); // Délai de 900ms
  }


    render(){
        const { currentQuestion } = this.props;
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
                <span>le Youseikan Budo</span>
                <div>
                  <img
                    id='logo'
                    src="https://res.cloudinary.com/dp360bhny/image/upload/v1735486116/logo_akpz86.png"
                    alt="error"
                    width="35px"
                  />
                </div>
              </div>

              <div className="qa_body">
                <div
                  className="qa_set active"
                  ref={(el) => (this.qaSet[0] = el)}
                >
                  <p>
                    En dehors de la compétition où le règlement est restrictif
                    pour des raisons de sécurité, le combat sportif au Yoseikan
                    Budo se pratique généralement sous forme de combat libre
                    (pieds-poings-genoux-projection-combat au sol-soumissions).
                    Soit sous forme plein-contact, soit sous une forme souple
                    dont le but n'est pas de vaincre son adversaire mais de
                    développer ses qualités techniques (exécution, timing,
                    initiative, créativité...).
                  </p>
                  <br />
                  <p>
                    En plus du combat à mains nues, on trouve aussi des ateliers
                    avec armes en mousse (courte, moyenne et longue, pour
                    simuler respectivement couteau, matraque ou sabre court et
                    sabre) pour exploiter les techniques apprises dans la partie
                    traditionnelle dans un contexte plus "viril" sans risque de
                    blessure.
                  </p>
                </div>

                <div className="qa_set" ref={(el) => (this.qaSet[1] = el)}>
                  <h4>Kumi Uchi et Ne-Waza</h4>
                  <b>Kumi-Uchi :</b> ancienne forme de lutte japonaise destinée
                  à l'origine à déstabiliser un adversaire muni d'une armure.
                  Les techniques de Kumi-Uchi furent intégrées aux différentes
                  écoles de Ju-Jutsu, puis modifiées par ces dernières, en
                  particulier suite à la modification puis la disparation des
                  armures. On y pratique donc les techniques de projection en
                  corps-à-corps. <br />
                  <br />
                  <p>
                    <b>Ne-Waza :</b> combat au sol qui regroupe les
                    immobilisations (Osae-Waza), les luxations (Kansetsu-Waza),
                    les étranglements (Shime-Waza) et les écrasements
                    musculaires (je sais pas-Waza). Autrement dit, le type de
                    travail que l'on retrouve dans le Judo, la lutte, le
                    grappling ou Ju-Jutsu brésilien.
                  </p>
                </div>

                <div className="qa_set" ref={(el) => (this.qaSet[2] = el)}>
                  <h4>Yoseikan Kenpo</h4>
                  <span>
                    <p>
                      Sans doute l'une des parties les plus populaires chez les
                      combattants venant au Yoseikan Budo. Ce n'est rien d'autre
                      que la partie atemis (frappes) et projections du Yoseikan
                      Budo. Bien entendu, une fois entré au contact, rien
                      n'interdit d'enchainer sur Kumi-Uchi et Ne-waza pour
                      finaliser au sol. wink Cette partie se travaille soit sous
                      forme de landoli d'entraide, c'est-à-dire de combat souple
                      où chacun laisse l'autre s'exprimer un minimum (mais sans
                      complaisance) soit sous forme plein-contact où cette fois
                      on se rentre franchement dedans (vidéo dans le chapitre
                      compétition).
                    </p>
                  </span>
                  <br />
                  <h4>Yoseikan Kenjutsu-mousse</h4>
                </div>

                <div className="qa_set" ref={(el) => (this.qaSet[3] = el)}>
                  <span>
                    <p>
                      <b>1-Combo :</b> arme courte (couteau) <br />
                      <b>2-Tambo :</b> arme moyenne <br />
                      <b>3-Tchobo :</b> arme longue (sabre) <br />
                    </p>
                  </span>
                  <br />
                  <h4>Yoseikan Training</h4>
                  <span>
                    <p>
                      Truc pour attirer les filles dans les clubs : de la
                      musique techno à fond, et on frappe en rythme dans le
                      vide, seul (Training) ou avec partenaire (Sparring). Je
                      n'en dirai pas plus, ce n'est pas ma tasse de thé. Et
                      comme dirait mon entraineur : "quitte à transpirer, autant
                      le faire en combattant pour de vrai".
                    </p>
                  </span>
                </div>

                <div className="qa_set" ref={(el) => (this.qaSet[4] = el)}>
                  <h4>La compétition</h4>
                  <span>
                    <p>
                      La compétition de Yoseikan Budo comporte de multiples
                      épreuves auxquelles tout le monde peut participer en
                      fonction de son âge, son niveau ou son envie d'aller au
                      charbon ou pas.
                    </p>
                  </span>
                  <br />
                  <h4>Combat plein-contact</h4>
                  <span>
                    <p>
                      Les pratiquants sont protégés de la tête aux pieds
                      (casque, plastron, gants...) et les combats se déroulent
                      en 2 manches gagnantes : <br />
                      <b> Manche 1 :</b>
                      pieds-genoux-poings-projections. Combat à mains nues donc.
                      Sont autorisés coups de poings, de pieds, de genoux et
                      projections.
                      <br />
                    </p>
                  </span>
                </div>

                <div className="qa_set" ref={(el) => (this.qaSet[5] = el)}>
                  <h4>Yoseikan Kenjutsu-mousse</h4>
                  <span>
                    <p>
                      <b>Manche 2 :</b> baton mousse. Le type de baton-mousse
                      est tiré au sort avant le combat (tambo ou tchobo). A la
                      mi-temps, les combattants changent de garde (on commence
                      côté gauche, puis on passe côté droit) pour habituer les
                      pratiquants à être aussi à l'aise à droite qu'à gauche.
                    </p>
                  </span>
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
        currentQuestion: state.currentQuestion,
    }
  };
  
  // Fonction pour connecter les actions Redux aux props du composant
  function mapDispatchToProps(dispatch){
    return{
        nextQuestion: () => dispatch({ type: 'NEXT_QUESTION' }),
        resetQuestion: () => dispatch({ type: 'RESET_QUESTION' }), // Nouvelle action
    }
  }
  


  export default connect(mapStateToProps,mapDispatchToProps)(RegleJeu);