const SIMILAR_POST_COUNT = 25;
const SIMILAR_COMMENT_COUNT = 200;
const SIMILAR_PHOTO_COUNT = 25;
const SIMILAR_LIKES_COUNT = [15, 200];
const [likesMin, likesMax] = SIMILAR_LIKES_COUNT;
const ID_POST_ARRAY = Array.from({ length: SIMILAR_POST_COUNT }, (undef, index) => index + 1);
const ID_COMMENT_ARRAY = Array.from({ length: SIMILAR_COMMENT_COUNT }, (undef, index) => index + 1);
const PHOTO_ARRAY = Array.from({ length: SIMILAR_PHOTO_COUNT }, (undef, index) => index + 1);
const MAX_PHOTO_COMMENTS = 4;

const getPostID = getRandomUniqElement(ID_POST_ARRAY);
const getCommentID = getRandomUniqElement(ID_COMMENT_ARRAY);
const getPhoto = getRandomUniqElement(PHOTO_ARRAY);

function getIntRandomNumber(min, max) {
  let absMin = Math.abs(min);
  let absMax = Math.abs(max);

  if (absMin > absMax) {
    [absMax, absMin] = [absMin, absMax];
  }

  return Math.floor(Math.random() * (absMax - absMin +  1)) + absMin;
}

function checkStringLength(string, maxLength) {
  return string.length <= maxLength;
}

checkStringLength('строка', 4);

getIntRandomNumber(-12,33);

function getRandomArrayElement(arr) {
  return arr[getIntRandomNumber(0, arr.length - 1)];
}

function getRandomIndex(arr) {
  return Math.floor(Math.random() * arr.length);
}

function reinitArray(arr) {
  return arr.slice();
}

function getRandomUniqElement(Array) {
  let arr = reinitArray(Array);
  return function getRandomElement() {
    if (arr.length === 0) {arr = reinitArray(Array);}
    return arr.splice(getRandomIndex(arr), 1)[0];
  };
}

const SIMILAR_DESCRIPTION = [
  'Замечательное фото',
  'Удачный снимок',
  'Хочу больше фотографий!',
  'Забавно>',
  'Удачный кадр',
];

const SIMILAR_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const SIMILAR_NAMES = [
  'Дмитрий',
  'Алексей',
  'Светлана',
  'Александра',
  'Леха',
  'Гость',
];

const createComment = () => ({
  id: getCommentID(),
  avatar: `img/avatar-${  getIntRandomNumber(1, 6)  }.svg`,
  message: getRandomArrayElement(SIMILAR_MESSAGE),
  name: getRandomArrayElement(SIMILAR_NAMES),
});

const createPost = () => ({
  id: getPostID(),
  url: `photos/${  getPhoto()  }.jpg`,
  description: getRandomArrayElement(SIMILAR_DESCRIPTION),
  likes: getIntRandomNumber(likesMin, likesMax),
  comments: new Array(getIntRandomNumber(1, MAX_PHOTO_COMMENTS)).fill(null).map(createComment),
});

const similarPosts = () => new Array(SIMILAR_POST_COUNT).fill(null).map(() => createPost());

// eslint-disable-next-line no-unused-vars
const testData = similarPosts();
