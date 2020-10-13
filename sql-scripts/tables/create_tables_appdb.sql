
CREATE TABLE  `user` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `category` varchar(15) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'admin',
  `permissions` text COLLATE utf8mb4_general_ci DEFAULT NULL,
  `active` tinyint(1) NOT NULL DEFAULT 1,
  `confirmation_code` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `ownerId` bigint(20) UNSIGNED DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `user_email_unique` (`email`),
  ADD KEY `user_ownerid_index` (`ownerId`);

ALTER TABLE `user`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
  
 

 
CREATE TABLE  `file` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(30) COLLATE utf8mb4_general_ci NOT NULL,
  `link` text COLLATE utf8mb4_general_ci NOT NULL,
  `ownerId` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `file`
  ADD PRIMARY KEY (`id`),
  ADD KEY `file_name_index` (`name`),
  ADD KEY `file_ownerid_index` (`ownerId`);

ALTER TABLE `file`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
  
  


CREATE TABLE  `image` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `link` text COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  `forPublic` tinyint(1) NOT NULL DEFAULT 0,
  `ownerId` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

ALTER TABLE `image`
  ADD PRIMARY KEY (`id`),
  ADD KEY `image_name_index` (`name`),
  ADD KEY `image_ownerid_index` (`ownerId`);

ALTER TABLE `image`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

  
  
  
CREATE TABLE `ccategoryproduct` (
     `id` bigint(20) UNSIGNED NOT NULL,
     `a1_name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
     `ownerId` bigint(20) UNSIGNED NOT NULL,
     `created_at` timestamp NULL DEFAULT NULL,
     `updated_at` timestamp NULL DEFAULT NULL,
     `deleted_at` timestamp NULL DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
   
ALTER TABLE `ccategoryproduct` ADD PRIMARY KEY (`id`);
   
ALTER TABLE `ccategoryproduct` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;




CREATE TABLE `product` (
     `id` bigint(20) UNSIGNED NOT NULL,
     `a2_name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
     `a3_description` text COLLATE utf8mb4_general_ci NOT NULL,
     `a4_imageid` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
     `a5_imagelink` text COLLATE utf8mb4_general_ci DEFAULT NULL,
     `a6_categoryid` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
     `a7_categoryname` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
     `ownerId` bigint(20) UNSIGNED NOT NULL,
     `created_at` timestamp NULL DEFAULT NULL,
     `updated_at` timestamp NULL DEFAULT NULL,
     `deleted_at` timestamp NULL DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
   
ALTER TABLE `product` ADD PRIMARY KEY (`id`);
   
ALTER TABLE `product` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;


alter table fixedcost add column
`a3_qtde` int(10) UNSIGNED NOT NULL DEFAULT 0
after a2_value;

CREATE TABLE `fixedcost` (
     `id` bigint(20) UNSIGNED NOT NULL,
     `a1_name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
     `a2_value` decimal(10,2) UNSIGNED NOT NULL DEFAULT 0,
     `ownerId` bigint(20) UNSIGNED NOT NULL,
     `created_at` timestamp NULL DEFAULT NULL,
     `updated_at` timestamp NULL DEFAULT NULL,
     `deleted_at` timestamp NULL DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
   
ALTER TABLE `fixedcost` ADD PRIMARY KEY (`id`);
   
ALTER TABLE `fixedcost` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;




CREATE TABLE `supply` (
     `id` bigint(20) UNSIGNED NOT NULL,
     `a1_name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
     `a2_value` decimal(10,2) UNSIGNED NOT NULL DEFAULT 0,
     `a3_un` varchar(10) COLLATE utf8mb4_general_ci NOT NULL,
     `ownerId` bigint(20) UNSIGNED NOT NULL,
     `created_at` timestamp NULL DEFAULT NULL,
     `updated_at` timestamp NULL DEFAULT NULL,
     `deleted_at` timestamp NULL DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
   
ALTER TABLE `supply` ADD PRIMARY KEY (`id`);
   
ALTER TABLE `supply` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;




CREATE TABLE `supplyproduct` (
     `id` bigint(20) UNSIGNED NOT NULL,
     `a1_supplyid` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
     `a2_supplyname` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
     `a3_productid` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
     `a4_amount` decimal(10,2) UNSIGNED NOT NULL DEFAULT 0,
     `ownerId` bigint(20) UNSIGNED NOT NULL,
     `created_at` timestamp NULL DEFAULT NULL,
     `updated_at` timestamp NULL DEFAULT NULL,
     `deleted_at` timestamp NULL DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
   
ALTER TABLE `supplyproduct` ADD PRIMARY KEY (`id`);
   
ALTER TABLE `supplyproduct` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;




CREATE TABLE `handcash` (
     `id` bigint(20) UNSIGNED NOT NULL,
     `a1_name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
     `a2_simulated` tinyint(1) NOT NULL DEFAULT 0,
     `a3_reportdata` text COLLATE utf8mb4_general_ci NOT NULL,
     `ownerId` bigint(20) UNSIGNED NOT NULL,
     `created_at` timestamp NULL DEFAULT NULL,
     `updated_at` timestamp NULL DEFAULT NULL,
     `deleted_at` timestamp NULL DEFAULT NULL
   ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
   
ALTER TABLE `handcash` ADD PRIMARY KEY (`id`);
   
ALTER TABLE `handcash` MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;
