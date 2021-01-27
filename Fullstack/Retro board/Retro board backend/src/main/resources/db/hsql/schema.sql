drop table IF EXISTS auth_user;
create TABLE auth_user (
    auth_user_id INT NOT NULL AUTO_INCREMENT,
    is_active bit,
    is_non_locked bit,
    name varchar,
    note varchar,
    password varchar,
    username varchar
);

drop table IF EXISTS auth_role;
create TABLE auth_role (
    ID  INT NOT NULL AUTO_INCREMENT,
    ROLE VARCHAR,
    AUTH_USER_ID int,
    FOREIGN KEY (AUTH_USER_ID) REFERENCES auth_user(auth_user_id)
);

drop table IF EXISTS board;
create TABLE board (
    ID  INT NOT NULL AUTO_INCREMENT,
    DATE_CREATED date,
    NAME VARCHAR,
    AUTH_USER_ID int,
    FOREIGN KEY (AUTH_USER_ID) REFERENCES auth_user(auth_user_id)
);
