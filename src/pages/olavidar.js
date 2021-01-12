import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import olahast from "../images/olahast.png";
import vidarmoe from "../images/vidarmoe.png";

const ModalExamplePage = () => (
    <ModalRoutingContext.Consumer>
        {({ modal, closeTo }) => (
            <div>
                {modal ? (
                    <Link to={closeTo} className="smud-close">
                        Lukk
                    </Link>
                ) : (
                    <header>
                    </header>
                )}

                    <h3 className="smud-h3 smud-talks__talk-title">Det skal være lett å gjøre rett</h3>

                    <h4 className="smud-h4">Foredraget</h4>
                    <div>
                        Vi hadde stålkontroll på både sikkerhetsløsningene og rammeverkene våre. Teknologien og programmeringsmodellene var krystallklare, dokumentasjonen og prosessene grundige og utfyllende.Det var bare et problem. Hele plattformen råtnet på rot. Hvordan skulle vi klare å beholde kontrollen når vi skulle bygge plattformen på nytt og samtidig  sørge for at vi bygget for stadig raskere endringer på alle deler av plattformen? Kom og hør hvordan noen få byggescript vi lagde i 2013, har hjulpet oss på reisen fra tre til over 20 team og utviklet seg til å bli en av bærebjelkene for kontinuerlig teknologiutvikling og forbedring i SpareBank 1.
                    </div>

                    <h4 className="smud-h4">Vidar Moe</h4>

                    <div className="smud-talks__speaker-image">
                        <img src={vidarmoe} alt="Vidar Moe" />
                    </div>

                    <div>
                        Liker å lage god og enkel programvare gjennom kontinuerlig læring og respekt for mennesker. Brenner for lean og smidige prinsipper. Er glad i å utfordre både teknikk og organisasjon for å kunne levere stadig bedre stadig raskere.
                    </div>

                    <h4 className="smud-h4">Ola Hast</h4>
                    <div className="smud-talks__speaker-image">
                        <img src={olahast} alt="Ola Hast" />
                    </div>
                    <div>
                        Har troen på at det bør være enkelt å gjøre det riktig og at da blir jobben mer gøy. Ja til lettvektsrammeverk og SWARMing.
                    </div>

                </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage