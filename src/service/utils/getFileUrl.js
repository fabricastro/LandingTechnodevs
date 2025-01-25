const CONTENT_URL = import.meta.env.PUBLIC_CONTENT_URL;
export const getFileUrl = (collectionName, recordId, fileName) => {
  const url = `${CONTENT_URL}/api/files/${collectionName}/${recordId}/${fileName}`;
  return url;
}