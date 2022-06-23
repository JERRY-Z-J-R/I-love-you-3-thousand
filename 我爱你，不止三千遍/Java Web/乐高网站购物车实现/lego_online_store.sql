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

 Date: 22/06/2022 16:16:50
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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
INSERT INTO `goods` VALUES (1, 'iphone 13 pro max', '地球上最牛比的手机', 9999, 54, NULL);
INSERT INTO `goods` VALUES (2, 'MacBook Pro 16 M1Max', '地球上最牛逼的笔记本电脑', 35000, 24, NULL);
INSERT INTO `goods` VALUES (3, '小米 13 pro', '雷军认为最好的手机', 4500, 300, NULL);
INSERT INTO `goods` VALUES (4, '联想 拯救者 Y9000X 3060', '最漂亮的轻薄游戏本', 9500, 230, NULL);

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
-- Table structure for order
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order`  (
  `orderid` int(11) NOT NULL AUTO_INCREMENT COMMENT '订单编号',
  `userid` int(11) NOT NULL COMMENT '用户编号',
  `ordertime` datetime NOT NULL COMMENT '订单时间',
  `orderpay` double NOT NULL COMMENT '订单金额',
  `orderstate` int(11) NOT NULL COMMENT '订单状态（1：已支付）（0：未支付）',
  PRIMARY KEY (`orderid`) USING BTREE,
  INDEX `userid`(`userid`) USING BTREE,
  CONSTRAINT `order_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of order
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
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
) ENGINE = InnoDB AUTO_INCREMENT = 3 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, '张三', '123456');
INSERT INTO `user` VALUES (2, '李四', '654321');

SET FOREIGN_KEY_CHECKS = 1;
