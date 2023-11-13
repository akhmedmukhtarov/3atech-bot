import { Markup } from 'telegraf';

export function rootMenu() {
    return Markup.inlineKeyboard(
        [
            Markup.button.url('About ℹ️', 'https://3atech.ru/'),
            Markup.button.callback('Contacts 💻', 'contacts'),
            Markup.button.callback('Products 🍬', 'products'),
        ],
        { columns: 1 },
    );
}

export function productsMenu() {
    return Markup.inlineKeyboard(
        [
            Markup.button.callback('Web 🌐', 'products-web'),
            Markup.button.callback('Telegram bot 🤖', 'products-telegram-bot'),
            Markup.button.callback('Mobile app 📱', 'products-mobile-app'),
            Markup.button.callback('Back 🔙', 'root-menu'),
        ],
        { columns: 1 },
    );
}

export function webProducts() {
    return Markup.inlineKeyboard([
        [Markup.button.url('Instagram', 'https://www.instagram.com/')],
        [Markup.button.url('Facebook', 'https://www.facebook.com')],
        [Markup.button.url('AutoDrom', 'https://www.drom.ru/')],
        [Markup.button.url('Wildberries', 'https://www.wildberries.ru/')],
        [Markup.button.callback('Back 🔙', 'products'), Markup.button.callback('Main Menu 🍏', 'root-menu')],
    ]);
}

export function mobileButton() {
    return Markup.inlineKeyboard([
        [Markup.button.url('Instagram', 'https://apps.apple.com/us/app/instagram/id389801252')],
        [Markup.button.url('Facebook', 'https://apps.apple.com/us/app/facebook/id284882215')],
        [Markup.button.url('Drom', 'https://apps.apple.com/ru/app/%D0%B4%D1%80%D0%BE%D0%BC-%D0%B0%D0%B2%D1%82%D0%BE/id1043371985')],
        [Markup.button.callback('Back 🔙', 'products'), Markup.button.callback('Main Menu 🍏', 'root-menu')],
    ]);
}
