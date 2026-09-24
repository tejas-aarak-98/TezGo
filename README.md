# TEZGO React + Vite

The TEZGO website is organized into independent React components. Each component keeps its own JSX and CSS file.

## Structure

```text
src/
├── Components/
│   ├── Navbar/Navbar.jsx + Navbar.css
│   ├── Home/Home.jsx + Home.css
│   ├── Booking/Booking.jsx + Booking.css
│   ├── Rides/Rides.jsx + Rides.css
│   ├── Tracking/Tracking.jsx + Tracking.css
│   ├── Safety/Safety.jsx + Safety.css
│   ├── Business/Business.jsx + Business.css
│   ├── Driver/Driver.jsx + Driver.css
│   ├── HowItWorks/HowItWorks.jsx + HowItWorks.css
│   ├── Help/Help.jsx + Help.css
│   ├── Download/Download.jsx + Download.css
│   ├── Footer/Footer.jsx + Footer.css
│   └── Modal/Modal.jsx + Modal.css
├── Pages/
│   └── Login/Login.jsx + Login.css
├── styles/
│   └── global.css  # only reset, variables and shared foundation
├── App.jsx
└── main.jsx
```

## Run

```bash
npm install
npm run dev
```

Prettier is configured in `.prettierrc` and `.vscode/settings.json`, so saving a file formats it automatically when the Prettier extension is installed.
