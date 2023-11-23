loadHeader();
function loadHeader(){
    const contentDiv = document.querySelector('.content');

    const header = document.createElement('div');
    header.classList.add('header');
    
    const header_content = document.createElement('div');
    header_content.classList.add('header_content');
    const topRtitle = document.createElement('p');
    topRtitle.innerText = "Tim's Diner";
    header_content.appendChild(topRtitle);

    const header_menu = document.createElement('div');
    header_content.classList.add('header_menu');    
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

    contentDiv.appendChild(header);
}