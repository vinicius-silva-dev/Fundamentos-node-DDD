/* eslint-disable prettier/prettier */
import { Question } from "../../enteprise/entities/question"
import { QuestionRepository } from "../repository/question-repository"

interface getQuestionBySlugRequest {
  slug: string
}

interface getQuestionBySlugResponse {
  question: Question
}
export class GetQuestionBySlugUseCase {
  constructor(private questionRepository: QuestionRepository) {}

  async execute({
    slug
  }: getQuestionBySlugRequest): Promise<getQuestionBySlugResponse> {
    const question = await this.questionRepository.findBySlug(slug)

    if(!question) {
      throw new Error('Question not found.')
    }

    return {
      question,
    }
  }
}