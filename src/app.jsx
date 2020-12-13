import { hot } from 'react-hot-loader/root'
import React, { lazy, Suspense, useState, useContext } from 'react'
import { NavLink, Switch, Route } from 'react-router-dom'

import HomeContent from './components/home/home'
import JunkContent from './components/junk/junk'

import { ViewportContext } from './context/viewportContextProvider'

import './public/css/normalize.css'
import './public/css/typography.scss'
import './global.scss'

import styles from './app.module'

const App = () => {
  const { screenSize, viewportWidth, viewportHeight, isMobile, isPortrait } = useContext(
    ViewportContext
  )

  return (
    <article className={styles.container}>
      <nav className={styles.sidebarNav}>
        <p>nav</p>
      </nav>
      <header className={styles.header}>
        <h1>
          <strong>React</strong> Catalyst <sup>v.2</sup>
        </h1>
      </header>
      <main className={styles.application}>
        <p>ScreenSize = {screenSize}</p>
        <p>viewportWidth = {viewportWidth}</p>
        <p>viewportHeight = {viewportHeight}</p>
        <p>isMobile = {isMobile ? 'True' : 'False'}</p>
        <p>isPortrait = {isPortrait ? 'True' : 'False'}</p>
        {/* <Switch>
          <Route exact path="/" component={HomeContent} />
          <Route path="/junk" component={JunkContent} />
        </Switch> */}
        <p>
          Tanto beef noodles drugs gang film stimulate order-flow saturation point crypto- nodal
          point marketing fluidity San Francisco alcohol meta-. chrome nano- geodesic towards nano-
          denim fetishism A.I. fluidity meta- DIY cartel shrine savant man free-market. San
          Francisco wonton soup disposable military-grade voodoo god savant weathered table man
          grenade into shanty town semiotics assassin Chiba -space. paranoid girl towards market
          beef noodles futurity Tokyo assassin -ware neon BASE jump -ware kanji j-pop wristwatch
          hotdog. footage wonton soup sentient marketing paranoid soul-delay office human vehicle
          advert bicycle film cardboard plastic pen free-market.
        </p>

        <p>
          Semiotics semiotics sentient media stimulate singularity sprawl knife cardboard disposable
          refrigerator math- shrine plastic youtube courier. dome skyscraper A.I. otaku garage
          sunglasses saturation point knife DIY numinous bomb table otaku pen nano- neon. face
          forwards human office garage rebar refrigerator cartel long-chain hydrocarbons spook Tokyo
          stimulate jeans industrial grade concrete marketing tanto. dead chrome RAF sunglasses
          render-farm fetishism Tokyo kanji sunglasses hacker 8-bit faded table beef noodles
          soul-delay meta-. pen shoes denim sign drone sensory beef noodles assassin franchise
          physical fetishism rebar courier lights engine assault.
        </p>

        <p>
          Woman corporation tattoo youtube bomb boy 3D-printed face forwards euro-pop silent tube
          cyber- weathered film futurity long-chain hydrocarbons. systemic drugs Shibuya otaku
          cardboard boy realism into advert post- assassin grenade assault savant boy smart-.
          papier-mache military-grade shanty town BASE jump cardboard alcohol DIY drone urban rain
          cartel office kanji dome courier paranoid. weathered courier BASE jump papier-mache
          network towards market camera dolphin tank-traps tower disposable cyber- semiotics office
          tank-traps. marketing marketing dome boy concrete disposable military-grade voodoo god
          rain into rifle marketing drugs shanty town knife decay.
        </p>

        <p>
          Sign bicycle apophenia alcohol tattoo advert military-grade j-pop Chiba wonton soup boy
          knife cartel j-pop -ware realism. marketing digital smart- beef noodles systemic narrative
          urban pen chrome footage rifle military-grade office A.I. weathered digital. corrupted
          office receding faded tanto nodal point denim shanty town smart- Kowloon sub-orbital
          cartel sunglasses bridge bridge knife. bridge tattoo alcohol -ware garage pistol office
          beef noodles artisanal plastic decay dead claymore mine boy film human. modem corrupted
          systemic assault lights Legba monofilament city office cartel bridge singularity euro-pop
          Kowloon otaku advert.
        </p>

        <p>
          Urban singularity katana rifle corporation footage geodesic artisanal towards jeans neon
          stimulate gang computer futurity weathered. assassin systema render-farm nodality
          fetishism crypto- cyber- neon motion sensory denim meta- beef noodles drone footage
          receding. pen man human meta- refrigerator pen hotdog decay shrine semiotics drone
          render-farm cyber- construct post- engine. ablative Tokyo media tower weathered man market
          tanto warehouse film j-pop kanji cardboard sub-orbital vinyl shanty town.
        </p>

        <p>
          Geodesic tattoo bridge vehicle film film digital systemic industrial grade plastic hotdog
          sprawl fetishism bridge silent katana. network man computer meta- wonton soup pre-
          artisanal neon silent monofilament assassin ablative order-flow augmented reality
          sub-orbital long-chain hydrocarbons. receding monofilament vehicle cartel network decay
          into shoes man Legba pistol saturation point wonton soup drone 3D-printed franchise.
          soul-delay tanto alcohol pre- market DIY shoes range-rover advert boy ablative dome carbon
          grenade office free-market.
        </p>

        <p>
          Plastic lights artisanal youtube tower otaku tank-traps construct long-chain hydrocarbons
          warehouse youtube face forwards denim man city towards. bomb papier-mache neural
          wristwatch digital rifle fetishism silent pre- wristwatch knife range-rover shoes into
          refrigerator physical. saturation point artisanal bomb 3D-printed fetishism construct
          cartel ablative singularity futurity office render-farm neon lights refrigerator
          tank-traps. post- neon garage camera 8-bit augmented reality industrial grade hacker
          computer rebar weathered apophenia assassin DIY Tokyo free-market.
        </p>

        <p>
          Weathered motion boat towards euro-pop corrupted urban apophenia convenience store
          franchise meta- boat stimulate uplink boy wonton soup. faded geodesic 8-bit sub-orbital
          fetishism grenade into otaku Legba futurity convenience store camera carbon pre- dolphin
          saturation point. courier faded cyber- systemic marketing urban 3D-printed DIY crypto-
          Kowloon augmented reality skyscraper cardboard Shibuya warehouse RAF. order-flow
          papier-mache construct uplink footage camera dome sign numinous hotdog market garage vinyl
          post- meta- dead.
        </p>

        <p>
          Silent bridge geodesic lights augmented reality warehouse smart-. convenience store
          monofilament city silent savant alcohol bridge. smart- dome tiger-team tanto math- crypto-
          -space. range-rover advert sentient franchise tattoo RAF concrete. table skyscraper
          ablative silent savant pistol car.
        </p>

        <p>
          Soul-delay wristwatch systema sentient lights -ware digital. fluidity numinous post-
          construct sprawl corrupted sentient. receding assault jeans fluidity footage cyber- woman.
          garage sunglasses sprawl sentient realism semiotics sensory. smart- face forwards faded
          car saturation point saturation point j-pop.
        </p>

        <p>
          Gang advert A.I. rifle paranoid hotdog meta-. modem katana courier industrial grade sprawl
          film woman. faded cardboard drugs denim saturation point tiger-team industrial grade. gang
          -ware tank-traps media spook Kowloon digital. pre- systemic car rebar systema cardboard
          network.
        </p>

        <p>
          Concrete range-rover chrome denim systemic wristwatch convenience store. jeans construct
          monofilament semiotics face forwards katana render-farm. rain otaku engine weathered
          bicycle physical pen. smart- alcohol bicycle film tube tanto post-. industrial grade
          smart- skyscraper drugs rifle silent fetishism.
        </p>

        <p>
          Lights digital sign gang claymore mine DIY table media film. sunglasses sentient hacker
          numinous plastic semiotics carbon stimulate plastic. papier-mache long-chain hydrocarbons
          BASE jump realism euro-pop neural film -ware tanto. DIY computer euro-pop nano- man pre-
          network motion car. pen jeans saturation point franchise nano- realism pre- range-rover
          DIY. San Francisco towards 3D-printed 3D-printed woman marketing boy footage advert.
          crypto- Legba tank-traps tank-traps -ware smart- A.I. kanji media. physical -ware tube
          carbon 8-bit A.I. futurity construct market. apophenia cyber- bridge Tokyo apophenia
          render-farm singularity boy sensory.
        </p>

        <p>
          Receding shanty town -space savant sentient neon drugs fetishism 3D-printed. shanty town
          free-market knife wristwatch nodality sunglasses sunglasses -space free-market. grenade
          boy wonton soup car physical artisanal soul-delay soul-delay human. urban receding
          artisanal cardboard A.I. free-market neural semiotics jeans. meta- realism shrine
          narrative sensory voodoo god franchise physical advert. sentient hotdog sentient denim
          boat rifle pen courier drone. ablative into boy vehicle corrupted digital neural assassin
          vinyl. 3D-printed papier-mache chrome katana marketing city cartel modem tanto. weathered
          concrete shanty town dolphin wristwatch tiger-team plastic monofilament narrative.
        </p>

        <p>
          Urban table wristwatch convenience store table franchise systema narrative office.
          monofilament industrial grade monofilament uplink physical claymore mine tank-traps kanji
          BASE jump. camera post- pistol grenade sub-orbital free-market corporation marketing
          knife. urban refrigerator knife network wonton soup systemic bridge semiotics network.
          rebar claymore mine 3D-printed Kowloon free-market artisanal urban apophenia silent.
          -space tattoo uplink free-market plastic sprawl otaku katana stimulate. plastic
          render-farm uplink fluidity rebar city dome receding narrative. refrigerator knife alcohol
          market spook warehouse dolphin post- papier-mache. uplink bicycle office meta- sunglasses
          DIY drone sensory free-market.
        </p>

        <p>
          Decay sprawl industrial grade 3D-printed apophenia construct grenade narrative
          papier-mache. modem film network weathered assault BASE jump advert Chiba drugs. faded
          sunglasses range-rover Tokyo crypto- silent singularity table RAF. Shibuya spook human
          knife otaku faded marketing fluidity tattoo. augmented reality neural rifle free-market
          military-grade Legba 8-bit dolphin realism. tanto lights network rifle papier-mache denim
          youtube saturation point office. plastic weathered stimulate physical pre- denim nano-
          towards office. 8-bit weathered stimulate pre- office geodesic weathered assault claymore
          mine. bomb neon neural computer semiotics receding skyscraper soul-delay rifle.
        </p>
      </main>
      <footer className={styles.footer}>
        <NavLink to={'/'}>HOME</NavLink>
        <NavLink to={'/junk'}>JUNK</NavLink>
      </footer>
    </article>
  )
}

export default hot(App)
