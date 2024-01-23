export default function CyberHeat() {
    return (
      <div id="Cyberheat">
        <div className="container cyberheat-container">
          <div className="cyberheat-wrapper">            
            <iframe
              src="https://threatmap.fortiguard.com/"          
              border="0"
              sandbox="allow-scripts allow-same-origin"
              allowFullScreen
            ></iframe>
            <h3>Sumber : <a href="https://www.fortinet.com/" target="_blanck">Fortinet.com</a></h3>
          </div>
        </div>
      </div>
    )
  }
