import PocketBase from 'pocketbase';

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