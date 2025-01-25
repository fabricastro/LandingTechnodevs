import PocketBase from 'pocketbase';
import { getFileUrl } from './utils/getFileUrl';

const CONTENT_URL = import.meta.env.PUBLIC_CONTENT_URL;
const COLLECTION_NAME = "authors"

const pb = new PocketBase(CONTENT_URL);

export const getAuthorInfo = async (id) => {
  const author = await pb.collection(COLLECTION_NAME).getOne(id);
  const imageUrl = getFileUrl(COLLECTION_NAME, id, author.avatar);
  return {
    id: author.id,
    name: author.name,
    avatar: imageUrl,
    email: author.email,
    linkedin: author.linkedin
  };
}