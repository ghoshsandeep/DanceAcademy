import { type FormEvent, useState } from 'react'
import { experienceLevels, interestOptions } from '../../data/form'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

type FormErrors = Partial<Record<'name' | 'experience' | 'interests', string>>

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<FormErrors>({})
  const [interests, setInterests] = useState<string[]>([])

  function toggleInterest(option: string) {
    setInterests((current) =>
      current.includes(option) ? current.filter((item) => item !== option) : [...current, option],
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '').trim()
    const experience = String(formData.get('experience') ?? '')

    const nextErrors: FormErrors = {}
    if (!name) nextErrors.name = 'Please enter your name.'
    if (!experience) nextErrors.experience = 'Please select an experience level.'
    if (interests.length === 0) nextErrors.interests = 'Please select at least one option.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY
    if (!accessKey) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New enquiry from ${name}`,
          from_name: 'Tatkar School of Performing Arts Website',
          name,
          age: String(formData.get('age') ?? ''),
          experience,
          interests: interests.join(', '),
          message: String(formData.get('message') ?? ''),
          botcheck: '',
        }),
      })
      const result = (await response.json()) as { success?: boolean }
      if (!response.ok || !result.success) throw new Error('Submission failed')
      setStatus('success')
      form.reset()
      setInterests([])
    } catch {
      setStatus('error')
    }
  }

  const inputClasses =
    'w-full min-h-[48px] rounded-lg border border-charcoal/15 bg-ivory px-3.5 text-[0.95rem] text-charcoal placeholder:text-charcoal-soft/50 focus:border-terracotta'

  return (
    <section id="contact" className="py-14">
      <Container className="flex flex-col gap-10">
        <SectionHeading eyebrow="Enquire Now" title="Send an Enquiry" />

        {status === 'success' ? (
          <div
            role="status"
            className="rounded-xl2 border border-terracotta/30 bg-terracotta/10 p-6 text-charcoal"
          >
            <p className="font-serif text-lg font-semibold">Thank you for your enquiry!</p>
            <p className="mt-1.5 text-sm leading-relaxed text-charcoal-soft">
              Your enquiry has been sent. We'll get back to you soon.
            </p>
            <Button
              as="button"
              type="button"
              variant="ghost"
              className="mt-4 !min-h-0 !px-0"
              onClick={() => setStatus('idle')}
            >
              Send another enquiry
            </Button>
          </div>
        ) : (
          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-charcoal">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className={inputClasses}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="text-xs text-terracotta-dark">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="age" className="text-sm font-medium text-charcoal">
                Student Age
              </label>
              <input
                id="age"
                name="age"
                type="number"
                min={2}
                max={100}
                inputMode="numeric"
                className={inputClasses}
              />
            </div>

            <fieldset className="flex flex-col gap-2">
              <legend className="text-sm font-medium text-charcoal">Experience Level</legend>
              <div className="flex flex-wrap gap-2">
                {experienceLevels.map((level) => (
                  <label
                    key={level}
                    className="flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border border-charcoal/15 px-4 text-sm has-[:checked]:border-terracotta has-[:checked]:bg-terracotta/10"
                  >
                    <input type="radio" name="experience" value={level} className="accent-terracotta" />
                    {level}
                  </label>
                ))}
              </div>
              {errors.experience && <p className="text-xs text-terracotta-dark">{errors.experience}</p>}
            </fieldset>

            <fieldset className="flex flex-col gap-2">
              <legend className="text-sm font-medium text-charcoal">Interested In</legend>
              <div className="flex flex-col gap-2">
                {interestOptions.map((option) => (
                  <label
                    key={option}
                    className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-charcoal/15 px-3.5 text-sm has-[:checked]:border-terracotta has-[:checked]:bg-terracotta/10"
                  >
                    <input
                      type="checkbox"
                      name="interests"
                      value={option}
                      checked={interests.includes(option)}
                      onChange={() => toggleInterest(option)}
                      className="h-4 w-4 accent-terracotta"
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.interests && <p className="text-xs text-terracotta-dark">{errors.interests}</p>}
            </fieldset>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-charcoal">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className={`${inputClasses} min-h-[100px] py-3`}
              />
            </div>

            {status === 'error' && (
              <p role="alert" className="text-sm text-terracotta-dark">
                Sorry, we couldn't send your enquiry. Please try again later.
              </p>
            )}

            <Button
              as="button"
              type="submit"
              variant="primary"
              className="w-full"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
            </Button>
          </form>
        )}
      </Container>
    </section>
  )
}
