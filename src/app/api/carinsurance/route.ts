import { InsuranceState } from "../../../core/carInsuranceCore"
import CarEmailTemplate from "../../../components/emailTemplate/carInsuranceEmail"
import { Resend } from "resend"
import { NextRequest } from "next/server"

const resend = new Resend(process.env.OH_RESEND_API_KEY)

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const insurance: InsuranceState = body

        const { data, error } = await resend.emails.send({
            from: 'OH GmbH <onboarding@resend.dev>',
            to: ['ebucelik1@hotmail.com'],
            subject: 'Neue Anfrage: Autoversicherung',
            react: CarEmailTemplate({ insurance })
        })

        if (error) {
            return Response.json({ error }, { status: 500 })
        }

        return Response.json(data)
    } catch (error) {
        return Response.json({ error }, { status: 500 })
    }
}