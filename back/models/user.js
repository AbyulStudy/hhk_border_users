const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    user_idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(89),
      allowNull: false,
      comment: "유저 이메일"
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "유저 닉네임"
    },
    password: {
      type: DataTypes.STRING(30),
      allowNull: false,
      comment: "유저 패스워드"
    },
    profile_image: {
      type: DataTypes.BLOB,
      allowNull: true,
      comment: "프로필 사진데이터"
    },
    createdDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      comment: "유저 생성일"
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "user_idx" },
        ]
      },
    ]
  });
};
