"use client"

import { useState, useEffect, useRef } from "react"

type Props = {
  open: boolean
  onClose: () => void
  productName?: string
  brandName?: string
}

export function RequestQuoteModal({ open, onClose, productName, brandName }: Props) {
  const [submitted, setSubmitted] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setSubmitted(false)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [open, onClose])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  function handleClose() {
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
    setSubmitted(false)
    onClose()
  }

  if (!open) return null

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={(e) => {
        if (e.target === overlayRef.current) handleClose()
      }}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="quote-modal-title"
      >

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors text-lg"
          aria-label="Close"
          type="button"
        >
          ×
        </button>

        {submitted ? (
          <div className="flex flex-col items-center text-center py-8 gap-4">
            <h2 className="text-lg font-light text-black">
              Thank you
            </h2>
            <p className="text-sm text-neutral-500 max-w-xs">
              Your enquiry has been received. We will be in touch shortly.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 text-xs uppercase tracking-wider text-neutral-500 hover:text-black transition-colors"
              type="button"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h2
              id="quote-modal-title"
              className="text-lg font-light text-black mb-1"
            >
              Request a Quote
            </h2>

            {(productName || brandName) && (
              <p className="text-xs text-neutral-400 mb-8">
                {brandName && <span>{brandName}</span>}
                {brandName && productName && <span> — </span>}
                {productName && <span>{productName}</span>}
              </p>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">

              <div className="flex flex-col gap-1.5">
                <label htmlFor="quote-name" className="text-xs uppercase tracking-wider text-neutral-400">
                  Name
                </label>
                <input
                  id="quote-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-b border-neutral-200 py-2 text-sm text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="quote-email" className="text-xs uppercase tracking-wider text-neutral-400">
                  Email
                </label>
                <input
                  id="quote-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-b border-neutral-200 py-2 text-sm text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="quote-phone" className="text-xs uppercase tracking-wider text-neutral-400">
                  Phone
                </label>
                <input
                  id="quote-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="border-b border-neutral-200 py-2 text-sm text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors"
                  placeholder="+91 000 000 0000"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="quote-message" className="text-xs uppercase tracking-wider text-neutral-400">
                  Message
                </label>
                <textarea
                  id="quote-message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="border-b border-neutral-200 py-2 text-sm text-black placeholder:text-neutral-300 focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Any specific requirements..."
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-3.5 text-sm uppercase tracking-wider font-medium text-white bg-black hover:bg-neutral-800 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2"
              >
                Submit Enquiry
              </button>

            </form>
          </>
        )}

      </div>
    </div>
  )
}
