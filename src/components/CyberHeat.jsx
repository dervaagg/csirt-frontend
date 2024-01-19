export default function CyberHeat() {
    return (
      <div id="Cyberheat">
        <div className="container cyberheat-container">
          <iframe
            width="900"
            height="550"
            src="https://cybermap.kaspersky.com/en/widget/dynamic/dark"
            border="0"
            sandbox="allow-scripts allow-same-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    )
  }