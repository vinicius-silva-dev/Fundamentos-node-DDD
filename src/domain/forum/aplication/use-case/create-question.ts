/* eslint-disable prettier/prettier */
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Question } from '../../enteprise/entities/question'
import { QuestionRepository } from '../repository/question-repository'

interface CreateQuestionUseCaseRequest {
  author: string
  title: string
  content: string
}

interface CreateQuestionUseCaseResponse {
  question: Question
}

export class CreateQuestion {
  constructor(private questionRepository: QuestionRepository) {}
  async execulte({
    author,
    title,
    content
  }: CreateQuestionUseCaseRequest): Promise<CreateQuestionUseCaseResponse>{
    const question = Question.create({
      authorId: new UniqueEntityId(author),
      title,
      content
    })

    await this.questionRepository.create(question)
    return {
      question,
    }
  }
}