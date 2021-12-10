const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reply', {
    reply_idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    border_idx: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    reply_content: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      comment: "댓글 내용"
    },
    reply_user: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "댓글 작성자"
    },
    reply_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "댓글 작성일"
    },
    reply_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "댓글 수정일"
    }
  }, {
    sequelize,
    tableName: 'reply',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "reply_idx" },
        ]
      },
    ]
  });
};
