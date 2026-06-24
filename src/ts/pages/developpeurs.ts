import {developpeurs, type Developpeur} from "../data/db"

/*========================================
CONSTRUCTION DES SKELETONS
==========================================*/

// function cardSkeletons(): void {
//     const container = document.querySelector ('main') as HTMLElement;
//     if(!container) return;

//     const realCards = container.querySelectorAll(`.card-dorsel`);
//     if(realCards.length === 0) return;
//     realCards.forEach(card => {
//         (card as HTMLElement).style.display = 'none'});

//     const skeletonnHtml = `
//     <div class="card-dorsel sk-card sk-shimmer">
//     <div class="sk-avatar sk-shimmer"></div>
//     <div class="sk-name sk-shimmer"></div>
//     <div class="sk-title sk-shimmer"></div>
//     <ul class="Tools1">
//       <li class="sk-li sk-shimmer"></li>
//       <li class="sk-li sk-shimmer"></li>
//       <li class="sk-li sk-shimmer"></li>
//       <li class="sk-li sk-shimmer"></li>
//     </ul>
//     <div class="sk-btn sk-shimmer"></div>
//     </div>`.repeat(realCards.length);
//     container.insertAdjacentHTML('beforeend', skeletonnHtml);

//     setTimeout(() => {
//         container.querySelectorAll('.sk-card').forEach(sk => sk.remove());
//     realCards.forEach(card => {
//         (card as HTMLElement).style.display = 'block';
// });
// }, 3500);
// }
// window.addEventListener('DOMContentLoaded', cardSkeletons);

function skeletonLoading() {
  return `${[1,2,3,4,5,6].map(() => `
    <div class="sk-card sk-shimmer">
        <div class="sk-avatar sk-shimmer"></div>
        <div class="sk-name sk-shimmer"></div>
        <div class="sk-title sk-shimmer"></div>
        <ul class="Tools1">
            <li class="sk-li sk-shimmer"></li>
            <li class="sk-li sk-shimmer"></li>
            <li class="sk-li sk-shimmer"></li>
            <li class="sk-li sk-shimmer"></li>
        </ul>
        <div class="sk-btn sk-shimmer"></div>
        </div>`).join('')}`;
}

function showSkeleton(): void {
  const conteneur = document.querySelector<HTMLElement>('#cards-container')!;

  conteneur.innerHTML = skeletonLoading();
}

/*========================================
CONSTRUCTION DES CARTES
==========================================*/

function buildCard(developpeur: Developpeur): string {
  const badgesTechnologies: string = developpeur.outils.slice(0, 10)
    .map((technologie: string) => `<span class="badge-technologie">${technologie}</span>`)
    .join('');

  return `
    <div class="card">
        <img src="${developpeur.image}" alt="picture" class="profil-photo"/>
        <h3 class="name">${developpeur.nom}</h3>
        <span class="job-tittle">${developpeur.specialite}</span>
        <div class="Tools">${badgesTechnologies}</div>
        <a href="${developpeur.lienPortfolio}" target="_blank" class="voir-btn">Voir le portfolio</a>
    </div>`;
}

function showDeveloppers(listeDeveloppeurs: Developpeur[] = developpeurs): void {
  const conteneur    = document.querySelector<HTMLElement>('#cards-container')!;
  
  conteneur.innerHTML = Array.from(listeDeveloppeurs)
    .map((developpeur: Developpeur) => buildCard(developpeur))
    .join('');
}

function normalizeSpecialite(specialite: string): string {
  return specialite.toLowerCase().replace(/[\s-]/g, '');
}

function initFilters(): void {
  const filtres = [
    { selecteur: '.all-btn', specialite: '' },
    { selecteur: '.Front-end-btn', specialite: 'frontend' },
    { selecteur: '.Back-end-btn', specialite: 'backend' },
    { selecteur: '.Full-stack-btn', specialite: 'fullstack' },
  ];

  filtres.forEach(({ selecteur, specialite }) => {
    const bouton = document.querySelector<HTMLButtonElement>(selecteur);

    bouton?.addEventListener('click', () => {
      const listeDeveloppeurs = specialite
        ? developpeurs.filter((developpeur: Developpeur) =>
            normalizeSpecialite(developpeur.specialite).includes(specialite)
          )
        : developpeurs;

      showDeveloppers(listeDeveloppeurs);
    });
  });
}

/*========================================
CHARGEMENT
==========================================*/

async function LoadingCards(): Promise<void> {
  showSkeleton();
  await new Promise<void>((resolve) => setTimeout(resolve, 1500));
  showDeveloppers();
  initFilters();
}

LoadingCards();
