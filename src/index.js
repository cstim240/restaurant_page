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

    const main_sec_container = document.createElement('div');
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

    //dessert start
    const desserts = document.createElement('div');
    const desserts_title = document.createElement('p');
    desserts_title.innerText = "Mains";
    desserts.appendChild(desserts_title);

    const ny_cheesecake = document.createElement('div');
    ny_cheesecake.classList.add('menu_item');
    const ny_cheesecake_name_price = document.createElement('div');
    const ny_cheesecake_name = document.createElement('p');
    const ny_cheesecake_price = document.createElement('p');
    ny_cheesecake_name.innerText = "New York Cheesecake";
    ny_cheesecake_price.innerText = "$1.5";
    const ny_cheesecake_ingredients = document.createElement('p');
    ny_cheesecake_ingredients.innerText = "cheese, sugar, NY rats";

    ny_cheesecake_name_price.appendChild(ny_cheesecake_name);
    ny_cheesecake_name_price.appendChild(ny_cheesecake_price);
    ny_cheesecake.appendChild(ny_cheesecake_name_price);
    ny_cheesecake.appendChild(ny_cheesecake_ingredients);

    desserts.appendChild(ny_cheesecake);
    //dessert end

    //salad start
    const salads = document.createElement('div');
    const salads_title = document.createElement('p');
    salads_title.innerText = "Salads";
    salads.appendChild(salads_title);

    const avo_kale = document.createElement('div');
    avo_kale.classList.add('menu_item');
    const avo_kale_name_price = document.createElement('div');
    const avo_kale_name = document.createElement('p');
    const avo_kale_price = document.createElement('p');
    avo_kale_name.innerText = "Avocado Kale Salad";
    avo_kale_price.innerText = "$20";
    const avo_kale_ingredients = document.createElement('p');
    avo_kale_ingredients.innerText = "avocado, kale, grass, dressing";

    avo_kale_name_price.appendChild(avo_kale_name);
    avo_kale_name_price.appendChild(avo_kale_price);
    avo_kale.appendChild(avo_kale_name_price);
    avo_kale.appendChild(avo_kale_ingredients);

    salads.appendChild(avo_kale);
    //salad end

    //drinks start
    const drinks = document.createElement('div');
    const drinks_title = document.createElement('p');
    drinks_title.innerText = "Drinks";
    drinks.appendChild(drinks_title);

    const bellini = document.createElement('div');
    bellini.classList.add('menu_item');
    const bellini_name_price = document.createElement('div');
    const bellini_name = document.createElement('p');
    const bellini_price = document.createElement('p');
    bellini_name.innerText = "Bellini";
    bellini_price.innerText = "$3";
    const bellini_ingredients = document.createElement('p');
    bellini_ingredients.innerText = "bacardi superior, peach schnapps, sparkling wine, peach and sangria";
    
    bellini_name_price.appendChild(bellini_name);
    bellini_name_price.appendChild(bellini_price);
    bellini.appendChild(bellini_name_price);
    bellini.appendChild(bellini_ingredients);

    const whiskey_sour = document.createElement('div');
    whiskey_sour.classList.add('menu_item');
    const whiskey_sour_name_price = document.createElement('div');
    const whiskey_sour_name = document.createElement('p');
    const whiskey_sour_price = document.createElement('p');
    whiskey_sour_name.innerText = "Whiskey Sour";
    whiskey_sour_price.innerText = "$3";
    const whiskey_sour_ingredients = document.createElement('p');
    whiskey_sour_ingredients.innerText = "jack daniel's tennessee whiskey, fresh lemon, lime, angostura bitters";

    whiskey_sour_name_price.appendChild(whiskey_sour_name);
    whiskey_sour_name_price.appendChild(whiskey_sour_price);
    whiskey_sour.appendChild(whiskey_sour_name_price);
    whiskey_sour.appendChild(whiskey_sour_ingredients);

    drinks.appendChild(bellini);
    drinks.appendChild(whiskey_sour);
    //drinks end

    main_sec.appendChild(appetizers);
    main_sec.appendChild(mains);
    main_sec.appendChild(desserts);
    main_sec.appendChild(salads);
    main_sec.appendChild(drinks);

    main_sec_container.appendChild(main_sec);
    contentDiv.appendChild(main_sec_container);
}

function loadFooter(){
    const contentDiv = document.querySelector('#content');

    const footer = document.createElement('div');

    const resInquiries = document.createElement('div');
    //start of resInquiries content - has three columns, column 3 has two sections

    //'Order Now' column start
    const firstColInquiry = document.createElement('div');
    const orderNowlink = document.createElement('p');
    orderNowlink.classList.add('footer_header');
    orderNowlink.innerText = 'Order Now';
    const orderNowdiv = document.createElement('div');
    createFooterDivContent(orderNowdiv, 'Delivery', 'Deals', 'Happy Hour', 'Drinks');
    
    firstColInquiry.appendChild(orderNowlink);
    firstColInquiry.appendChild(orderNowdiv);
    //'Order Now' column end

    //'About' column start
    const secondColInquiry = document.createElement('div');
    const aboutLink = document.createElement('p');
    aboutLink.classList.add('footer_header');
    aboutLink.innerText = 'About';
    const aboutDiv = document.createElement('div');
    createFooterDivContent(aboutDiv, 'Contact Us', 'Opening Hours', 'Locations');

    secondColInquiry.appendChild(aboutLink);
    secondColInquiry.appendChild(aboutDiv);
    //'About' column end
    
    //third column start: privacy policy and language
    const thirdColInquiry = document.createElement('div');
    
    //privacy section
    const privacySec = document.createElement('div');
    const privacyPolicyLink = document.createElement('p');
    privacyPolicyLink.classList.add('footer_header');
    privacyPolicyLink.innerText = 'Privacy Policy';
    const privacyPolicyDiv = document.createElement('div');
    createFooterDivContent(privacyPolicyDiv, 'Terms and Conditions', 'Cookies and Ads');
    //privacy section end
    privacySec.appendChild(privacyPolicyLink);
    privacySec.appendChild(privacyPolicyDiv);

    //language section
    const languageSec = document.createElement('div');
    const languageLink = document.createElement('p');
    languageLink.classList.add('footer_header');
    languageLink.innerText = 'Language';
    const languageDiv = document.createElement('div');
    createFooterDivContent(languageDiv, 'Francais');
    //language section end
    languageSec.appendChild(languageLink);
    languageSec.appendChild(languageDiv);

    thirdColInquiry.appendChild(privacySec);
    thirdColInquiry.appendChild(languageSec);
    //third col end

    resInquiries.appendChild(firstColInquiry);
    resInquiries.appendChild(secondColInquiry);
    resInquiries.appendChild(thirdColInquiry);

    //end of resInquiries content

    const followUs = document.createElement('div');
    const githubLink = document.createElement('a');
    followUs.appendChild(githubLink);
    const githubLogo = document.createElement('img');
    githubLogo.classList.add('footer_logos');
    githubLogo.setAttribute('src', '../images/github-mark.png');
    githubLink.appendChild(githubLogo);

    const disclaimer = document.createElement('p');

    footer.appendChild(resInquiries);
    footer.appendChild(followUs);
    footer.appendChild(disclaimer);

    contentDiv.appendChild(footer);
}

loadHeader();
loadMainSec();
loadFooter();

//using rest parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
function createFooterDivContent(div, ...footernames){
    for (let i = 0; i < footernames.length; i++){
        const footerEntry = document.createElement('p');
        footerEntry.innerText = footernames[i];
        div.appendChild(footerEntry);
    }
}