const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('border', {
    border_idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    writer_email: {
      type: DataTypes.STRING(89),
      allowNull: false,
      comment: "작성자 이메일"
    },
    writer_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "작성자 이름"
    },
    subject: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "글 제목"
    },
    category: {
      type: DataTypes.STRING(30),
      allowNull: true,
      comment: "글 카테고리"
    },
    content: {
      type: DataTypes.STRING(1024),
      allowNull: false,
      comment: "글 내용"
    },
    reply_count: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
      comment: "댓글 카운트"
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "최초 작성일"
    },
    modify_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "수정일"
    }
  }, {
    sequelize,
    tableName: 'border',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "border_idx" },
        ]
      },
    ]
  });
};
