export type QuestionType = 'single' | 'multiple'

export type QuestionProps = {
    question: string
    type: QuestionType
    options?: string[]
    answer: string | string[]
    timeLimit: number
}

