/* eslint-disable prettier/prettier */
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateQuestion } from './create-question'
import { InMemoryQuestionRepository } from '@/tests/repository/in-memory-question'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: CreateQuestion
describe('Criar pergunta', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new CreateQuestion(inMemoryQuestionRepository)
  })

  it('Deve criar uma pergunta', async () => {
    const { question } = await sut.execulte({
      author: '1',
      title: 'Nova pergunta',
      content: 'Conteúdo da pergunta'
    })
  
    expect(question.id).toBeTruthy()
    expect(inMemoryQuestionRepository.items[0].id).toEqual(question.id)
  })
})
