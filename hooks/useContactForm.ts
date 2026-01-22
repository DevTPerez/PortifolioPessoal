"use client"
import { useState } from "react"

type ContactFormData = {
  name: string
  email: string
  phone: string
  message: string
}

export function useContactForm() {
  const [data, setData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target
    setData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (!res.ok) throw new Error("Falha ao enviar")

      setSuccess(true)
      setData({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      setError("Algo correu mal. Tenta outra vez.")
    } finally {
      setLoading(false)
    }
  }

  return {
    data,
    loading,
    success,
    error,
    handleChange,
    handleSubmit
  }
}
