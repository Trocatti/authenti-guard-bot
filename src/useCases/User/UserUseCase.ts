import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUserRepository";


export class UserUseCase {

    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IMailProvider,
    ) {}

    async verify(data: {name:string, email:string}): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

        if(!userAlreadyExists) {
            throw new Error(`User ${data.email} already not exists`) 
        }

        const code = '123456' // TODO verificar esse código OTP

        await this.mailProvider.sendMail({
            to: {
                name: data.name,
                email: data.email
            },
            from: {
                name: 'AutenthiGuard Bot',
                email: 'autenthiguard@gmail.com'
            },
            subject: 'Código de autenticação do AutenthiGuard Bot',
            body: `<p>Seu código é: ${code}</p>`
        })
        
    }

}