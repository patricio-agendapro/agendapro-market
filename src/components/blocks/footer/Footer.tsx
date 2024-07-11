import Image from 'next/image';

export default function Footer() {
  return (
    <>
  <footer className="bg-ash">
    <div className="container mt-10 pb-4">
      <div className="row mt-15 mb-8">
        <div className="col-md-4 col-lg-4">
          <div className="widget">
          <Image
          src="/img/logo-agendapro.svg"
          alt="AgendaPro Agenda Online para negocios"
          width={240}
          height={36}
          loading="lazy"
          className='mb-4'
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
              Más en AgendaPro
            </h4>
            <ul className="list-unstyled text-reset mb-4">
              <li>
                <a href="https://agendapro.com/blog">
                 
                  Nuestro Blog
  
                </a>
              </li>
              {/* <li><a href="#">{{ __('Marketplace') }}</a></li> */}
              <li>
                <a
                  href="/{{ $locale }}/politica-de-privacidad-clientes"
                  rel="nofollow">
                    Políticas de privacidad
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
              Para negocios
            </h4>
            <ul className="list-unstyled text-reset mb-4">
              <li>
                <a href="https://agendapro.com/planes">

                  Planes y precios
 
                </a>
              </li>
              <li>
                <a href="https://agendapro.com/{{ $locale }}/agenda-online">
                  Agenda online
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
          AgendaPro <i className="uil uil-heart text-red" />
        </p>
        <span className="comodo">
          <Image
            src="/img/comodo.webp"
            alt="Comodo Secure"
            width={120}
            height={37}
            loading="lazy"
          />
        </span>
        {/* /.badges */}
      </div>
      {/* /div */}
    </div>
  </section>

</>

  );
}
