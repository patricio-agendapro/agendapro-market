import { Fragment } from "react";

export default function Navbar() {
  return (
    <Fragment>

  <header className="wrapper">
    <nav className="navbar navbar-expand-lg center-nav transparent navbar-dark bg-secondary shadow">
      <div className="nav_content_container container flex-lg-row flex-nowrap align-items-center py-3">
        <div className="navbar-brand w-100 py-0">
          <a href="{{ url('') }}/mp/{{ $locale }}" aria-label="AgendaPro">
            <img
              className="logo"
              src="/web_assets/img/logo-ap-new-fondo-oscuro.svg"
              alt=""
              width={160}
              height="29.16"
            />
            <span
              style={{ position: "relative", top: 3, right: 1 }}
              className="text-light"
            >
              Market
            </span>
          </a>
        </div>
        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div className="offcanvas-header d-lg-none">
            <img
              className="lazyimglate logo"
              data-src="/web_assets/img/logo-agendapro.svg"
              alt=""
              width={160}
              height="29.16"
            />
            <button
              type="button"
              className="btn-close btn-close-dark"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body d-flex flex-column h-100  w-100">
            <div className="searchbar rounded-pill align-items-center d-none d-lg-flex bg-light">
              <form
                id="searcher"
                action="/mp/search-map"
                method="GET"
                className="d-flex align-items-center w-100"
              >
                <i className="uil uil-search search-icon-searchbar ms-2" />
                <input
                  type="hidden"
                  className="input-searcher-hid-q"
                  name="q"
                  defaultValue="{{ $search_options['q'] ?? '' }}"
                />
                <input
                  type="hidden"
                  className="input-searcher-hid-category"
                  name="category"
                  defaultValue="{{ $search_options['category'] ?? '' }}"
                />
                <input
                  type="hidden"
                  className="input-searcher-hid-lat"
                  name="lat"
                  defaultValue="{{ $search_options['point']['lat'] }}"
                />
                <input
                  type="hidden"
                  className="input-searcher-hid-lng"
                  name="lng"
                  defaultValue="{{ $search_options['point']['lng'] }}"
                />
                <input
                  type="hidden"
                  className="input-searcher-hid-country"
                  name="country"
                  defaultValue="{{ $search_options['market'] }}"
                />
                <input
                  id="input-category"
                  autoComplete="off"
                  type="text"
                  className="input-category form-control"
                  placeholder="Servicio o tratamiento"
                  defaultValue="{{ $search_options['q'] ?? $search_options['category'] }}"
                />
                <i className="uil uil-location-point search-icon-searchbar" />
                <input
                  id="input-location"
                  name="location"
                  type="text"
                  className="input-location location form-control"
                  autoComplete="off"
                  placeholder="Lugar donde buscas"
                  defaultValue="{{ $search_options['location'] ?? '' }}"
                />
                <button
                  className="button-search btn btn-circle btn-ash text-dark btn-sm"
                >
                  <i className="uil uil-search" />
                </button>
              </form>
            </div>
            {/* /.navbar-nav */}
            <div className="offcanvas-footer d-lg-none">
              <div>
                <p>
                  <a
                    href="{{ url('') }}/lead/market/signup"
                    className="btn btn-sm btn-primary rounded-pill mb-2 btn-apsignup"
                  >
                    Pon tu negocio en AgendaPro
                  </a>
                </p>
                <nav className="nav social social-dark mt-4">
                  <a
                    rel="nofollow"
                    href="https://www.instagram.com/agendapro_software/"
                  >
                    <i className="uil text-dark uil-instagram" />
                  </a>
                  <a rel="nofollow" href="https://www.facebook.com/agendapro">
                    <i className="uil text-dark uil-facebook-f" />
                  </a>
                  <a rel="nofollow" href="https://twitter.com/agendapro">
                    <i className="uil text-dark uil-twitter" />
                  </a>
                  <a
                    rel="nofollow"
                    href="https://www.linkedin.com/company/agendapro"
                  >
                    <i className="uil text-dark uil-linkedin" />
                  </a>
                  <a
                    rel="nofollow"
                    href="https://www.youtube.com/channel/UCoCMp3I4V5uojehS2Co0v5g"
                  >
                    <i className="uil text-dark uil-youtube" />
                  </a>
                </nav>
                {/* /.social */}
              </div>
            </div>
            {/* /.offcanvas-footer */}
          </div>
          {/* /.offcanvas-body */}
        </div>
        {/* /.navbar-collapse */}
        <div className="navbar-other w-100 d-flex ms-auto">
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            <li className="nav-item d-none d-lg-block">
              <a
                href="https://agendapro.com/lp/registra-gratis-tu-negocio-marketplace"
                className="btn btn-sm btn-primary rounded-pill"
              >
                Registrar mi negocio
              </a>
            </li>
            <li className="nav-item d-lg-none">
              <button
                className="hamburger offcanvas-nav-btn text-white"
                aria-label="Menu AgendaPro"
              >
                <span />
              </button>
            </li>
          </ul>
          {/* /.navbar-nav */}
        </div>
        {/* /.navbar-other */}
      </div>
      {/* /.container */}
      {/* container */}
      <div className="container d-lg-none pb-3">
        <div className="searchbar searchmobile rounded-pill align-items-center d-lg-flex bg-light">
          <form
            id="searcher"
            action="/mp/search-map"
            method="GET"
            className="d-flex align-items-center w-100"
          >
            <svg
              fill="#8f96a5"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: 35, height: 35 }}
              className="ms-2"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              type="hidden"
              className="input-searcher-hid-q"
              name="q"
              defaultValue="{{ $search_options['q'] ?? '' }}"
            />
            <input
              type="hidden"
              className="input-searcher-hid-category"
              name="category"
              defaultValue="{{ $search_options['category'] ?? '' }}"
            />
            <input
              type="hidden"
              className="input-searcher-hid-lat"
              name="lat"
              defaultValue="{{ $search_options['point']['lat'] }}"
            />
            <input
              type="hidden"
              className="input-searcher-hid-lng"
              name="lng"
              defaultValue="{{ $search_options['point']['lng'] }}"
            />
            <input
              type="hidden"
              className="input-searcher-hid-country"
              name="country"
              defaultValue="{{ $search_options['market'] }}"
            />
            <input
              id="input-category"
              autoComplete="off"
              type="text"
              className="input-category form-control"
              placeholder="Servicio o tratamiento"
              defaultValue="{{ $search_options['q'] ?? $search_options['category'] }}"
            />
            <svg
              fill="#8f96a5"
              style={{ width: 35, height: 35, marginLeft: 5 }}
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 297 297"
              xmlSpace="preserve"
            >
              <g>
                <path
                  d="M148.5,0C87.43,0,37.747,49.703,37.747,110.797c0,91.026,99.729,179.905,103.976,183.645
              c1.936,1.705,4.356,2.559,6.777,2.559c2.421,0,4.841-0.853,6.778-2.559c4.245-3.739,103.975-92.618,103.975-183.645
              C259.253,49.703,209.57,0,148.5,0z M148.5,272.689c-22.049-21.366-90.243-93.029-90.243-161.892
              c0-49.784,40.483-90.287,90.243-90.287s90.243,40.503,90.243,90.287C238.743,179.659,170.549,251.322,148.5,272.689z"
                />
                <path
                  d="M148.5,59.183c-28.273,0-51.274,23.154-51.274,51.614c0,28.461,23.001,51.614,51.274,51.614
              c28.273,0,51.274-23.153,51.274-51.614C199.774,82.337,176.773,59.183,148.5,59.183z M148.5,141.901
              c-16.964,0-30.765-13.953-30.765-31.104c0-17.15,13.801-31.104,30.765-31.104c16.964,0,30.765,13.953,30.765,31.104
              C179.265,127.948,165.464,141.901,148.5,141.901z"
                />
              </g>
            </svg>
            <input
              id="input-location"
              name="location"
              type="text"
              className="input-location location form-control"
              autoComplete="off"
              placeholder="Lugar donde buscas"
              defaultValue="{{ $search_options['location'] ?? '' }}"
            />
            <button
              className="button-search btn btn-circle btn-ash btn-sm text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: 45, height: 45 }}
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
          </form>
        </div>
      </div>
      {/* /.container */}
    </nav>
    {/* /.navbar */}
  </header>
  {/* /header */}



</Fragment>

  );
}
