/* eslint-disable prettier/prettier */
import { beforeEach, describe, expect, it } from 'vitest'
import { AnswarQuestion } from './answar-question'
import { InMemoryAnswerRepository } from '@/tests/repository/in-memory-answer'

let inMemoryQuestionRepository: InMemoryAnswerRepository
let sut: AnswarQuestion
describe('Cria uma resposta', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryAnswerRepository()
    sut = new AnswarQuestion(inMemoryQuestionRepository)
  })
  
  it('create an answer', async () => {  
    const answer = await sut.execute({
      questionId: '1',
      instructorId: '2',
      content: 'Nova resposta',
    })
    expect(answer.content).toEqual('Nova resposta')
    expect(inMemoryQuestionRepository.items[0].id).toEqual(answer.id)
  })
})
