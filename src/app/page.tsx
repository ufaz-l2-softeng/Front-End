import Image from "next/image";

export default function Home() {
  return <main>
    <section className="hero">
      <div className="hero-content">
        <img src="/bigimage.png" alt="Big Image" className="big-image"/>
        <div className="hero-text">
          <h1>Open Your Favorite CS:GO Cases</h1>
          <p>Join thousands of players in opening cases with the best chances of getting amazing items!</p>
        </div>
      </div>
      <div className="stats">
        <div className="stat">
          <h2>0</h2>
          <p>Cases opened in the last month</p>
        </div>
        <div className="stat">
          <h2>0</h2>
          <p>new users in the last month</p>
        </div>
        <div className="stat">
          <h2>0</h2>
          <p>users online on the site</p>
        </div>
      </div>
    </section>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <section className="free-case-section">
    <div className="free-case-content">
      <div className="free-case-text">
        <h2>free case</h2>
        <p>Register on our service and receive a free case upon the first replenishment of the balance</p>
      </div>
      <div className="free-case-image">
        <img src="/free-case-image.png" alt="Free Case"/>
      </div>
      <a href="#" className="free-case-button">get a free case</a>
    </div>
    </section>
    <section className="conditions-section">
    <div className="conditions-header">
      <h2>We offer the best conditions</h2>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div className="conditions-content">
      <div className="conditions-icons">
        <img src="/conditions-icons.png" alt="Icons representing services"/>
      </div>
      <div className="conditions-details">
        <div className="condition-item">
          <h3>Full transparency</h3>
          <p>We do not hide the stocks of our bots or their deals...</p>
        </div>
        <div className="condition-item">
          <h3>Guaranteed delivery</h3>
          <p>We always give out won skins and we do it very quickly...</p>
        </div>
        <div className="condition-item">
          <h3>Skins calculation</h3>
          <p>To top up an account with us, you do not have to deposit real money...</p>
        </div>
        <div className="condition-item">
          <h3>Low prices</h3>
          <p>Our cases are cheaper than on Steam, and the loot in them is cooler...</p>
        </div>
      </div>
    </div>
  </section>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </main>;
}
