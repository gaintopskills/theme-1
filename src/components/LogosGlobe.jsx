import React from 'react';

export const LogosGlobe = () => {
  const tagCloudItems = [
    { href: 'https://vuejs.org/', alt: 'Vue.js Logo', src: 'by-logo.jpg', target: '_blank' },
    { href: 'https://nuxt.com/', text: 'Nuxt.js', target: '_blank' },
    { href: 'https://github.com/CesiumGS/cesium', text: 'Cesium', target: '_blank' },
    { href: 'https://zzz.dog/', text: 'Zdog', target: '_blank' },
    { href: 'https://www.vantajs.com/', text: 'Vanta.js', target: '_blank' },
    { href: 'https://github.com/micku7zu/vanilla-tilt.js', text: 'Tilt.js', target: '_blank' },
    { href: 'https://threejs.org/', text: 'Three.js', target: '_blank' },
    { href: 'https://angularjs.org/', text: 'Angular', target: '_blank' },
    { href: 'https://reactjs.org/', text: 'React', target: '_blank' },
    { href: 'https://svelte.dev/', text: 'Svelte', target: '_blank' },
    { href: 'https://nextjs.org/', text: 'Next.js', target: '_blank' },
    { href: 'https://www.gatsbyjs.com/', text: 'Gatsby', target: '_blank' },
    { href: 'https://expressjs.com/', text: 'Express.js', target: '_blank' },
    { href: 'https://www.sencha.com/products/extjs/', text: 'ExtJS', target: '_blank' },
    { href: 'https://mithril.js.org/', text: 'Mithril', target: '_blank' },
    { href: 'https://backbonejs.org/', text: 'Backbone.js', target: '_blank' },
    { href: 'https://jquery.com/', text: 'jQuery', target: '_blank' },
    { href: 'https://playcanvas.com/', text: 'PlayCanvas', target: '_blank' },
    { href: 'https://polymer-library.polymer-project.org/', text: 'Polymer', target: '_blank' },
    { href: 'http://aurelia.io/', text: 'Aurelia', target: '_blank' },
    { href: 'https://emberjs.com/', text: 'Ember.js', target: '_blank' },
    { href: 'https://alpinejs.dev/', text: 'Alpine.js', target: '_blank' },
    { href: 'https://nodejs.org/en/', text: 'Node.js', target: '_blank' },
    { href: 'https://d3js.org/', text: 'D3.js', target: '_blank' },
    { href: 'https://underscorejs.org/', text: 'Underscore.js', target: '_blank' },
    { href: 'https://lodash.com/', text: 'Lodash', target: '_blank' },
    { href: 'https://pixijs.com/', text: 'PixiJS', target: '_blank' },
    { href: 'https://animejs.com/', text: 'Anime.js', target: '_blank' },
    { href: 'https://rishabhp.github.io/bideo.js/', text: 'Bideo.js', target: '_blank' },
    { href: 'https://www.chartjs.org/', text: 'Chart.js', target: '_blank' },
    { href: 'https://nosir.github.io/cleave.js/', text: 'Cleave.js', target: '_blank' },
    { href: 'https://glimmerjs.com/', text: 'Glimmer', target: '_blank' },
    { href: 'https://sarcadass.github.io/granim.js/', text: 'Granim.js', target: '_blank' },
    { href: 'https://github.com/alvarotrigo/fullPage.js/', text: 'fullPage.js', target: '_blank' },
    { href: 'https://leafletjs.com/', text: 'Leaflet', target: '_blank' },
    { href: 'https://multiple.js.org/', text: 'Multiple.js', target: '_blank' },
    { href: 'https://momentjs.com/', text: 'Moment.js', target: '_blank' },
    { href: 'https://masonry.desandro.com/', text: 'Masonry', target: '_blank' },
    { href: 'http://omniscientjs.github.io/', text: 'Omniscient', target: '_blank' },
    { href: 'http://parsleyjs.org/', text: 'Parsley', target: '_blank' },
    { href: 'https://popper.js.org/', text: 'Popper.js', target: '_blank' },
    { href: 'https://github.com/sindresorhus/screenfull.js/', text: 'Screenfull.js', target: '_blank' },
    { href: 'https://vocajs.com/', text: 'Voca', target: '_blank' },
    { href: 'https://getbootstrap.com/', text: 'Bootstrap', target: '_blank' },
    { href: 'https://mochajs.org/', text: 'Mocha', target: '_blank' },
    { href: 'https://ionicframework.com/', text: 'Ionic', target: '_blank' },
    { href: 'https://webix.com/', text: 'Webix', target: '_blank' },
    { href: 'https://www.meteor.com/', text: 'Meteor.js', target: '_blank' },
    { href: 'https://p5js.org/', text: 'p5', target: '_blank' },
    { href: 'https://www.babylonjs.com/', text: 'Babylon.js', target: '_blank' },
    { href: 'https://github.com/aframevr/aframe', text: 'Aframe', target: '_blank' },
    { href: 'https://zeptojs.com/', text: 'Zepto', target: '_blank' },
    { href: 'https://createjs.com/', text: 'CreateJS', target: '_blank' },
    { href: 'https://nightwatchjs.org/', text: 'Nightwatch.js', target: '_blank' },
    { href: 'https://stimulus.hotwired.dev/', text: 'Stimulus', target: '_blank' },
    { href: 'https://nativescript.org/', text: 'NativeScript', target: '_blank' },
    { href: 'https://relay.dev/', text: 'Relay', target: '_blank' },
    { href: 'https://cycle.js.org/', text: 'Cycle.js', target: '_blank' },
    { href: 'https://flightjs.github.io/', text: 'Flight', target: '_blank' },
    { href: 'http://trykickoff.com/', text: 'Kickoff', target: '_blank' },
    { href: 'https://cylonjs.com/', text: 'Cylon.js', target: '_blank' },
    { href: 'https://jestjs.io/', text: 'Jest', target: '_blank' },
    { href: 'https://feathersjs.com/', text: 'Feathers', target: '_blank' },
    { href: 'http://bootboxjs.com/', text: 'Bootbox.js', target: '_blank' },
    { href: 'https://modernizr.com/', text: 'Modernizr', target: '_blank' },
    { href: 'https://cube.dev/', text: 'Cube.js', target: '_blank' },
    { href: 'https://requirejs.org/', text: 'RequireJS', target: '_blank' },
    { href: 'https://jasmine.github.io/', text: 'Jasmine', target: '_blank' },
    { href: 'https://qunitjs.com/', text: 'QUnit', target: '_blank' },
    { href: 'https://github.com/soulwire/sketch.js', text: 'sketch.js', target: '_blank' },
    { href: 'https://github.com/wso2/jaggery', text: 'Jaggery', target: '_blank' },
    { href: 'https://kangoextensions.com/', text: 'Kango', target: '_blank' },
    { href: 'https://www.cappuccino.dev/', text: 'Cappuccino', target: '_blank' },
    { href: 'https://konvajs.org/', text: 'Konva', target: '_blank' },
    { href: 'https://sproutcore.com/', text: 'SproutCore', target: '_blank' },
    { href: 'https://webix.com/', text: 'Webix', target: '_blank' },
    { href: 'https://github.com/quirkey/sammy', text: 'Sammy', target: '_blank' },
    { href: 'https://seemple.js.org/#!home', text: 'Seemple.js', target: '_blank' },
    { href: 'https://socket.io/', text: 'Socket.IO', target: '_blank' },
    { href: 'https://xstyled.dev/', text: 'xstyled', target: '_blank' },
    { href: 'http://vanilla-js.com/', text: 'VanillaJS', target: '_blank' },
    { href: 'https://github.com/linnovate/mean', text: 'MEAN', target: '_blank' },
    { href: 'https://github.com/flatiron/flatiron', text: 'Flatiron', target: '_blank' },
    { href: 'https://ripplejs.github.io/', text: 'ripple.js', target: '_blank' },
    { href: 'https://sailsjs.com/', text: 'Sails.js', target: '_blank' },
    { href: 'https://mochi.github.io/mochikit/', text: 'MochiKit', target: '_blank' },
    { href: 'https://optimizely.github.io/nuclear-js/', text: 'NuclearJS', target: '_blank' },
    { href: 'https://ampersandjs.com/', text: 'Ampersand.js', target: '_blank' },
    { href: 'https://heisenbergjs.github.io/heisenberg/', text: 'Heisenberg.js', target: '_blank' },
    { href: 'https://marionettejs.com/', text: 'Marionette', target: '_blank' },
    { href: 'https://pagerjs.com/', text: 'pager.js', target: '_blank' },
    { href: 'https://canjs.com/', text: 'CanJS', target: '_blank' },
    { href: 'http://rivetsjs.com/', text: 'Rivets.js', target: '_blank' },
  ];

  return (
    <div className="other">
      <div className="animation-container">
        <div className="tagcloud-wrapper">
          <div className="tagcloud-controls" style={{ '--num-elements': 20 }}>
            {[...Array(20).keys()].map((index) => (
              <div key={index} className="tagcloud-control-button" style={{ '--index': index + 1 }}>
                <input type="radio" name="tagcloud-control-input" />
              </div>
            ))}
          </div>
          <div className="tagcloud-rotation">
            <ul className="tagcloud-tags" style={{ '--num-elements': 93 }}>
              {tagCloudItems.map((item, index) => (
                <li key={index} className="tagcloud-tag" style={{ '--index': index + 1 }}>
                  <div>
                    {item.src ? (
                      <a href={item.href} target={item.target}>
                        <img src={item.src} alt={item.alt} width="130" />
                      </a>
                    ) : (
                      <a href={item.href} target={item.target}>
                        {item.text}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};