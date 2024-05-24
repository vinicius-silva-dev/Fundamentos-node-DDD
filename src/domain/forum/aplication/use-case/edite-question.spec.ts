/* eslint-disable prettier/prettier */
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryQuestionRepository } from '@/tests/repository/in-memory-question'
import { makeQuestion } from '@/tests/factory/makeQuestion'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { EditeQuestion } from './edite-question'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: EditeQuestion
describe('Deletar pergunta', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new EditeQuestion(inMemoryQuestionRepository)
  })

  it('Deve editar uma pergunta', async () => {
    const newQuestion = await makeQuestion({
      authorId: new UniqueEntityId('author-1')
    }, new UniqueEntityId('question-1'))

    await inMemoryQuestionRepository.create(newQuestion)
    await sut.execute({
      questionId: newQuestion.id.toString(),
      authorId: 'author-1',
      title: 'Pergunta editada',
      content: 'conteúdo da pergunta'
    })
    console.log(inMemoryQuestionRepository.items[0])
    // O toMatchObject serve para verificar se as propriedade passadas estão presente no objeto a ser testado.
    expect(inMemoryQuestionRepository.items[0]).toMatchObject({
      title: 'Pergunta editada',
      questionId: 'question-1',
    })
  })

  it.skip('Não deve editar uma pergunta', async () => {
    const newQuestion = await makeQuestion({
      authorId: new UniqueEntityId('author-1')
    }, new UniqueEntityId('question-1'))

    await inMemoryQuestionRepository.create(newQuestion)
    await sut.execute({
      questionId: newQuestion.id.toValue(),
      authorId: 'author-2',
      title: 'Pergunta editada',
      content: 'conteúdo da pergunta'
    })
    // O toMatchObject serve para verificar se as propriedade passadas estão presente no objeto a ser testado.
    expect(async () => {
      return await sut.execute({
        authorId: 'author-1',
        title: 'Pergunta editada',
        questionId: newQuestion.id.toValue(),
        content: 'conteúdo da pergunta'
      })
    }).rejects.toBeInstanceOf(Error)
  })
})
