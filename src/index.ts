import 'dotenv/config'

import { initializeDiscordClient } from "./discord"

function bootstrap() {
  initializeDiscordClient()
}

bootstrap();
