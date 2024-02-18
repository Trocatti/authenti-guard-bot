import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUsersRepository';

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUseCase = new CreateUserUseCase(postgresUsersRepository)

const createUserController = new CreateUserController(createUserUseCase)

export {
    createUserUseCase,
    createUserController
}