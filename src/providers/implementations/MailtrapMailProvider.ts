import Mail from "nodemailer/lib/mailer"
import nodemailer from 'nodemailer';
import { IMailProvider, IMessage } from "../IMailProvider";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.mailtrap.io',
            port: '2525',
            auth: {
                user: '', // TODO criar env para o mailtrap e pegar a credenciais
                pass: ''
            }

        })
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                email: message.to.email
            },
            from: {
                name: message.from.name,
                email: message.from.email
            },
            subject: message.subject,
            html: message.body
        })
    }
}