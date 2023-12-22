import '../src/style.css';
(function() {
    'use strict';
    loadHeader();
    loadFooter();
})();

function loadHeader(){
    const contentDiv = document.querySelector('#content');

    //header content start
    //todo: refactor menu entry (create a function)
    const header = document.createElement('div');
    header.classList.add('header');
    
    const topRtitle = document.createElement('p');
    topRtitle.innerText = "Tim's Diner";
    topRtitle.classList.add('timsDiner');

    const header_menu = document.createElement('div');
    header_menu.classList.add('header_menu');    
    const menus = document.createElement('p');
    menus.innerText = "Menus";
    header_menu.appendChild(menus);
    const locations = document.createElement('button');
    locations.innerText = "Locations";
    locations.classList.add('header_menu_button');
    locations.addEventListener('click', () => {
        const footer = document.querySelector('.footer');
        if (footer){
            contentDiv.removeChild(footer);
        }
        const mainSec = document.querySelector('.main_sec_container');
        const locationsSec = document.querySelector('.location_Sec');
        if (mainSec){
            contentDiv.removeChild(mainSec); 
        } else if (locationsSec){
            contentDiv.removeChild(locationsSec);
        }
        //removes mainSec to avoid multiple mainsections popping after initial click
        loadLocations();
        loadFooter();
    });

    header_menu.appendChild(locations);
    const giftcards = document.createElement('p');
    giftcards.innerText = "Gift-Cards";
    header_menu.appendChild(giftcards);
    const careers = document.createElement('p');
    careers.innerText = "Careers";
    header_menu.appendChild(careers);

    const order_btn = document.createElement('button');
    order_btn.innerText = "ORDER NOW";
    order_btn.classList.add('buttonText');
    order_btn.setAttribute("id", "orderButton");
    order_btn.addEventListener('click', () => {
        const footer = document.querySelector('.footer');
        if (footer){
            contentDiv.removeChild(footer);
        }
        const locationsSec = document.querySelector('.location_Sec');
        const mainSec = document.querySelector('.main_sec_container');
        if (mainSec){
            contentDiv.removeChild(mainSec); 
        } else if (locationsSec){
            contentDiv.removeChild(locationsSec);
        }
        //removes mainSec to avoid multiple mainsections popping after initial click
        loadMainSec();
        loadFooter();
    });
    
    header.appendChild(topRtitle);
    header.appendChild(header_menu);
    header.appendChild(order_btn);
    console.log('headers have been appended!');

    contentDiv.appendChild(header);
    //end of header content
}

//main section start
function loadMainSec(){
    const contentDiv = document.querySelector('#content');

    const main_sec_container = document.createElement('div');
    main_sec_container.classList.add('main_sec_container');
    const main_sec = document.createElement('div');
    main_sec.classList.add('main_sec');

    //appetizers start
    const appetizers = document.createElement('div');
    appetizers.classList.add('food_entry');
    appetizers.setAttribute('id', 'appetizerDiv');
    const appetizers_title = document.createElement('p');
    appetizers_title.classList.add('food_title');
    appetizers_title.innerText = "Appetizers";
    appetizers.appendChild(appetizers_title);
    
    const truffle_fries = document.createElement('div');
    truffle_fries.classList.add('menu_item');
    const truffle_name_price = document.createElement('div');
    truffle_name_price.classList.add('name_price');
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
    chicken_wings_name_price.classList.add('name_price');
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
    mains.classList.add('food_entry');
    mains.setAttribute('id', 'mainsDiv');
    const mains_title = document.createElement('p');
    mains_title.innerText = "Mains";
    mains_title.classList.add('food_title');
    mains.appendChild(mains_title);

    const kp_burger = document.createElement('div');
    kp_burger.classList.add('menu_item');
    const kp_burger_name_price = document.createElement('div');
    kp_burger_name_price.classList.add('name_price');
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
    creole_steak_name_price.classList.add('name_price');
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
    desserts.classList.add('food_entry');
    desserts.setAttribute('id', 'dessertsDiv');
    const desserts_title = document.createElement('p');
    desserts_title.classList.add('food_title');
    desserts_title.innerText = "Desserts";
    desserts.appendChild(desserts_title);

    const ny_cheesecake = document.createElement('div');
    ny_cheesecake.classList.add('menu_item');
    const ny_cheesecake_name_price = document.createElement('div');
    ny_cheesecake_name_price.classList.add('name_price');
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
    salads.classList.add('food_entry');
    const salads_title = document.createElement('p');
    salads_title.classList.add('food_title');
    salads_title.innerText = "Salads";
    salads.appendChild(salads_title);

    const avo_kale = document.createElement('div');
    avo_kale.classList.add('menu_item');
    const avo_kale_name_price = document.createElement('div');
    avo_kale_name_price.classList.add('name_price');
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
    drinks.classList.add('food_entry');
    const drinks_title = document.createElement('p');
    drinks_title.classList.add('food_title');
    drinks_title.innerText = "Drinks";
    drinks.appendChild(drinks_title);

    const bellini = document.createElement('div');
    bellini.classList.add('menu_item');
    const bellini_name_price = document.createElement('div');
    bellini_name_price.classList.add('name_price');
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
    whiskey_sour_name_price.classList.add('name_price');
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
    footer.classList.add('footer');

    const resInquiries = document.createElement('div');
    resInquiries.classList.add('resInquiries');
    //start of resInquiries content - has three columns, column 3 has two sections

    //'Order Now' column start
    const firstColInquiry = document.createElement('div');
    firstColInquiry.classList.add('colInquiry');
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
    secondColInquiry.classList.add('colInquiry');
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
    thirdColInquiry.classList.add('thirdColInquiry');
    
    //privacy section
    const privacySec = document.createElement('div');
    privacySec.classList.add('colInquiry');
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
    languageSec.classList.add('colInquiry');
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

    //'follow us' section start
    const followUs = document.createElement('div');
    followUs.classList.add('followUs');
    const followUsClaim = document.createElement('p');
    followUsClaim.innerText = 'Follow Us';
    followUs.classList.add('footer_header');
    followUs.appendChild(followUsClaim);

    const logoDiv = document.createElement('div');
    logoDiv.classList.add('logoDiv');
    createFooterLogo(logoDiv, '../images/github-mark.png');
    createFooterLogo(logoDiv, '../images/igwhite.png');
    followUs.appendChild(logoDiv);
    
    const disclaimer = document.createElement('p');
    disclaimer.innerText = 'We are not liable to any injuries or illnesses sustained from visiting one of our locations.';

    footer.appendChild(resInquiries);
    footer.appendChild(followUs);
    footer.appendChild(disclaimer);

    contentDiv.appendChild(footer);
}

//using rest parameters: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
//rest parameters are used if you want to have an indefinite amount of arguments, you can also preset the arguments before that ...[indefinite arg array]
function createFooterDivContent(div, ...footernames){
    for (let i = 0; i < footernames.length; i++){
        const footerEntry = document.createElement('p');
        footerEntry.innerText = footernames[i];
        div.appendChild(footerEntry);
    }
}

function createFooterLogo(followUsDiv, src_url){
    const parentDivName = document.createElement('a');

    const img_elem = document.createElement('img');
    img_elem.classList.add('footer_logos');
    img_elem.setAttribute('src', src_url);

    parentDivName.appendChild(img_elem);
    followUsDiv.appendChild(parentDivName);
}

function loadLocations(){
    const contentDiv = document.querySelector('#content');

    const locationsDiv = document.createElement('div');
    locationsDiv.classList.add('location_Sec'); 

    const locationsInnerDiv = document.createElement('div');
    locationsInnerDiv.classList.add('locationsInnerDiv');
    const locationTitle = document.createElement('p');
    locationTitle.innerText = "Locations";
    locationsInnerDiv.appendChild(locationTitle);

    const locationEntries = document.createElement('div');
    //enter createLocationEntries here
    createLocationEntries(locationEntries, "Surrey", "10am - 9pm");
    createLocationEntries(locationEntries, "Burnaby", "9am - 5pm");
    createLocationEntries(locationEntries, "Richmond", "8am - 8pm");
    createLocationEntries(locationEntries, "Vancouver", "9am - 6pm");

    locationsInnerDiv.appendChild(locationEntries);

    locationsDiv.appendChild(locationsInnerDiv);
    
    contentDiv.appendChild(locationsDiv);
}

function createLocationEntries(div, location, openingHours){
    const addressTimePair = document.createElement('div');
    
    //create p's then attach to locationEntries div!

    const address = document.createElement('p');
    address.innerText = location;
    addressTimePair.appendChild(address);
    const time = document.createElement('p');
    time.innerText = openingHours;
    addressTimePair.appendChild(time);
    
    div.appendChild(addressTimePair);
}