import React from 'react';

const Portfolio = () => {
  return (
    <div className="row">
      <div className="col-xs-6 col-md-4">
        <div className="thumbnail">
          <img src="/img/lair-depot-logo.png" />
          <div className="caption">
            <h4><a href="https://github.com/cvglass/Lair-Depot">Lair Depot</a></h4>
            <p>First group project at Fullstack Academy. A mock e-commerce site for all your evil villian needs. Allows visitors to create a profile, browse inventory, and add selections to a shopping cart. I was responsible for the users and products backend routes and corresponding frontend components.</p>
          </div>
        </div>
      </div>

      <div className="col-xs-6 col-md-4">
        <div className="thumbnail">
        <img src="/img/shopping-cart.png" />
        <div className="caption">
          <h4><a href="https://github.com/cvglass/Pricebook">Pricebook</a></h4>
          <p>Part of Fullstack Academy's "Stackathon," where students independently pick a project they are passionate about and create an app in four days. Pricebook is a price tracking app to allow users to find the cheapest grocery store for their shopping list. It is written in React Native, with Firebase backend. My goal was to learn as many new things as I could in the span of four days. Not only was it a tremendous learning opportunity, but it combined many passions of mine. First, I decided to create a mobile app because the <a href="http://www.chicagobusiness.com/article/20130416/BLOGS11/130419865/heres-where-chicagos-digital-divide-lies">digital divide</a> is a problem, especially in Chicago. Mobile apps can be more accessible because nearly 20% of Americans are <a href="http://www.pewinternet.org/2015/04/01/chapter-one-a-portrait-of-smartphone-ownership/">smartphone reliant</a> for their internet access, many of whom are low-income adults. I wanted to create an accessible app to help lower-income adults save money through planning. (Plus, I'm a nerd and kept all this data on a spreadsheet and wanted it avaialble on my phone.) Unfortunately, I wasn't able to complete it within four days, but I plan on continuing to develop the app.</p>
        </div>
      </div>
    </div>

    <div className="col-xs-6 col-md-4">
      <div className="thumbnail">
        <img src="/img/daisy_pig.png" />
        <div className="caption">
          <h4><a href="http://drawkward.herokuapp.com/">Drawkard</a></h4>
          <p>Final capstone project. It's a drawing-based game, based on the popular game, Drawful. We created two apps: a web app that connects to mobile apps via web sockets for a shared drawing experience. <a href="https://github.com/ayoung09/capstone-webapp">Web app repo</a> and <a href="https://github.com/cvglass/capstonenative">mobile app repo</a></p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Portfolio
