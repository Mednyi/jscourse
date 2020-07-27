let createTank = () => ({ammo:100, armor:100});
let createTenItems = createItem => { // createItem - callback
    let arr = [];
    for(let i = 0; i<10 ; i++) {
        const item = createItem();
        arr.push(item)  // push - add element to array
    }
    return arr
};

// ex 1
const tanks = createTenItems(createTank);
console.log(tanks);

// ex 2
let generateNumberFabric = () => {
    let i = 0;
    return function () {
        return i++;
    };
};

let generateNum = generateNumberFabric();
// let generateNum2 = generateNumberFabric();

const numbers = createTenItems(generateNum);
console.log(numbers);

// Callbacks

const data = {
    folders: ['1', '2', '3'],
    content: [
        {
            folder: '1',
            name: 'first'
        },
        {
            folder: '1',
            name: 'S'
        },
        {
            folder: '2',
            name: 'T'
        },
        {
            folder: '3',
            name: 'L'
        }
    ]
};

const getData = (path, callback) => {
    const result = data[path];
    setTimeout(callback, 5000, result);
};



const getFolders = () => {
    getData('folders', result => {
        console.log(result);
    });
};

const getFolderContents = folderId => {
    getData('content', result => {
        const content = result.filter(item => item.folder === folderId);
        console.log(content);
    })
};

const getFC = () => {
    getData('folders', result => {
        console.log(result);
        getFolderContents(result[0])
    });
};

getFolders();
getFC();

// Promises

const getPromiseData = path => new Promise((resolve, reject) => {
    const result = data[path];
    setTimeout(resolve, 5000, result);
});

const processFolders = result => {
    console.log(result);
    return getPromiseData('content')
};

getPromiseData('folders').
then(processFolders).
then(result => console.log(result));

// Async

async function asyncExD () {};
const asyncEx = async function () {};
const asyncEx2 = async () => {};

const getContentsAsync = async () => {
  const folders = await getPromiseData('folders');
  let contents = await getPromiseData('content');
  contents = contents.filter(item => item.folder === folders[0]);
  console.log(contents);
  return contents;
};

getContentsAsync();
