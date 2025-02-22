use skin_care_db;


CREATE TABLE Login (
id int auto_increment primary key,
name VARCHAR(255) not null,
password int not null,
Email VARCHAR(255),
ForgotPassword VARCHAR(255)
);



CREATE TABLE SkinCategory (
Description VARCHAR(255) not null ,
skintype VARCHAR(255) not null,
skinissue VARCHAR(255) not null
);

CREATE TABLE Checkout (
addproduct   int not null,
buyproduct int not null
);
CREATE TABLE Payment (
    payment_amount INT NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    payment_status VARCHAR(255) NOT NULL,
    Products_id INT NOT NULL, -- Foreign key column for Products
    userid INT, -- Foreign key column for User
    CONSTRAINT fk_Products FOREIGN KEY (Products_id) REFERENCES Products (Products_id) ON DELETE CASCADE,
    CONSTRAINT fk_user FOREIGN KEY (userid) REFERENCES User (id) ON DELETE CASCADE
);


CREATE TABLE Order_table(
order_id int primary key ,
order_status VARCHAR(255) not null,
Order_details VARCHAR(255) not null,
order_cancel VARCHAR(255) not null,
Product_id int,
 CONSTRAINT fk_products foreign key (products_id) REFERENCES products(id) ON DELETE CASCADE
);

CREATE TABLE Products (
  Products_id INT AUTO_INCREMENT PRIMARY KEY, -- This will be the foreign key reference
  name VARCHAR(255) NOT NULL,
  description TEXT,
  price DECIMAL(10, 2),
  skinType VARCHAR(255) NOT NULL,
  imageUrl TEXT,
  Review TEXT,
  Rating INT
);
CREATE TABLE User (
  id INT AUTO_INCREMENT PRIMARY KEY, -- Primary key for User table
  name VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL, -- Changed `password` to VARCHAR for consistency
  Email VARCHAR(255),
  ForgotPassword VARCHAR(255),
  phone_number Int not null
);
CREATE TABLE Payment (
  payment_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique primary key for Payment table
  payment_amount INT NOT NULL,
  payment_method VARCHAR(255) NOT NULL,
  payment_status VARCHAR(255) NOT NULL,
  Products_id INT NOT NULL, -- Foreign key referencing Products table
  userid INT, -- Foreign key referencing User table
  CONSTRAINT fk_Products FOREIGN KEY (Products_id) REFERENCES Products (Products_id) ON DELETE CASCADE,
  CONSTRAINT fk_user FOREIGN KEY (userid) REFERENCES User (id) ON DELETE CASCADE
);
CREATE TABLE SignUp (
  user_id INT AUTO_INCREMENT PRIMARY KEY, -- Unique identifier for each user
  username VARCHAR(255) NOT NULL, -- Username chosen by the user
  email VARCHAR(255) NOT NULL UNIQUE, -- User's email (must be unique)
  password VARCHAR(255) NOT NULL, -- Encrypted password
  phone_number VARCHAR(15), -- Optional phone number
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Auto record the sign-up time
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Auto update timestamp on record change
);
GRANT ALL PRIVILEGES ON skin_care_db.* TO 'root'@'localhost';
FLUSH PRIVILEGES;
SELECT * FROM users ;














