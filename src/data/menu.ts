import { MenuItem, OptionItem } from '../types';

const acaiMandatoryComplements: OptionItem[] = [
  { id: 'm1', name: 'Leite em pó', price: 0 },
  { id: 'm2', name: 'Farinha Láctea', price: 0 },
  { id: 'm3', name: 'Granola', price: 0 },
  { id: 'm4', name: 'M&M', price: 0 },
  { id: 'm5', name: 'Leite condensado', price: 0 },
  { id: 'm6', name: 'Leite condensado + leite condensado extra', price: 1.00 },
  { id: 'm7', name: 'Sem leite condensado', price: 0 },
  { id: 'm8', name: 'Sem Recheio', price: 0 },
];

const generalAdditions: OptionItem[] = [
  { id: 'ad1', name: 'Leite em pó', price: 1.00 },
  { id: 'ad2', name: 'Farinha Láctea', price: 1.00 },
  { id: 'ad3', name: 'Granola', price: 1.00 },
  { id: 'ad4', name: 'Gota de chocolate', price: 1.00 },
  { id: 'ad5', name: 'M&M do grande', price: 1.00 },
  { id: 'ad6', name: 'Dentadura', price: 1.00 },
  { id: 'ad7', name: 'Doce Bananinha', price: 1.00 },
  { id: 'ad8', name: 'Doce tipo fini', price: 1.00 },
  { id: 'ad9', name: 'Paçoca', price: 1.00 },
  { id: 'ad10', name: 'Amendoim inteiro', price: 1.00 },
  { id: 'ad11', name: 'Bolacha Oreo', price: 1.00 },
  { id: 'ad12', name: 'Mashemello torção', price: 1.00 },
  { id: 'ad13', name: 'Jujuba', price: 1.00 },
  { id: 'ad14', name: 'Biju', price: 0.50 },
  { id: 'ad15', name: 'Casquinha', price: 1.50 },
  { id: 'ad16', name: 'Nutella', price: 3.00 },
  { id: 'ad17', name: 'Creme ninho', price: 3.00 },
  { id: 'ad18', name: 'Creme avelã', price: 3.00 },
  { id: 'ad19', name: 'Creme Oreo', price: 3.00 },
  { id: 'ad20', name: 'Creme de morango', price: 3.00 },
  { id: 'ad21', name: 'Creme de cupuaçu', price: 3.00 },
  { id: 'ad22', name: 'Morango', price: 2.00 },
  { id: 'ad23', name: 'Banana', price: 1.00 },
  { id: 'ad24', name: 'Cobertura Morango', price: 1.00 },
  { id: 'ad25', name: 'Cobertura uva', price: 1.00 },
  { id: 'ad26', name: 'Cobertura chocolate', price: 1.00 },
  { id: 'ad27', name: 'Cobertura pistache', price: 1.00 },
  { id: 'ad28', name: 'Cobertura caramelo Salgado', price: 1.00 },
];

const sorveteSabores: OptionItem[] = [
  { id: 's1', name: 'Sabor Delícia de morango', price: 0 },
  { id: 's2', name: 'Sabor Mousse de Maracujá', price: 0 },
  { id: 's3', name: 'Sabor ninho com Nutella', price: 0 },
  { id: 's4', name: 'Sabor Doce de leite com café', price: 0 },
  { id: 's5', name: 'Sabor Flocos', price: 0 },
  { id: 's6', name: 'Sabor Iogurte com Amarena', price: 0 },
  { id: 's7', name: 'Sabor Oreo', price: 0 },
  { id: 's8', name: 'Sabor Carioca ( chocolate preto e branco + barra chocolate)', price: 0 },
  { id: 's9', name: 'Sabor Petit gâteau', price: 0 },
  { id: 's10', name: 'Sabor Pistache', price: 0 },
];

const sorveteComplementos: OptionItem[] = [
  { id: 'sc1', name: 'Xerém de amendoim', price: 0 },
  { id: 'sc2', name: 'M&M', price: 0 },
  { id: 'sc3', name: 'Gota de chocolate', price: 0 },
  { id: 'sc4', name: 'Sem recheio', price: 0 },
];

const sorveteCaldas: OptionItem[] = [
  { id: 'cal1', name: 'Calda morango', price: 0 },
  { id: 'cal2', name: 'Calda chocolate', price: 0 },
  { id: 'cal3', name: 'Calda Caramelo Salgado', price: 0 },
  { id: 'cal4', name: 'Calda uva', price: 0 },
  { id: 'cal5', name: 'Sem calda', price: 0 },
];

const coxinhaFlavors: OptionItem[] = [
  { id: 'cx1', name: 'Frango', price: 0 },
  { id: 'cx2', name: 'Carne de sol', price: 0 },
];

const batataAcompanhamentos: OptionItem[] = [
  { id: 'bat1', name: 'Sem sal', price: 0 },
  { id: 'bat2', name: 'Sem ketchup', price: 0 },
  { id: 'bat3', name: 'Sem maionese', price: 0 },
  { id: 'bat4', name: 'Sem queijo ralado', price: 0 },
  { id: 'bat5', name: 'Sem recheio', price: 0 },
  { id: 'bat6', name: 'Completo', price: 0 },
];

export const menuCategories = [
  { id: 'big-acai', name: 'Big Açaí', icon: '🍇' },
  { id: 'big-sorvetes', name: 'Big Sorvetes', icon: '🍨' },
  { id: 'shake-acai', name: 'Shake de Açaís', icon: '🥤' },
  { id: 'milk-shake', name: 'Milk Shakes', icon: '🧋' },
  { id: 'bigs-especiais', name: "Big's Especiais", icon: '👑' },
  { id: 'salgados', name: 'Salgados Tradicionais', icon: '🥟' },
  { id: 'mini-coxinhas', name: 'Mini Coxinhas no Copo', icon: '🥠' },
  { id: 'baby-churros', name: 'Baby Churros', icon: '🍩' },
  { id: 'batata-frita', name: 'Batata Frita', icon: '🍟' },
  { id: 'combos', name: 'Combos Especiais', icon: '🎁' },
  { id: 'bebidas', name: 'Bebidas', icon: '🧃' },
];

export const menuItems: MenuItem[] = [
  // --- BIG AÇAI (Separated sizes) ---
  {
    id: 'big-acai-300',
    name: 'Big Açaí 300Ml',
    description: 'Açaí cremoso e geladinho no capricho.',
    category: 'big-acai',
    image: 'https://i.postimg.cc/9fzCzBtj/Whats-App-Image-2026-11-21-at-02-45-00.jpg',
    sizes: [{ name: '300Ml', price: 9.00 }],
    customizationRules: [
      { title: 'Complementos Obrigatórios (escolha de 2 a 5)', type: 'mandatory', min: 2, max: 5, options: acaiMandatoryComplements },
      { title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }
    ]
  },
  {
    id: 'big-acai-400',
    name: 'Big Açaí 400Ml',
    description: 'Tamanho ideal para quem ama açaí de qualidade.',
    category: 'big-acai',
    image: 'https://i.postimg.cc/9fzCzBtj/Whats-App-Image-2026-11-21-at-02-45-00.jpg',
    sizes: [{ name: '400Ml', price: 11.00 }],
    customizationRules: [
      { title: 'Complementos Obrigatórios (escolha de 2 a 5)', type: 'mandatory', min: 2, max: 5, options: acaiMandatoryComplements },
      { title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }
    ]
  },
  {
    id: 'big-acai-500',
    name: 'Big Açaí 500Ml',
    description: 'Para os verdadeiros fãs de açaí com muito recheio!',
    category: 'big-acai',
    image: 'https://i.postimg.cc/9fzCzBtj/Whats-App-Image-2026-11-21-at-02-45-00.jpg',
    sizes: [{ name: '500Ml', price: 13.00 }],
    customizationRules: [
      { title: 'Complementos Obrigatórios (escolha de 2 a 5)', type: 'mandatory', min: 2, max: 5, options: acaiMandatoryComplements },
      { title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }
    ]
  },

  // --- BIG SORVETES (Separated sizes) ---
  {
    id: 'big-sorvete-300',
    name: 'Big Sorvete 300ml',
    description: 'Sorvete cremoso com sabores irresistíveis.',
    category: 'big-sorvetes',
    image: 'https://i.postimg.cc/SRggXcGF/Whats-App-Image-2026-11-21-at-02-48-30.jpg',
    sizes: [{ name: '300ml', price: 8.00 }],
    flavors: sorveteSabores,
    flavorMin: 1,
    flavorMax: 3,
    customizationRules: [
      { title: 'Complementos (mínimo 1, máximo 3)', type: 'mandatory', min: 1, max: 3, options: sorveteComplementos },
      { title: 'Opção de Calda (máximo 1)', type: 'mandatory', min: 0, max: 1, options: sorveteCaldas },
      { title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }
    ]
  },
  {
    id: 'big-sorvete-400',
    name: 'Big Sorvete 400ml',
    description: 'Sorvete generoso com seus sabores favoritos.',
    category: 'big-sorvetes',
    image: 'https://i.postimg.cc/SRggXcGF/Whats-App-Image-2026-11-21-at-02-48-30.jpg',
    sizes: [{ name: '400ml', price: 10.00 }],
    flavors: sorveteSabores,
    flavorMin: 1,
    flavorMax: 3,
    customizationRules: [
      { title: 'Complementos (mínimo 1, máximo 3)', type: 'mandatory', min: 1, max: 3, options: sorveteComplementos },
      { title: 'Opção de Calda (máximo 1)', type: 'mandatory', min: 0, max: 1, options: sorveteCaldas },
      { title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }
    ]
  },
  {
    id: 'big-sorvete-500',
    name: 'Big Sorvete 500ml',
    description: 'O maior e mais delicioso sorvete da K_Açaíteria!',
    category: 'big-sorvetes',
    image: 'https://i.postimg.cc/SRggXcGF/Whats-App-Image-2026-11-21-at-02-48-30.jpg',
    sizes: [{ name: '500ml', price: 12.00 }],
    flavors: sorveteSabores,
    flavorMin: 1,
    flavorMax: 3,
    customizationRules: [
      { title: 'Complementos (mínimo 1, máximo 3)', type: 'mandatory', min: 1, max: 3, options: sorveteComplementos },
      { title: 'Opção de Calda (máximo 1)', type: 'mandatory', min: 0, max: 1, options: sorveteCaldas },
      { title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }
    ]
  },

  // --- SHAKE DE AÇAIS (Separated sizes) ---
  {
    id: 'shake-acai-300',
    name: 'Shake de açaí 300ml',
    description: 'Batido na medida certa.',
    category: 'shake-acai',
    image: 'https://i.postimg.cc/FKGkXGrB/Whats-App-Image-2026-11-21-at-02-50-02.jpg',
    sizes: [{ name: '300ml', price: 10.00 }],
    customizationRules: [
      {
        title: 'Complementos (escolha de 2 a 6)',
        type: 'mandatory',
        min: 2,
        max: 6,
        options: [
          { id: 'shc1', name: 'Batido com Leite / tradicional', price: 0 },
          { id: 'shc2', name: 'Batido com Cupuaçu', price: 0 },
          { id: 'shc3', name: 'Batido com granola', price: 0 },
          { id: 'shc4', name: 'Batido com amendoim', price: 0 },
          { id: 'shc5', name: 'Batido com banana', price: 0 },
          { id: 'shc6', name: 'Leite condensado ao redor', price: 0 },
          { id: 'shc7', name: 'Sem leite condensado', price: 0 },
        ]
      },
      {
        title: 'Adicionais Extras',
        type: 'optional',
        options: [
          { id: 'shad1', name: 'Creme Ninho', price: 3.00 },
          { id: 'shad2', name: 'Creme avelã', price: 3.00 },
          { id: 'shad3', name: 'Creme de Oreo', price: 3.00 },
          { id: 'shad4', name: 'Creme de morango', price: 3.00 },
          { id: 'shad5', name: 'Leite condensado extra', price: 1.00 },
          { id: 'shad6', name: 'Calda morango', price: 1.00 },
          { id: 'shad7', name: 'Calda chocolate', price: 1.00 },
          { id: 'shad8', name: 'Calda uva', price: 1.00 },
        ]
      }
    ]
  },
  {
    id: 'shake-acai-400',
    name: 'Shake de açaí 400ml',
    description: 'Batido na medida certa.',
    category: 'shake-acai',
    image: 'https://i.postimg.cc/FKGkXGrB/Whats-App-Image-2026-11-21-at-02-50-02.jpg',
    sizes: [{ name: '400ml', price: 11.00 }],
    customizationRules: [
      {
        title: 'Complementos (escolha de 2 a 6)',
        type: 'mandatory',
        min: 2,
        max: 6,
        options: [
          { id: 'shc1', name: 'Batido com Leite / tradicional', price: 0 },
          { id: 'shc2', name: 'Batido com Cupuaçu', price: 0 },
          { id: 'shc3', name: 'Batido com granola', price: 0 },
          { id: 'shc4', name: 'Batido com amendoim', price: 0 },
          { id: 'shc5', name: 'Batido com banana', price: 0 },
          { id: 'shc6', name: 'Leite condensado ao redor', price: 0 },
          { id: 'shc7', name: 'Sem leite condensado', price: 0 },
        ]
      },
      {
        title: 'Adicionais Extras',
        type: 'optional',
        options: [
          { id: 'shad1', name: 'Creme Ninho', price: 3.00 },
          { id: 'shad2', name: 'Creme avelã', price: 3.00 },
          { id: 'shad3', name: 'Creme de Oreo', price: 3.00 },
          { id: 'shad4', name: 'Creme de morango', price: 3.00 },
          { id: 'shad5', name: 'Leite condensado extra', price: 1.00 },
          { id: 'shad6', name: 'Calda morango', price: 1.00 },
          { id: 'shad7', name: 'Calda chocolate', price: 1.00 },
          { id: 'shad8', name: 'Calda uva', price: 1.00 },
        ]
      }
    ]
  },
  {
    id: 'shake-acai-500',
    name: 'Shake de açaí 500ml',
    description: 'Batido na medida certa.',
    category: 'shake-acai',
    image: 'https://i.postimg.cc/FKGkXGrB/Whats-App-Image-2026-11-21-at-02-50-02.jpg',
    sizes: [{ name: '500ml', price: 12.00 }],
    customizationRules: [
      {
        title: 'Complementos (escolha de 2 a 6)',
        type: 'mandatory',
        min: 2,
        max: 6,
        options: [
          { id: 'shc1', name: 'Batido com Leite / tradicional', price: 0 },
          { id: 'shc2', name: 'Batido com Cupuaçu', price: 0 },
          { id: 'shc3', name: 'Batido com granola', price: 0 },
          { id: 'shc4', name: 'Batido com amendoim', price: 0 },
          { id: 'shc5', name: 'Batido com banana', price: 0 },
          { id: 'shc6', name: 'Leite condensado ao redor', price: 0 },
          { id: 'shc7', name: 'Sem leite condensado', price: 0 },
        ]
      },
      {
        title: 'Adicionais Extras',
        type: 'optional',
        options: [
          { id: 'shad1', name: 'Creme Ninho', price: 3.00 },
          { id: 'shad2', name: 'Creme avelã', price: 3.00 },
          { id: 'shad3', name: 'Creme de Oreo', price: 3.00 },
          { id: 'shad4', name: 'Creme de morango', price: 3.00 },
          { id: 'shad5', name: 'Leite condensado extra', price: 1.00 },
          { id: 'shad6', name: 'Calda morango', price: 1.00 },
          { id: 'shad7', name: 'Calda chocolate', price: 1.00 },
          { id: 'shad8', name: 'Calda uva', price: 1.00 },
        ]
      }
    ]
  },
  {
    id: 'shake-acai-1l',
    name: 'Shake de açaí 1 litro',
    description: 'O gigante para compartilhar.',
    category: 'shake-acai',
    image: 'https://i.postimg.cc/W47YLRJt/Whats-App-Image-2026-11-21-at-03-01-07.jpg',
    sizes: [{ name: '1 Litro', price: 23.00 }],
    customizationRules: [
      {
        title: 'Complementos (escolha de 2 a 6)',
        type: 'mandatory',
        min: 2,
        max: 6,
        options: [
          { id: 'shc1', name: 'Batido com Leite / tradicional', price: 0 },
          { id: 'shc2', name: 'Batido com Cupuaçu', price: 0 },
          { id: 'shc3', name: 'Batido com granola', price: 0 },
          { id: 'shc4', name: 'Batido com amendoim', price: 0 },
          { id: 'shc5', name: 'Batido com banana', price: 0 },
          { id: 'shc6', name: 'Leite condensado ao redor', price: 0 },
          { id: 'shc7', name: 'Sem leite condensado', price: 0 },
        ]
      },
      {
        title: 'Adicionais Extras',
        type: 'optional',
        options: [
          { id: 'shad1', name: 'Creme Ninho', price: 3.00 },
          { id: 'shad2', name: 'Creme avelã', price: 3.00 },
          { id: 'shad3', name: 'Creme de Oreo', price: 3.00 },
          { id: 'shad4', name: 'Creme de morango', price: 3.00 },
          { id: 'shad5', name: 'Leite condensado extra', price: 1.00 },
          { id: 'shad6', name: 'Calda morango', price: 1.00 },
          { id: 'shad7', name: 'Calda chocolate', price: 1.00 },
          { id: 'shad8', name: 'Calda uva', price: 1.00 },
        ]
      }
    ]
  },

  // --- MILK SHAKES (Separated sizes) ---
  {
    id: 'milk-shake-300',
    name: 'Milk shake 300ml',
    description: 'Cremoso, saboroso e geladinho.',
    category: 'milk-shake',
    image: 'https://i.postimg.cc/MXkmftj9/Whats-App-Image-2026-11-21-at-03-02-21.jpg',
    sizes: [{ name: '300ml', price: 9.00 }],
    customizationRules: [
      {
        title: 'Acompanhamentos (máximo 1 opção obrigatória)',
        type: 'mandatory',
        min: 1,
        max: 1,
        options: [
          { id: 'mks1', name: 'Calda morango', price: 0 },
          { id: 'mks2', name: 'Calda chocolate', price: 0 },
          { id: 'mks3', name: 'Calda Caramelo Salgado', price: 0 },
          { id: 'mks4', name: 'Calda uva', price: 0 },
          { id: 'mks5', name: 'Sem calda', price: 0 },
        ]
      },
      {
        title: 'Adicionais Extras',
        type: 'optional',
        options: [
          { id: 'mksad1', name: 'Creme Ninho', price: 3.00 },
          { id: 'mksad2', name: 'Creme avelã', price: 3.00 },
          { id: 'mksad3', name: 'Creme de Oreo', price: 3.00 },
          { id: 'mksad4', name: 'Creme de morango', price: 3.00 },
          { id: 'mksad5', name: 'Leite condensado extra', price: 1.00 },
          { id: 'mksad6', name: 'Calda morango', price: 1.00 },
          { id: 'mksad7', name: 'Calda chocolate', price: 1.00 },
          { id: 'mksad8', name: 'Calda uva', price: 1.00 },
        ]
      }
    ]
  },
  {
    id: 'milk-shake-400',
    name: 'Milk shake 400ml',
    description: 'Cremoso, saboroso e geladinho.',
    category: 'milk-shake',
    image: 'https://i.postimg.cc/MXkmftj9/Whats-App-Image-2026-11-21-at-03-02-21.jpg',
    sizes: [{ name: '400ml', price: 10.00 }],
    customizationRules: [
      {
        title: 'Acompanhamentos (máximo 1 opção obrigatória)',
        type: 'mandatory',
        min: 1,
        max: 1,
        options: [
          { id: 'mks1', name: 'Calda morango', price: 0 },
          { id: 'mks2', name: 'Calda chocolate', price: 0 },
          { id: 'mks3', name: 'Calda Caramelo Salgado', price: 0 },
          { id: 'mks4', name: 'Calda uva', price: 0 },
          { id: 'mks5', name: 'Sem calda', price: 0 },
        ]
      },
      {
        title: 'Adicionais Extras',
        type: 'optional',
        options: [
          { id: 'mksad1', name: 'Creme Ninho', price: 3.00 },
          { id: 'mksad2', name: 'Creme avelã', price: 3.00 },
          { id: 'mksad3', name: 'Creme de Oreo', price: 3.00 },
          { id: 'mksad4', name: 'Creme de morango', price: 3.00 },
          { id: 'mksad5', name: 'Leite condensado extra', price: 1.00 },
          { id: 'mksad6', name: 'Calda morango', price: 1.00 },
          { id: 'mksad7', name: 'Calda chocolate', price: 1.00 },
          { id: 'mksad8', name: 'Calda uva', price: 1.00 },
        ]
      }
    ]
  },
  {
    id: 'milk-shake-500',
    name: 'Milk shake 500ml',
    description: 'Cremoso, saboroso e geladinho.',
    category: 'milk-shake',
    image: 'https://i.postimg.cc/MXkmftj9/Whats-App-Image-2026-11-21-at-03-02-21.jpg',
    sizes: [{ name: '500ml', price: 11.00 }],
    customizationRules: [
      {
        title: 'Acompanhamentos (máximo 1 opção obrigatória)',
        type: 'mandatory',
        min: 1,
        max: 1,
        options: [
          { id: 'mks1', name: 'Calda morango', price: 0 },
          { id: 'mks2', name: 'Calda chocolate', price: 0 },
          { id: 'mks3', name: 'Calda Caramelo Salgado', price: 0 },
          { id: 'mks4', name: 'Calda uva', price: 0 },
          { id: 'mks5', name: 'Sem calda', price: 0 },
        ]
      },
      {
        title: 'Adicionais Extras',
        type: 'optional',
        options: [
          { id: 'mksad1', name: 'Creme Ninho', price: 3.00 },
          { id: 'mksad2', name: 'Creme avelã', price: 3.00 },
          { id: 'mksad3', name: 'Creme de Oreo', price: 3.00 },
          { id: 'mksad4', name: 'Creme de morango', price: 3.00 },
          { id: 'mksad5', name: 'Leite condensado extra', price: 1.00 },
          { id: 'mksad6', name: 'Calda morango', price: 1.00 },
          { id: 'mksad7', name: 'Calda chocolate', price: 1.00 },
          { id: 'mksad8', name: 'Calda uva', price: 1.00 },
        ]
      }
    ]
  },

  // --- BIG'S ESPECIAIS (Separated sizes) ---
  // Big Ninho
  {
    id: 'big-ninho-300',
    name: 'Big Ninho 300ml',
    description: 'Acompanha: creme ninho, açaí, leite condensado, leite ninho e M&M.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/sXvLp61m/Whats-App-Image-2026-11-21-at-03-03-31.jpg',
    sizes: [{ name: '300ml', price: 14.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-ninho-400',
    name: 'Big ninho 400ml',
    description: 'Acompanha: creme ninho, açaí, leite condensado, leite ninho e M&M.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/sXvLp61m/Whats-App-Image-2026-11-21-at-03-03-31.jpg',
    sizes: [{ name: '400ml', price: 16.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-ninho-500',
    name: 'Big ninho 500ml',
    description: 'Acompanha: creme ninho, açaí, leite condensado, leite ninho e M&M.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/sXvLp61m/Whats-App-Image-2026-11-21-at-03-03-31.jpg',
    sizes: [{ name: '500ml', price: 18.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },

  // Big Oreo
  {
    id: 'big-oreo-300',
    name: 'Big oreo 300ml',
    description: 'Acompanha: creme de oreo, açaí, leite condensado, leite ninho, bolacha negresco.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/0NNXsWGk/Whats-App-Image-2026-11-21-at-03-04-47.jpg',
    sizes: [{ name: '300ml', price: 14.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-oreo-400',
    name: 'Big oreo 400ml',
    description: 'Acompanha: creme de oreo, açaí, leite condensado, leite ninho, bolacha negresco.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/0NNXsWGk/Whats-App-Image-2026-11-21-at-03-04-47.jpg',
    sizes: [{ name: '400ml', price: 16.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-oreo-500',
    name: 'Big oreo 500ml',
    description: 'Acompanha: creme de oreo, açaí, leite condensado, leite ninho, bolacha negresco.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/0NNXsWGk/Whats-App-Image-2026-11-21-at-03-04-47.jpg',
    sizes: [{ name: '500ml', price: 18.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },

  // Big Morango
  {
    id: 'big-morango-300',
    name: 'Big morango 300ml',
    description: 'Acompanha: creme de morango, açaí, leite condensado, leite ninho, morango partida ao meio.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/Mp9td0kk/Whats-App-Image-2026-11-21-at-03-05-08.jpg',
    sizes: [{ name: '300ml', price: 15.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-morango-400',
    name: 'Big morango 400ml',
    description: 'Acompanha: creme de morango, açaí, leite condensado, leite ninho, morango partida ao meio.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/Mp9td0kk/Whats-App-Image-2026-11-21-at-03-05-08.jpg',
    sizes: [{ name: '400ml', price: 17.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-morango-500',
    name: 'Big morango 500ml',
    description: 'Acompanha: creme de morango, açaí, leite condensado, leite ninho, morango partida ao meio.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/Mp9td0kk/Whats-App-Image-2026-11-21-at-03-05-08.jpg',
    sizes: [{ name: '500ml', price: 19.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },

  // Big Nutella
  {
    id: 'big-nutella-300',
    name: 'Big Nutella 300ml',
    description: 'Acompanha: Nutella ao redor do corpo, creme de avelã, açaí, leite condensado, gota de chocolate, leite ninho e Nutella em cima.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/B6KgSdjS/Whats-App-Image-2026-11-21-at-03-06-23-(1).jpg',
    sizes: [{ name: '300ml', price: 16.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-nutella-400',
    name: 'Big Nutella 400ml',
    description: 'Acompanha: Nutella ao redor do corpo, creme de avelã, açaí, leite condensado, gota de chocolate, leite ninho e Nutella em cima.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/B6KgSdjS/Whats-App-Image-2026-11-21-at-03-06-23-(1).jpg',
    sizes: [{ name: '400ml', price: 18.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },
  {
    id: 'big-nutella-500',
    name: 'Big Nutella 500ml',
    description: 'Acompanha: Nutella ao redor do corpo, creme de avelã, açaí, leite condensado, gota de chocolate, leite ninho e Nutella em cima.',
    category: 'bigs-especiais',
    image: 'https://i.postimg.cc/B6KgSdjS/Whats-App-Image-2026-11-21-at-03-06-23-(1).jpg',
    sizes: [{ name: '500ml', price: 20.00 }],
    customizationRules: [{ title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }]
  },

  // --- SALGADOS TRADICIONAIS (Only Empada cremosa as requested) ---
  {
    id: 'empada-frango',
    name: 'Empada de frango cremosa',
    description: 'Massa podre desmanchando na boca com recheio cremoso de frango.',
    category: 'salgados',
    image: 'https://i.postimg.cc/sXdWc12X/Whats-App-Image-2026-11-21-at-03-09-34.jpg',
    price: 5.00
  },

  // --- MINI COXINHAS NO COPO (Separated sizes) ---
  {
    id: 'mini-coxinhas-12',
    name: 'Mini coxinhas 12 unidades',
    description: 'Coxinhas sequinhas e saborosas.',
    category: 'mini-coxinhas',
    image: 'https://i.postimg.cc/LsfYnRVs/Whats-App-Image-2026-11-21-at-03-11-20.jpg',
    sizes: [{ name: '12 unidades', price: 7.00 }],
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2
  },
  {
    id: 'mini-coxinhas-24',
    name: 'Mini coxinhas 24 unidades',
    description: 'Coxinhas sequinhas e saborosas.',
    category: 'mini-coxinhas',
    image: 'https://i.postimg.cc/LsfYnRVs/Whats-App-Image-2026-11-21-at-03-11-20.jpg',
    sizes: [{ name: '24 unidades', price: 12.00 }],
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2
  },
  {
    id: 'mini-coxinhas-36',
    name: 'Mini coxinhas 36 unidades',
    description: 'Coxinhas sequinhas e saborosas.',
    category: 'mini-coxinhas',
    image: 'https://i.postimg.cc/LsfYnRVs/Whats-App-Image-2026-11-21-at-03-11-20.jpg',
    sizes: [{ name: '36 unidades', price: 16.00 }],
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2
  },
  {
    id: 'mini-coxinhas-100',
    name: 'Mini coxinhas 100 unidades',
    description: 'Coxinhas sequinhas e saborosas.',
    category: 'mini-coxinhas',
    image: 'https://i.postimg.cc/LsfYnRVs/Whats-App-Image-2026-11-21-at-03-11-20.jpg',
    sizes: [{ name: '100 unidades', price: 36.00 }],
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2
  },

  // --- BABY CHURROS (Separated sizes) ---
  {
    id: 'baby-churros-10',
    name: 'Baby Churros 10 unidades',
    description: 'Churros fresquinhos recheados com muito doce de leite.',
    category: 'baby-churros',
    image: 'https://i.postimg.cc/tJg4tHFj/Whats-App-Image-2026-11-21-at-03-12-47.jpg',
    sizes: [{ name: '10 unidades', price: 7.00 }]
  },
  {
    id: 'baby-churros-20',
    name: 'Baby Churros 20 unidades',
    description: 'Churros fresquinhos recheados com muito doce de leite.',
    category: 'baby-churros',
    image: 'https://i.postimg.cc/tJg4tHFj/Whats-App-Image-2026-11-21-at-03-12-47.jpg',
    sizes: [{ name: '20 unidades', price: 12.00 }]
  },
  {
    id: 'baby-churros-30',
    name: 'Baby Churros 30 unidades',
    description: 'Churros fresquinhos recheados com muito doce de leite.',
    category: 'baby-churros',
    image: 'https://i.postimg.cc/tJg4tHFj/Whats-App-Image-2026-11-21-at-03-12-47.jpg',
    sizes: [{ name: '30 unidades', price: 16.00 }]
  },

  // --- BATATA FRITA (Separated sizes with specific images) ---
  {
    id: 'batata-p',
    name: 'Batata frita Hamburgueria P',
    description: 'Crocante, quentinha e temperada na hora.',
    category: 'batata-frita',
    image: 'https://i.postimg.cc/VsHfQpj7/Whats-App-Image-2026-11-21-at-03-13-45.jpg',
    sizes: [{ name: 'Hamburgueria P', price: 10.00 }],
    customizationRules: [
      { title: 'Acompanhamentos (escolha de 2 a 5)', type: 'mandatory', min: 2, max: 5, options: batataAcompanhamentos }
    ]
  },
  {
    id: 'batata-m',
    name: 'Batata frita Hamburgueria M',
    description: 'Crocante, quentinha e temperada na hora.',
    category: 'batata-frita',
    image: 'https://i.postimg.cc/CKmyCn7G/Whats-App-Image-2026-11-21-at-03-16-39.jpg',
    sizes: [{ name: 'Hamburgueria M', price: 13.00 }],
    customizationRules: [
      { title: 'Acompanhamentos (escolha de 2 a 5)', type: 'mandatory', min: 2, max: 5, options: batataAcompanhamentos }
    ]
  },
  {
    id: 'batata-marmita',
    name: 'Batata frita Marmita P',
    description: 'Crocante, quentinha e temperada na hora.',
    category: 'batata-frita',
    image: 'https://i.postimg.cc/gJTfQ9f3/Whats-App-Image-2026-11-21-at-03-17-23.jpg',
    sizes: [{ name: 'Marmita P', price: 16.00 }],
    customizationRules: [
      { title: 'Acompanhamentos (escolha de 2 a 5)', type: 'mandatory', min: 2, max: 5, options: batataAcompanhamentos }
    ]
  },

  // --- COMBOS ---
  {
    id: 'combo-lanchinho-indaiar',
    name: 'Combo Lanchinho (Refri Indaiá 250Ml)',
    description: '10 Coxinhas P, 5 baby churros + refri Indaiá 250Ml.',
    category: 'combos',
    image: 'https://i.postimg.cc/0jGhQ6z8/Whats-App-Image-2026-11-21-at-03-21-01.jpg',
    price: 14.00,
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2
  },
  {
    id: 'combo-lanchinho-coca',
    name: 'Combo Lanchinho (Coca-Cola Lata)',
    description: '10 Coxinhas P, 5 baby churros + coca cola lata.',
    category: 'combos',
    image: 'https://i.postimg.cc/mrXLL50d/Whats-App-Image-2026-11-21-at-03-19-11.jpg',
    price: 16.00,
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2
  },
  {
    id: 'combo-lanche',
    name: 'Combo Lanche',
    description: 'Batata frita hamburgueria P + 24 mini coxinhas no copo + 1 coca lata.',
    category: 'combos',
    image: 'https://i.postimg.cc/hGHY18xJ/Whats-App-Image-2026-11-21-at-03-22-08-(1).jpg',
    price: 25.00,
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2,
    customizationRules: [
      { title: 'Acompanhamentos da Batata Frita (escolha de 2 a 5)', type: 'mandatory', min: 2, max: 5, options: batataAcompanhamentos }
    ]
  },
  {
    id: 'combo-festinha',
    name: 'Combo Festinha',
    description: '100 coxinhas + 30 churros + 1 Refri de 1 Litro.',
    category: 'combos',
    image: 'https://i.postimg.cc/Fzvn29Ts/Whats-App-Image-2026-11-21-at-03-22-18.jpg',
    price: 55.00,
    flavors: coxinhaFlavors,
    flavorMin: 1,
    flavorMax: 2
  },
  {
    id: 'combo-sorvete',
    name: 'Combo Sorvete',
    description: '10 bolas de sorvete + 3 casquinhas.',
    category: 'combos',
    image: 'https://i.postimg.cc/6qzzgC7T/Whats-App-Image-2026-11-21-at-03-23-50.jpg',
    price: 30.00,
    flavors: sorveteSabores,
    flavorMin: 1,
    flavorMax: 8,
    customizationRules: [
      { title: 'Opção de Calda (máximo 1)', type: 'mandatory', min: 0, max: 1, options: sorveteCaldas },
      { title: 'Adicionais Extras (opcional, sem limite)', type: 'optional', options: generalAdditions }
    ]
  },

  // --- BEBIDAS ---
  {
    id: 'refri-indaia-250',
    name: 'Refri Indaiá 250Ml',
    category: 'bebidas',
    image: 'https://i.postimg.cc/vTD68nq2/Whats-App-Image-2026-11-21-at-03-26-50.jpg',
    price: 3.00
  },
  {
    id: 'refri-indaia-1l',
    name: 'Refri indaia 1Litro',
    category: 'bebidas',
    image: 'https://i.postimg.cc/ZqZBB2sr/Whats-App-Image-2026-11-21-at-03-27-16.jpg',
    price: 5.50
  },
  {
    id: 'coca-lata',
    name: 'Coca cola lata 350Ml',
    category: 'bebidas',
    image: 'https://i.postimg.cc/ZqZBB2sr/Whats-App-Image-2026-11-21-at-03-27-16.jpg',
    price: 5.00
  },
  {
    id: 'agua-500',
    name: 'Água 500ml',
    category: 'bebidas',
    image: 'https://i.postimg.cc/2y5nqM60/Whats-App-Image-2026-11-21-at-03-26-23.jpg',
    price: 3.00
  }
];
