
import { Exercise, FaqItem } from './types';

export const WHATSAPP_NUMBER = '351000000000'; // Placeholder number

export const EXERCISES_DATA: Exercise[] = [
  {
    title: 'Ponte de Glúteos',
    description: 'Deite-se de costas com os joelhos dobrados. Levante as ancas do chão até que o corpo forme uma linha reta dos ombros aos joelhos. Mantenha por alguns segundos.',
    imageUrl: 'https://picsum.photos/seed/glutebridge/400/300',
    safe: true,
  },
  {
    title: 'Gato-Camelo',
    description: 'Em quatro apoios, arqueie as costas para cima (gato) e depois para baixo (camelo). Este movimento suave mobiliza a coluna.',
    imageUrl: 'https://picsum.photos/seed/catcamel/400/300',
    safe: true,
  },
  {
    title: 'Prancha Abdominal',
    description: 'Mantenha o corpo em linha reta, apoiado nos antebraços e pontas dos pés. Fortalece o core, essencial para o suporte da coluna.',
    imageUrl: 'https://picsum.photos/seed/plank/400/300',
    safe: true,
  },
  {
    title: 'Flexão de Tronco (Abdominais)',
    description: 'Este exercício pode aumentar a pressão sobre os discos intervertebrais, especialmente em casos de hérnia discal.',
    imageUrl: 'https://picsum.photos/seed/situp/400/300',
    warning: 'Aumenta a pressão discal. Evitar na fase aguda.',
    safe: false,
  },
  {
    title: 'Rotação de Tronco com Carga',
    description: 'Movimentos de torção, principalmente com peso, podem agravar lesões discais ao colocar stress excessivo nas fibras do disco.',
    imageUrl: 'https://picsum.photos/seed/russiantwist/400/300',
    warning: 'Stress de torção perigoso para o disco.',
    safe: false,
  },
  {
    title: 'Levantamento Terra (Deadlift)',
    description: 'Se executado com má técnica, este exercício pode ser extremamente prejudicial para a zona lombar e agravar problemas discais existentes.',
    imageUrl: 'https://picsum.photos/seed/deadlift/400/300',
    warning: 'Alto risco com má técnica. Consultar profissional.',
    safe: false,
  },
];

export const FAQ_DATA: FaqItem[] = [
    {
        question: "Com que frequência devo fazer os exercícios?",
        answer: "Geralmente, recomenda-se iniciar com 2-3 vezes por semana, focando na qualidade do movimento. Ouça o seu corpo e nunca force se sentir dor. Consulte sempre o seu osteopata para um plano personalizado."
    },
    {
        question: "Posso praticar desporto com uma hérnia discal?",
        answer: "Depende da fase da lesão e do tipo de desporto. Atividades de baixo impacto como natação ou caminhada são geralmente seguras. Desportos de alto impacto ou com torção devem ser evitados até a recuperação estar avançada e com autorização profissional."
    },
    {
        question: "A minha postura no trabalho afeta a minha recuperação?",
        answer: "Absolutamente. Uma má postura sentada pode aumentar a pressão sobre os discos. Faça pausas regulares para se levantar, caminhar e alongar. Certifique-se de que a sua cadeira e secretária estão ergonomicamente ajustadas."
    },
    {
        question: "Quanto tempo demora a recuperação?",
        answer: "O tempo de recuperação varia muito de pessoa para pessoa, dependendo da gravidade da lesão, idade, e adesão ao tratamento e exercícios. A paciência e a consistência são fundamentais."
    }
];
