import { Action, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Markup, Telegraf } from 'telegraf';
import { mobileButton, productsMenu, rootMenu, webProducts } from './app.buttons';

@Update()
export class AppUpdate {
    constructor(@InjectBot() private readonly bot: Telegraf<Context>) {}

    @Start()
    startCommand(ctx: Context) {
        ctx.reply('Wassup ✌️', rootMenu());
    }

    @Action('products')
    async products(ctx: Context) {
        ctx.editMessageText('Products', productsMenu());
    }

    @Action('root-menu')
    async root(ctx: Context) {
        await ctx.editMessageText('Menu', rootMenu());
    }

    @Action('contacts')
    async contacts(ctx: Context) {
        const backButton = Markup.inlineKeyboard([Markup.button.callback('Back 🔙', 'root-menu')], { columns: 1 })
        await ctx.editMessageText('Website 🌐: https://3atech.ru/,\n Email 💻: cv@3atech.ru,\nPhone 📞: +79877777777', backButton);
    }
    @Action('products-web')
    async wProducts(ctx: Context) {
        await ctx.editMessageText('Web Products', webProducts());
    }

    @Action('products-telegram-bot')
    async tgBot(ctx: Context) {
        const backAndMainKeyboard = Markup.inlineKeyboard([
            Markup.button.callback('Back 🔙', 'products'),
            Markup.button.callback('Main Menu 🍏', 'root-menu')
        ])
        await ctx.editMessageText(
            '1. Very Funny Bot 👽\n\nLorem ipsum dolor sit amet,consectetur adipiscing elit\n\n2. Craziest bot 🤪\n\nLorem ipsum dolor sit amet,consectetur adipiscing elit',
            backAndMainKeyboard
        );
    }

    @Action('products-mobile-app')
    async mobile(ctx: Context) {
        ctx.editMessageText('Our Mobile Applications', mobileButton())
    }
}
