import PocketBase from 'pocketbase';
import { getFileUrl } from './utils/getFileUrl';
import { getAuthorInfo } from './AuthorService';
import { getCategorieInfo } from './CategorieService';

const CONTENT_URL = import.meta.env.PUBLIC_CONTENT_URL;
const COLLECTION_NAME = "posts"

const pb = new PocketBase(CONTENT_URL);

export const getBlogPosts = async () => {
    const posts = await pb.collection(COLLECTION_NAME).getFullList({
        sort: '-created',
    });

    const parsedPosts = posts.map( async (post)  =>  ({
        id: post.id,
        title: post.title,
        image: getFileUrl(COLLECTION_NAME, post.id, post.image),
        content: post.content,
        subtitle: post.subtitle,
        date: post.created,
        categories: await getCategorieInfo(post.categorie),
    }));
    return parsedPosts;
}

export const getPostById = async (id) => {
    const post = await pb.collection(COLLECTION_NAME).getOne(id);
    const author = await getAuthorInfo(post.author);
    const categories = await getCategorieInfo(post.categorie);
    console.log(categories);
    const imageUrl = getFileUrl(COLLECTION_NAME, id, post.image);
    return {
        id: post.id,
        title: post.title,
        subtitle: post.subtitle,
        content: post.content,
        image: imageUrl,
        date: new Date(post.created).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' }),
        author: author,
        categories: categories,
    };
}

export const getCategories = async () => {
    const posts = await pb.collection(COLLECTION_NAME).getFullList();
    const categories = posts.map((post) => post.categorie);
    return Array.from(new Set(categories));
}