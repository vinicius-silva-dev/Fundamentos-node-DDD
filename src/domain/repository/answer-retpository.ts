import { Answar } from "../entities/answar";

export interface AnswerRepository {
  create(answer: Answar): Promise<void>
}