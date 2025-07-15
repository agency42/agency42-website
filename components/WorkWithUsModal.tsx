import React, { useState, FormEvent, MouseEvent } from 'react'

interface WorkWithUsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WorkWithUsModal: React.FC<WorkWithUsModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('')
  const [task, setTask] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleOutsideClick = (e: MouseEvent<HTMLDivElement>) => {
    // If user clicks the overlay (outside the box), close modal
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleCloseClick = () => {
    onClose()
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isSubmitting) return

    setIsSubmitting(true)
    setSuccessMessage('')
    setErrorMessage('')

    // Create an abort controller for timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 second timeout

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, task, type: 'work_with_us' }),
        signal: controller.signal
      })

      // Clear timeout since we got a response
      clearTimeout(timeoutId)

      // Always try to parse response, but handle parsing errors
      let data
      try {
        data = await response.json()
      } catch (parseError) {
        console.error('Error parsing response:', parseError)
        throw new Error('Invalid response from server')
      }

      if (!response.ok) {
        throw new Error(data?.error || 'Request failed')
      }

      // Clear form and show success message
      setEmail('')
      setTask('')
      setSuccessMessage('Your request has been sent! We\'ve sent you a confirmation email with next steps. Please check your inbox.')
      
      // Auto close modal after 3 seconds on success
      setTimeout(() => {
        onClose()
      }, 3000)
    } catch (error: unknown) {
      console.error('Submission error:', error)
      if (error instanceof Error && error.name === 'AbortError') {
        setErrorMessage('Request timed out. Please try again.')
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Unable to process inquiry. Please try again or contact us directly.';
        setErrorMessage(errorMessage);
      }
    } finally {
      setIsSubmitting(false)
      clearTimeout(timeoutId)
    }
  }

  if (!isOpen) {
    return null
  }

  return (
    <div
      onClick={handleOutsideClick}
      className="fixed inset-0 z-[999] bg-black/80 flex items-center justify-center"
      aria-hidden="true"
    >
      <div
        className="relative bg-white border-4 border-black p-6 md:p-8 max-w-[90%] w-[400px] md:w-[600px] font-mono shadow-[12px_12px_0_rgba(0,0,0,0.9)]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close button */}
        <button
          onClick={handleCloseClick}
          className="absolute top-3 right-3 text-black text-xl leading-none hover:text-orange-500"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="mb-6 border-b-4 border-black pb-3">
          <h2 className="m-0 text-xl font-bold">
            Need AI development done?
          </h2>
        </div>

        {/* Form */}
        {successMessage ? (
          <div className="mb-4">
            <p className="leading-6 mb-3">{successMessage}</p>
            <button
              type="button"
              onClick={handleCloseClick}
              className="w-full bg-black text-white py-2 font-mono text-base cursor-pointer hover:bg-orange-500 transition-transform"
            >
              CLOSE
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-base">
                Email Address:
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border-2 border-black font-mono"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="task" className="block mb-2 text-base">
                Describe Your AI Task:
              </label>
              <textarea
                id="task"
                name="task"
                required
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Please include details about your company and product. We can automate workflows & show you how to boost productivity with AI."
                className="w-full p-2 border-2 border-black font-mono h-32 resize-vertical"
              />
            </div>

            {errorMessage && (
              <p className="text-red-600 mb-4">{errorMessage}</p>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-black text-white py-2 font-mono text-base cursor-pointer transition-transform hover:bg-orange-500"
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}