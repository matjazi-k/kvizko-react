import './RoutePage.css'

type RoutePageProps = {
  title: string
  description: string
}

function RoutePage({ title, description }: RoutePageProps) {
  return (
    <section className="route-page flex-column g-md">
      <h1 className="route-page__title">{title}</h1>
      <p className="route-page__description">{description}</p>
    </section>
  )
}

export default RoutePage