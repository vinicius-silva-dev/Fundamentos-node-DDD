import { randomUUID } from "crypto"
import { UniqueEntityId } from "./unique-entity-id"

// Essa classe vai ser estendida pelas outras entidades com o intuito de reduzir ainda mais o código, tornado mais limpo

// O Props é um como um parametro que estamos passa para a classe, dessa formar é possive que as propiedades sejam acessadas da parte externa da classe.
export class Entity<Props> {
  private _id: UniqueEntityId

  // essa propriedade representa todas as props das entidades que vão estender essa.
  protected props: Props

  // Ao criar esse get, eu permito que o _id seja acessado, porém, não alterado
  get id() {
    return this._id
  }

  // Nesse constructor, vamos receber as props das outras classes que estendeu essa.
  
  protected constructor(props: any, id?: UniqueEntityId){
    this.props = props
    this._id = id ?? new UniqueEntityId()
  }
}