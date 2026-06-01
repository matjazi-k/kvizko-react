import Container from '../common/Container'

export type ScoreboardProps = {
    questionIndex: number
    totalQuestions: number
    timeLeft: number // seconds
    score: number
    maxScore: number
    timeBonus?: number
}

export default function Scoreboard({
    questionIndex,
    totalQuestions,
    timeLeft,
    score,
    maxScore,
    timeBonus = 0,
}: ScoreboardProps) {
    return (
        <Container className="background full-width mb-md br-lg" type="row" style="outline">
            <div className="py-lg px-md flex-column g-xs flex-1">
                <div>
                    <span className="fw-600">Vprašanje:</span>{" "}
                    <span id="questionCounter">{questionIndex} / {totalQuestions}</span>
                </div>
                <div>
                    <span className="fw-600">Čas:</span>{" "}
                    <span id="time">{timeLeft}</span>s
                </div>
                <div>
                    <span className="fw-600">Skupni rezultat:</span>{" "}
                    <span id="scoreValue">{score} / {maxScore}</span>
                </div>
            </div>
            <div id="floatingShapes" className="flex-column py-lg px-md g-xs flex-3">
                <div className="fw-600">Bonus časa:</div>
                <div>{timeBonus > 0 ? `+${timeBonus}` : '-'}</div>
            </div>
        </Container>
    )
}