/* eslint-disable prettier/prettier */
import { Question } from '../../enteprise/entities/question'
import { QuestionRepository } from '../repository/question-repository'

interface EditeQuestionUseCaseRequest {
  authorId: string
  title: string
  questionId: string
  content: string
}

interface EditeQuestionUseCaseResponse {
  question: Question
}

export class EditeQuestion {
  constructor(private questionRepository: QuestionRepository) {}
  async execute({
    authorId,
    title,
    questionId,
    content
  }: EditeQuestionUseCaseRequest): Promise<EditeQuestionUseCaseResponse>{
    const question = await this.questionRepository.findById(questionId)

    if (!question) {
      throw new Error('Question not found.')
    }

    if (authorId !== question.authorId.toString()) {
      throw new Error('Not allowed')
    }

    question.title = title
    question.content = content
    console.log(question)
    await this.questionRepository.save(question)
    return {
      question
    }
  }
}