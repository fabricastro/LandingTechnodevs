export async function fetchProjectsWithCategories() {
    try {
        const response = await fetch(
            `https://technodevs.com.ar/wp-json/wp/v2/posts?categories=10,11,12&per_page=100`
        );

        if (!response.ok) {
            throw new Error(`Error al obtener los proyectos: ${response.status} ${response.statusText}`);
        }

        const posts = await response.json();

        if (!Array.isArray(posts)) {
            throw new Error("La respuesta de la API no es un array");
        }

        // Mapea los proyectos para incluir imágenes y detalles
        const postsWithDetails = await Promise.all(
            posts.map(async (post) => {
                let imageUrl = 'default-image.png';

                // Verifica si hay imagen destacada y obtén su URL
                if (post.featured_media) {
                    const mediaResponse = await fetch(
                        `https://technodevs.com.ar/wp-json/wp/v2/media/${post.featured_media}`
                    );

                    if (mediaResponse.ok) {
                        const media = await mediaResponse.json();
                        imageUrl = media.source_url || imageUrl;
                    } else {
                        console.warn(`Error al obtener la imagen: ${mediaResponse.status} ${mediaResponse.statusText}`);
                    }
                }

                return {
                    id: post.id,
                    title: post.title.rendered,
                    description: post.excerpt.rendered,
                    image: imageUrl,
                    categories: post.categories, // IDs de las categorías asociadas
                };
            })
        );

        return postsWithDetails;
    } catch (error) {
        console.error("Error al obtener los proyectos:", error);
        return [];
    }
}

export async function fetchGroupedProjects() {
    const projects = await fetchProjectsWithCategories();

    // Agrupa los proyectos por categorías
    const groupedProjects = projects.reduce((acc, project) => {
        project.categories.forEach((categoryId) => {
            if (!acc[categoryId]) {
                acc[categoryId] = [];
            }
            acc[categoryId].push(project);
        });
        return acc;
    }, {});

    return groupedProjects;
}
