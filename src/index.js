loadHeader();
function loadHeader(){
    const contentDiv = document.querySelector('content');

    const header = document.createElement('div');
    header.classList.add('header');
    contentDiv.appendChild(header);

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
}