SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE `elecworks_services`;

CREATE TABLE `users` (
  `user_id` bigint(11) NOT NULL PRIMARY KEY,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `user_type` enum('Admin','User') DEFAULT NULL,
  `timemodified` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `appointments` (
  `app_id` int(11) NOT NULL PRIMARY KEY,
  `app_type` enum('repair','installation','maintenance') NOT NULL,
  `app_time` time(6) NOT NULL,
  `app_date` date NOT NULL,
  `user_id` bigint(11) DEFAULT NULL,
  `dateTime_created` timestamp NOT NULL DEFAULT current_timestamp()
  PRIMARY KEY(app_id),
  FOREIGN KEY(user_id) REFERENCES users(user_id),
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `users` (`user_id`, `username`, `password`, `name`, `email`, `user_type`, `timemodified`) VALUES
(1, 'TheLastAdmin', 'QWErt12345', 'Christian Stewart', 'christianstewart5111@gmail.com', NULL, '2021-11-02 06:48:16');

INSERT INTO `appointments` (`app_id`, `app_type`, `app_time`, `app_date`, `user_id`, `dateTime_created`) VALUES
(1, 'installation', '17:30:00.000000', '2021-11-02', 1, '2021-11-02 06:54:51');

'YYYY-MM-DD'
'hh:mm:ss[.fraction]'