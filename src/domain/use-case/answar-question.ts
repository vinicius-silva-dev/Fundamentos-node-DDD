import { UniqueEntityId } from "../../core/entities/unique-entity-id"
import { Answer } from "../entities/answar"
import { AnswerRepository } from "../repository/answer-retpository"

interface AnswerQuestionUseCaseRequest {
  instructorId: string
  questionId: string
  content: string
}

export class AnswarQuestion {
  constructor( private answerRepository: AnswerRepository) {}
  async execute({instructorId, questionId, content}: AnswerQuestionUseCaseRequest) {
    const answer = Answer.create({
      content,
      authorId: new UniqueEntityId(instructorId),
      questionId: new UniqueEntityId(questionId)
    })

    await this.answerRepository.create(answer)
    return answer
  }
}