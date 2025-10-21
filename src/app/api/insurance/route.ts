import { InsuranceState } from "../../../core/carInsuranceCore"
import EmailTemplate from "../../../components/emailTemplate/emailTemplate"
import { Resend } from "resend"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.OH_RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const order = request.headers.get('order')
        const body = await request.json()
        const insurance: InsuranceState = body

        const { data, error } = await resend.emails.send({
            from: 'OH GmbH <onboarding@resend.dev>',
            to: ['ebucelik1@hotmail.com'],
            subject: 'Neue Anfrage: ' + order,
            react: EmailTemplate({ order, insurance })
        })

        if (error) {
            return Response.json({ error }, { status: 500 })
        }

        return Response.json(data)
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}