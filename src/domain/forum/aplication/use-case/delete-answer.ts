/* eslint-disable prettier/prettier */
import { AnswerRepository } from '../repository/answer-retpository'

interface AnswerQuestionUseCaseRequest {
  answerId: string
  authorId: string
}

interface AnswerQuestionUseCaseResponse {}

export class AnswerQuestion {
  constructor(private answerRepository: AnswerRepository) {}
  async execute({
    answerId,
    authorId
  }: AnswerQuestionUseCaseRequest): Promise<AnswerQuestionUseCaseResponse>{
    const answer = await this.answerRepository.findById(answerId)

    if (!answer) {
      throw new Error('answer not found.')
    }

    if (authorId !== answer.authorId.toString()) {
      throw new Error('Not allowed')
    }
     await this.answerRepository.delete(answer)
    return {}
  }
}