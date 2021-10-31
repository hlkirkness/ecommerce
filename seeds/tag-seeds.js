const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'blue',
  },
  {
    tag_name: 'green',
  },
  {
    tag_name: 'red',
  },
  {
    tag_name: 'orange',
  },
  {
    tag_name: 'yellow',
  },
  {
    tag_name: 'purple',
  },
  {
    tag_name: 'indigo',
  },
  {
    tag_name: 'black',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;