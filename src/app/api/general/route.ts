import { InsuranceState } from "../../../core/insuranceCore"
import EmailTemplate from "../../../components/emailTemplate/emailTemplate"
import { Resend } from "resend"
import { NextRequest } from "next/server"

const resend = process.env.OH_RESEND_API_KEY ? new Resend(process.env.OH_RESEND_API_KEY) : null

export async function POST(request: NextRequest) {
    try {
        const order = request.headers.get('order')
        const body = await request.json()
        const insurance: InsuranceState = body

        // Graceful fallback when API key is not configured
        if (!resend) {
            console.log("Email service not configured - falling back to console log")
            console.log("New order:", order)
            console.log("Insurance data:", JSON.stringify(insurance, null, 2))
            return Response.json({ 
                message: "Order received successfully (fallback mode - email not sent)",
                fallback: true 
            }, { status: 200 })
        }

        const { data, error } = await resend.emails.send({
            from: 'OH GmbH <onboarding@resend.dev>',
            to: ['ebucelik1@hotmail.com', 'office@oh-gmbh.at'],
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