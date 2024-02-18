import { User } from "./../../entities/User";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) { }

    async handle(user: User): Promise<void> {
        try {
            await this.createUserUseCase.execute(user);
        } catch (error) {
            throw new Error(error.message || 'Unexpected error.');
        }
    }
}
