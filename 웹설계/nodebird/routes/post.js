const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const { Post, Hashtag } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

try {
  fs.readdirSync('uploads'); // 경로 읽음
} catch (error) { // 경로가 없을 때
  console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
  fs.mkdirSync('uploads');
}

// multer() 함수로 업로드 미들웨어 생성
const upload = multer({
  storage: multer.diskStorage({ // 이미지를 서버 디스크에 저장
    // 저장 경로
    destination(req, file, cb) {
      cb(null, 'uploads/');
    },
    // 저장 파일명
    filename(req, file, cb) {
      const ext = path.extname(file.originalname); // 확장자
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 파일 최대 용량을 5MB로 설정
});

// upload.single('img') : 요청 본문의 이미지를 읽어 설정대로 저장하는 미들웨어
router.post('/img', isLoggedIn, upload.single('img'), (req, res) => {
  console.log(req.file);
  res.json({ url: `/img/${req.file.filename}` }); // 저장된 파일에 대한 정보는 req.file 객체에 담김
});

const upload2 = multer();
router.post('/', isLoggedIn, upload2.none(), async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      img: req.body.url,
      UserId: req.user.id,
    });
    const hashtags = req.body.content.match(/#[^\s#]*/g); // 정규표현식(regex)
    if (hashtags) {
      const result = await Promise.all(
        hashtags.map(tag => {
          return Hashtag.findOrCreate({
            // findOrCreate는 기존에 해시태그가 존재하면 그걸 사용하고,
            // 없으면 생성하는 시퀄라이즈 메소드
            where: { title: tag.slice(1).toLowerCase() },
          })
        }),
      );
      await post.addHashtags(result.map(r => r[0])); // 게시글에서 해시태그를 찾아서 둘을 연결
    }
    res.redirect('/');
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;