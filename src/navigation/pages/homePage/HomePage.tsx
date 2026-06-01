import RoutePage from '../../RoutePage'
import Scoreboard from '../../../components/scoreboard/Scoreboard'

function HomePage() {
  return (
    <RoutePage
      title="Kvizko"
    >
      <Scoreboard 
        questionIndex={0}
        totalQuestions={0}
        timeLeft={0}
        score={0}
        maxScore={0}
      />
    </RoutePage>
  )
}

export default HomePage