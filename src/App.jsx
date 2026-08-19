import './App.css'

const products = [
  {
    title: 'Flow / Pancho',
    description: 'Energía personal, enfoque y misiones adaptativas.',
  },
  {
    title: 'Robótica',
    description: 'Automatización física e inteligencia aplicada al mundo real.',
  },
  {
    title: 'Smart Home',
    description: 'Hogares conectados, privados, resilientes y autónomos.',
  },
  {
    title: 'Resiliencia',
    description: 'Continuidad, autonomía y respuesta ante fallas externas.',
  },
  {
    title: 'Energía',
    description: 'Gestión, respaldo y optimización energética.',
  },
  {
    title: 'Agua',
    description: 'Captura, almacenamiento y uso inteligente del agua.',
  },
]

function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div className="brand">HumanOS</div>

        <nav className="main-nav">
          <a href="#inicio">Inicio</a>
          <a href="#productos">Productos</a>
          <a href="#soluciones">Soluciones</a>
          <a href="#arquitectura">Arquitectura</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">HUMAN OPERATING SYSTEM</p>
          <h1>Un sistema operativo para humanos.</h1>
          <p className="hero-text">
            HumanOS conecta contexto, inteligencia, automatización y
            aplicaciones especializadas para ayudarte a operar mejor en el
            mundo real.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#productos">
              Explorar HumanOS
            </a>
            <a className="button button-secondary" href="#soluciones">
              Ver soluciones
            </a>
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="core">HumanOS</div>
          <span className="node node-one">Contexto</span>
          <span className="node node-two">Motores</span>
          <span className="node node-three">Apps</span>
        </div>
      </section>

      <section className="section" id="productos">
        <div className="section-heading">
          <p className="eyebrow">ECOSISTEMA</p>
          <h2>Una plataforma. Múltiples líneas especializadas.</h2>
          <p>
            Cada producto puede evolucionar de forma independiente, conectado
            por una arquitectura común de HumanOS.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-mark" />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span>Explorar →</span>
            </article>
          ))}
        </div>
      </section>

      <section className="section flow-section">
        <div className="section-heading">
          <p className="eyebrow">CÓMO FUNCIONA</p>
          <h2>Del contexto a la acción.</h2>
        </div>

        <div className="flow-grid">
          <div className="flow-step">
            <span>01</span>
            <h3>Contexto</h3>
            <p>HumanOS entiende hechos, decisiones, objetivos y restricciones.</p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <span>02</span>
            <h3>Motores</h3>
            <p>
              Convierte contexto en capacidad, misiones, automatización y
              decisiones operativas.
            </p>
          </div>

          <div className="flow-arrow">→</div>

          <div className="flow-step">
            <span>03</span>
            <h3>Apps especializadas</h3>
            <p>
              Cada vertical entrega una experiencia enfocada en un problema
              real.
            </p>
          </div>
        </div>
      </section>

      <section className="section solutions-section" id="soluciones">
        <div className="section-heading">
          <p className="eyebrow">SOLUCIONES</p>
          <h2>Tecnología diseñada alrededor de la vida real.</h2>
        </div>

        <div className="solution-list">
          <div>Productividad y energía personal</div>
          <div>Hogares inteligentes y privados</div>
          <div>Automatización y robótica</div>
          <div>Resiliencia energética</div>
          <div>Resiliencia hídrica</div>
          <div>Continuidad operativa</div>
        </div>
      </section>

      <section className="section architecture-section" id="arquitectura">
        <div className="section-heading">
          <p className="eyebrow">ARQUITECTURA</p>
          <h2>HumanOS como núcleo, no como jaula.</h2>
          <p>
            La plataforma conecta productos, datos y motores sin depender de
            una sola interfaz, proveedor de IA o infraestructura.
          </p>
        </div>

        <div className="architecture-map">
          <div className="architecture-core">HumanOS</div>
          <div className="architecture-lines">
            {products.map((product) => (
              <div className="architecture-node" key={product.title}>
                {product.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contacto">
        <p className="eyebrow">HUMANOS</p>
        <h2>Construyendo tecnología para aumentar la autonomía humana.</h2>
        <div className="hero-actions">
          <a className="button button-primary" href="mailto:contacto@humanos.services">
            Contactar
          </a>
          <a className="button button-secondary" href="#productos">
            Explorar productos
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div>
          <strong>HumanOS</strong>
          <p>El hub central del ecosistema HumanOS.</p>
        </div>

        <div className="footer-links">
          <a href="#productos">Productos</a>
          <a href="#arquitectura">Arquitectura</a>
          <a href="#contacto">Contacto</a>
        </div>
      </footer>
    </main>
  )
}

export default App
