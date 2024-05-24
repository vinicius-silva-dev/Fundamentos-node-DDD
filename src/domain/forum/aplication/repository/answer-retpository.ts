/* eslint-disable prettier/prettier */
import { Answer } from '../../enteprise/entities/answar'

export interface AnswerRepository {
  findById(id: string): Promise<Answer | null>
  create(answer: Answer): Promise<void>
  delete(answer: Answer): Promise<void>
}