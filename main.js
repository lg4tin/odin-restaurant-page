(()=>{"use strict";const n=document.querySelector("#content");console.log("Hiii"),function(){function e(e){n.appendChild(e)}let t=document.createElement("h1");t.textContent="The Best Pizza Shop";let d=document.createElement("ul");d.innerHTML="\n    <li>Home</li>\n    <li>Menu</li>\n    <li>Contact Us</li>\n  ",d.classList.add("nav-bar"),e(d);let i=document.createElement("div");i.classList.add("nav-bar-header"),e(i),i.appendChild(t),i.appendChild(d);let o=document.createElement("h1");o.textContent="Come on down for some delicious pizza!",e(o);let c=document.createElement("h4");c.textContent="The Best in all of Tampa!",e(c);let l=document.createElement("button");l.textContent="Order Now!",e(l);let a=document.createElement("div");a.innerHTML='\n    <div>\n      <div class="menu-info">\n        <div>\n          <p>sdcdscdsc</p>\n        </div>\n        <div>\n          <p>555 Main St</p>\n          <p>Tampa, FL 33614</p>\n        </div>\n      </div>\n      <div class="menu-info">\n        <div>\n          <p>sdcdscdsc</p>\n        </div>\n        <div>\n          <p>Mon-Thurs: 11am-9pm</p>\n          <p>Fri-Sun: 12pm-10pm</p>\n        </div>\n      </div>\n    </div>\n  ',a.classList.add("info"),e(a)}()})();