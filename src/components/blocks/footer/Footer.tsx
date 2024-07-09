import { Fragment } from "react";

export default function Footer() {
  return (
    <Fragment>
  <footer className="bg-ash">
    <div className="container mt-10 pb-4">
      <div className="row mt-15 mb-8">
        <div className="col-md-4 col-lg-4">
          <div className="widget">
            <img
              className="mb-4 lazyload"
              width={240}
              data-src="/web_assets/img/logo-agendapro.svg"
              alt="AgendaPro"
            />
            <nav className="nav social ">
              <span className="avatar bg-secondary text-primary w-9 h-9">
                <a
                  target="_blank"
                  rel="nofollow"
                  aria-label="Instagram"
                  href="https://www.instagram.com/agendapro_software/"
                >
                  <i className="uil text-light uil-instagram" />
                </a>
              </span>
              <span className="avatar bg-secondary text-primary w-9 h-9">
                <a
                  target="_blank"
                  rel="nofollow"
                  aria-label="Facebook"
                  href="https://www.facebook.com/agendapro"
                >
                  <i className="uil text-light uil-facebook-f" />
                </a>
              </span>
              <span className="avatar bg-secondary text-primary w-9 h-9">
                <a
                  target="_blank"
                  rel="nofollow"
                  aria-label="Twitter"
                  href="https://twitter.com/agendapro"
                >
                  <i className="uil text-light uil-twitter" />
                </a>
              </span>
              <span className="avatar bg-secondary text-primary w-9 h-9">
                <a
                  target="_blank"
                  rel="nofollow"
                  aria-label="Linkedin"
                  href="https://www.linkedin.com/company/agendapro"
                >
                  <i className="uil text-light uil-linkedin" />
                </a>
              </span>
              <span className="avatar bg-secondary text-primary w-9 h-9">
                <a
                  target="_blank"
                  rel="nofollow"
                  aria-label="Youtube"
                  href="https://www.youtube.com/channel/UCoCMp3I4V5uojehS2Co0v5g"
                >
                  <i className="uil text-light uil-youtube" />
                </a>
              </span>
            </nav>
            {/* /.social */}
          </div>
          <div className="widget"></div>
          {/* /.widget */}
        </div>
        {/* /column */}
        <div className="col-md-4 col-lg-4">
          <div className="widget">
            <h4 className="widget-title  mb-3">
              {"{"}
              {"{"} __('Más en AgendaPro') {"}"}
              {"}"}
            </h4>
            <ul className="list-unstyled text-reset mb-4">
              <li>
                <a href="https://agendapro.com/blog">
                  {"{"}
                  {"{"} __('Nuestro Blog') {"}"}
                  {"}"}
                </a>
              </li>
              {/* <li><a href="#">{{ __('Marketplace') }}</a></li> */}
              <li>
                <a
                  href="/{{ $locale }}/politica-de-privacidad-clientes"
                  rel="nofollow"
                >
                  {"{"}
                  {"{"} __('Políticas de privacidad') {"}"}
                  {"}"}
                </a>
              </li>
            </ul>
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
        <div className="col-md-4 col-lg-4">
          <div className="widget">
            <h4 className="widget-title  mb-3">
              {"{"}
              {"{"} __('Para negocios') {"}"}
              {"}"}
            </h4>
            <ul className="list-unstyled text-reset mb-4">
              <li>
                <a href="https://agendapro.com/planes">
                  {"{"}
                  {"{"} __('Planes y precios') {"}"}
                  {"}"}
                </a>
              </li>
              <li>
                <a href="https://agendapro.com/{{ $locale }}/agenda-online">
                  {"{"}
                  {"{"} __('Agenda online') {"}"}
                  {"}"}
                </a>
              </li>
            </ul>
          </div>
          {/* /.widget */}
        </div>
        {/* /column */}
      </div>
      <hr className="mt-0 mb-0" />
    </div>
    {/* /.container */}
  </footer>
  <section className="wrapper bg-ash sub-footer">
    <div className="container mt-4 pb-7">
      <div className="d-md-flex align-items-center justify-content-between">
        <p className="mb-2 mb-lg-0">
          {"{"}
          {"{"} __('AgendaPro se hace con ') {"}"}
          {"}"}
          <i className="uil uil-heart text-red" /> desde{" "}
          <span
            className="typer"
            data-words="Chile,Colombia,México,Argentina,Perú,Nicaragua,España,Bolivia"
            data-delay={100}
            data-deletedelay={1000}
          />
        </p>
        <span className="comodo">
          <img
            className="lazyload"
            data-src="/web_assets/img/comodo.webp"
            alt="Comodo Secure"
          />
        </span>
        {/* /.badges */}
      </div>
      {/* /div */}
    </div>
  </section>

</Fragment>

  );
}
