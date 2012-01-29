CREATE DATABASE IF NOT EXISTS `webshop`;
USE `webshop`;

DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `image` varchar(255) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `category` (`id`, `name`, `image`)
VALUES
	(1,'Mountain Railway','media/images/bergbahn.png'),
	(2,'Hotels','media/images/hotel.png'),
	(3,'Equipment','media/images/equipment.png'),
	(4,'Skischool','media/images/skischule.png');
	UNLOCK TABLES;


DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) NOT NULL DEFAULT '',
  `name` varchar(255) NOT NULL DEFAULT '',
  `price` decimal(12,2) NOT NULL DEFAULT '0.00',
  `category` int(11) NOT NULL,
  `description` text NOT NULL,
  `image` varchar(255) NOT NULL DEFAULT '',
  `qty` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `category_idxfk` (`category`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`category`) REFERENCES `category` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `product` (`id`, `sku`, `name`, `price`, `category`, `description`, `image`, `qty`)
VALUES
	(1,'MOUNTAINRAILWAY.JUNGFRAUJOCH','Ticket Jungfraujoch',320.00,1,'The journey to the Jungfraujoch - Top of Europe, at 3454 metres Europe’s highest altitude railway station, is the highlight of every visit to Switzerland. It offers visitors a high-Alpine wonderworld of ice, snow and rock, which can be marvelled at from vantage terraces, the Aletsch Glacier or in the Ice Palace. On clear days, views extend as far as the Vosges mountains in France and Germany’s Black Forest. \n\nThe train journey to the Jungfraujoch through the rock of the Eiger and Mönch is also an incredible experience. Visitors can enjoy stunning views from two intermediate stations, the Eigerwand (Eiger Wall) and Eismeer (Sea of Ice).','media/images/mountainrailway/funpark.jpg',900),
	(2,'MOUNTAINRAILWAY.HARDERKULM','Ticket Harder-Kulm',29.50,1,'It takes just eight minutes to travel by funicular from Interlaken to the Harder Kulm, Interlaken’s home mountain, where the restaurant, at 1322 metres above sea level, is reminiscent of a small castle. \n\nThe Harder Kulm is the starting point for several mountain hikes. It also affords wonderful views of the Eiger, Mönch & Jungfrau as well as Lake Thun and Lake Brienz. It is a venue for regular folklore evenings. Children will love letting off steam in the playground. ','media/images/mountainrailway/harderkulm.jpg',3),
	(4,'MOUNTAINRAILWAY.KLEINESCHEIDEGG','Ticket Kleine Scheidegg',15.60,1,'Kleine Scheidegg is located beneath the Eiger, Mönch & Jungfrau at 2061 metres above sea level. It offers visitors a spectacular view of the notorious Eiger North Wall. In 1936, awestruck onlookers watched as four mountain climbers perished on the wall in dramatic circumstances. The tragic story was later made into a film. \n\nKleine Scheidegg has a railway station, restaurants and hotels. It is also the starting point for the trip by Jungfrau Railway to the Jungfraujoch - Top of Europe as well as for many superb hikes.','media/images/mountainrailway/kleinescheidegg.jpg',200),
	(6,'MOUNTAINRAILWAY.FIRST','Ticket First',18.00,1,'It’s not possible to imagine anything more idyllic in the Swiss mountain world than the area around Lake Bachalpsee. The snow-clad Alpine peaks are mirrored in its blue, crystal-clear waters. \n\nThe First region is the starting point for hikes and also offers plenty of action: the First Flyer, scooter-bikes and biking guarantee an adrenaline rush and intoxicating speed. Children can get their kicks in the 700 m2 adventure playground close to the Bort intermediate station.','media/images/mountainrailway/bachalpsee.jpg',900),
	(7,'MOUNTAINRAILWAY.FIRSTFLYER','Ticket First Flyer',139.90,1,'Anyone seeking an adrenalin kick will find an array of offers in the Jungfrau Region. Zoom through the air at 80 km/h on the First Flyer. Feel the wind in your face on a scooter-bike, which you can hire at the First aerial cableway. And the Jungfraujoch - Top of Europe has a fun park where you can slide down the snow slope in a variety of ways – cool thrills!\n\nAn 800 metre-long steel cable, up to 50 metres above the ground at speeds of up to 84 km/hour – the First Flyer promises the ultimate adrenalin kick. On the racy ride from First to Schreckfeld, adventure junkie sit safely strapped into a well-constructed harness. At the bottom, the ride is halted by a dampening brake mechanism. Up to four people can ride down, separately but simultaneously on the gigantic zip lines. Known as a zip rider in the USA, this is a unique all-year-round attraction in Europe.','media/images/mountainrailway/firstflyer.jpg',900),
	(8,'HOTEL.SCHWEIZERHOF','Hotel Schweizerhof',200.00,2,'The Schweizerhof lies at the foot of majestic mountain peaks, midst in a walking arena that is truly irresistible. With its beautiful, tastefully furnished rooms, apartments and luxury suites, your stay at one of Switzerland’s most hospitable hotels will be a very special delight. Every room and every suite is equipped with colour television, radio, minibar, room-safe, hair drier in the bathroom and telephone with direct external dialling. \n\nThe hotel offers a new Spa area with heated indoor pool, steam bath, bio-sauna and finnish sauna. The „Schmitte“ restaurant provide a setting worthy of the tasteful food and service. The Chef, crates a unique combination of Swiss and alpine cuisine. In the cosy \"Gaststübli\" Fondue Chinoise will be served. ','media/images/hotels/schweizerhof.jpg',900),
	(9,'HOTEL.WENGERHOF','Hotel Wengener Hof ',180.00,2,'The hotel Wengener Hof is one of the most esteemed hotels in Wengen and occupies the best location. \n\nAll rooms are equally comfortable, featuring bath/WC, radio, cable TV, telephone, minibar, hair-dryer and safe. The halfboard arrangement consists of our splendid breakfast buffet and 5-course dinner with choice, always with a vegetarian option. Especially to mention is as well our exceptional selection of Bordeaux wines.\n','media/images/hotels/wengenerhof.jpg',900),
	(10,'HOTEL.GLETSCHERTAL','Hotel Gletschertal',320.00,2,'This cozy 3*-chalet hotel with its alpine charm is situated on a quiet sunny slope above the church of Grindelwald, offering magnificent views of the mountains and glaciers.\n\nAll 21 rooms are traditionally furnished and have a TV and a private bathroom. All rooms have balconies and magnificent mountain views. \n\nGletschertal Hotel features a cozy, rustic bar and a restaurant serving local cuisine. Guests can enjoy their meals on the sunny terrace in nice weather.','media/images/hotels/gletschertal.jpg',900),
	(11,'EQUIPMENT.SNOWBOARD','Snowboard',77.00,3,'You can hire your winter-sport equipment here. Select the desired article from the column on the left and complete the form next to it. Each article can be booked individually. Personal details will be treated in confidence. After completing the booking, you’ll find the voucher in your user account as a PDF to download and print out. \n\nWhen do I pay for the hire?\nYou pay the hire fee by credit card at the end of the booking. Payment by invoice or directly at the locality is not possible. In your user account you’ll find the voucher to print out. Skiing style, height and weight must be stated when choosing ski equipment. This data will be forwarded in advance to the rental point, meaning you’ll be able to pick up your equipment and get on the slopes even faster! \n\nWhere can I pick up my equipment?\nYou can download your voucher in your user account immediately after purchase and payment by credit card. Present this voucher at a pick-up point and you’ll be given your snow-sport equipment. The voucher is deposited in your user account and can be downloaded again at any time.','media/images/equipment/snowboard.jpg',900),
	(12,'EQUIPMENT.SKIES','Skies',60.00,3,'You can hire your winter-sport equipment here. Select the desired article from the column on the left and complete the form next to it. Each article can be booked individually. Personal details will be treated in confidence. After completing the booking, you’ll find the voucher in your user account as a PDF to download and print out. \n\nWhen do I pay for the hire?\nYou pay the hire fee by credit card at the end of the booking. Payment by invoice or directly at the locality is not possible. In your user account you’ll find the voucher to print out. Skiing style, height and weight must be stated when choosing ski equipment. This data will be forwarded in advance to the rental point, meaning you’ll be able to pick up your equipment and get on the slopes even faster! \n\nWhere can I pick up my equipment?\nYou can download your voucher in your user account immediately after purchase and payment by credit card. Present this voucher at a pick-up point and you’ll be given your snow-sport equipment. The voucher is deposited in your user account and can be downloaded again at any time.','media/images/equipment/skies.jpg',900),
	(14,'EQUIPMENT.FOLDINGCHAIR','Folding Chair',9.90,3,'You can hire your winter-sport equipment here. Select the desired article from the column on the left and complete the form next to it. Each article can be booked individually. Personal details will be treated in confidence. After completing the booking, you’ll find the voucher in your user account as a PDF to download and print out. \n\nWhen do I pay for the hire?\nYou pay the hire fee by credit card at the end of the booking. Payment by invoice or directly at the locality is not possible. In your user account you’ll find the voucher to print out. Skiing style, height and weight must be stated when choosing ski equipment. This data will be forwarded in advance to the rental point, meaning you’ll be able to pick up your equipment and get on the slopes even faster! \n\nWhere can I pick up my equipment?\nYou can download your voucher in your user account immediately after purchase and payment by credit card. Present this voucher at a pick-up point and you’ll be given your snow-sport equipment. The voucher is deposited in your user account and can be downloaded again at any time.','media/images/equipment/chair.jpg',900),
	(15,'EQUIPMENT.SHOVEL','Shovel',4.50,3,'You can hire your winter-sport equipment here. Select the desired article from the column on the left and complete the form next to it. Each article can be booked individually. Personal details will be treated in confidence. After completing the booking, you’ll find the voucher in your user account as a PDF to download and print out. \n\nWhen do I pay for the hire?\nYou pay the hire fee by credit card at the end of the booking. Payment by invoice or directly at the locality is not possible. In your user account you’ll find the voucher to print out. Skiing style, height and weight must be stated when choosing ski equipment. This data will be forwarded in advance to the rental point, meaning you’ll be able to pick up your equipment and get on the slopes even faster! \n\nWhere can I pick up my equipment?\nYou can download your voucher in your user account immediately after purchase and payment by credit card. Present this voucher at a pick-up point and you’ll be given your snow-sport equipment. The voucher is deposited in your user account and can be downloaded again at any time.','media/images/equipment/shovel.jpg',900),
	(16,'EQUIPMENT.SCOOTER','Scooter',32.00,3,'You can hire your winter-sport equipment here. Select the desired article from the column on the left and complete the form next to it. Each article can be booked individually. Personal details will be treated in confidence. After completing the booking, you’ll find the voucher in your user account as a PDF to download and print out. \n\nWhen do I pay for the hire?\nYou pay the hire fee by credit card at the end of the booking. Payment by invoice or directly at the locality is not possible. In your user account you’ll find the voucher to print out. Skiing style, height and weight must be stated when choosing ski equipment. This data will be forwarded in advance to the rental point, meaning you’ll be able to pick up your equipment and get on the slopes even faster! \n\nWhere can I pick up my equipment?\nYou can download your voucher in your user account immediately after purchase and payment by credit card. Present this voucher at a pick-up point and you’ll be given your snow-sport equipment. The voucher is deposited in your user account and can be downloaded again at any time.','media/images/equipment/scooter.jpg',900),
	(17,'SKISCHOOL.CHILDS','Skischool Kinder',120.00,4,'Find your own personal way to unlimited snowboarding freedom. You\'ll soon be learning nose and tail turns or trying out the halfpipe.','media/images/skischool/childs.jpg',900),
	(18,'SKISCHOOL.ADULTS','Skischool Adults',140.00,4,'Find your own personal way to unlimited snowboarding freedom. You\'ll soon be learning nose and tail turns or trying out the halfpipe.','media/images/skischool/adults.png',900);

GRANT ALL ON *.* TO webshop@localhost IDENTIFIED by 'Pear73';
