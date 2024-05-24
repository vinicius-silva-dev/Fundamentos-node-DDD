/* eslint-disable prettier/prettier */
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryQuestionRepository } from '@/tests/repository/in-memory-question'
import { DeleteQuestion } from './delete-question'
import { makeQuestion } from '@/tests/factory/makeQuestion'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: DeleteQuestion
describe('Deletar pergunta', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new DeleteQuestion(inMemoryQuestionRepository)
  })

  it('Deve deletar uma pergunta', async () => {
    const newQuestion = await makeQuestion({
      authorId: new UniqueEntityId('author-1')
    }, new UniqueEntityId('question-1'))

    await inMemoryQuestionRepository.create(newQuestion)
    await sut.execute({
      questionId: 'question-1',
      authorId: 'author-1'
    })
  
    expect(inMemoryQuestionRepository.items).toHaveLength(0)
  })
})
