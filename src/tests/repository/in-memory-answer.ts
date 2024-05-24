/* eslint-disable prettier/prettier */
import { AnswerRepository } from "@/domain/forum/aplication/repository/answer-retpository";
import { Answer } from "@/domain/forum/enteprise/entities/answar";

export class InMemoryAnswerRepository implements AnswerRepository {
  public items: Answer[] = []

  async findById(id: string)  {
    const answer = await this.items.find(item => item.id.toString() === id)

    if (!answer) {
      return null
    }

    return answer
  }

  async create(answer: Answer): Promise<void> {
    this.items.push(answer)
  }

  async delete(answer: Answer): Promise<void> {
    const answerIndex = await this.items.findIndex(item => item.id === answer.id)

    this.items.splice(answerIndex, 1)
  }
}
