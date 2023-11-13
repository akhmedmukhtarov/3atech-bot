import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import * as LocalSession from 'telegraf-session-local';
import { env } from './env.config';
import { AppUpdate } from './app.update';

const sessions = new LocalSession({ database: 'session_db.json' });

@Module({
    imports: [
        TelegrafModule.forRoot({
            middlewares: [sessions.middleware()],
            token: env.BOT_TOKEN
        }),
    ],
    providers: [AppUpdate],
})
export class AppModule {}
