/* eslint-disable prettier/prettier */
import { QuestionRepository } from "@/domain/forum/aplication/repository/question-repository";
import { Question } from "@/domain/forum/enteprise/entities/question";

export class InMemoryQuestionRepository implements QuestionRepository {
  public items: Question[] = []
  
  async findById(id: string)  {
    const question = await this.items.find(item => item.id.toString() === id)

    if (!question) {
      return null
    }

    return question
  }

  async findBySlug(slug: string) {
    const question = await this.items.find(item => item.slug.value === slug)

    if(!question) {
      return null
    }

    return question
  }

  async save(question: Question): Promise<void> {
    const questionToEdit = await this.items.findIndex(item => item.id === question.id)

    this.items[questionToEdit] = question
  }

  async create(question: Question): Promise<void> {
    this.items.push(question)
  }

  async delete(question: Question): Promise<void> {
    const questionIndex = await this.items.findIndex(item => item.id === question.id)

    this.items.splice(questionIndex, 1)
  }
}
