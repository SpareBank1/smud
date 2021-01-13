import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import martheslaatsveen from "../images/martheslaatsveen.png";
import thomasnygaard from "../images/thomasnygaard.png";

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

                    <h3 className="smud-h3 smud-talks__talk-title">«Ikke nok et jævla statusmøte»</h3>

                    <h4 className="smud-h4">Foredraget</h4>
                    <div>
                        Vi ville for mye, og fant oss selv i det ene statusmøtet etter det andre. Backloggen økte for hver eneste dag, men målene var like langt unna.
                        Vi måtte endre måten vi jobbet på — og det fort!
                        Team Oversikt — et av utviklingsteamene som lager mobilbanken til SpareBank 1 hadde såvidt begynt å jobbe med OKR’er, og alle var begeistret over å endre fokus fra oppgaver til mål. Ved inngangen av kvartalet hadde vi samlet hele teamet, og hamret ut våre “objectives”. Vi satte noen få, ambisiøse “key results”, som føltes akkurat passe komfortable å sikte mot.
                        Alt etter boken.
                        Kvartalet var over, alle hadde gjort sitt beste. Vi hadde riktignok nådd et par av målene, men vi var milevis fra andre. Noen hadde vi ikke jobbet med i det hele tatt. Vi klarte ikke å holde fokus gjennom kvartalet, og teamet var lei av hyppige koordineringsmøter. Det var ingen tvil om at OKRer var riktig for oss, men vi måtte finne en mer effektiv måte å jobbe med de på.
                        Dette er historien om hvordan vi gikk fra oppgavelister til et radikalt fokus på mål som ga autoritet og energi tilbake til teamet.
                    </div>
                
                    <h4 className="smud-h4">Thomas Nygaard</h4>

                    <div className="smud-talks__speaker-image">
                        <img src={thomasnygaard} alt="Thomas Nygaard" />
                    </div>

                    <div>
                        Thomas er Produkteier i SpareBank1 Utvikling. Han tror på å sette ambisiøse mål og å gi autoritet til produktteamet for å finne den beste veien til målet. Han har 15 års erfaring fra marked, innovasjon og forretningsutvikling og tror på å sprenge grenser innenfor trygge rammer.
                        SpareBank 1 Utvikling er de 14 SpareBank 1-bankenes felles teknologiselskap. Der går 300 dyktige medarbeidere på jobb hver dag for å skape, utvikle og forvalte de beste IT-løsningene, tjenestene og brukeropplevelsene i bransjen – fordi hverdagsøkonomien er viktig for både folk og bedrifter. De jobber også med markeds- og forretningsutvikling, og er en proaktiv og innovativ samarbeidspartner for SpareBank 1-bankene.
                    </div>

                    <h4 className="smud-h4">Marthe Slaatsveen</h4>
                    <div className="smud-talks__speaker-image">
                        <img src={martheslaatsveen} alt="Marthe Slaatsveen" />
                    </div>
                    <div>
                        Marthe er Utviklingsleder i SpareBank 1 Utvikling. Hun er opptatt av å skape sterke produktteam som tar valg basert på innsikt, leverer kontinuerlig kunde- og forretningsverdi og tar ansvar for kvalitet. Med 14 års erfaring som utvikler, teamleder og produktsjef, trives hun aller best i skjæringspunktet mellom teknologi og forretning.
                    </div>

                </div>
        )}
    </ModalRoutingContext.Consumer>
)

export default ModalExamplePage