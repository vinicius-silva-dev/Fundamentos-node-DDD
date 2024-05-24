/* eslint-disable prettier/prettier */
import { faker } from '@faker-js/faker'
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Question, QuestionProps } from "@/domain/forum/enteprise/entities/question";
// import { Slug } from "@/domain/forum/enteprise/entities/value-objects/slug.";

// Aqui criamos essa função para ser reutilizada sempre que for necessário criar uma pergunta
// Nos parâmetros, usamos o overside do tipo Partial, que quer dizer que podemos receber os mesmos parâmetros do QuestionProps de forma opcional além de sobrescrever os dados estáticos.
export async function makeQuestion(overside: Partial<QuestionProps> = {}, id?: UniqueEntityId) {
  const question = Question.create({
    authorId: new UniqueEntityId(),
    title: faker.lorem.sentence(),
    content: faker.lorem.text(),
    ...overside
  }, id)

  return question
}
