import './HowItWorks.css';
const steps = [
  [
    '01',
    'Enter your destination',
    'Tell us where you are and where you want to go.',
  ],
  [
    '02',
    'Choose your ride',
    'Select the ride that works best for your journey.',
  ],
  ['03', 'Meet your driver', 'See your ride details and track your driver.'],
  [
    '04',
    'Enjoy the journey',
    'Sit back and reach your destination comfortably.',
  ],
];
export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="section-heading">
        <div className="eyebrow center">
          <span /> HOW TEZGO WORKS <span />
        </div>
        <h2>
          Your journey starts in <em>four steps.</em>
        </h2>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <article key={s[0]}>
            <span>{s[0]}</span>
            <h3>{s[1]}</h3>
            <p>{s[2]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
