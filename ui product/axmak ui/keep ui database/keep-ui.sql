SET NAMES UTF8;
DROP DATABASE IF EXISTS keep_ui;
CREATE DATABASE keep_ui CHARSET=UTF8;
USE keep_ui;
CREATE TABLE keep_class(
  cid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  cname VARCHAR(32),
  cdetail VARCHAR(32),
  ctime VARCHAR(64)
);
INSERT INTO keep_class VALUES(null,'小腿按摩','还没进行过训练21人正在训练','15分钟·k1'),
(null,'下肢综合训练','已进行过360分钟的训练42人正在训练','30分钟·k1'),
(null,'跑前训练','已进行过120分钟的训练0人正在训练','40分钟·k1'),
(null,'瘦腿训练','还没进行过训练5人正在训练','10分钟·k1');

INSERT INTO keep_class VALUES(null,'骑行运动','还没进行过训练50人正在训练','45分钟·k1');


INSERT INTO keep_class VALUES(null,'2分钟瑜伽体验课程','还没进行过训练1人正在训练','5分钟·k1');
INSERT INTO keep_class VALUES(null,'跳绳HIIT初级版','已进行过60分钟的训练1人正在训练','2分钟·k1');
INSERT INTO keep_class VALUES(null,'2分钟体验课程','已进行过30分钟的训练1人正在训练','5分钟·k1');


CREATE TABLE keep_search(
  sid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  sname VARCHAR(32),
  sdetail VARCHAR(32),
  scount VARCHAR(32),
  img VARCHAR(32)
);
INSERT INTO keep_search VALUES(null,'腹肌塑造强化','力量增进·徒手·腹肌训练','课程·K4强化·145.9万 人参加','20190514141926.png');
INSERT INTO keep_search VALUES(null,'塑性操·腹肌训练入门','腹肌塑性·动作指导·手环专属','课程·K1零基础·128.9万 人参加','20190514142027.png');
INSERT INTO keep_search VALUES(null,'腹肌塑造进阶','力量增型·腹肌训练','课程·K1零基础·128.9万 人参加','20190514142006.png');


INSERT INTO keep_search VALUES(null,'KeepKit塑造腹肌跑步','燃脂·腹肌','24分钟·K1零基础·10人参加','20190514142102.png');
INSERT INTO keep_search VALUES(null,'腹肌入门训练','腹肌训练·力量增进','13分钟·K1零基础·265.3人参加','20190514142044.png');

INSERT INTO keep_search VALUES(null,'跑步膝预防','预防膝盖受伤','11分钟·K1零基础·289.2人参加','20190514141816.png');
INSERT INTO keep_search VALUES(null,'跑步稳定性提升','提升跑步机巧','12分钟·K1零基础·248.1人参加','20190514141648.png');
INSERT INTO keep_search VALUES(null,'跑步核心训练','提升跑步核心技术','30分钟·K2初级班·183.6人参加','20190514141840.png');


CREATE TABLE keep_user(
  uid INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  uname VARCHAR(10),
  uphone VARCHAR(32),
  upassword VARCHAR(32),
  ava VARCHAR(64),
  step INT
);
INSERT INTO keep_user VALUES(null,'rains',18617115510,987654321,'d3b28ad1b3012cc872a9e797d2d3c3d57362c149.jpg',1013);
INSERT INTO keep_user VALUES(null,'axmak',13018738059,123456789,'203c02bef77af1da58670b2c31f1163f8d0bbc9a.png',2365);
INSERT INTO keep_user VALUES(null,'salt',13078649009,963258741,'4d6a7f367e7e7190da243f04a5b36263b5b320a8.jpg',7806);