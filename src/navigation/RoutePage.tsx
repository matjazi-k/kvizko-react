import './RoutePage.css'

type RoutePageProps = {
  title: string
  description: string
}

function RoutePage({ title, description }: RoutePageProps) {
  return (
    <>
      <header className="route-page__page-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </header>
    </>
  )
}

export default RoutePage