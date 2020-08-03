'use strict';

const createIncrement = () => {
  let i = 0;
  return () => i++;
};

const createFolder = id => ({
    id
});
const createFile = (id, folderId) => ({id, folderId});
const generateData = () => {
    const files = [];
    const folders = [];
    const folderIdGenerator = createIncrement();
    const fileIdGenerator = createIncrement();
    for(let i = 0; i < 10; i++) {
        const folderId = folderIdGenerator();
        const folder = createFolder(folderId);
        folders.push(folder);
        for(let j = 0; j < 10; j++) {
            const fileId = fileIdGenerator();
            files.push(createFile(fileId, folderId));
        }
    }
    return {folders, files};
};

const data = generateData();

const getData = path => new Promise((resolve, reject) => {
    const result = data[path];
    setTimeout(resolve, 5000, result);
});

const getFolders = async () => {
    return await getData('folders');
}; 
const getFiles = async () => {
    return await getData('files');
};
const getFolderFiles = async folderId => {
    const files = await getData('files');
    return files.filter(file => file.folderId === folderId)
};
const logFolderFiles = async () => {
    const folders = await getFolders();
    const files = await getFolderFiles(folders[2].id);
    console.log(files);
};
const logFolderAndFiles = async () => {
    const folders = await getFolders();
    const files = await getFiles();
    console.log(folders);
    console.log(files);
};
logFolderAndFiles();
logFolderFiles();
