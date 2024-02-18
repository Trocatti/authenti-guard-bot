import { UserController } from './UserController';
import { MailtrapMailProvider } from './../../providers/implementations/MailtrapMailProvider';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUsersRepository';
import { UserUseCase } from './UserUseCase';

const postgresUsersRepository = new PostgresUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const userUseCase = new UserUseCase(postgresUsersRepository, mailtrapMailProvider)

const userController = new UserController(userUseCase)

export {
    userUseCase,
    userController
}