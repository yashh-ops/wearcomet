import "./Vault.css";

const Vault = () => {
  return (
    <main className="vault">
      {/* VAULT INTRO */}
      <section className="vault__intro">
        <img
          src="/images/vault/vault-hero.jpg"
          alt="The Vault"
          className="vault__image"
        />
      </section>

      {/* ROCKETMAN */}
      <section className="vault__drop">
        <img
          src="/images/vault/rocketman.jpg"
          alt="Rocketman"
          className="vault__image"
        />
      </section>

      {/* UNO × COMET */}
      <section className="vault__drop">
        <img
          src="/images/vault/uno.jpg"
          alt="UNO × Comet"
          className="vault__image"
        />
      </section>

      {/* MAACHIS */}
      <section className="vault__drop">
        <img
          src="/images/vault/maachis.jpg"
          alt="Maachis"
          className="vault__image"
        />
      </section>

      {/* GET DUCK'D */}
      <section className="vault__drop">
        <img
          src="/images/vault/get-duckd.jpg"
          alt="Get Duck'd"
          className="vault__image"
        />
      </section>
    </main>
  );
};

export default Vault;
