/* 게시글 내용과 이미지 경로를 저장, 이미지는 multer 사용해서 파일로 저장 */

const Sequelize = require('sequelize');

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      content: {
        type: Sequelize.STRING(140),
        allowNull: false,
      },
      img: {
        type: Sequelize.STRING(200),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) { // 모델간의 관계 associate에 작성
    db.Post.belongsTo(db.User); // 1대다
    db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); // 다대다이며 중간 테이블 활용
  }
};