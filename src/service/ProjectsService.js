import PocketBase from 'pocketbase';
import { getFileUrl } from './utils/getFileUrl';

const CONTENT_URL = import.meta.env.PUBLIC_CONTENT_URL;
const COLLECTION_NAME = "projects"

const pb = new PocketBase(CONTENT_URL);

export const getProjects = async () => {
    const records = await pb.collection(COLLECTION_NAME).getFullList({
        sort: '-created',
    });
    const parsedRecords = records.map((record) => ({
        ...record,
        img: getFileUrl(COLLECTION_NAME, record.id, record.field),
    }));
    return parsedRecords;
}