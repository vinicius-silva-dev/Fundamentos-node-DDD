/* eslint-disable prettier/prettier */
import { beforeEach, describe, expect, it } from 'vitest'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { InMemoryAnswerRepository } from '@/tests/repository/in-memory-answer'
import { AnswerQuestion } from './delete-answer'
import { makeAnswer } from '@/tests/factory/makeAnswer'

let inMemoryAnswerRepository: InMemoryAnswerRepository
let sut: AnswerQuestion
describe('Deletar pergunta', () => {
  beforeEach(() => {
    inMemoryAnswerRepository = new InMemoryAnswerRepository()
    sut = new AnswerQuestion(inMemoryAnswerRepository)
  })

  it('Deve deletar uma pergunta', async () => {
    const newAnswer = await makeAnswer({
      authorId: new UniqueEntityId('author-1'),
    }, new UniqueEntityId('answer-1'))

    await inMemoryAnswerRepository.create(newAnswer)
    await sut.execute({
      authorId: 'author-1',
      answerId: 'answer-1'
    })
  
    expect(inMemoryAnswerRepository.items).toHaveLength(0)
  })
})
