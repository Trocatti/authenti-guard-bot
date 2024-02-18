import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUserRepository";
import { ICreateUsersDTO } from "./CreateUserDTO";

export class CreateUserUseCase {

    constructor(
        private usersRepository: IUsersRepository
    ) {}

    async execute(data: ICreateUsersDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(userAlreadyExists) {
            throw new Error(`User ${data.email} already exists`) 
        }

        const user = new User(data)

        await this.usersRepository.save(user)
    }

}