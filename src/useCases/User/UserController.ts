import { User } from "../../entities/User";
import { UserUseCase } from "./UserUseCase";

export class UserController {
  constructor(
    private userUseCase: UserUseCase
  ) {}

  async verify(user: User): Promise<void> {
    await this.userUseCase.verify(user);
  }
}
