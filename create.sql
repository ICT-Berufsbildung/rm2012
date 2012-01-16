DROP TABLE IF EXISTS `categories`;
CREATE TABLE `categories`
(
`id` INTEGER NOT NULL AUTO_INCREMENT,
`name` VARCHAR(255) NOT NULL DEFAULT '',
`image` VARCHAR(255) NOT NULL DEFAULT '',
PRIMARY KEY (`id`)
) ENGINE=InnoDB;

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`
(
`id` INTEGER NOT NULL AUTO_INCREMENT,
`sku` VARCHAR(255) NOT NULL DEFAULT '',
`name` VARCHAR(255) NOT NULL DEFAULT '',
`price` DECIMAL(12,2) NOT NULL DEFAULT 0,
`category` INTEGER NOT NULL,
`description` TEXT NOT NULL DEFAULT '',
`image` VARCHAR(255) NOT NULL DEFAULT '',
`qty` INTEGER NOT NULL DEFAULT 0,
PRIMARY KEY (`id`)
) ENGINE=InnoDB;

ALTER TABLE `products` ADD FOREIGN KEY category_idxfk (`category`) REFERENCES `categories` (`id`);
