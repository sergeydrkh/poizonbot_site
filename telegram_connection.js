Telegram.WebApp.ready(); 

function login() {
    const dewuLink = document.getElementById('link').value;
    const dewuSize = document.getElementById('size').value;
    const dewuCost = document.getElementById('cost').value;
	let params = new URLSearchParams(location.search);
	const orderSalt = params.get('order_salt');
	const menuId = params.get('menu_id');

    Telegram.WebApp.sendData(`${menuId};addItem;${dewuLink};${dewuSize};${dewuCost};${orderSalt}`);    
}


Telegram.WebApp.ThemeParams.bg_color="#FFFFFF";
Telegram.WebApp.ThemeParams.text_color="#FFFFFF";
Telegram.WebApp.ThemeParams.hint_color="#FFFFFF";
Telegram.WebApp.ThemeParams.link_color="#FFFFFF";
Telegram.WebApp.ThemeParams.button_color="#FFFFFF";
Telegram.WebApp.ThemeParams.button_text_colorString="#FFFFFF";