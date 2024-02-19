import { User } from "../../entities/User";
import { IUsersRepository } from "../IUserRepository";

export class SupabaseUsersRepository implements IUsersRepository {

    private users: User[] = [] // mock

    async findByEmail(email: string): Promise<User> {
        const user = this.users.find(user => user.email === email); // mock

        return user
    }

    save(user: User): Promise<void> {
        this.users.push(user); // mock
        return Promise.resolve()
    }
}