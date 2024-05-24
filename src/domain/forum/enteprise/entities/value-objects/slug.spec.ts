import { expect, test } from "vitest"
import { Slug } from "./slug."

test("it shuld be able to create a new slug from text", () => {
  const slug = Slug.createFromText("Exemple question title")

  expect(slug.value).toEqual("exemple-question-title")
}) 