const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const paginator = (items, page = 1, per_page) => {
  (per_page = per_page || 10),
    (offset = (page - 1) * per_page),
    (paginatedItems = items.slice(offset).slice(0, per_page)),
    (total_pages = Math.ceil(items.length / per_page));

  return {
    page: page,
    per_page: per_page,
    pre_page: page - 1 ? page - 1 : null,
    next_page: total_pages > page ? page + 1 : null,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
  };
};

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'DELETE', 'PUT');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.use('/api/combinations', (req, res) => {
  numMap = {
    '0': ['0'],
    '1': ['1'],
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };

  if (req.query.number) {
    const { number } = req.query;
    const arr = number.split('');
    const newArr = arr.slice(0, -1).join('');

    if (!arr.length)
      res.status(409).json({ message: 'please enter 10 digit phone number' });

    const num = arr.filter((n, index) => index === 9);
    const letters = numMap[num];
    const combinations = letters.map(l => {
      return { number: `${newArr}${l}` };
    });

    res.status(200).json({ combinations });
  } else {
    res.status(407).json({ message: 'please enter 10 digit phone number' });
  }
});

app.get('/api/newCombinations', (req, res) => {
  const { number, page, size } = req.query;

  if (number === '') return [];
  const letter = letterCombinations(number);

  const combinations = letter.map(l => {
    return { number: `${l}` };
  });

  res.status(200).json(paginator(combinations, page, size));
});

function letterCombinations(numbers) {
  if (numbers === '') return [];
  let responseArray = [''];
  const chars = [
    '0',
    '1',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
  ];
  for (var i = 0; i < numbers.length; i++) {
    let arr = [];
    let characters = chars[numbers[i] - '0'];
    for (let j = 0; j < characters.length; j++) {
      for (let k = 0; k < responseArray.length; k++) {
        arr.push(responseArray[k] + characters[j]);
      }
    }
    responseArray = arr;
  }
  return responseArray;
}

module.exports = app;
