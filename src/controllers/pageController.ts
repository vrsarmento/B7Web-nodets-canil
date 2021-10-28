import { Request, Response } from 'express'
import { createMenuObject } from '../helpers/createMenuObject'

export const home = (req: Request, res: Response) => {
  res.render('pages/page', {
    // Na minha opinião, um modo mais fácil de setar o item de menu ativo seria enviar apenas uma propriedade com o nome do item. 'Ex: dog: true'. Ou um objeto 'menu' com apenas uma propriedade apenas, sendo esta o nome do item de menu ativo (como feito no item comentado abaixo), ao invés de um objeto inteiro com todos os itens de menu.
    // Mas resolvi deixar esse helper (createMenuObject) como exemplo de resolução em Typescript, já que implementando assim é possível restringir as entradas às declaradas no type.
    // Ainda assim, acho que não era necessário criar um objeto com todos os itens, bastava um type restringindo as opções aos itens de menu existentes.
    // menu: { all: true },
    menu: createMenuObject('all'),
    banner: {
      title: 'Todos os animais',
      background: 'allanimals.jpg'
    }
  })
}

export const dogs = (req: Request, res: Response) => {
  res.render('pages/page', {
    // menu: { dog: true },
    menu: createMenuObject('dog'),
    banner: {
      title: 'Cachorros',
      background: 'banner_dog.jpg'
    }
  })
}

export const cats = (req: Request, res: Response) => {
  res.render('pages/page', {
    // menu: { cat: true },
    menu: createMenuObject('cat'),
    banner: {
      title: 'Gatos',
      background: 'banner_cat.jpg'
    }
  })
}

export const fishes = (req: Request, res: Response) => {
  res.render('pages/page', {
    // menu: { fish: true },
    menu: createMenuObject('fish'),
    banner: {
      title: 'Peixes',
      background: 'banner_fish.jpg'
    }
  })
}