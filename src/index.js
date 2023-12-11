//problem: these elements created in JS will not show up on the HTML webpage
function loadHeader(){
    const contentDiv = document.querySelector('#content');

    //header content start
    const header = document.createElement('div');
    header.classList.add('header');
    
    const header_content = document.createElement('div');
    header_content.classList.add('header_content');
    const topRtitle = document.createElement('p');
    topRtitle.innerText = "Tim's Diner";
    header_content.appendChild(topRtitle);

    const header_menu = document.createElement('div');
    header_menu.classList.add('header_menu');    
    const menus = document.createElement('p');
    menus.innerText = "Menus";
    header_menu.appendChild(menus);
    const locations = document.createElement('p');
    locations.innerText = "Locations";
    header_menu.appendChild(locations);
    const giftcards = document.createElement('p');
    giftcards.innerText = "Gift Cards";
    header_menu.appendChild(giftcards);
    const careers = document.createElement('p');
    careers.innerText = "Careers";
    header_menu.appendChild(careers);

    const header_order = document.createElement('div');
    header_order.classList.add('header_order');
    const order_btn = document.createElement('button');
    const orderNow = document.createElement('p');
    orderNow.innerText = "ORDER NOW";
    order_btn.appendChild(orderNow);
    header_order.appendChild(order_btn);
    
    header.appendChild(header_content);
    header.appendChild(header_menu);
    header.appendChild(header_order);
    console.log('headers have been appended!');

    contentDiv.appendChild(header);
    //end of header content
}

//main section start
function loadMainSec(){
    const contentDiv = document.querySelector('#content');
    
    const main_sec = document.createElement('div');
    main_sec.classList.add('main_sec');

    //appetizers start
    const appetizers = document.createElement('div');
    const appetizers_title = document.createElement('p');
    appetizers_title.innerText = "Appetizers";
    appetizers.appendChild(appetizers_title);
    
    const truffle_fries = document.createElement('div');
    truffle_fries.classList.add('menu_item');
    const truffle_name_price = document.createElement('div');
    const truffle_name = document.createElement('p');
    const truffle_price = document.createElement('p');
    truffle_name.innerText = "Truffle Fries";
    truffle_price.innerText = "$8";
    const truffle_ingredients = document.createElement('p');
    truffle_ingredients.innerText = "truffle, herbs, grana padano, garlic aioli";

    truffle_name_price.appendChild(truffle_name);
    truffle_name_price.appendChild(truffle_price);
    truffle_fries.appendChild(truffle_name_price);
    truffle_fries.appendChild(truffle_ingredients);

    const chicken_wings = document.createElement('div');
    chicken_wings.classList.add('menu_item');
    const chicken_wings_name_price = document.createElement('div');
    const chicken_wings_name = document.createElement('p');
    const chicken_wings_price = document.createElement('p');
    chicken_wings_name.innerText = "Chicken Wings";
    chicken_wings_price.innerText = "50c / wing";
    const chicken_wings_ingredients = document.createElement('p');
    chicken_wings_ingredients.innerText = "sweet & sour, creamy parmesan dip";

    chicken_wings_name_price.appendChild(chicken_wings_name);
    chicken_wings_name_price.appendChild(chicken_wings_price);
    chicken_wings.appendChild(chicken_wings_name_price);
    chicken_wings.appendChild(chicken_wings_ingredients);
    
    appetizers.appendChild(truffle_fries);
    appetizers.appendChild(chicken_wings);
    //appetizers end

    //mains start
    const mains = document.createElement('div');
    const mains_title = document.createElement('p');
    mains.innerText = "Mains";
    mains.appendChild(mains_title);

    const kp_burger = document.createElement('div');
    kp_burger.classList.add('menu_item');
    const kp_burger_name_price = document.createElement('div');
    const kp_burger_name = document.createElement('p');
    const kp_burger_price = document.createElement('p');
    kp_burger_name.innerText = "Krabby Patty Burger";
    kp_burger_price.innerText = "$10";
    const kp_burger_ingredients = document.createElement('p');
    kp_burger_ingredients.innerText = "crab meat, secret ingredient, buns, lettuce";

    kp_burger_name_price.appendChild(kp_burger_name);
    kp_burger_name_price.appendChild(kp_burger_price);
    kp_burger.appendChild(kp_burger_name_price);
    kp_burger.appendChild(kp_burger_ingredients);

    const creole_steak = document.createElement('div');
    creole_steak.classList.add('menu_item');
    const creole_steak_name_price = document.createElement('div');
    const creole_steak_name = document.createElement('p');
    const creole_steak_price = document.createElement('p');
    creole_steak_name.innerText = "Krabby Patty Burger";
    creole_steak_price.innerText = "$10";
    const creole_steak_ingredients = document.createElement('p');
    creole_steak_ingredients.innerText = "crab meat, secret ingredient, buns, lettuce";

    creole_steak_name_price.appendChild(creole_steak_name);
    creole_steak_name_price.appendChild(creole_steak_price);
    creole_steak.appendChild(creole_steak_name_price);
    creole_steak.appendChild(creole_steak_ingredients);
    
    mains.appendChild(kp_burger);
    mains.appendChild(creole_steak);
    //mains end

    main_sec.appendChild(appetizers);
    main_sec.appendChild(mains);

    contentDiv.appendChild(main_sec);
}

loadHeader();
loadMainSec();