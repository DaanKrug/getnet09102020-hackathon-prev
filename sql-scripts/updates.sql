alter table product add column 
`a8_disponibility` int(10) UNSIGNED NOT NULL DEFAULT 0
after a7_categoryname;

alter table product add column 
`a9_deliverytime` int(2) UNSIGNED NOT NULL DEFAULT 0
after a8_disponibility;

alter table product add column 
`a10_sellprice` decimal(10,2) UNSIGNED NOT NULL DEFAULT 0
after a9_deliverytime;