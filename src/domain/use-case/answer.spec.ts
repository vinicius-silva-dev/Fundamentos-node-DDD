import {expect, test} from "vitest"
import { AnswarQuestion } from "./answar-question"
import { AnswerRepository } from "../repository/answer-retpository"

const fakeAnswerRepository: AnswerRepository = {
  create: async () => {
    return
  }
}
test("create an answer", async () => {
  const answerQuestion = new AnswarQuestion(fakeAnswerRepository)

  const answer = await answerQuestion.execute({
    questionId: "1",
    instructorId: "2",
    content: "Nova resposta"
  })
  console.log(answer.content)
  expect(answer.content).toEqual("Nova resposta")
})