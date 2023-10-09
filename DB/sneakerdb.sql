-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sneakerdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `sneakerdb` ;

-- -----------------------------------------------------
-- Schema sneakerdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sneakerdb` DEFAULT CHARACTER SET utf8 ;
USE `sneakerdb` ;

-- -----------------------------------------------------
-- Table `brand`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `brand` ;

CREATE TABLE IF NOT EXISTS `brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(100) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `shoe_condition`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `shoe_condition` ;

CREATE TABLE IF NOT EXISTS `shoe_condition` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sneaker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `sneaker` ;

CREATE TABLE IF NOT EXISTS `sneaker` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `collection` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `size` DECIMAL(1) NOT NULL,
  `retail_price` INT NOT NULL,
  `release_date` DATE NULL,
  `acquisition_date` DATE NULL,
  `colorway` VARCHAR(75) NOT NULL,
  `box` TINYINT NOT NULL,
  `brand_id` INT NOT NULL,
  `condition_id` INT NOT NULL,
  `image_url` VARCHAR(2000) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sneaker_brand_idx` (`brand_id` ASC),
  INDEX `fk_sneaker_condition1_idx` (`condition_id` ASC),
  CONSTRAINT `fk_sneaker_brand`
    FOREIGN KEY (`brand_id`)
    REFERENCES `brand` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_sneaker_condition1`
    FOREIGN KEY (`condition_id`)
    REFERENCES `shoe_condition` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS sneakerhead@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'sneakerhead'@'localhost' IDENTIFIED BY 'sneakerhead';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'sneakerhead'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `brand`
-- -----------------------------------------------------
START TRANSACTION;
USE `sneakerdb`;
INSERT INTO `brand` (`id`, `name`, `description`) VALUES (1, 'Nike', NULL);
INSERT INTO `brand` (`id`, `name`, `description`) VALUES (2, 'Air Jordan', NULL);
INSERT INTO `brand` (`id`, `name`, `description`) VALUES (3, 'Adidas', NULL);
INSERT INTO `brand` (`id`, `name`, `description`) VALUES (4, 'Reebok', NULL);
INSERT INTO `brand` (`id`, `name`, `description`) VALUES (5, 'Heelys', NULL);
INSERT INTO `brand` (`id`, `name`, `description`) VALUES (6, 'Adidas x Star Wars', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `shoe_condition`
-- -----------------------------------------------------
START TRANSACTION;
USE `sneakerdb`;
INSERT INTO `shoe_condition` (`id`, `title`, `description`) VALUES (1, 'New', 'Brand new, never worn');
INSERT INTO `shoe_condition` (`id`, `title`, `description`) VALUES (2, 'Used - Like New', 'Worn only once or twice, no flaws');
INSERT INTO `shoe_condition` (`id`, `title`, `description`) VALUES (3, 'Used - Good', 'Visible signs of wear, 1-2 minor flaws');
INSERT INTO `shoe_condition` (`id`, `title`, `description`) VALUES (4, 'Used - Fair', 'Obvious signs of wear, some flaws');
INSERT INTO `shoe_condition` (`id`, `title`, `description`) VALUES (5, 'Used - Beat', 'Heavy signs of wear, significant flaws');

COMMIT;


-- -----------------------------------------------------
-- Data for table `sneaker`
-- -----------------------------------------------------
START TRANSACTION;
USE `sneakerdb`;
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (1, 'Top Ten Hi', 'Boba Fett', 8, 110, '2020-09-24', '2020-11-10', 'Trace Green/Scarlett', 1, 6, 2, 'https://cdn.flightclub.com/1250/TEMPLATE/204712/1.jpg');
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (2, 'Air Max 90', 'Custom', 8.5, 125, '2023-03-26', '2023-03-28', 'Custom', 1, 1, 2, NULL);
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (3, '1 Mid SE', 'Brushstroke Paint Splatter', 8, 130, '2021-09-01', '2021-12-25', 'Sail/Black/Cider/Chile Red', 0, 2, 4, 'https://cdn.flightclub.com/1250/TEMPLATE/277391/1.jpg');
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (4, '1 Retro', 'Deep Royal', 8, 150, '2016-12-01', '2017-12-25', 'Deep Royal/Black-White', 0, 2, 3, 'https://cdn.flightclub.com/1250/TEMPLATE/012602/1.jpg');
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (5, '8 Retro', 'White Aqua', 9, 190, '2007-09-21', '2018-08-19', 'White/Varsity Red-Bright Concord', 0, 2, 5, 'https://cdn.flightclub.com/1250/TEMPLATE/149784/1.jpg');
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (6, 'Dunk Mid Pro SB', 'Tie Dye', 8.5, 80, '2008-08-01', '2010-07-24', 'Obsidian/Varsity Red', 0, 1, 3, 'https://cdn.flightclub.com/1250/TEMPLATE/080427/1.jpg');
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (7, 'Pump Omni Lite', 'Dee Brown', 7.5, 110, '2014-01-01', '2015-08-01', ' White/Black-Solar', 0, 4, 4, 'https://cdn.flightclub.com/3000/TEMPLATE/990860/1.jpg');
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (8, 'Dunk High Supreme', 'Olympic Octagon', 8, 125, '2008-08-03', '2010-06-17', 'Varstiy Maize/Varsity Maize', 0, 1, 3, 'https://image.goat.com/transform/v1/attachments/product_template_pictures/images/000/031/522/original/321762_771.png.png?action=crop&width=850');
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (9, 'Jumpman Pro', 'Custom', 8, 145, '2008-11-08', '2008-11-08', 'Custom', 0, 2, 2, NULL);
INSERT INTO `sneaker` (`id`, `collection`, `name`, `size`, `retail_price`, `release_date`, `acquisition_date`, `colorway`, `box`, `brand_id`, `condition_id`, `image_url`) VALUES (10, 'Pro 20 Prints', 'Black Flames', 8, 75, '2021-08-04', '2021-08-04', 'White/Black Flames', 0, 5, 3, 'https://www.heelys.eu.com/media/catalog/product/h/e/he100810_1.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:');

COMMIT;

