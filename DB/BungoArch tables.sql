-- Database creation
CREATE DATABASE BungoArch;
USE BungoArch;

-- User details table
CREATE TABLE USER_DETAILS_TBL(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    f_name VARCHAR(50) NOT NULL DEFAULT 'User',
    l_name VARCHAR(50) DEFAULT 'Name',
    employee_number VARCHAR(50) UNIQUE,
    date_of_birth DATETIME,
    date_of_reg DATETIME DEFAULT NOW(),
    gender VARCHAR(1),
    national_id VARCHAR(50) UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    Region VARCHAR(100)
);

-- Add phone number and registration status fields
ALTER TABLE USER_DETAILS_TBL ADD phone_number VARCHAR(15);
ALTER TABLE USER_DETAILS_TBL ADD regStatus BOOLEAN DEFAULT FALSE;

-- Department table
CREATE TABLE DEPARTMENT_TBL(
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(100) NOT NULL UNIQUE,
    department_category VARCHAR(50) NOT NULL DEFAULT 'ict',
    department_description VARCHAR(255)
);

-- Insert a department record
INSERT INTO DEPARTMENT_TBL(department_name, department_category)
VALUES ('REVENUE', 'TAX COLLECTORS');

-- User login table
CREATE TABLE USER_LOGIN_TBL(
    reference_code INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    department_id INT NOT NULL,
    user_name VARCHAR(50) NOT NULL UNIQUE,
    user_password VARCHAR(100) DEFAULT 'user@123',
    CONSTRAINT user_login_to_users_user_id_fk FOREIGN KEY(user_id) REFERENCES USER_DETAILS_TBL(user_id),
    CONSTRAINT userLogin_to_department_department_id_fk FOREIGN KEY(department_id) REFERENCES DEPARTMENT_TBL(department_id)
);

-- User login logs table
CREATE TABLE USER_LOGIN_LOGS_TBL(
    login_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    time_logged_in DATETIME DEFAULT NOW(),
    is_logged_out BOOLEAN DEFAULT FALSE,
    time_logged_out DATETIME,
    CONSTRAINT user_login_to_user_details_user_id_fk FOREIGN KEY(user_id) REFERENCES USER_DETAILS_TBL(user_id)
);

-- Folder table
CREATE TABLE FOLDERS(
    folder_Id INT AUTO_INCREMENT PRIMARY KEY,
    folder_name VARCHAR(100) NOT NULL UNIQUE,
    folder_type VARCHAR(100) DEFAULT 'general',
    date_created DATETIME DEFAULT NOW(),
    is_active BOOLEAN DEFAULT TRUE,
    max_numberOf_items INT DEFAULT 1000,
    color_label VARCHAR(10) DEFAULT 'orange'
);

-- Modify folders table
ALTER TABLE FOLDERS ADD can_be_deleated BOOLEAN DEFAULT TRUE;
ALTER TABLE FOLDERS ADD owner_id INT,
    ADD CONSTRAINT folders_user_owner_id FOREIGN KEY(owner_id) REFERENCES USER_DETAILS_TBL(user_id);

-- File table
CREATE TABLE FILES_TBL(
    file_id INT AUTO_INCREMENT PRIMARY KEY,
    folder_id INT NOT NULL,
    file_name VARCHAR(100) NOT NULL,
    file_pseudo_name VARCHAR(150) NOT NULL UNIQUE,
    file_type VARCHAR(100),
    file_format VARCHAR(100),
    file_description TEXT,
    file_size INT,
    file_path_directory VARCHAR(1024),
    date_of_upload DATETIME DEFAULT NOW(),
    uploader_id INT NOT NULL,
    file_access_level INT DEFAULT 1,
    CONSTRAINT folder_file_folder_id_fk FOREIGN KEY(folder_id) REFERENCES FOLDERS(folder_id),
    CONSTRAINT file_user_userId_fk FOREIGN KEY(uploader_id) REFERENCES USER_DETAILS_TBL(user_id)
);

-- Modify file format column
ALTER TABLE files_tbl CHANGE file_format file_extension VARCHAR(100);
ALTER TABLE files_tbl ADD owner_id INT,
    ADD CONSTRAINT files_user_owner_id FOREIGN KEY(owner_id) REFERENCES USER_DETAILS_TBL(user_id);

-- File sharing table
CREATE TABLE FILE_SHARING_TBL(
    sharing_id INT AUTO_INCREMENT PRIMARY KEY,
    file_id INT NOT NULL,
    receiver_id INT NOT NULL,
    sender_id INT NOT NULL,
    date_of_share DATETIME DEFAULT NOW(),
    sender_comments TEXT,
    receiver_comments TEXT,
    sharing_status VARCHAR(50),
    CONSTRAINT fileSharing_files_file_id FOREIGN KEY(file_id) REFERENCES FILES_TBL(file_id),
    CONSTRAINT userDetails_receiver_id FOREIGN KEY(receiver_id) REFERENCES USER_DETAILS_TBL(user_id),
    CONSTRAINT userDetails_sender_id FOREIGN KEY(sender_id) REFERENCES USER_DETAILS_TBL(user_id)
);

-- File download table
CREATE TABLE FILE_DOWNLOAD(
    download_id INT AUTO_INCREMENT PRIMARY KEY,
    file_id INT NOT NULL,
    downloader_id INT NOT NULL,
    host_ip VARCHAR(100),
    host_name VARCHAR(200),
    time_of_download DATETIME DEFAULT NOW(),
    CONSTRAINT files_file_id FOREIGN KEY(file_id) REFERENCES FILES_TBL(file_id),
    CONSTRAINT userDetails_downloader_id FOREIGN KEY(downloader_id) REFERENCES USER_DETAILS_TBL(user_id)
);

-- Notifications table
CREATE TABLE NOTIFICATIONS(
    n_id INT AUTO_INCREMENT PRIMARY KEY,
    n_name VARCHAR(100),
    n_type VARCHAR(100) DEFAULT 'system_notification_info',
    n_sent_to INT,
    n_time_sent DATETIME DEFAULT NOW(),
    n_status_read BOOLEAN DEFAULT FALSE,
    CONSTRAINT notification_user_id FOREIGN KEY(n_sent_to) REFERENCES USER_DETAILS_TBL(user_id)
);

-- Add message and tags to notifications
ALTER TABLE NOTIFICATIONS ADD n_message TEXT;
ALTER TABLE NOTIFICATIONS ADD n_id_tags INT,
    ADD CONSTRAINT n_id_tagsShare_id FOREIGN KEY(n_id_tags) REFERENCES FILE_SHARING_TBL(sharing_id);

-- User sessions table
CREATE TABLE USER_SESSIONS_TBL(
    session_id VARCHAR(255) PRIMARY KEY,
    user_id INT NOT NULL,
    login_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    expiration_time DATETIME,
    user_agent VARCHAR(255),
    ip_address VARCHAR(45),
    FOREIGN KEY (user_id) REFERENCES USER_DETAILS_TBL(user_id)
);
ALTER TABLE USER_SESSIONS_TBL ADD host_name varchar(250);
ALTER TABLE USER_DETAILS_TBL ADD user_type varchar(10) default "#us_01#";