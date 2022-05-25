COMMIT;
ROLLBACK;

SELECT * 
FROM member_tb;
SELECT * 
FROM board_tb;

INSERT INTO member_tb(M_ID, M_PASSWORD, M_NAME, M_EMAIL, M_GRADE, M_POINT, M_DELETE_STATE)
VALUES ('', '', '', '', 'D', 0);

INSERT INTO board_tb(M_NUMBER_FK, B_TITLE, B_CONTENT, B_WRITE_TIME, B_DELETE_STATE, B_ATTACH_FILE_INFO)
VALUES (11, '제목', '내용', now(), 'N', '없음');

alter table board_tb add FOREIGN KEY(M_NUMBER_PK) REFERENCES member_tb(M_NUMBER_PK);

ALTER TABLE member_tb AUTO_INCREMENT = 1;

TRUNCATE member_tb;
TRUNCATE board_tb;

set FOREIGN_KEY_CHECKS = 0;
set FOREIGN_KEY_CHECKS = 1;

SELECT *
FROM board_tb
WHERE b_delete_state != 'Y';