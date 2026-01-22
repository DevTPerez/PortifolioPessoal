import { NextResponse } from "next/server"
import postmark from "postmark"

const client = new postmark.ServerClient(
  process.env.POSTMARK_API_KEY!
)

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, message, phone } = body
    if (body.company) {
      return NextResponse.json({ success: true })
    }

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: "Campos em falta" },
        { status: 400 }
      )
    }

    await client.sendEmail({
      From: process.env.FROM_EMAIL!,
      To: process.env.CONTACT_EMAIL!,
      Subject: `Novo contacto - ${name}`,
      HtmlBody: `
        <h3>Novo contacto</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
      ReplyTo: email,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("POSTMARK ERROR:", err)
    return NextResponse.json(
      { error: "Erro ao enviar email" },
      { status: 500 }
    )
  }
}
