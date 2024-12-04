export async function fetchBlogPosts() {
    try {
        const response = await fetch(`https://technodevs.com.ar/wp-json/wp/v2/posts?categories=1&per_page=5`);

        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status} ${response.statusText}`);
        }

        const posts = await response.json();
        console.log(posts);

        if (!Array.isArray(posts)) {
            throw new Error("La respuesta de la API no es un array");
        }

        const postsWithImages = await Promise.all(
            posts.map(async (post) => {
                let imageUrl = 'default-image.png';

                if (post.featured_media) {
                    const mediaResponse = await fetch(`https://technodevs.com.ar/wp-json/wp/v2/media/${post.featured_media}`);

                    if (mediaResponse.ok) {
                        const media = await mediaResponse.json();
                        imageUrl = media.source_url || imageUrl;
                    } else {
                        console.warn(`Error al obtener la imagen: ${mediaResponse.status} ${mediaResponse.statusText}`);
                    }
                }

                return {
                    id: post.id, // Añadido el id para usarlo en la navegación
                    title: post.title.rendered,
                    subtitle: post.excerpt.rendered,
                    link: post.link,
                    image: imageUrl,
                };
            })
        );

        return postsWithImages;

    } catch (error) {
        console.error("Error al obtener los posts:", error);
        return [];
    }
}

// Función para obtener los detalles de un post específico por su ID
export async function fetchPostById(postId) {
    try {
        const response = await fetch(`https://technodevs.com.ar/wp-json/wp/v2/posts/${postId}`);

        if (!response.ok) {
            throw new Error(`Error al obtener el post: ${response.status} ${response.statusText}`);
        }

        const post = await response.json();

        let imageUrl = 'default-image.png';
        if (post.featured_media) {
            const mediaResponse = await fetch(`https://technodevs.com.ar/wp-json/wp/v2/media/${post.featured_media}`);
            if (mediaResponse.ok) {
                const media = await mediaResponse.json();
                imageUrl = media.source_url || imageUrl;
            }
        }

        return {
            id: post.id,
            title: post.title.rendered,
            content: post.content.rendered,
            image: imageUrl,
        };
    } catch (error) {
        console.error("Error al obtener el post:", error);
        return null;
    }
}
