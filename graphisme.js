// Données des projets graphiques
const designProjects = [
    {
        id: 1,
        title: "Logo Association",
        category: "logo",
        image: "images/graphisme/12345678.jpg",
        year: "2024",
        client: "association des jeunes pour le progres",
        description: "Création d'une identité visuelle minimaliste pour une marque de luxe."
    },
    {
        id: 2,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/AFFICHE MAMA2.jpg",
        year: "2024",
        client: "mere",
        description: "Conception d'une affiche d'annivarsaire pour mama",
    },    
    {
        id: 3,
        title: "Affiche évenement",
        category: "evenement",
        image: "images/graphisme/MERVEIL.jpg",
        year: "2023",
        client: "Merveil",
        description: "Monsieur MBABI Merveil."
    },
    {
        id: 4,
        title: "Annonces",
        category: "print",
        image: "images/graphisme/affiche2.0.png",
        year: "2024",
        client: "Annonce",
        description: "Annonce the black wolf ink."
    },
    {
        id: 5,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/SUKA HBD.jpg",
        year: "2024",
        client: "Monsieur SUKA",
        description: "Conception d'une affiche d'annivairesaire pour monsieur SUKA."
    },
    {
        id: 6,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/shekina.png",
        year: "2024",
        client: "Mademoiselle SHEKINA",
        description: "Conception d'une d'annivairsaire pour mademoiselle shekina",
    },
    {
        id: 7,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/Sans titre-1-Récupéré.jpg",
        year: "2024",
        client: "Mademoiselle fabiola",
        description: "Conception d'une affiche d'annivairsaire pour mademoiselle fabiola",
    },
    {
        id: 8,
        title: "Annonces",
        category: "print",
        image: "images/graphisme/studio.png",
        year: "2024",
        client: "SQUID GAME",
        description: "Anonce studio SQUID GAME ENTERTAINMENT."
    },
    {
        id: 9,
        title: "Logo entreprise",
        category: "logo",
        image: "images/graphisme/ANDRE.jpg",
        year: "2025",
        client: "enteprise de netoyage a domicile",
        description: "Création d'une identité visuelle minimaliste pour une entreprise de nettoyage."
    },
    {
        id: 10,
        title: "Annonces",
        category: "print",
        image: "images/graphisme/IMG-20240110-WA0284.jpg",
        year: "2024",
        client: "INVITATION",
        description: "Invitation barbecue."
    },    
    {
        id: 11,
        title: "Annonces",
        category: "print",
        image: "images/graphisme/Sans titre-1.jpg",
        year: "2024",
        client: "KUANBY",
        description: "Pochette Artiste KUANBY."
    },
    {
        id: 13,
        title: "Annonces",
        category: "print",
        image: "images/graphisme/photography.jpg",
        year: "2024",
        client: "Annonce",
        description: "Annoce the black wolf ink."
    },
    {
        id: 14,
        title: "Annonces",
        category: "print",
        image: "images/graphisme/2.jpg",
        year: "2024",
        client: "kuanby",
        description: "Affiche artiste bKuanby."
    },
    {
        id: 15,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/ANDRE HBD.jpg",
        year: "2024",
        client: "Monsieur ANDRE",
        description: "Conception d'une affiche d'annivairsaire pour monsieur ANDRE",
    },
    {
        id: 16,
        title: "Affiche évenement",
        category: "evenement",
        image: "images/graphisme/phototext-Récupéré.jpg",
        year: "2024",
        client: "Annonce",
        description: "Annonce xstreet."
    },
    {
        id: 17,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/miracle1.png",
        year: "2024",
        client: "miracle",
        description: "Conception d'une affiche pour mademoiselle MIRACLE",
    },   
    {
        id: 18,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/miracle2.png",
        year: "2024",
        client: "Miracle2",
        description: "Conception d'une affiche d'annivairsaire pour mademoiselle miracle."
    },  
    {
        id: 19,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/PEPS 1.jpg",
        year: "2024",
        client: "Peppers",
        description: "Conception d'une affiche d'annivairsaire pour monsieur peppers."
    },  
    {
        id: 20,
        title: "affiche annivairsaire",
        category: "branding",
        image: "images/graphisme/PEPS 2.jpg",
        year: "2024",
        client: "peppers2",
        description: "Conception d'une affiche d'annivairsaire pour monsieur peppers."
    },  
    {
        id: 21,
        title: "Affiche évenement",
        category: "evenement",
        image: "images/graphisme/sylvianne final.jpg",
        year: "2024",
        client: "Sylvianne",
        description: "Mademoiselle NYAH SYLVIANNE."
    },   
    {
        id: 22,
        title: "Affiche évenement",
        category: "evenement",
        image: "images/graphisme/sylvianne JPEG.NEF-Récupéré.jpg",
        year: "2024",
        client: "SYlvianne",
        description: "Mademoiselle NYAH SYLVIANNE"
    },   
    {
        id: 23,
        title: "Affiche évenement",
        category: "evenement",
        image: "images/graphisme/2222.jpg",
        year: "2024",
        client: "ANNONCE",
        description: "Annonce xstreet."
    },
    {
        id: 24,
        title: "Affiche évenement",
        category: "evenement",
        image: "images/graphisme/moi.jpg",
        year: "2024",
        client: "Annonce",
        description: "Annonce annvivairesaire."
    },  
    
];

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('designGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const lightboxTitle = document.getElementById('lightboxTitle');
    const lightboxDesc = document.getElementById('lightboxDesc');
    const lightboxMeta = document.getElementById('lightboxMeta');
    const closeBtn = document.querySelector('.close-btn');

    // Générer la galerie
    function renderGallery(filter = 'all') {
        grid.innerHTML = '';
        
        const filteredDesigns = filter === 'all' 
            ? designProjects 
            : designProjects.filter(design => design.category === filter);
        
        filteredDesigns.forEach(design => {
            const designCard = document.createElement('div');
            designCard.className = 'design-card';
            designCard.innerHTML = `
                <img src="${design.image}" 
                     alt="${design.title}" 
                     class="design-img"
                     loading="lazy"
                     data-id="${design.id}">
                <div class="design-info">
                    <h3 class="design-title">${design.title}</h3>
                    <span class="design-category">${design.category}</span>
                </div>
            `;
            grid.appendChild(designCard);
        });

        // Lightbox
        document.querySelectorAll('.design-img').forEach(img => {
            img.addEventListener('click', () => {
                const design = designProjects.find(d => d.id == img.dataset.id);
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxTitle.textContent = design.title;
                lightboxDesc.textContent = design.description;
                lightboxMeta.textContent = `${design.client} • ${design.year}`;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Filtrage
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderGallery(btn.dataset.filter);
        });
    });

    // Fermer lightbox
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = 'auto';
    });

    // Initial render
    renderGallery();
});