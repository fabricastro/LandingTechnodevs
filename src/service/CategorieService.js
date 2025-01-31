import PocketBase from 'pocketbase';
import { getLatestPostsByCategory } from './BlogService';

const CONTENT_URL = import.meta.env.PUBLIC_CONTENT_URL;
const COLLECTION_NAME = "post_categories"

const pb = new PocketBase(CONTENT_URL);

// Obtiene la información todas las categorias de un post
export const getCategorieInfo = async (idsArray) => {
const categories = idsArray.map(async (id) => {
    try{
        const record = await pb.collection(COLLECTION_NAME).getOne(id);
        return {
            id: record.id,
            name: record.name
        };
    }catch(e){
        return {
            id: id,
            name: "Sin categoría"
        };
    };
});
return Promise.all(categories);
}

export const getAllCategories = async () => {
    const records = await pb.collection(COLLECTION_NAME).getFullList();
    return records;
}

export const getCategoriesWithPosts = async () => {
    const categories = await getAllCategories();
    const postsByCategory = await getLatestPostsByCategory();
    return categories.map(category => ({
        id: category.id,
        name: category.name,
        posts: postsByCategory[category.name] || [],
    }));
};