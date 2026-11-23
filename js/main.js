const memories = [
  {n:'01',year:'PRIMEIROS ANOS',title:'Creche Família Feliz',school:'Jardim de infância · As primeiras amizades',image:'foto-01.jpeg',text:'Lembro das brincadeiras e daquela sensação gostosa de brincar com meus amiguinhos de infância. Foi ali que começaram as primeiras histórias, os primeiros laços e a alegria de descobrir o mundo junto.'},
  {n:'02',year:'UMA NOVA PORTA',title:'O último dia da creche',school:'A caminho de novas descobertas',image:'foto-02.jpeg',text:'Esse foi meu último dia na creche. Eu estava a caminho de uma nova porta para a aprendizagem: o colégio municipal. Confesso que estava bem nervosa com tantas descobertas pela frente.'},
  {n:'03',year:'NOVAS EXPERIÊNCIAS',title:'Projetos para lembrar',school:'Teatro · natação · apresentações · trânsito',image:'foto-03.jpeg',text:'Na escola municipal participei de peças de teatro, aulas de natação, apresentações para a escola e simulações de trânsito. Também participei de um projeto muito especial: enterramos uma cápsula do tempo com o desafio de voltar quatro anos depois para desenterrá-la.'},
  {n:'04',year:'ESCOLA MUNICIPAL',title:'Um lugar de descobertas',school:'Colégio Municipal Natália',image:'foto-04.jpeg',text:'A escola municipal foi cenário de tantas experiências e aprendizados. Entre projetos, amizades e dias cheios de novidades, fui crescendo e guardando lembranças que ainda fazem parte de mim.'},
  {n:'05',year:'NOVA ETAPA',title:'A escola estadual',school:'Uma mudança e muitos caminhos',image:'foto-05.jpeg',text:'A partir daí, uma nova etapa estava para começar: a escola estadual. Mesmo sem registros em fotos desse período, levo comigo várias lembranças e recordações dos anos que vivi por lá.'},
  {n:'06',year:'QUATRO ANOS DEPOIS',title:'A cápsula nos chamou',school:'O reencontro com uma promessa',image:'foto-06.jpeg',text:'Passaram-se quatro anos desde o enterro da cápsula do tempo. A Escola Municipal Natália entrou em contato com minha família para contar que o dia havia chegado. Uma surpresa que trouxe de volta uma parte muito bonita da infância.'},
  {n:'07',year:'REENCONTRO',title:'De volta à escola',school:'Professoras, equipe diretiva e funcionários',image:'foto-07.jpeg',text:'Reencontrei a equipe diretiva, as professoras e os funcionários que me acompanharam durante todo aquele tempo na escola. Foi um momento marcante e emocionante, cheio de carinho e saudade.'},
  {n:'08',year:'UMA CARTA PARA O FUTURO',title:'Meus sonhos na cápsula',school:'Palavras escritas pela Agatha criança',image:'foto-08.jpeg',text:'Esta é a carta que deixei dentro da cápsula do tempo, junto com meus sonhos e objetivos. Ler aquelas palavras anos depois foi como encontrar uma versão pequena de mim e perceber tudo o que mudou — e o que continua vivo.'},
  {n:'09',year:'LEMBRANÇAS QUE FICAM',title:'Medalhas e conquistas',school:'Recordações do colégio estadual',image:'foto-09.jpeg',text:'Não tenho registros fotográficos do colégio estadual em que estudei, mas tenho muitas lembranças boas. Guardo também minhas medalhas de participação das atividades que aconteciam no colégio — pequenos símbolos de momentos importantes.'},
  {n:'10',year:'2024 · ENSINO MÉDIO',title:'Padre Claudio Morelli',school:'Atividades, eventos e muitos sentimentos',image:'foto-10.jpeg',text:'Em 2024, no primeiro ano do Ensino Médio, me mudei para o Colégio Estadual Padre Claudio Morelli. Participei de atividades e eventos, passei por momentos de caos e loucura e construí lembranças que vou guardar para sempre no coração.'},
  {n:'11',year:'UM NOVO COMEÇO',title:'A próxima fase',school:'Concluindo o Ensino Médio · o futuro me espera',image:'foto-11.jpeg',text:'Agora está prestes a começar uma nova fase da minha vida. Olho para trás com carinho por tudo o que vivi e sigo em frente levando comigo cada amizade, aprendizado, desafio superado e lembrança.'}
];

const essays = [
  {title:'O respeito às diferenças como caminho para a superação dos conflitos sociais na sociedade contemporânea',topic:'Convivência · diversidade · direitos humanos',category:'Sociedade',page:1},
  {title:'Quando a seca encontra a enchente: impactos sociais e econômicos das mudanças no ciclo hidrológico',topic:'Meio ambiente · eventos extremos · desigualdade',category:'Natureza',page:2},
  {title:'A estética como imperativo: riscos e implicações do uso indiscriminado de canetas emagrecedoras',topic:'Saúde · padrões estéticos · responsabilidade',category:'Saúde',page:4},
  {title:'O uso da Inteligência Artificial e as deepfakes: o que é real e o que é fictício na vida online?',topic:'Tecnologia · desinformação · cidadania digital',category:'Tecnologia',page:5},
  {title:'Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente',topic:'Agricultura · segurança alimentar · sustentabilidade',category:'Natureza',page:6},
  {title:'Inclusão digital no Brasil: caminhos e desafios na sociedade contemporânea',topic:'Acesso à tecnologia · inclusão · cidadania',category:'Tecnologia',page:7},
  {title:'Da diversão ao endividamento: efeitos socioeconômicos das bets na vida de jovens brasileiros',topic:'Apostas online · juventude · educação financeira',category:'Sociedade',page:8},
  {title:'O desafio de reduzir as desigualdades entre as regiões do Brasil',topic:'Desigualdade regional · infraestrutura · acesso a serviços',category:'Sociedade',page:9},
  {title:'Cultura fitness: bem-estar ou busca por estética inatingível?',topic:'Saúde mental · padrões de beleza · redes sociais',category:'Saúde',page:10},
  {title:'Povos originários e direitos constitucionais: desafios para a efetivação da cidadania indígena no Brasil',topic:'Povos indígenas · território · cidadania',category:'Sociedade',page:11},
  {title:'Consumo, mídia e cultura: como referências mediadas por algoritmos influenciam os modos de vida na sociedade contemporânea',topic:'Consumo · mídia · algoritmos',category:'Tecnologia',page:12},
  {title:'Os desafios para a preservação dos monumentos históricos no Brasil contemporâneo',topic:'Patrimônio cultural · memória · preservação',category:'Cultura',page:13},
  {title:'Exploração espacial no século XXI: desafios para a conciliação entre avanço científico e responsabilidade social',topic:'Ciência · exploração espacial · ética',category:'Ciência',page:15},
  {title:'Espécies em extinção e equilíbrio ecológico: desafios para a conservação da fauna brasileira',topic:'Biodiversidade · conservação · equilíbrio ecológico',category:'Natureza',page:16},
  {title:'Migração e acolhimento: desafios da convivência em contextos globais',topic:'Migração · acolhimento · direitos humanos',category:'Sociedade',page:17},
  {title:'El Niño e mudanças climáticas: desafios para a preparação da sociedade diante de eventos extremos',topic:'Mudanças climáticas · prevenção · proteção social',category:'Natureza',page:18},
  {title:'Obsolescência tecnológica e descarte de resíduos eletrônicos: desafios para a sustentabilidade no Brasil',topic:'Tecnologia · consumo · resíduos eletrônicos',category:'Natureza',page:20}
];

const timeline = document.querySelector('#timeline');
memories.forEach((memory, index) => {
  const item = document.createElement('div'); item.className = 'timeline-item';
  const card = document.createElement('button'); card.type = 'button'; card.className = 'memory-card';
  card.setAttribute('aria-label', `Abrir lembrança ${memory.n}: ${memory.title}`);
  card.innerHTML = `<img class="memory-photo" src="assets/${memory.image}" alt="${memory.title}" loading="lazy"><span class="memory-copy"><span class="memory-year">${memory.year}</span><span class="memory-title">${memory.title}</span><span class="memory-school">${memory.school}</span><span class="memory-prompt">Ver lembrança <span>↗</span></span></span>`;
  const node = document.createElement('span'); node.className = 'memory-node'; node.setAttribute('aria-hidden','true'); node.textContent = index === memories.length - 1 ? '✧' : '✦';
  const spacer = document.createElement('span'); spacer.className = 'memory-spacer'; spacer.setAttribute('aria-hidden','true');
  const detail = document.createElement('aside'); detail.className = 'memory-detail'; detail.hidden = true; detail.setAttribute('aria-live','polite');
  detail.innerHTML = `<div class="detail-top"><span class="detail-label">LEMBRANÇA ${memory.n}</span><button class="detail-close" type="button" aria-label="Fechar lembrança">×</button></div><h3></h3><p></p>`;
  item.append(card,node,spacer,detail); timeline.append(item);
  card.addEventListener('click', () => {
    if (!detail.hidden) { detail.hidden = true; card.removeAttribute('aria-current'); return; }
    document.querySelectorAll('.memory-detail').forEach(panel => panel.hidden = true);
    document.querySelectorAll('.memory-card').forEach(button => button.removeAttribute('aria-current'));
    detail.hidden = false;
    detail.querySelector('h3').textContent = memory.title; detail.querySelector('p').textContent = memory.text;
    card.setAttribute('aria-current','true');
  });
  detail.querySelector('.detail-close').addEventListener('click', () => { detail.hidden = true; card.removeAttribute('aria-current'); });
});

document.querySelector('.page-jump-down').addEventListener('click', () => window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'}));
document.querySelector('.page-jump-up').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));

const grid = document.querySelector('#essay-grid');
const filters = document.querySelector('#essay-filters');
const categories = ['Todas', ...new Set(essays.map(essay => essay.category))];
let activeCategory = 'Todas';
let openEssay = null;

categories.forEach((category, index) => {
  const button = document.createElement('button'); button.type = 'button'; button.className = 'filter-chip';
  button.textContent = category; button.setAttribute('aria-pressed', String(index === 0));
  button.addEventListener('click', () => {
    activeCategory = category; openEssay = null;
    document.querySelectorAll('.essay-expanded').forEach(panel => panel.remove());
    document.querySelectorAll('.filter-chip').forEach(chip => chip.setAttribute('aria-pressed', String(chip === button)));
    renderEssays();
  });
  filters.append(button);
});

function closeEssay(card) {
  card.setAttribute('aria-expanded','false');
  card.querySelector('.essay-open').innerHTML = 'Ler redação <span>↗</span>';
  card.nextElementSibling?.classList.contains('essay-expanded') && card.nextElementSibling.remove();
  openEssay = null;
}

function renderEssays() {
  grid.replaceChildren();
  essays.forEach((essay, index) => {
    if (activeCategory !== 'Todas' && essay.category !== activeCategory) return;
    const card = document.createElement('button'); card.type = 'button'; card.className = 'essay-card';
    card.style.setProperty('--card-index', String(index));
    card.setAttribute('aria-label', `Abrir redação ${String(index+1).padStart(2,'0')}: ${essay.title}`);
    card.setAttribute('aria-expanded','false');
    card.innerHTML = `<span class="essay-topline"><span class="essay-top">CADERNO ${String(index+1).padStart(2,'0')}</span><span class="essay-category">${essay.category}</span></span><span><span class="essay-title">${essay.title}</span><span class="essay-topic">${essay.topic}</span></span><span class="essay-open">Ler redação <span>↗</span></span>`;
    grid.append(card);
    card.addEventListener('click', () => {
      if (openEssay === card) { closeEssay(card); return; }
      if (openEssay) closeEssay(openEssay);
      card.setAttribute('aria-expanded','true');
      card.querySelector('.essay-open').innerHTML = 'Fechar redação <span>↑</span>';
      const source = window.ESSAY_CONTENT.find(item => item.page === essay.page);
      const reader = document.createElement('article'); reader.className = 'essay-expanded'; reader.setAttribute('aria-live','polite');
      const heading = document.createElement('div'); heading.className = 'expanded-heading';
      heading.innerHTML = `<span class="expanded-label">REDAÇÃO ${String(index+1).padStart(2,'0')} <i>✳</i></span><span class="expanded-theme">${essay.topic}</span><h3>${essay.title}</h3>`;
      const body = document.createElement('div'); body.className = 'essay-prose';
      (source?.paragraphs || []).forEach(text => { const p=document.createElement('p'); p.textContent=text; body.append(p); });
      const footer = document.createElement('div'); footer.className = 'expanded-footer';
      footer.innerHTML = `<span>FIM DA REDAÇÃO <b>✦</b></span><button type="button" class="back-to-list">Voltar aos temas ↑</button>`;
      reader.append(heading,body,footer); card.after(reader); openEssay=card;
      footer.querySelector('button').addEventListener('click', () => {
        closeEssay(card); card.scrollIntoView({behavior:'smooth',block:'center'});
      });
      reader.scrollIntoView({behavior:'smooth',block:'nearest'});
    });
  });
}
renderEssays();
