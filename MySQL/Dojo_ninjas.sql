-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dojos
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dojos` ;

-- -----------------------------------------------------
-- Schema dojos
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dojos` DEFAULT CHARACTER SET utf8 ;
USE `dojos` ;

-- -----------------------------------------------------
-- Table `dojos`.`ninjas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojos`.`ninjas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `age` TINYINT NOT NULL,
  `dojos_id` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dojos`.`dojos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dojos`.`dojos` (
  `id` INT NOT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  `name` VARCHAR(45) NULL,
  `ninja_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_dojos_ninjas1_idx` (`ninja_id` ASC) VISIBLE,
  CONSTRAINT `fk_dojos_ninjas1`
    FOREIGN KEY (`ninja_id`)
    REFERENCES `dojos`.`ninjas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
