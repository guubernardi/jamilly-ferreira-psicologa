import { defineStore } from 'pinia'

export const useStoreNome = defineStore('storeNome', {
  state: () => {
    return {
      nome: 'Jamilly Ferreira'
    }
  },
  actions: {
    inicializarNome() {
      if (process.client) {
        const nomeSalvo = localStorage.getItem('jamilly-ferreira-nome')
        if (nomeSalvo) {
          this.nome = nomeSalvo
        } else {
          this.nome = 'Jamilly Ferreira'
          localStorage.setItem('jamilly-ferreira-nome', 'Jamilly Ferreira')
        }
      }
    }
  }
})
