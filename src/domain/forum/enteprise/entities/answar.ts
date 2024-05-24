/* eslint-disable prettier/prettier */
import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Optional } from '@/core/types/optional'

export interface AnswerProps {
  authorId: UniqueEntityId
  questionId: UniqueEntityId
  content: string
  createdAt: Date
  updateAt?: Date
}

export class Answer extends Entity<AnswerProps> {

  // Esse get serve para acesso externo da classe.
  get authorId() {
    return this.props.authorId
  }

  get questionId() {
    return this.props.questionId
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updateAt() {
    return this.props.updateAt
  }

  get content() {
    return this.props.content
  }

  get exerpt() {
    return this.props.content.substring(0, 120).trim().concat("...")
  }

  private touch() {
    this.props.updateAt = new Date()
  }

  set content(content: string) {
    this.props.content = content
    this.touch()
  }
  // constructor(props: QuestionProps,id?: string) {
  //   // o super é usado quando estendemos uma classe e precisamos passar propriedades a ela.
  //   // Neste caso, passmos as propriedades dessa classe, junto com o id, para o super, assim não precisamos this.content = props.content.
  //   super(props,id)
  // }
  
  static create(props: Optional<AnswerProps, 'createdAt'>, id?: UniqueEntityId) {
    const answer = new Answer({
      ...props,
      creartedAt: new Date()
    }, id)

    return answer
  }
}