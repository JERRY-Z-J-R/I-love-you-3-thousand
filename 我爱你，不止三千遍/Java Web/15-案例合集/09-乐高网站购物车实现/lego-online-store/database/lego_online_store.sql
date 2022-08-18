/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 50724
 Source Host           : localhost:3306
 Source Schema         : lego_online_store

 Target Server Type    : MySQL
 Target Server Version : 50724
 File Encoding         : 65001

 Date: 26/06/2022 15:46:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for address
-- ----------------------------
DROP TABLE IF EXISTS `address`;
CREATE TABLE `address`  (
  `addressid` int(11) NOT NULL AUTO_INCREMENT COMMENT '收货地址编号',
  `userid` int(11) NOT NULL COMMENT '用户编号',
  `address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收货地址',
  PRIMARY KEY (`addressid`) USING BTREE,
  INDEX `address_ibfk_1`(`userid`) USING BTREE,
  CONSTRAINT `address_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of address
-- ----------------------------

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods`  (
  `goodsid` int(11) NOT NULL AUTO_INCREMENT COMMENT '玩具商品编号',
  `goodsname` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '玩具商品名称',
  `goodsoutline` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '玩具商品介绍',
  `goodsprice` double NOT NULL COMMENT '玩具商品单价',
  `goodscount` int(11) NOT NULL COMMENT '玩具商品库存',
  `goodsimg` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '玩具商品封面地址',
  PRIMARY KEY (`goodsid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES (1, '永恒族审判者', '漫威阿里瑟姆的阴影带来了深受孩子们喜爱的超级英雄大对决，其中包含 4 个永恒族、一个异常者和一个天神组。', 1540, 999, 'src/main/webapp/img/goods01.jpg');
INSERT INTO `goods` VALUES (2, '银河护卫队飞船', '最具标志性的宇宙飞船之一源自漫威《复仇者联盟》电影，粉丝们现在可以重现其逼真的细节和炫酷的风格。', 1780, 999, 'src/main/webapp/img/goods02.jpg');
INSERT INTO `goods` VALUES (3, '终局之战母舰', '漫威圣殿 II 宇宙飞船带有 4 个机翼、一系列令人胆战心惊的 6 凸粒发射器，可以把精彩的漫威电影行动放到孩子的手中。', 1240, 999, 'src/main/webapp/img/goods03.jpg');
INSERT INTO `goods` VALUES (4, '复仇者联盟母舰', '漫威复仇者联盟天空母舰拼搭玩具可将孩子们载上超酷的复仇者联盟天空母舰，他们可以与钢铁侠、惊奇队长、托尔、黑寡妇、战争机器和尼克‧弗瑞一起大战大脑袋的超级恶棍魔多客。', 2400, 999, 'src/main/webapp/img/goods04.jpg');

-- ----------------------------
-- Table structure for love
-- ----------------------------
DROP TABLE IF EXISTS `love`;
CREATE TABLE `love`  (
  `loveid` int(11) NOT NULL AUTO_INCREMENT COMMENT '收藏编号',
  `userid` int(11) NOT NULL COMMENT '用户编号',
  `goodsid` int(11) NOT NULL COMMENT '玩具商品编号',
  PRIMARY KEY (`loveid`) USING BTREE,
  INDEX `userid`(`userid`) USING BTREE,
  INDEX `goodsid`(`goodsid`) USING BTREE,
  CONSTRAINT `love_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `love_ibfk_2` FOREIGN KEY (`goodsid`) REFERENCES `goods` (`goodsid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of love
-- ----------------------------

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders`  (
  `orderid` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单编号',
  `userid` int(11) NOT NULL COMMENT '用户编号',
  `ordertime` varchar(24) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '订单时间',
  `orderpay` double NOT NULL COMMENT '订单金额',
  `orderstate` int(11) NOT NULL COMMENT '订单状态（1：已支付）（0：未支付）',
  PRIMARY KEY (`orderid`) USING BTREE,
  INDEX `userid`(`userid`) USING BTREE,
  CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 92 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for shopping_cart
-- ----------------------------
DROP TABLE IF EXISTS `shopping_cart`;
CREATE TABLE `shopping_cart`  (
  `cartid` int(11) NOT NULL AUTO_INCREMENT COMMENT '购物车编号',
  `userid` int(11) NOT NULL COMMENT '用户编号',
  `goodsid` int(11) NOT NULL COMMENT '玩具商品编号',
  `cgcount` int(11) NOT NULL COMMENT '玩具商品数量',
  PRIMARY KEY (`cartid`) USING BTREE,
  INDEX `userid`(`userid`) USING BTREE,
  INDEX `goodsid`(`goodsid`) USING BTREE,
  CONSTRAINT `shopping_cart_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `shopping_cart_ibfk_2` FOREIGN KEY (`goodsid`) REFERENCES `goods` (`goodsid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 50 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of shopping_cart
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `userid` int(11) NOT NULL AUTO_INCREMENT COMMENT '用户编号',
  `username` varchar(24) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(24) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  PRIMARY KEY (`userid`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '周吉瑞', '245424');

SET FOREIGN_KEY_CHECKS = 1;
