import './RoutePage.css'

type RoutePageProps = {
  title?: string
  description?: string
}

function RoutePage({ title, description, children }: RoutePageProps & { children?: React.ReactNode }) {
  return (
    <>
      {title || description ? (
        <header className="route-page__page-header">
          {title && <h1>{title}</h1>}
          { description && <p>{description}</p> }
        </header>
      ) : null}

      {/* insert children here */}

      {children}

    </>
  )
}

export default RoutePage