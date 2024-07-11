export default function Taglist({ items }: { items: any[] }) {
    return (
        <>
          <div className="col-tag-list">
            <ul className="list-unstyled tag-list mb-2 mt-6">
            {items.map(({ url, title }, index) => (
              <li key={index}>
                <a href="{url}" className="btn btn-ash btn-sm font-light btn-sm rounded-pill mb-0 link-dark">
                  {title}
                </a>
              </li>
             ))}
            </ul>
          </div>

        </>

    )
  }
