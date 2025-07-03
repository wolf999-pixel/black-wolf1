// Données des projets graphiques
const designProjects = [
    {
        id: 1,
        title: "MAMA",
        category: "portrait",
        image: "images/photographie/mama.jpg",
        year: "2024",
        client: "Melanie",
        description: "shooting a domicile ",
    },
    {
        id: 2,
        title: "SHOOTING STUDIO",
        category: "portrait",
        image: "images/photographie/1.jpg",
        year: "2024",
        client: "DENY",
        description: "Shooting studio deny",
    },
    {
        id: 3,
        title: "SOOTING STUDIO",
        category: "portrait",
        image: "images/photographie/2.jpg",
        year: "2024",
        client: "ROSE",
        description: "Shooting studio rose."
    },
    {
        id: 4,
        title: "SHOOTING STUDIO",
        category: "portrait",
        image: "images/photographie/DSC00005.jpg",
        year: "2024",
        client: "JUSTINE",
        description: "Shooting studio justine."
    },
    {
        id: 5,
        title: "SHOOTING STUDIO",
        category: "portrait",
        image: "images/photographie/DSC00003.jpg",
        year: "2024",
        client: "JUSTINE",
        description: "Shooting studio justine."
    },
    {
        id: 6,
        title: "SHOOTING STUDIO",
        category: "portrait",
        image: "images/photographie/IMG_20240425_164824_145.jpg",
        year: "2024",
        client: "SHEKINA",
        description: "Shooting studio shekina."
    },
    {
        id: 7,
        title: "RUE CEPER",
        category: "paysage",
        image: "images/photographie/nyonda1.jpg",
        year: "2024",
        client: "Maison Élégance",
        description: "Création d'une identité visuelle minimaliste pour une marque de luxe."
    },
    {
        id: 8,
        title: "RUE CEPER",
        category: "paysage",
        image: "images/photographie/nyonda2.jpg",
        year: "2024",
        client: "NOA",
        description: "shooting nature noa."
    },
    {
        id: 9,
        title: "MIMBOMAN",
        category: "paysage",
        image: "images/photographie/DSC00009_2.jpg",
        year: "2024",
        client: "SAMANTHA",
        description: "shooting nature SAMANTHA."
    },
     {
        id: 10,
        title: "MIMBOMAN",
        category: "paysage",
        image: "images/photographie/DSC00008_2.jpg",
        year: "2024",
        client: "SAMANTHA",
        description: "Shooting nature samantha."
    },
     {
        id: 11,
        title: "MIMBOMAN 2",
        category: "paysage",
        image: "images/photographie/DSC00007_3.jpg",
        year: "2024",
        client: "SAMANTHA",
        description: "SHOOTING NATURTE SAMANTHA."
    },
     {
        id: 12,
        title: "MIMBOMAN 2",
        category: "paysage",
        image: "images/photographie/DSC00006_4.jpg",
        year: "2024",
        client: "SAMANTHA",
        description: "SHOOTING SAMANTHA 2."
    },
     {
        id: 13,
        title: "URBAN",
        category: "urbain",
        image: "images/photographie/SAMWOLF.png",
        year: "2024",
        client: "SAMANTHA",
        description: "URBAN SAMANTHA ."
    },
     {
        id: 14,
        title: "URBAN",
        category: "urbain",
        image: "images/photographie/DSC00020.jpg",
        year: "2024",
        client: "SAMANTHA",
        description: "SAMANTHA URBAN."
    },
     {
        id: 15,
        title: "URBAN",
        category: "urbain",
        image: "images/photographie/dj.JPG",
        year: "2024",
        client: "DJ",
        description: "URBAN DJ."
    },
     {
        id: 16,
        title: "URBAN",
        category: "urbain",
        image: "images/photographie/dance.JPG",
        year: "2024",
        client: "POPPERT",
        description: "URBAN SAMANTHA."
    },
     {
        id: 17,
        title: "URBAN",
        category: "urbain",
        image: "images/photographie/urbain.jpg",
        year: "2024",
        client: "AKIRA & NORBERT",
        description: "SAMANTHA URBAN."
    },
     {
        id: 18,
        title: "URBAN",
        category: "urbain",
        image: "images/photographie/IMG_20240404_155007_622.jpg",
        year: "2024",
        client: "BEAUFORT",
        description: "URBAN BEAUFORT."
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