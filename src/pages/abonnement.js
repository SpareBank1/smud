import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import christianfjestad from "../images/christianfjestad.png";

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

                    <div>
                        <div className="smud-talks__speaker-image">
                            <img src={christianfjestad} alt="Christian Fjestad" />
                        </div>
                    </div>

                    <h3 className="smud-h3 smud-talks__talk-title">Hvordan SpareBank 1 ble først med abonnementshåndtering i mobilbanken</h3>

                    <h4 className="smud-h4">Christian Fjestad</h4>
                    <div>
                        Christian Fjestad, Leder innovasjon i SB1Ø. Begynte i fusjonen mellom SB1 Hedmark og OA for ca 3 år siden, og etablerte en innovasjonsavdeling i den nye banken Østlandet. Leder av Partnerrådet i SB1. Har diverse styreverv.
                        Jobbet tidligere i den svenske storbanken SEB i 13 år, med et nordisk ansvar for forretningsutvikling og innovasjon. Sterk forkjemper for kundesentrisk og åpen innovasjon, dvs løse reelle problemer for folk, og gjerne i samarbeid med andre – noe dette caset er et godt eksempel på.
                    </div>

                    <h4 className="smud-h4">Foredraget</h4>
                    <div>
                        SpareBank1 ga kundene mulighet til å avslutte abonnement direkte i mobilbanken for ganske nøyaktig ett år siden. Nyheten fikk god mediedekning, og kort tid etter at SpareBank1 tok en posisjon kom konkurrenter på banen og kommuniserte tilsvarende prosjekter. Hva er det som gjør abonnementsøkonomien så interessant? Og hvordan lykkes vi med å gjøre et lokalt initiativ i SB1 Østlandet om til et felles initiativ?
                    </div>

                </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage