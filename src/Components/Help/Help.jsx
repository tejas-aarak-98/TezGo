import './Help.css';
const faqs = [
  [
    'How do I book a TEZGO ride?',
    'Enter your pickup location and destination, choose your preferred ride and confirm your booking.',
  ],
  [
    'Can I schedule a ride?',
    'Yes. Select the Ride Later option while booking your journey.',
  ],
  [
    'How can I become a TEZGO driver?',
    'Select the Drive with TEZGO option and submit your driver application.',
  ],
  [
    'Does TEZGO offer business rides?',
    'Yes. TEZGO Business is designed for companies and corporate travel.',
  ],
];
export default function HelpSection() {
  return (
    <section id="help" className="section soft-section">
      <div className="section-heading">
        <div className="eyebrow center">
          <span /> HELP CENTER <span />
        </div>
        <h2>
          Questions? We've <em>got you.</em>
        </h2>
        <p>Find answers to common questions about TEZGO.</p>
      </div>
      <div className="faq">
        {faqs.map((f) => (
          <details key={f[0]}>
            <summary>{f[0]}</summary>
            <p>{f[1]}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
