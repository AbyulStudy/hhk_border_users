create table user(
    user_idx INT(10)                AUTO_INCREMENT,
    email VARCHAR(89)               NOT NULL COMMENT '유저 이메일' COLLATE 'utf8mb4_unicode_ci',
    name VARCHAR(30)                NOT NULL COMMENT '유저 닉네임' COLLATE 'utf8mb4_unicode_ci',
    password VARCHAR(30)            NOT NULL COMMENT '유저 패스워드' COLLATE 'utf8mb4_unicode_ci',
    created_date date                         COMMENT '유저 생성일', // Default NOW();
    PRIMARY KEY (`user_idx`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB;

create table border(
    border_idx      INT(10)         AUTO_INCREMENT,
    writer_name     VARCHAR(30)     NOT NULL COMMENT '유저 이름(작성자)' COLLATE 'utf8mb4_unicode_ci',
    subject         VARCHAR(30)     NOT NULL COMMENT '글 제목' COLLATE 'utf8mb4_unicode_ci',
    category        VARCHAR(30)              COMMENT '글 카테고리' COLLATE 'utf8mb4_unicode_ci',
    content         VARCHAR(1024)   NOT NULL COMMENT '글 내용' COLLATE 'utf8mb4_unicode_ci',
    reply_count     INT(3)          NOT NULL COMMENT '뎃글 카운트' UNSIGNED DEFAULT '0',
    created_date    date            NOT NULL COMMENT '최초 작성일',
    modify_date     date            NOT NULL COMMENT '수정일',
    PRIMARY KEY (`border_idx`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB;

create talbe reply(
    reply_idx INT(10) AUTO_INCREMENT,
    border_idx INT(10),
    reply_content VARCHAR(1024)   NOT NULL COMMENT '댓글 내용'   COLLATE 'utf8mb4_unicode_ci',
    reply_user VARCHAR(30)        NOT NULL COMMENT '댓글 작성자' COLLATE 'utf8mb4_unicode_ci',
    reply_date date               NOT NULL COMMENT '댓글 작성일',
    reply_update date             NOT NULL COMMENT '댓글 수정일',
    PRIMARY KEY (`reply_idx`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB;

/*===========================================================================*/
create table `user`(
    `user_idx` INT(10) NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(89) NOT NULL COMMENT '유저 이메일' COLLATE 'utf8mb4_unicode_ci',
    `name` VARCHAR(30) NOT NULL COMMENT '유저 닉네임' COLLATE 'utf8mb4_unicode_ci',
    `password` VARCHAR(30) NOT NULL COMMENT '유저 패스워드' COLLATE 'utf8mb4_unicode_ci',
    `profile_image` blob COMMENT '프로필 사진데이터',
    `createdDate` DATETIME DEFAULT NOW() COMMENT '유저 생성일',
    PRIMARY KEY (`user_idx`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB;

create table `border`(
    `border_idx` INT(10) AUTO_INCREMENT,
    `writer_email` VARCHAR(89) NOT NULL COMMENT '작성자 이메일' COLLATE 'utf8mb4_unicode_ci',
    `writer_name` VARCHAR(30) NOT NULL COMMENT '작성자 이름' COLLATE 'utf8mb4_unicode_ci',
    `subject` VARCHAR(30) NOT NULL COMMENT '글 제목' COLLATE 'utf8mb4_unicode_ci',
    `category` VARCHAR(30) COMMENT '글 카테고리' COLLATE 'utf8mb4_unicode_ci',
    `content` VARCHAR(1024) NOT NULL COMMENT '글 내용' COLLATE 'utf8mb4_unicode_ci',
    `reply_count` INT(4) UNSIGNED DEFAULT 0 NOT NULL COMMENT '댓글 카운트',
    `created_date` DATETIME DEFAULT NOW() NOT NULL COMMENT '최초 작성일',
    `modify_date` DATETIME DEFAULT NOW() NOT NULL COMMENT '수정일', 
    PRIMARY KEY (`border_idx`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB;

create table `reply`(
    `reply_idx` INT(10) NOT NULL AUTO_INCREMENT,
    `border_idx` INT(10),
    `reply_content` VARCHAR(1024) NOT NULL COMMENT '댓글 내용' COLLATE 'utf8mb4_unicode_ci',
    `reply_user` VARCHAR(30) NOT NULL COMMENT '댓글 작성자' COLLATE 'utf8mb4_unicode_ci',
    `reply_date` DATETIME DEFAULT NOW() NOT NULL COMMENT '댓글 작성일',
    `reply_update` DATETIME DEFAULT NOW() NOT NULL COMMENT '댓글 수정일',
    PRIMARY KEY (`reply_idx`) USING BTREE
)
COLLATE='utf8mb4_unicode_ci'
ENGINE=InnoDB;

identifying Relationship