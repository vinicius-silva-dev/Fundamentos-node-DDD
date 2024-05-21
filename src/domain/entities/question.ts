import { randomUUID } from "crypto"
import { Slug } from "./value-objects/slug."
import { Entity } from "../../core/entities/entity"
import { UniqueEntityId } from "../../core/entities/unique-entity-id"
import { Optional } from "../../core/types/optional"

interface QuestionProps {
  author: string
  title: string
  bestAnswarId?: UniqueEntityId
  slug: Slug
  content: string
  createdAt: Date
  updateAt?: Date
}

// O objetivo é fazer com que q certas propriedades sejam opcionais na hora de passar a informação na instância, mas elas são obrigatórias, para isso ser possível criamos um método static create, passamos as props e o id, instanciamos a classe que estamos, fazemos ums spreed nas props e preenchemos o createdAt. Assim, quando instanciarmos a classe e não passar o createdAt, essa propriedade já é preenchida automaticamente.
export class Question extends Entity<QuestionProps> {
  get author() {
    return this.props.author
  }
  get title() {
    return this.props.title
  }
  get createdAt() {
    return this.props.createdAt
  }

  get bestAnswarId() {
    return this.props.bestAnswarId
  }

  get slug() {
    return this.props.slug
  }

  get content() {
    return this.props.content
  }

  get updateAt() {
    return this.props.updateAt
  }

  get exerpt() {
    return this.props.content.substring(0, 120).trim().concat("...")
  }

  private touch() {
    this.props.updateAt = new Date()
  }

  set title(title: string) {
    this.props.title = title
    this.props.slug = Slug.createFromText(title)
    this.touch()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }

  set beastAnswerId(beastAnswerId: UniqueEntityId) {
    this.props.bestAnswarId = beastAnswerId
    this.touch()
  }

  static create(props: Optional<QuestionProps, 'createdAt' | 'slug'>, id?: UniqueEntityId) {
    const question = new Question({
      ...props,
      slug: props.slug ?? Slug.createFromText(props.title),
      creartedAt: new Date()
    }, id)

    return question
  }
}