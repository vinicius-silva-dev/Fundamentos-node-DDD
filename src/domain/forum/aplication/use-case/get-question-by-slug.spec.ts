/* eslint-disable prettier/prettier */
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryQuestionRepository } from '@/tests/repository/in-memory-question'
import { GetQuestionBySlugUseCase } from './get-question-by-slug'
import { Slug } from '../../enteprise/entities/value-objects/slug.'
import { makeQuestion } from '@/tests/factory/makeQuestion'

let inMemoryQuestionRepository: InMemoryQuestionRepository
let sut: GetQuestionBySlugUseCase
describe('Buscar uma question pelo slug', () => {
  beforeEach(() => {
    inMemoryQuestionRepository = new InMemoryQuestionRepository()
    sut = new GetQuestionBySlugUseCase(inMemoryQuestionRepository)
  })

  it('Deve buscar uma pergunta pelo slug', async () => {
    const newQuestion = await makeQuestion({
      slug: Slug.create('exemple-question')
    })

    await inMemoryQuestionRepository.create(newQuestion)
    const { question } = await sut.execute({
      slug: 'exemple-question'
    })
  
    expect(question.id).toBeTruthy()
    expect(question.title).toEqual(newQuestion.title)

  })
})
