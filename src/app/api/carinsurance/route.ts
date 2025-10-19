import EmailTemplate from "../../../components/email-template"
import { Resend } from "resend"

const resend = new Resend(process.env.OH_RESEND_API_KEY)

export async function POST() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'OH GmbH <onboarding@resend.dev>',
            to: ['ebucelik1@hotmail.com'],
            subject: 'Hello World.',
            react: EmailTemplate({ firstName: 'Ebu' })
        })

        if (error) {
            return Response.json({ error }, { status: 500 })
        }

        return Response.json(data)
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}