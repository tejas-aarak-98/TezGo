import './Download.css';
export default function DownloadSection({ onDownload }) {
  return (
    <section id="download" className="download-section">
      <div className="download-copy">
        <div className="eyebrow light">
          <span /> COMING SOON
        </div>
        <h2>
          TEZGO in <em>your pocket.</em>
        </h2>
        <p>Your rides, your destinations, your journey — all in one place.</p>
        <button onClick={onDownload}>
          Get the TEZGO App <span>→</span>
        </button>
      </div>
      <img src="/images/app.png" alt="TEZGO app icon" className="app-art" />
    </section>
  );
}
