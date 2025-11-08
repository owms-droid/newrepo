-- 1. Insert sample accounts
INSERT INTO "account" (account_firstname, account_lastname, account_email, account_password)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

-- 2. Modify the first account to be an Admin
UPDATE "account"
SET account_type = 'Admin'
WHERE account_id = 1;

-- 3. Delete Tony Stark from records
DELETE FROM account WHERE account_id = 1;

-- 4. Modify GM Hummer record description
UPDATE "inventory"
SET inv_description = REPLACE(inv_description, 'the small interiors', 'a huge interior')
WHERE inv_id = 10;

-- 5. Inner join to get make and model with "Sport" category
SELECT inv_make, inv_model, classification.classification_name FROM inventory 
INNER JOIN classification ON inventory.classification_id = classification.classification_id
WHERE inventory.classification_id = 2;

-- 6. Update all records in inventory table to modify the inv_images and inv_thumbnails
UPDATE "inventory"
SET
	inv_image = REPLACE(inv_image, '/images', '/images/vehicles'),
  	inv_thumbnail = REPLACE(inv_thumbnail, '/images', '/images/vehicles');