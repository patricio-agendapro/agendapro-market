export default function Breadcrumb({ items }: { items: any[] }) {
    return (
        <>
  <section className="wrapper bg-ash">
        <div className="container py-2">
            <nav className="d-inline-block" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                {items.map(({ url, title }, index) => (
                    <li key={index} className="breadcrumb-item fs-13">
                        {url ? (
                            <a href={url}>{title}</a>
                        ) : (
                            title
                        )}
                    </li>
                ))}
            </ol>
            </nav>
        </div>
    {/* /.container */}
  </section>
        </>

    )
  }
