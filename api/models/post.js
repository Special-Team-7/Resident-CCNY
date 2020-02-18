'use strict';
const { Model  } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    author: {
      type: DataTypes.TEXT,
      field:'author'
    },
    tag: {
      type: DataTypes.TEXT,
      field:'tag'
    },
    date: {
      type: DataTypes.DATEONLY,
      field:'date'
    },
    title: {
      type: DataTypes.TEXT,
      field:'title'
    },
    content: {
      type: DataTypes.TEXT,
      field:'content'
    }
  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here
  };

  return Post;
};