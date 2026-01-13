import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm("xjggbppj");

  if (state.succeeded) {
    return (
      <section id="contact" className="contact">
        <h2>Message sent ✅</h2>
        <p>Thanks for reaching out. We’ll get back to you shortly.</p>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>
          Tell us about your website. We’ll get back to you
          with clear next steps.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" name="name" placeholder="Your name" required />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" placeholder="you@example.com" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="message">Website / Project details</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Tell us a little about your website or project"
            required
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <button type="submit" className="btn primary big" disabled={state.submitting}>
          {state.submitting ? 'Sending…' : 'Send Message'}
        </button>
      </form>

      <p className="contact-note">
        No spam. No pressure. Just a clear response.
      </p>
    </section>
  );
}
