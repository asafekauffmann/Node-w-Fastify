import { randomUUID } from "node:crypto" // unic universal id


// Classe para centralizar todas as funções
export class DatabaseMemory {
  // chave privada para armazenar items no banco de dados em memoria
  #videos = new Map() // Set, Map estruturas de dados javascript

  list() {
    return Array.from(this.#videos.values())
  }

  create(video) { 
    const videoId = randomUUID()
    this.#videos.set(videoId, video)
  }

  update(id, video) {
    this.#videos.set(id, video)
  }

  delete(id) {
    this.#videos.delete(id)
  }

}