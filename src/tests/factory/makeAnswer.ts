/* eslint-disable prettier/prettier */
import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Answer, AnswerProps } from '@/domain/forum/enteprise/entities/answar';
// import { Slug } from "@/domain/forum/enteprise/entities/value-objects/slug.";

// Aqui criamos essa função para ser reutilizada sempre que for necessário criar uma pergunta
// Nos parâmetros, usamos o overside do tipo Partial, que quer dizer que podemos receber os mesmos parâmetros do QuestionProps de forma opcional além de sobrescrever os dados estáticos.
export async function makeAnswer(overside: Partial<AnswerProps> = {}, id?: UniqueEntityId) {
  const answer = Answer.create({
    authorId: new UniqueEntityId(),
    questionId: new UniqueEntityId(),
    content: faker.lorem.text(),
    ...overside
  }, id)

  return answer
}
