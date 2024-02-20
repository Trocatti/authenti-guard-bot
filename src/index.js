import 'dotenv/config'

// import discordbot from "./discordbot.js"
import { initializeDiscordClient } from "./discord"

function bootstrap() {
  //discordbot()
  initializeDiscordClient()
}

bootstrap();
