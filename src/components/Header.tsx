const Header = () => {
  return (
    <header className="header">
      <div className="hader__logo-box">
        <img
          src="../../css/img/logo-white.png"
          alt="Logo"
          className="header__logo"
        />
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">OUTDOORS</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a href="#section-tours" className="btn btn--white btn--animated">
          Discover out tours
        </a>
      </div>
    </header>
  );
};

export default Header;
