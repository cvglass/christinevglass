import React from 'react';

const Portfolio = () => {
  return (
    <div className="row">
      <div className="col-xs-6 col-md-3">
        <div className="thumbnail">
          <img src="/img/lair-depot-logo.png" />
          <div className="caption">
            <h4 className="portfolio"><a href="https://github.com/cvglass/Lair-Depot">Lair Depot</a></h4>
            <p>First group project at Fullstack Academy. A mock e-commerce site for all your evil villian needs. Allows visitors to create a profile, browse inventory, and add selections to a shopping cart. I was responsible for the users and products backend routes and corresponding frontend components.</p>
          </div>
        </div>
      </div>

      <div className="col-xs-6 col-md-3">
        <div className="thumbnail">
        <img src="/img/shopping-cart.png" />
        <div className="caption">
          <h4 className="portfolio"><a href="https://github.com/cvglass/Pricebook">Pricebook</a></h4>
          <p>Part of Fullstack Academy's "Stackathon," where students independently create an app in four days. Pricebook is a price tracking app written in React Native, with Firebase on backend. It was a tremendous learning opportunity, but unfortunately, I wasn't able to complete it within four days. However, I plan on continuing to develop the app.</p>
        </div>
      </div>
    </div>

    <div className="col-xs-6 col-md-3">
      <div className="thumbnail">
        <img src="/img/daisy_pig.png" />
        <div className="caption">
          <h4 className="portfolio"><a href="http://drawkward.herokuapp.com/">Drawkard</a></h4>
          <p>Final capstone project. It's a drawing-based game, based on the popular game, Drawful. We created two apps: a web app that connects to mobile apps via web sockets for a shared drawing experience. <a href="https://github.com/ayoung09/capstone-webapp">Web app repo</a> and <a href="https://github.com/cvglass/capstonenative">mobile app repo</a></p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Portfolio
