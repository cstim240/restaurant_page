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


    //footer start
    //footer end
}

//main section start
function loadMainSec(){
    const contentDiv = document.querySelector('#content');
    
    const main_sec = document.createElement('div');
    main_sec.classList.add('main_sec');

    const appetizers = document.createElement('div');
    const appetizers_title = document.createElement('p');
    appetizers_title.innerText = "Appetizers";
    
    const truffle_fries = document.createElement('div');
    truffle_fries.classList.add('menu_item');
    const truffle_name_price = document.createElement('div');
    const truffle_name = document.createElement('p');
    const truffle_price = document.createElement('p');
    truffle_name.innerText = "Truffle Fries";
    truffle_price.innerText = "$8";
    const truffle_ingredients = document.createElement('p');
    truffle_ingredients.innerText = "truffle, herbs, grana padano, garlic aioli";

    appetizers.appendChild(appetizers_title);
    truffle_name_price.appendChild(truffle_name);
    truffle_name_price.appendChild(truffle_price);
    truffle_fries.appendChild(truffle_name_price);
    truffle_fries.appendChild(truffle_ingredients);

    const chicken_wings = document.createElement('div');
    chicken_wings.classList.add('menu_item');
    
    appetizers.appendChild(truffle_fries);
    main_sec.appendChild(appetizers);


    contentDiv.appendChild(main_sec);
}

loadHeader();
loadMainSec();