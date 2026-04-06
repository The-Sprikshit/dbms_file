
const CHAPTERS = [
  {
    title: "Data Definition Language (DDL) Commands",
    tag: "DDL",
    tagColor: "#6C63FF",
    tagLight: "#EEF0FF",
    count: 50,
    questions: [
      {q:"Create a table called STUDENT with columns: SID (NUMBER), SNAME (VARCHAR2(30)), AGE (NUMBER), COURSE (VARCHAR2(20))", a:`CREATE TABLE STUDENT (\n    SID NUMBER,\n    SNAME VARCHAR2(30),\n    AGE NUMBER,\n    COURSE VARCHAR2(20)\n);`},
      {q:"Create a table EMPLOYEE with columns: EID NUMBER, ENAME VARCHAR2(40), SALARY NUMBER(8,2), DEPTNO NUMBER", a:`CREATE TABLE EMPLOYEE (\n    EID NUMBER,\n    ENAME VARCHAR2(40),\n    SALARY NUMBER(8,2),\n    DEPTNO NUMBER\n);`},
      {q:"Create a table DEPARTMENT with columns: DEPTNO NUMBER, DNAME VARCHAR2(30), LOCATION VARCHAR2(30)", a:`CREATE TABLE DEPARTMENT (\n    DEPTNO NUMBER,\n    DNAME VARCHAR2(30),\n    LOCATION VARCHAR2(30)\n);`},
      {q:"Create a table BOOK with columns: BOOK_ID NUMBER, TITLE VARCHAR2(50), AUTHOR VARCHAR2(40), PRICE NUMBER", a:`CREATE TABLE BOOK (\n    BOOK_ID NUMBER,\n    TITLE VARCHAR2(50),\n    AUTHOR VARCHAR2(40),\n    PRICE NUMBER\n);`},
      {q:"Create a table COURSE with columns: CID NUMBER, CNAME VARCHAR2(40), DURATION NUMBER", a:`CREATE TABLE COURSE (\n    CID NUMBER,\n    CNAME VARCHAR2(40),\n    DURATION NUMBER\n);`},
      {q:"Create a table PROJECT with columns: PID NUMBER, PNAME VARCHAR2(50), START_DATE DATE, END_DATE DATE", a:`CREATE TABLE PROJECT (\n    PID NUMBER,\n    PNAME VARCHAR2(50),\n    START_DATE DATE,\n    END_DATE DATE\n);`},
      {q:"Create a table CUSTOMER with columns: CID NUMBER, CNAME VARCHAR2(40), CITY VARCHAR2(30), PHONE NUMBER", a:`CREATE TABLE CUSTOMER (\n    CID NUMBER,\n    CNAME VARCHAR2(40),\n    CITY VARCHAR2(30),\n    PHONE NUMBER\n);`},
      {q:"Create a table SALES with columns: SALE_ID NUMBER, PRODUCT_NAME VARCHAR2(50), QUANTITY NUMBER, PRICE NUMBER", a:`CREATE TABLE SALES (\n    SALE_ID NUMBER,\n    PRODUCT_NAME VARCHAR2(50),\n    QUANTITY NUMBER,\n    PRICE NUMBER\n);`},
      {q:"Create a table EMP_COPY from the existing EMP table (structure only)", a:`CREATE TABLE EMP_COPY AS \nSELECT * FROM EMP \nWHERE 1=0;`},
      {q:"Create a table EMP_BACKUP from EMP including data", a:`CREATE TABLE EMP_BACKUP AS \nSELECT * FROM EMP;`},
      {q:"Add a column EMAIL VARCHAR2(50) to the STUDENT table", a:`ALTER TABLE STUDENT \nADD EMAIL VARCHAR2(50);`},
      {q:"Add a column PHONE NUMBER to the EMPLOYEE table", a:`ALTER TABLE EMPLOYEE \nADD PHONE NUMBER;`},
      {q:"Modify the column SNAME in STUDENT table to VARCHAR2(50)", a:`ALTER TABLE STUDENT \nMODIFY SNAME VARCHAR2(50);`},
      {q:"Modify the column SALARY in EMPLOYEE table to NUMBER(10,2)", a:`ALTER TABLE EMPLOYEE \nMODIFY SALARY NUMBER(10,2);`},
      {q:"Add two columns CITY VARCHAR2(30) and PINCODE NUMBER to CUSTOMER table", a:`ALTER TABLE CUSTOMER \nADD (CITY VARCHAR2(30), PINCODE NUMBER);`},
      {q:"Rename the column SNAME to STUDENT_NAME in STUDENT table", a:`ALTER TABLE STUDENT \nRENAME COLUMN SNAME TO STUDENT_NAME;`},
      {q:"Drop the column AGE from STUDENT table", a:`ALTER TABLE STUDENT \nDROP COLUMN AGE;`},
      {q:"Set the column SALARY in EMPLOYEE table to NOT NULL", a:`ALTER TABLE EMPLOYEE \nMODIFY SALARY NOT NULL;`},
      {q:"Increase the size of column TITLE in BOOK table to VARCHAR2(100)", a:`ALTER TABLE BOOK \nMODIFY TITLE VARCHAR2(100);`},
      {q:"Add a column MANAGER_ID NUMBER to EMPLOYEE table", a:`ALTER TABLE EMPLOYEE \nADD MANAGER_ID NUMBER;`},
      {q:"Drop the table STUDENT", a:`DROP TABLE STUDENT;`},
      {q:"Drop the table CUSTOMER from the database", a:`DROP TABLE CUSTOMER;`},
      {q:"Drop the table PROJECT permanently", a:`DROP TABLE PROJECT PURGE;`},
      {q:"Remove the table SALES", a:`DROP TABLE SALES;`},
      {q:"Drop the table COURSE", a:`DROP TABLE COURSE;`},
      {q:"Rename the table STUDENT to STUDENTS", a:`RENAME STUDENT TO STUDENTS;`},
      {q:"Rename the table EMPLOYEE to EMP_MASTER", a:`RENAME EMPLOYEE TO EMP_MASTER;`},
      {q:"Rename the table CUSTOMER to CLIENT", a:`RENAME CUSTOMER TO CLIENT;`},
      {q:"Rename the table BOOK to BOOK_DETAILS", a:`RENAME BOOK TO BOOK_DETAILS;`},
      {q:"Rename the table PROJECT to PROJECT_INFO", a:`RENAME PROJECT TO PROJECT_INFO;`},
      {q:"Remove all records from the STUDENT table", a:`TRUNCATE TABLE STUDENT;`},
      {q:"Delete all rows from EMPLOYEE table using TRUNCATE", a:`TRUNCATE TABLE EMPLOYEE;`},
      {q:"Empty the CUSTOMER table quickly", a:`TRUNCATE TABLE CUSTOMER;`},
      {q:"Remove all data from SALES table but keep structure", a:`TRUNCATE TABLE SALES;`},
      {q:"Clear the PROJECT table", a:`TRUNCATE TABLE PROJECT;`},
      {q:"Create a table TRAINING with columns TID, TNAME, DURATION", a:`CREATE TABLE TRAINING (\n    TID NUMBER,\n    TNAME VARCHAR2(50),\n    DURATION NUMBER\n);`},
      {q:"Add column TRAINER_NAME VARCHAR2(40) to TRAINING", a:`ALTER TABLE TRAINING \nADD TRAINER_NAME VARCHAR2(40);`},
      {q:"Modify TNAME column size to VARCHAR2(60)", a:`ALTER TABLE TRAINING \nMODIFY TNAME VARCHAR2(60);`},
      {q:"Rename the TRAINING table to TRAINING_PROGRAM", a:`RENAME TRAINING TO TRAINING_PROGRAM;`},
      {q:"Truncate the TRAINING_PROGRAM table", a:`TRUNCATE TABLE TRAINING_PROGRAM;`},
      {q:"Drop the TRAINING_PROGRAM table", a:`DROP TABLE TRAINING_PROGRAM;`},
      {q:"Create EMP_PROJECT, increase ROLE size, and add STATUS column", a:`-- Step 1: Create\nCREATE TABLE EMP_PROJECT (\n    EMP_ID NUMBER,\n    PROJECT_ID NUMBER,\n    START_DATE DATE,\n    END_DATE DATE,\n    ROLE VARCHAR2(30)\n);\n\n-- Step 2: Modify and Add\nALTER TABLE EMP_PROJECT \nMODIFY ROLE VARCHAR2(50);\n\nALTER TABLE EMP_PROJECT \nADD STATUS VARCHAR2(20);`},
      {q:"Create PRODUCT table, rename PNAME, and change PRICE datatype", a:`CREATE TABLE PRODUCT (\n    PID NUMBER,\n    PNAME VARCHAR2(50),\n    PRICE NUMBER,\n    CATEGORY VARCHAR2(30)\n);\n\nALTER TABLE PRODUCT \nRENAME COLUMN PNAME TO PRODUCT_NAME;\n\nALTER TABLE PRODUCT \nMODIFY PRICE NUMBER(10,2);`},
      {q:"Create ORDERS, add STATUS, drop then re-add TOTAL_AMOUNT", a:`CREATE TABLE ORDERS (\n    ORDER_ID NUMBER,\n    CUSTOMER_ID NUMBER,\n    ORDER_DATE DATE,\n    TOTAL_AMOUNT NUMBER\n);\n\nALTER TABLE ORDERS ADD STATUS VARCHAR2(20);\nALTER TABLE ORDERS DROP COLUMN TOTAL_AMOUNT;\nALTER TABLE ORDERS ADD TOTAL_AMOUNT NUMBER(10,2);`},
      {q:"Create EMP_TEMP (salary > 2000), rename, truncate, and drop", a:`CREATE TABLE EMP_TEMP AS \nSELECT * FROM EMP WHERE SALARY > 2000;\n\nRENAME EMP_TEMP TO EMP_HIGH_SALARY;\nTRUNCATE TABLE EMP_HIGH_SALARY;\nDROP TABLE EMP_HIGH_SALARY;`},
      {q:"Create STUDENT_RECORD, add GRADE, modify MARKS, rename COURSE", a:`CREATE TABLE STUDENT_RECORD (\n    SID NUMBER,\n    SNAME VARCHAR2(40),\n    COURSE VARCHAR2(30),\n    MARKS NUMBER\n);\n\nALTER TABLE STUDENT_RECORD ADD GRADE CHAR(1);\nALTER TABLE STUDENT_RECORD MODIFY MARKS NUMBER(5,2);\nALTER TABLE STUDENT_RECORD RENAME COLUMN COURSE TO COURSE_NAME;`},
      {q:"Create EMP_ARCHIVE (structure only), add date, and rename", a:`CREATE TABLE EMP_ARCHIVE AS \nSELECT * FROM EMP WHERE 1=0;\n\nALTER TABLE EMP_ARCHIVE ADD ARCHIVE_DATE DATE;\nRENAME EMP_ARCHIVE TO EMP_HISTORY;`},
      {q:"Create DEPT_BACKUP with data, drop LOC, and add LOCATION", a:`CREATE TABLE DEPT_BACKUP AS \nSELECT * FROM DEPT;\n\nALTER TABLE DEPT_BACKUP DROP COLUMN LOC;\nALTER TABLE DEPT_BACKUP ADD LOCATION VARCHAR2(40);`},
      {q:"Create SALES_DATA, add REGION, modify AMOUNT, and rename table", a:`CREATE TABLE SALES_DATA (\n    SALE_ID NUMBER,\n    PRODUCT_ID NUMBER,\n    SALE_DATE DATE,\n    AMOUNT NUMBER\n);\n\nALTER TABLE SALES_DATA ADD REGION VARCHAR2(30);\nALTER TABLE SALES_DATA MODIFY AMOUNT NUMBER(12,2);\nRENAME SALES_DATA TO REGIONAL_SALES_DATA;`},
      {q:"Create LOG_TABLE, truncate it, rename to SYSTEM_LOG, and drop permanently", a:`CREATE TABLE LOG_TABLE (\n    LOG_ID NUMBER,\n    USER_NAME VARCHAR2(30),\n    ACTION VARCHAR2(50),\n    LOG_DATE DATE\n);\n\nTRUNCATE TABLE LOG_TABLE;\nRENAME LOG_TABLE TO SYSTEM_LOG;\nDROP TABLE SYSTEM_LOG PURGE;`},
    ]
  },
  {
    title: "Data Manipulation Language (DML) Commands",
    tag: "DML",
    tagColor: "#FF6584",
    tagLight: "#FFEFF3",
    count: 30,
    questions: [
      {q:"Insert a record into STUDENT table: SID=101, SNAME='RAHUL', AGE=20, COURSE='MCA'", a:`INSERT INTO STUDENT (SID, SNAME, AGE, COURSE) \nVALUES (101, 'RAHUL', 20, 'MCA');`},
      {q:"Insert a record into EMPLOYEE table: EID=201, ENAME='ANITA', SALARY=45000, DEPTNO=10", a:`INSERT INTO EMPLOYEE (EID, ENAME, SALARY, DEPTNO) \nVALUES (201, 'ANITA', 45000, 10);`},
      {q:"Insert a new department: DEPTNO=50, DNAME='TRAINING', LOC='DELHI'", a:`INSERT INTO DEPT (DEPTNO, DNAME, LOC) \nVALUES (50, 'TRAINING', 'DELHI');`},
      {q:"Insert a record into BOOK table with only BOOK_ID, TITLE, and PRICE", a:`INSERT INTO BOOK (BOOK_ID, TITLE, PRICE) \nVALUES (501, 'SQL Guide', 299.99);`},
      {q:"Insert multiple rows into COURSE table", a:`INSERT INTO COURSE (CID, CNAME) \nVALUES \n(1, 'BCA'),\n(2, 'MCA'),\n(3, 'B.Tech');`},
      {q:"Insert data into EMP_COPY table from the EMP table", a:`INSERT INTO EMP_COPY \nSELECT * FROM EMP;`},
      {q:"Insert employees from EMP whose salary is greater than 3000 into EMP_HIGH_SAL", a:`INSERT INTO EMP_HIGH_SAL \nSELECT * FROM EMP \nWHERE SALARY > 3000;`},
      {q:"Insert employees hired after 1981 into EMP_NEW_HIRE", a:`INSERT INTO EMP_NEW_HIRE \nSELECT * FROM EMP \nWHERE HIREDATE > '1981-12-31';`},
      {q:"Insert department numbers and names from DEPT into DEPT_BACKUP", a:`INSERT INTO DEPT_BACKUP (DEPTNO, DNAME) \nSELECT DEPTNO, DNAME FROM DEPT;`},
      {q:"Insert employee names and salaries into EMP_SALARY_RECORD", a:`INSERT INTO EMP_SALARY_RECORD (ENAME, SALARY) \nSELECT ENAME, SALARY FROM EMP;`},
      {q:"Update the salary of employee SMITH to 2000", a:`UPDATE EMP \nSET SAL = 2000 \nWHERE ENAME = 'SMITH';`},
      {q:"Increase salary of all employees by 10%", a:`UPDATE EMP \nSET SAL = SAL * 1.10;`},
      {q:"Update the department number of employee ALLEN to 20", a:`UPDATE EMP \nSET DEPTNO = 20 \nWHERE ENAME = 'ALLEN';`},
      {q:"Update commission of SALESMAN to 500", a:`UPDATE EMP \nSET COMM = 500 \nWHERE JOB = 'SALESMAN';`},
      {q:"Update job of employee MILLER to MANAGER", a:`UPDATE EMP \nSET JOB = 'MANAGER' \nWHERE ENAME = 'MILLER';`},
      {q:"Increase salary of employees in department 10 by 20%", a:`UPDATE EMP \nSET SAL = SAL * 1.20 \nWHERE DEPTNO = 10;`},
      {q:"Update salary of employees whose job is CLERK to 1500", a:`UPDATE EMP \nSET SAL = 1500 \nWHERE JOB = 'CLERK';`},
      {q:"Update location of department 30 to MUMBAI", a:`UPDATE DEPT \nSET LOC = 'MUMBAI' \nWHERE DEPTNO = 30;`},
      {q:"Update commission of employees who have NULL commission to 100", a:`UPDATE EMP \nSET COMM = 100 \nWHERE COMM IS NULL;`},
      {q:"Update salary of employees who earn less than average salary (add 500)", a:`UPDATE EMP \nSET SAL = SAL + 500\nWHERE SAL < (SELECT AVG(SAL) FROM EMP);`},
      {q:"Delete employee SMITH from EMP table", a:`DELETE FROM EMP \nWHERE ENAME = 'SMITH';`},
      {q:"Delete all employees working in department 30", a:`DELETE FROM EMP \nWHERE DEPTNO = 30;`},
      {q:"Delete employees whose salary is less than 1000", a:`DELETE FROM EMP \nWHERE SALARY < 1000;`},
      {q:"Delete employees hired before 1981", a:`DELETE FROM EMP \nWHERE HIREDATE < '1981-01-01';`},
      {q:"Delete employees who do not receive commission", a:`DELETE FROM EMP \nWHERE COMM IS NULL OR COMM = 0;`},
      {q:"Delete departments located in CHICAGO", a:`DELETE FROM DEPT \nWHERE LOC = 'CHICAGO';`},
      {q:"Delete employees whose job is CLERK", a:`DELETE FROM EMP \nWHERE JOB = 'CLERK';`},
      {q:"Delete employees earning the minimum salary", a:`DELETE FROM EMP \nWHERE SALARY = (SELECT MIN(SALARY) FROM EMP);`},
      {q:"Delete employees working in departments located in NEW YORK", a:`DELETE FROM EMP \nWHERE DEPTNO IN (SELECT DEPTNO FROM DEPT WHERE LOC = 'NEW YORK');`},
      {q:"Delete employees whose manager number is NULL", a:`DELETE FROM EMP \nWHERE MGR IS NULL;`},
    ]
  },
  {
    title: "Interview Questions: DML Commands",
    tag: "Interview",
    tagColor: "#FF9671",
    tagLight: "#FFF0EA",
    count: 20,
    questions: [
      {q:"Delete employees earning less than the average salary", a:`DELETE FROM EMP \nWHERE SALARY < (SELECT AVG(SALARY) FROM EMP);`},
      {q:"Delete employees whose department is located in NEW YORK", a:`DELETE FROM EMP \nWHERE DEPTNO IN (SELECT DEPTNO FROM DEPT WHERE LOC = 'NEW YORK');`},
      {q:"Delete employees working in departments with less than 3 employees", a:`DELETE FROM EMP \nWHERE DEPTNO IN (\n    SELECT DEPTNO FROM EMP \n    GROUP BY DEPTNO \n    HAVING COUNT(*) < 3\n);`},
      {q:"Delete employees who earn less than all MANAGERS", a:`DELETE FROM EMP \nWHERE SALARY < ALL (SELECT SALARY FROM EMP WHERE JOB = 'MANAGER');`},
      {q:"Delete employees whose salary equals the minimum salary of their department", a:`DELETE FROM EMP E1\nWHERE SALARY = (\n    SELECT MIN(SALARY) \n    FROM EMP E2 \n    WHERE E1.DEPTNO = E2.DEPTNO\n);`},
      {q:"Increase salary by 15% for employees earning less than department average", a:`UPDATE EMP E1\nSET SALARY = SALARY * 1.15\nWHERE SALARY < (\n    SELECT AVG(SALARY) \n    FROM EMP E2 \n    WHERE E1.DEPTNO = E2.DEPTNO\n);`},
      {q:"Delete employees who are not managers but earn more than at least one manager", a:`DELETE FROM EMP \nWHERE JOB != 'MANAGER' \nAND SALARY > ANY (SELECT SALARY FROM EMP WHERE JOB = 'MANAGER');`},
      {q:"Insert employees with highest salary from each department into TOP_EMP table", a:`INSERT INTO TOP_EMP\nSELECT * FROM EMP E1\nWHERE SALARY = (\n    SELECT MAX(SALARY) \n    FROM EMP E2 \n    WHERE E1.DEPTNO = E2.DEPTNO\n);`},
      {q:"Update commission to 10% of salary for SALESMAN", a:`UPDATE EMP \nSET COMM = SALARY * 0.10\nWHERE JOB = 'SALESMAN';`},
      {q:"Delete employees who earn the second highest salary", a:`DELETE FROM EMP \nWHERE SALARY = (\n    SELECT MAX(SALARY) \n    FROM EMP \n    WHERE SALARY < (SELECT MAX(SALARY) FROM EMP)\n);`},
      {q:"Update the salary of employee SMITH to 2000", a:`UPDATE EMP \nSET SALARY = 2000 \nWHERE ENAME = 'SMITH';`},
      {q:"Increase salary of all employees by 10%", a:`UPDATE EMP \nSET SALARY = SALARY * 1.10;`},
      {q:"Update the department number of employee ALLEN to 20", a:`UPDATE EMP \nSET DEPTNO = 20 \nWHERE ENAME = 'ALLEN';`},
      {q:"Update commission of SALESMAN to 500", a:`UPDATE EMP \nSET COMM = 500 \nWHERE JOB = 'SALESMAN';`},
      {q:"Update job of employee MILLER to MANAGER", a:`UPDATE EMP \nSET JOB = 'MANAGER' \nWHERE ENAME = 'MILLER';`},
      {q:"Increase salary of employees in department 10 by 20%", a:`UPDATE EMP \nSET SALARY = SALARY * 1.20 \nWHERE DEPTNO = 10;`},
      {q:"Update salary of employees whose job is CLERK to 1500", a:`UPDATE EMP \nSET SALARY = 1500 \nWHERE JOB = 'CLERK';`},
      {q:"Update location of department 30 to MUMBAI", a:`UPDATE DEPT \nSET LOC = 'MUMBAI' \nWHERE DEPTNO = 30;`},
      {q:"Update commission of employees who have NULL commission to 100", a:`UPDATE EMP \nSET COMM = 100 \nWHERE COMM IS NULL;`},
      {q:"Update salary of employees who earn less than average salary (add 500)", a:`UPDATE EMP \nSET SALARY = SALARY + 500 \nWHERE SALARY < (SELECT AVG(SALARY) FROM (SELECT SALARY FROM EMP) AS temp);`},
    ]
  },
  {
    title: "Data Query Language (DQL): SELECT",
    tag: "DQL",
    tagColor: "#43C59E",
    tagLight: "#E8FAF5",
    count: 10,
    questions: [
      {q:"Increase the salary by 10% for employees in DEPTNO 10", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET SALARY = SALARY * 1.10\nWHERE DEPTNO = 10;`},
      {q:"Update job of employee SCOTT to 'MANAGER'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET JOB = 'MANAGER' \nWHERE ENAME = 'SCOTT';`},
      {q:"Set commission to zero for employees having commission null", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET COMM = 0\nWHERE COMM IS NULL;`},
      {q:"Increase salary of all employees by 2000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET SALARY = SALARY + 2000;`},
      {q:"Set hiredate to current date for employees in department 20", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET HIREDATE = CURDATE()\nWHERE DEPTNO = 20;`},
      {q:"Change location of department 10 to NEW YORK", s:"DEPT (DEPTNO, DNAME, LOC)", a:`UPDATE DEPT \nSET LOC = 'NEW YORK'\nWHERE DEPTNO = 10;`},
      {q:"Increase salary of CLERK by 15%", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET SALARY = SALARY * 1.15\nWHERE JOB = 'CLERK';`},
      {q:"Change manager of employee ADAMS to CLARK's EMPNO", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET MGR = (SELECT EMPNO FROM (SELECT EMPNO FROM EMP WHERE ENAME = 'CLARK') as Temp)\nWHERE ENAME = 'ADAMS';`},
      {q:"Change department of employee FORD to 30", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET DEPTNO = 30\nWHERE ENAME = 'FORD';`},
      {q:"Set commission same as MILLER for employees in department 20", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`UPDATE EMP \nSET COMM = (SELECT COMM FROM (SELECT COMM FROM EMP WHERE ENAME = 'MILLER') as Temp)\nWHERE DEPTNO = 20;`},
    ]
  },
  {
    title: "WHERE Clause, ORDER BY and Alias",
    tag: "SELECT",
    tagColor: "#118AB2",
    tagLight: "#E6F4FA",
    count: 54,
    questions: [
      {q:"Display employees whose salary is greater than 3000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL > 3000;`},
      {q:"Display employees working in department 10", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE DEPTNO = 10;`},
      {q:"Display employees whose job is 'CLERK'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE JOB = 'CLERK';`},
      {q:"Display employees hired after 01-JAN-81", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE HIREDATE > '1981-01-01';`},
      {q:"Display employees whose salary is less than 1500", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL < 1500;`},
      {q:"Display employees whose salary is > 2000 and job is 'MANAGER'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL > 2000 AND JOB = 'MANAGER';`},
      {q:"Display employees working in department 10 or 20", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE DEPTNO IN (10, 20);\n-- OR --\nSELECT * FROM EMP \nWHERE DEPTNO = 10 OR DEPTNO = 20;`},
      {q:"Display employees whose job is 'SALESMAN' and salary > 1500", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE JOB = 'SALESMAN' AND SAL > 1500;`},
      {q:"Display employees who are either CLERK or ANALYST", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE JOB IN ('CLERK', 'ANALYST');`},
      {q:"Display employees hired before 1982 and working in department 30", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE HIREDATE < '1982-01-01' AND DEPTNO = 30;`},
      {q:"Display employees working in departments 10, 20, or 30", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE DEPTNO IN (10, 20, 30);`},
      {q:"Display employees whose job is not MANAGER or CLERK", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE JOB NOT IN ('MANAGER', 'CLERK');`},
      {q:"Display employees whose department is not 10", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE DEPTNO != 10;`},
      {q:"Display employees whose salary is between 1000 and 3000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL BETWEEN 1000 AND 3000;`},
      {q:"Display employees hired between 01-JAN-81 and 31-DEC-81", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE HIREDATE BETWEEN '1981-01-01' AND '1981-12-31';`},
      {q:"Display all employees ordered by salary in ascending order", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nORDER BY SAL ASC;`},
      {q:"Display all employees ordered by salary in descending order", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nORDER BY SAL DESC;`},
      {q:"Display employees ordered by hire date", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nORDER BY HIREDATE;`},
      {q:"Display employees ordered by department number and salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nORDER BY DEPTNO, SAL;`},
      {q:"Display employees ordered by job (ascending) and salary (descending)", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nORDER BY JOB ASC, SAL DESC;`},
      {q:"Display employee names ordered alphabetically", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME \nFROM EMP \nORDER BY ENAME ASC;`},
      {q:"Display employees of department 30 ordered by salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE DEPTNO = 30 \nORDER BY SAL;`},
      {q:"Display employees ordered by annual salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT *, (SAL * 12) AS Annual_Salary \nFROM EMP \nORDER BY Annual_Salary;`},
      {q:"Display employees ordered by commission", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nORDER BY COMM;`},
      {q:"Display employees ordered by job and name", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nORDER BY JOB, ENAME;`},
      {q:"Display employee name as Employee_Name", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS Employee_Name \nFROM EMP;`},
      {q:"Display salary as Monthly_Salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT SAL AS Monthly_Salary \nFROM EMP;`},
      {q:"Display employee name and job with aliases", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS "Employee Name", JOB AS "Designation" \nFROM EMP;`},
      {q:"Display department number as Dept_No", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO AS Dept_No \nFROM EMP;`},
      {q:"Display employee name and salary with meaningful aliases", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS "Staff Name", SAL AS "Salary Amount" \nFROM EMP;`},
      {q:"Display commission as Incentive", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT COMM AS Incentive \nFROM EMP;`},
      {q:"Display employee name, job, and salary with aliases, ordered by job", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS Name, JOB AS Designation, SAL AS Salary \nFROM EMP \nORDER BY JOB;`},
      {q:"Display employees of department 30 whose salary > 1500, ordered by salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE DEPTNO = 30 AND SAL > 1500 \nORDER BY SAL;`},
      {q:"Display employees whose commission is NOT NULL, ordered by commission", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NOT NULL \nORDER BY COMM;`},
      {q:"Display employees whose salary is between 1500 and 3000, ordered by salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL BETWEEN 1500 AND 3000 \nORDER BY SAL;`},
      {q:"Display employee name and department, ordered by department and name", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME, DEPTNO \nFROM EMP \nORDER BY DEPTNO, ENAME;`},
      {q:"Display employees whose name starts with 'S', ordered by salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE ENAME LIKE 'S%' \nORDER BY SAL;`},
      {q:"Display employees hired before 1982 with aliases, ordered by hire date", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS Name, HIREDATE AS "Date of Joining" \nFROM EMP \nWHERE HIREDATE < '1982-01-01' \nORDER BY HIREDATE;`},
      {q:"Display employee name as Name and salary as Pay for department 10", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS Name, SAL AS Pay \nFROM EMP \nWHERE DEPTNO = 10;`},
      {q:"Display employees whose commission is NULL, ordered by salary descending", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NULL \nORDER BY SAL DESC;`},
      {q:"Display employee name and annual salary, ordered by annual salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME, (SAL * 12) AS Annual_Salary \nFROM EMP \nORDER BY Annual_Salary;`},
      {q:"Display employees whose commission is NULL but job is SALESMAN", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NULL AND JOB = 'SALESMAN';`},
      {q:"Display employees whose manager is NULL and salary > 4000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE MGR IS NULL AND SAL > 4000;`},
      {q:"Display employees who do not earn commission and work in department 20", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE (COMM IS NULL OR COMM = 0) AND DEPTNO = 20;`},
      {q:"Display employees whose commission is NOT NULL and department is 30", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NOT NULL AND DEPTNO = 30;`},
      {q:"Display employees whose commission is NULL or salary > 3000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NULL OR SAL > 3000;`},
      {q:"Display employees whose commission is NULL and salary > 2000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NULL AND SAL > 2000;`},
      {q:"Display employees whose manager is not NULL", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE MGR IS NOT NULL;`},
      {q:"Display employees who do not have a manager", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE MGR IS NULL;`},
      {q:"Display employees who are getting commission", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NOT NULL AND COMM > 0;`},
      {q:"Display employees whose commission is NULL", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE COMM IS NULL;`},
      {q:"Display job and salary using aliases", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB AS Designation, SAL AS Remuneration \nFROM EMP;`},
      {q:"Display employee name and department number with aliases", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS "Employee Name", DEPTNO AS "Department ID" \nFROM EMP;`},
      {q:"Display hire date as Joining_Date", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT HIREDATE AS Joining_Date \nFROM EMP;`},
    ]
  },
  {
    title: "Pattern Matching Operator (LIKE)",
    tag: "LIKE",
    tagColor: "#06D6A0",
    tagLight: "#E6FAF5",
    count: 60,
    questions: [
      {q:"Display employees whose name starts with A", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'A%';`},
      {q:"Display employees whose name starts with S", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'S%';`},
      {q:"Display employees whose name ends with N", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%N';`},
      {q:"Display employees whose name ends with R", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%R';`},
      {q:"Display employees whose name contains LL", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%LL%';`},
      {q:"Display employees whose name contains AR", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%AR%';`},
      {q:"Display employees whose job starts with M", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE 'M%';`},
      {q:"Display employees whose job ends with AN", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '%AN';`},
      {q:"Display employees whose job contains CL", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '%CL%';`},
      {q:"Display departments whose location starts with N", s:"DEPT (DEPTNO, DNAME, LOC)", a:`SELECT * FROM DEPT WHERE LOC LIKE 'N%';`},
      {q:"Display employees whose name has exactly 4 characters", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '____';`},
      {q:"Display employees whose name has exactly 5 characters", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '_____';`},
      {q:"Display employees whose name has A as the second character", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '_A%';`},
      {q:"Display employees whose name has L as the third character", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '__L%';`},
      {q:"Display employees whose job has exactly 6 characters", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '______';`},
      {q:"Display employees whose name starts with any letter but ends with N", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '_%N';`},
      {q:"Display employees whose job starts with any one character and ends with ER", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '_%ER';`},
      {q:"Display employees whose name has A as first and N as the last character", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'A%N';`},
      {q:"Display employees whose name has exactly 2 characters before 'E'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '__E%';`},
      {q:"Display employees whose name has exactly 1 character after 'A'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%A_';`},
      {q:"Display employees whose name starts with A and ends with N", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'A%N';`},
      {q:"Display employees whose name contains E anywhere", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%E%';`},
      {q:"Display employees whose name does not contain A", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME NOT LIKE '%A%';`},
      {q:"Display employees whose job contains MAN", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '%MAN%';`},
      {q:"Display employees whose job does not start with C", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB NOT LIKE 'C%';`},
      {q:"Display employees whose name contains two L consecutively", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%LL%';`},
      {q:"Display employees whose name starts with J and has S anywhere", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'J%S%';`},
      {q:"Display employees whose job starts with S and ends with AN", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE 'S%AN';`},
      {q:"Display employees whose name contains A as the second last character", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%A_';`},
      {q:"Display employees whose name contains exactly one character between A and E", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%A_E%';`},
      {q:"Display employees whose name starts with S and salary > 2000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'S%' AND SAL > 2000;`},
      {q:"Display employees whose job ends with MAN and department is 20", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '%MAN' AND DEPTNO = 20;`},
      {q:"Display employees whose name contains A and commission is NULL", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%A%' AND COMM IS NULL;`},
      {q:"Display employees whose job starts with C and salary < 1500", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE 'C%' AND SAL < 1500;`},
      {q:"Display employees whose name ends with S and hired after 1981", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%S' AND HIREDATE > '31-DEC-1981';`},
      {q:"Display employees whose name starts with M and department is not 10", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'M%' AND DEPTNO != 10;`},
      {q:"Display employees whose job contains ER and salary between 2000 and 3000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '%ER%' AND SAL BETWEEN 2000 AND 3000;`},
      {q:"Display employees whose name starts with A or job starts with S", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'A%' OR JOB LIKE 'S%';`},
      {q:"Display employees whose name contains I and manager is NOT NULL", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%I%' AND MGR IS NOT NULL;`},
      {q:"Display employees whose name ends with N and commission is NOT NULL", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%N' AND COMM IS NOT NULL;`},
      {q:"Display employee name as Name whose name starts with S, ordered alphabetically", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS "Name" FROM EMP WHERE ENAME LIKE 'S%' ORDER BY ENAME;`},
      {q:"Display employee name and salary as Pay whose name contains A, ordered by salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME, SAL AS "Pay" FROM EMP WHERE ENAME LIKE '%A%' ORDER BY SAL;`},
      {q:"Display employees whose job starts with M, ordered by job and salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE 'M%' ORDER BY JOB, SAL;`},
      {q:"Display employees whose name ends with E, ordered by hire date", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%E' ORDER BY HIREDATE;`},
      {q:"Display employee name and annual salary for employees whose name starts with J", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME, SAL * 12 AS "Annual Salary" FROM EMP WHERE ENAME LIKE 'J%';`},
      {q:"Display employees whose name contains R, ordered by department number", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%R%' ORDER BY DEPTNO;`},
      {q:"Display employee name as Employee whose job ends with AN", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT ENAME AS "Employee" FROM EMP WHERE JOB LIKE '%AN';`},
      {q:"Display employees whose name starts with K, ordered by salary descending", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE 'K%' ORDER BY SAL DESC;`},
      {q:"Display employees whose name contains L, ordered by name and salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%L%' ORDER BY ENAME, SAL;`},
      {q:"Display employees whose job starts with C, ordered by job", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE 'C%' ORDER BY JOB;`},
      {q:"Display employees whose name has exactly 6 characters and ends with R", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '_____R';`},
      {q:"Display employees whose name has A as the third character from start", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '__A%';`},
      {q:"Display employees whose name has E as the second character from end", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%E_';`},
      {q:"Display employees whose name contains at least two characters before 'A'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '__%A%';`},
      {q:"Display employees whose job contains exactly one 'A'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB LIKE '%A%' AND JOB NOT LIKE '%A%A%';`},
      {q:"Display employees whose name does not start with a vowel", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME NOT LIKE 'A%' AND ENAME NOT LIKE 'E%' AND ENAME NOT LIKE 'I%' AND ENAME NOT LIKE 'O%' AND ENAME NOT LIKE 'U%';`},
      {q:"Display employees whose job does not contain ER", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE JOB NOT LIKE '%ER%';`},
      {q:"Display employees whose name starts and ends with the same character", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE SUBSTR(ENAME, 1, 1) = SUBSTR(ENAME, -1, 1);`},
      {q:"Display employees whose name contains A and E in any order", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '%A%' AND ENAME LIKE '%E%';`},
      {q:"Display employees whose name contains A but not as the first character", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP WHERE ENAME LIKE '_%A%';`},
    ]
  },
  {
    title: "Group Functions, Group By Clause, Having Clause",
    tag: "GROUP BY",
    tagColor: "#FFD166",
    tagLight: "#FFF8E6",
    count: 50,
    questions: [
      {q:"Display the total number of employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT COUNT(*) FROM EMP;`},
      {q:"Display the total salary of all employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT SUM(SAL) FROM EMP;`},
      {q:"Display the average salary of all employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT AVG(SAL) FROM EMP;`},
      {q:"Display the highest salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT MAX(SAL) FROM EMP;`},
      {q:"Display the lowest salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT MIN(SAL) FROM EMP;`},
      {q:"Display the total number of departments in EMP table", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT COUNT(DISTINCT DEPTNO) FROM EMP;`},
      {q:"Display the number of employees who are managers", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT COUNT(*) FROM EMP WHERE JOB = 'MANAGER';`},
      {q:"Display the total commission paid to employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT SUM(COMM) FROM EMP;`},
      {q:"Display the average commission", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT AVG(COMM) FROM EMP;`},
      {q:"Display the number of employees who are getting commission", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT COUNT(*) FROM EMP WHERE COMM IS NOT NULL AND COMM > 0;`},
      {q:"Display department-wise total salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, SUM(SAL) \nFROM EMP \nGROUP BY DEPTNO;`},
      {q:"Display department-wise average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, AVG(SAL) \nFROM EMP \nGROUP BY DEPTNO;`},
      {q:"Display department-wise number of employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, COUNT(*) \nFROM EMP \nGROUP BY DEPTNO;`},
      {q:"Display job-wise number of employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, COUNT(*) \nFROM EMP \nGROUP BY JOB;`},
      {q:"Display job-wise total salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, SUM(SAL) \nFROM EMP \nGROUP BY JOB;`},
      {q:"Display job-wise maximum salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, MAX(SAL) \nFROM EMP \nGROUP BY JOB;`},
      {q:"Display job-wise minimum salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, MIN(SAL) \nFROM EMP \nGROUP BY JOB;`},
      {q:"Display department-wise maximum salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, MAX(SAL) \nFROM EMP \nGROUP BY DEPTNO;`},
      {q:"Display department-wise minimum salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, MIN(SAL) \nFROM EMP \nGROUP BY DEPTNO;`},
      {q:"Display department-wise average commission", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, AVG(COMM) \nFROM EMP \nGROUP BY DEPTNO;`},
      {q:"Display department-wise job-wise number of employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, JOB, COUNT(*) \nFROM EMP \nGROUP BY DEPTNO, JOB;`},
      {q:"Display department-wise job-wise total salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, JOB, SUM(SAL) \nFROM EMP \nGROUP BY DEPTNO, JOB;`},
      {q:"Display department-wise job-wise average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, JOB, AVG(SAL) \nFROM EMP \nGROUP BY DEPTNO, JOB;`},
      {q:"Display job-wise department-wise maximum salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, DEPTNO, MAX(SAL) \nFROM EMP \nGROUP BY JOB, DEPTNO;`},
      {q:"Display job-wise department-wise minimum salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, DEPTNO, MIN(SAL) \nFROM EMP \nGROUP BY JOB, DEPTNO;`},
      {q:"Display department where sum of salaries is maximum", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, SUM(SAL) \nFROM EMP \nGROUP BY DEPTNO \nHAVING SUM(SAL) = (SELECT MAX(SUM(SAL)) FROM EMP GROUP BY DEPTNO);`},
      {q:"Display job having minimum average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, AVG(SAL) \nFROM EMP \nGROUP BY JOB \nHAVING AVG(SAL) = (SELECT MIN(AVG(SAL)) FROM EMP GROUP BY JOB);`},
      {q:"Display jobs having average salary greater than overall average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, AVG(SAL) \nFROM EMP \nGROUP BY JOB \nHAVING AVG(SAL) > (SELECT AVG(SAL) FROM EMP);`},
      {q:"Display department having highest number of employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, COUNT(*) \nFROM EMP \nGROUP BY DEPTNO \nHAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM EMP GROUP BY DEPTNO);`},
      {q:"Display department numbers having more than 3 employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO \nFROM EMP \nGROUP BY DEPTNO \nHAVING COUNT(*) > 3;`},
      {q:"Display jobs having total salary greater than 5000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, SUM(SAL) \nFROM EMP \nGROUP BY JOB \nHAVING SUM(SAL) > 5000;`},
      {q:"Display department numbers having average salary greater than 2000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, AVG(SAL) \nFROM EMP \nGROUP BY DEPTNO \nHAVING AVG(SAL) > 2000;`},
      {q:"Display jobs having maximum salary greater than 3000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB, MAX(SAL) \nFROM EMP \nGROUP BY JOB \nHAVING MAX(SAL) > 3000;`},
      {q:"Display department numbers having minimum salary less than 1000", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO, MIN(SAL) \nFROM EMP \nGROUP BY DEPTNO \nHAVING MIN(SAL) < 1000;`},
      {q:"Display the second highest salary from EMP table", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT MAX(SAL) \nFROM EMP \nWHERE SAL < (SELECT MAX(SAL) FROM EMP);`},
      {q:"Display the third highest salary from EMP table", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT MAX(SAL) FROM EMP WHERE SAL < (\n    SELECT MAX(SAL) FROM EMP WHERE SAL < (SELECT MAX(SAL) FROM EMP)\n);`},
      {q:"Display department name having maximum number of employees", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DNAME FROM DEPT WHERE DEPTNO = (\n    SELECT DEPTNO FROM EMP \n    GROUP BY DEPTNO \n    HAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM EMP GROUP BY DEPTNO)\n);`},
      {q:"Display job having maximum average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB FROM EMP \nGROUP BY JOB \nHAVING AVG(SAL) = (SELECT MAX(AVG(SAL)) FROM EMP GROUP BY JOB);`},
      {q:"Display department having minimum total salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO FROM EMP \nGROUP BY DEPTNO \nHAVING SUM(SAL) = (SELECT MIN(SUM(SAL)) FROM EMP GROUP BY DEPTNO);`},
      {q:"Display department numbers where there is more than one clerk", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO \nFROM EMP \nWHERE JOB = 'CLERK' \nGROUP BY DEPTNO \nHAVING COUNT(*) > 1;`},
      {q:"Display job names where the number of employees is more than 2", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB \nFROM EMP \nGROUP BY JOB \nHAVING COUNT(*) > 2;`},
      {q:"Display department numbers where total salary < average salary of company", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO \nFROM EMP \nGROUP BY DEPTNO \nHAVING SUM(SAL) < (SELECT AVG(SAL) FROM EMP);`},
      {q:"Display jobs where the maximum salary is less than overall average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB \nFROM EMP \nGROUP BY JOB \nHAVING MAX(SAL) < (SELECT AVG(SAL) FROM EMP);`},
      {q:"Display the department name that has the highest average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DNAME FROM DEPT WHERE DEPTNO = (\n    SELECT DEPTNO FROM EMP \n    GROUP BY DEPTNO \n    HAVING AVG(SAL) = (SELECT MAX(AVG(SAL)) FROM EMP GROUP BY DEPTNO)\n);`},
      {q:"Display the job that has the lowest total salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB \nFROM EMP \nGROUP BY JOB \nHAVING SUM(SAL) = (SELECT MIN(SUM(SAL)) FROM EMP GROUP BY JOB);`},
      {q:"Display department numbers having more than one manager", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO \nFROM EMP \nWHERE JOB = 'MANAGER' \nGROUP BY DEPTNO \nHAVING COUNT(*) > 1;`},
      {q:"Display the department name where no employees are working", s:"DEPT (DEPTNO, DNAME, LOC)", a:`SELECT DNAME \nFROM DEPT \nWHERE DEPTNO NOT IN (SELECT DISTINCT DEPTNO FROM EMP WHERE DEPTNO IS NOT NULL);`},
      {q:"Display the job that has more than 3 employees in department 20", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT JOB \nFROM EMP \nWHERE DEPTNO = 20 \nGROUP BY JOB \nHAVING COUNT(*) > 3;`},
      {q:"Display department numbers where the number of salesman is maximum", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT DEPTNO \nFROM EMP \nWHERE JOB = 'SALESMAN' \nGROUP BY DEPTNO \nHAVING COUNT(*) = (\n    SELECT MAX(COUNT(*)) \n    FROM EMP \n    WHERE JOB = 'SALESMAN' \n    GROUP BY DEPTNO\n);`},
    ]
  },
  {
    title: "Subqueries: Single Row, Multiple Row, Correlated",
    tag: "Subquery",
    tagColor: "#EF476F",
    tagLight: "#FDEEF2",
    count: 69,
    questions: [
      {q:"Display employees whose salary is greater than JONES", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL > (SELECT SAL FROM EMP WHERE ENAME = 'JONES');`},
      {q:"Display employees earning the same salary as SCOTT", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL = (SELECT SAL FROM EMP WHERE ENAME = 'SCOTT') \nAND ENAME != 'SCOTT';`},
      {q:"Display employees hired after ALLEN", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE HIREDATE > (SELECT HIREDATE FROM EMP WHERE ENAME = 'ALLEN');`},
      {q:"Display employees working in the same department as BLAKE", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE DEPTNO = (SELECT DEPTNO FROM EMP WHERE ENAME = 'BLAKE') \nAND ENAME != 'BLAKE';`},
      {q:"Display employees having the same job as MILLER", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE JOB = (SELECT JOB FROM EMP WHERE ENAME = 'MILLER') \nAND ENAME != 'MILLER';`},
      {q:"Display employees earning less than the average salary", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL < (SELECT AVG(SAL) FROM EMP);`},
      {q:"Display employees earning more than the maximum salary of CLERKs", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL > (SELECT MAX(SAL) FROM EMP WHERE JOB = 'CLERK');`},
      {q:"Display employee(s) with the minimum salary", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL = (SELECT MIN(SAL) FROM EMP);`},
      {q:"Display employee(s) with the maximum salary", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL = (SELECT MAX(SAL) FROM EMP);`},
      {q:"Display employees working in departments located in NEW YORK", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE DEPTNO IN (SELECT DEPTNO FROM DEPT WHERE LOC = 'NEW YORK');`},
      {q:"Display employees whose salary matches any salary in department 30", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL IN (SELECT SAL FROM EMP WHERE DEPTNO = 30);`},
      {q:"Display employees earning more than all CLERKs", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL > ALL (SELECT SAL FROM EMP WHERE JOB = 'CLERK');`},
      {q:"Display employees earning less than any MANAGER", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL < ANY (SELECT SAL FROM EMP WHERE JOB = 'MANAGER');`},
      {q:"Display employees whose job appears in department 20", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE JOB IN (SELECT JOB FROM EMP WHERE DEPTNO = 20);`},
      {q:"Display employees whose department has at least one SALESMAN", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE DEPTNO IN (SELECT DEPTNO FROM EMP WHERE JOB = 'SALESMAN');`},
      {q:"Display employees earning the same salary as any CLERK", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL IN (SELECT SAL FROM EMP WHERE JOB = 'CLERK');`},
      {q:"Display employees who are not working in departments of SALESMAN", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE DEPTNO NOT IN (SELECT DEPTNO FROM EMP WHERE JOB = 'SALESMAN');`},
      {q:"Display employees earning more than all employees in department 10", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL > ALL (SELECT SAL FROM EMP WHERE DEPTNO = 10);`},
      {q:"Display employees whose dept has more than 3 employees", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE DEPTNO IN (SELECT DEPTNO FROM EMP GROUP BY DEPTNO HAVING COUNT(*) > 3);`},
      {q:"Display employees whose salary is greater than salary of their manager", s:"EMP | DEPT", a:`SELECT e.* FROM EMP e \nWHERE SAL > (SELECT SAL FROM EMP WHERE EMPNO = e.MGR);`},
      {q:"Display jobs where average salary is greater than overall average salary", s:"EMP | DEPT", a:`SELECT JOB FROM EMP \nGROUP BY JOB \nHAVING AVG(SAL) > (SELECT AVG(SAL) FROM EMP);`},
      {q:"Display employees earning more than the department average salary", s:"EMP | DEPT", a:`SELECT * FROM EMP e \nWHERE SAL > (SELECT AVG(SAL) FROM EMP WHERE DEPTNO = e.DEPTNO);`},
      {q:"Display employees earning the highest salary in each department", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE (DEPTNO, SAL) IN (SELECT DEPTNO, MAX(SAL) FROM EMP GROUP BY DEPTNO);`},
      {q:"Display employees earning the lowest salary in each job", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE (JOB, SAL) IN (SELECT JOB, MIN(SAL) FROM EMP GROUP BY JOB);`},
      {q:"Display departments having total salary greater than department 20", s:"EMP | DEPT", a:`SELECT DEPTNO FROM EMP \nGROUP BY DEPTNO \nHAVING SUM(SAL) > (SELECT SUM(SAL) FROM EMP WHERE DEPTNO = 20);`},
      {q:"Display employees earning the second highest salary", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL = (SELECT MAX(SAL) FROM EMP WHERE SAL < (SELECT MAX(SAL) FROM EMP));`},
      {q:"Display employees earning more than the overall average salary", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL > (SELECT AVG(SAL) FROM EMP);`},
      {q:"Display department(s) having the maximum number of employees", s:"EMP | DEPT", a:`SELECT DEPTNO FROM EMP \nGROUP BY DEPTNO \nHAVING COUNT(*) = (SELECT MAX(COUNT(*)) FROM EMP GROUP BY DEPTNO);`},
      {q:"Display employees earning more than the average salary of CLERKs", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE SAL > (SELECT AVG(SAL) FROM EMP WHERE JOB = 'CLERK');`},
      {q:"Display employees earning the maximum salary in their department", s:"EMP | DEPT", a:`SELECT * FROM EMP \nWHERE (DEPTNO, SAL) IN (SELECT DEPTNO, MAX(SAL) FROM EMP GROUP BY DEPTNO);`},
      {q:"Display employees earning the third highest salary", s:"EMP | DEPT", a:`SELECT * FROM EMP e1\nWHERE 2 = (SELECT COUNT(DISTINCT SAL) FROM EMP e2 WHERE e2.SAL > e1.SAL);`},
    ]
  },
  {
    title: "Interview Questions: Subqueries",
    tag: "Interview",
    tagColor: "#FF9671",
    tagLight: "#FFF0EA",
    count: 24,
    questions: [
      {q:"What is a subquery in SQL?", a:`A subquery is a query within another query. The outer query is called the main query, and the inner query is the subquery. The subquery executes first and its result is used by the main query.`, theory:true},
      {q:"What are the different types of subqueries?", a:`1. Single-row subquery: Returns only one row.\n2. Multi-row subquery: Returns multiple rows.\n3. Multiple column subquery: Returns multiple columns.\n4. Correlated subquery: References columns from the outer query.`, theory:true},
      {q:"What is the difference between a subquery and a join?", a:`- Subquery: Used to return data that will be used in the main query as a condition. Usually easier to read.\n- Join: Used to combine rows from two or more tables based on a related column. Joins are generally faster in performance for large datasets.`, theory:true},
      {q:"What is a single-row subquery?", a:`A subquery that returns exactly one row of results. It uses single-row operators like =, >, <, >=, <=, or <>.`, theory:true},
      {q:"What is a multi-row subquery?", a:`A subquery that returns one or more rows. It uses multi-row operators like IN, ANY, or ALL.`, theory:true},
      {q:"Display employees whose salary is greater than the average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL > (SELECT AVG(SAL) FROM EMP);`},
      {q:"Display employees who earn more than employee 'SMITH'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL > (SELECT SAL FROM EMP WHERE ENAME = 'SMITH');`},
      {q:"Display employees working in the same department as 'SCOTT'", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE DEPTNO = (SELECT DEPTNO FROM EMP WHERE ENAME = 'SCOTT');`},
      {q:"Display employees whose salary is equal to the minimum salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL = (SELECT MIN(SAL) FROM EMP);`},
      {q:"Display employees whose salary is greater than department 10 average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL > (SELECT AVG(SAL) FROM EMP WHERE DEPTNO = 10);`},
      {q:"Display employees whose salary is in salaries of department 10", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL IN (SELECT SAL FROM EMP WHERE DEPTNO = 10);`},
      {q:"Display employees whose job is same as any employee in department 20", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE JOB IN (SELECT DISTINCT JOB FROM EMP WHERE DEPTNO = 20);`},
      {q:"Display employees whose salary is greater than ALL employees in department 30", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL > ALL (SELECT SAL FROM EMP WHERE DEPTNO = 30);`},
      {q:"Display nth highest salary using subquery (generic formula)", a:`SELECT DISTINCT SAL FROM EMP e1 \nWHERE (N-1) = (SELECT COUNT(DISTINCT SAL) FROM EMP e2 WHERE e2.SAL > e1.SAL);\n\n-- Replace 'N' with desired number`, theory:false},
      {q:"Display second highest salary using subquery", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT MAX(SAL) FROM EMP \nWHERE SAL < (SELECT MAX(SAL) FROM EMP);`},
      {q:"Display employees who earn more than their manager", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP e \nWHERE SAL > (SELECT SAL FROM EMP m WHERE m.EMPNO = e.MGR);`},
      {q:"Display highest paid employee in each department", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE (DEPTNO, SAL) IN (SELECT DEPTNO, MAX(SAL) FROM EMP GROUP BY DEPTNO);`},
      {q:"Display employees who are above the average salary of their job role", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP e1 \nWHERE SAL > (SELECT AVG(SAL) FROM EMP e2 WHERE e2.JOB = e1.JOB);`},
      {q:"Display employees whose salary is less than ANY employee in department 10", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP \nWHERE SAL < ANY (SELECT SAL FROM EMP WHERE DEPTNO = 10);`},
      {q:"Display departments that do not have employees", s:"DEPT (DEPTNO, DNAME, LOC)", a:`SELECT * FROM DEPT \nWHERE DEPTNO NOT IN (SELECT DISTINCT DEPTNO FROM EMP WHERE DEPTNO IS NOT NULL);`},
      {q:"Display departments that have employees", s:"DEPT (DEPTNO, DNAME, LOC)", a:`SELECT * FROM DEPT \nWHERE DEPTNO IN (SELECT DISTINCT DEPTNO FROM EMP);`},
      {q:"Display employees earning top 3 salaries in each department", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP e1 \nWHERE 3 > (SELECT COUNT(DISTINCT SAL) FROM EMP e2 \n           WHERE e2.DEPTNO = e1.DEPTNO AND e2.SAL > e1.SAL);`},
      {q:"Display employees who earn more than their department average salary", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP e1 \nWHERE SAL > (SELECT AVG(SAL) FROM EMP e2 WHERE e2.DEPTNO = e1.DEPTNO);`},
      {q:"Display employees whose salary is greater than company avg but less than dept avg", s:"EMP (EMPNO, ENAME, JOB, MGR, HIREDATE, SAL, COMM, DEPTNO)", a:`SELECT * FROM EMP e \nWHERE SAL > (SELECT AVG(SAL) FROM EMP)\nAND SAL < (SELECT AVG(SAL) FROM EMP WHERE DEPTNO = e.DEPTNO);`},
    ]
  },
  {
    title: "Scalar Functions: DATE, NUMERIC, STRING, CONVERSION, NULL",
    tag: "Functions",
    tagColor: "#6C63FF",
    tagLight: "#EEF0FF",
    count: 60,
    questions: [
      {q:"Display employee name, hire date, and calculate the number of days the employee has worked", s:"EMP (ENAME, HIREDATE)", a:`SELECT ENAME, HIREDATE, SYSDATE, \nROUND(SYSDATE - HIREDATE) AS DAYS_WORKED \nFROM EMP;`},
      {q:"Display employee name and hire date in format: Monday, January 01, 2024", a:`SELECT ENAME, \nTO_CHAR(HIREDATE, 'Day, Month DD, YYYY') AS FORMATTED_DATE \nFROM EMP;`},
      {q:"Find employees who joined in the same month as the current system date", a:`SELECT * FROM EMP \nWHERE TO_CHAR(HIREDATE, 'MM') = TO_CHAR(SYSDATE, 'MM');`},
      {q:"Display employee name and the next Monday after their hire date", a:`SELECT ENAME, \nNEXT_DAY(HIREDATE, 'MONDAY') AS NEXT_MONDAY \nFROM EMP;`},
      {q:"Display employee name and the last day of their joining month", a:`SELECT ENAME, \nLAST_DAY(HIREDATE) AS MONTH_END \nFROM EMP;`},
      {q:"Find employees who have completed more than 10 years in the company", a:`SELECT * FROM EMP \nWHERE MONTHS_BETWEEN(SYSDATE, HIREDATE) / 12 > 10;`},
      {q:"Display employee name and number of months worked in the company", a:`SELECT ENAME, \nROUND(MONTHS_BETWEEN(SYSDATE, HIREDATE)) AS MONTHS_WORKED \nFROM EMP;`},
      {q:"Display hire date after adding 3 years and 6 months", a:`SELECT ENAME, HIREDATE, \nADD_MONTHS(HIREDATE, 42) AS NEW_DATE \nFROM EMP;\n-- 3 years (36 months) + 6 months = 42 months`},
      {q:"Find employees hired between two given dates (use TO_DATE)", a:`SELECT * FROM EMP \nWHERE HIREDATE BETWEEN TO_DATE('01-JAN-1981', 'DD-MON-YYYY') \nAND TO_DATE('31-DEC-1982', 'DD-MON-YYYY');`},
      {q:"Display difference in years between SYSDATE and hire date (rounded)", a:`SELECT ENAME, \nROUND(MONTHS_BETWEEN(SYSDATE, HIREDATE) / 12) AS YEARS_WORKED \nFROM EMP;`},
      {q:"Display employee name and the day of the week on which the employee joined", a:`SELECT ENAME, HIREDATE, \nTO_CHAR(HIREDATE, 'Day') AS JOINING_DAY \nFROM EMP;`},
      {q:"Display employees who joined on a 'FRIDAY'", a:`SELECT * FROM EMP \nWHERE TRIM(TO_CHAR(HIREDATE, 'DAY')) = 'FRIDAY';`},
      {q:"Display employee name and hire date, showing month name in short form (JAN, FEB...)", a:`SELECT ENAME, \nTO_CHAR(HIREDATE, 'DD-MON-YYYY') AS SHORT_MONTH_DATE \nFROM EMP;`},
      {q:"Display employees who joined in the first half of any month (before the 16th)", a:`SELECT * FROM EMP \nWHERE TO_CHAR(HIREDATE, 'DD') < '16';`},
      {q:"Display how many months are left in the year from hire date", a:`SELECT ENAME, \n12 - TO_CHAR(HIREDATE, 'MM') AS MONTHS_LEFT \nFROM EMP;`},
      {q:"Display employee name and hire date truncated to the nearest month", a:`SELECT ENAME, \nTRUNC(HIREDATE, 'MM') AS TRUNCATED_DATE \nFROM EMP;`},
      {q:"Display employee name and hire date rounded to the nearest year", a:`SELECT ENAME, \nROUND(HIREDATE, 'YYYY') AS ROUNDED_YEAR \nFROM EMP;`},
      {q:"Display employees who joined in the year 1981", a:`SELECT * FROM EMP \nWHERE TO_CHAR(HIREDATE, 'YYYY') = '1981';`},
      {q:"Display employee name and hire date in 'DD/MM/YY' format", a:`SELECT ENAME, \nTO_CHAR(HIREDATE, 'DD/MM/YY') AS FORMATTED_DATE \nFROM EMP;`},
      {q:"Display employee name and the date 6 months before they were hired", a:`SELECT ENAME, \nADD_MONTHS(HIREDATE, -6) AS SIX_MONTHS_PRIOR \nFROM EMP;`},
      {q:"Display employees who joined in the year 1981", a:`SELECT * FROM EMP \nWHERE TO_CHAR(HIREDATE, 'YYYY') = '1981';`},
      {q:"Display employees who joined between 1980 and 1982", a:`SELECT * FROM EMP \nWHERE HIREDATE BETWEEN TO_DATE('01-JAN-1980', 'DD-MON-YYYY') \nAND TO_DATE('31-DEC-1982', 'DD-MON-YYYY');`},
      {q:"Display employee name and the first day of the month in which they were hired", a:`SELECT ENAME, \nTRUNC(HIREDATE, 'MM') AS FIRST_DAY_OF_MONTH \nFROM EMP;`},
      {q:"Display employee name and the date of the next Sunday after their join date", a:`SELECT ENAME, \nNEXT_DAY(HIREDATE, 'SUNDAY') AS NEXT_SUNDAY \nFROM EMP;`},
      {q:"Display employee name and the last day of the current month", a:`SELECT ENAME, \nLAST_DAY(SYSDATE) AS END_OF_CURRENT_MONTH \nFROM EMP;`},
      {q:"Find employees hired in the month of December", a:`SELECT * FROM EMP \nWHERE TRIM(TO_CHAR(HIREDATE, 'MONTH')) = 'DECEMBER';`},
      {q:"Find the number of employees joined in each month", a:`SELECT TO_CHAR(HIREDATE, 'Month') AS JOIN_MONTH, \nCOUNT(*) AS TOTAL_EMPLOYEES \nFROM EMP \nGROUP BY TO_CHAR(HIREDATE, 'Month');`},
      {q:"Display employee name and hire date, excluding those who joined in 1981", a:`SELECT ENAME, HIREDATE \nFROM EMP \nWHERE TO_CHAR(HIREDATE, 'YYYY') != '1981';`},
      {q:"Display employee name and the date 100 days after their joining", a:`SELECT ENAME, \n(HIREDATE + 100) AS HUNDRED_DAYS_AFTER \nFROM EMP;`},
      {q:"Display employee name and hire date for employees who joined on the 1st of any month", a:`SELECT ENAME, HIREDATE \nFROM EMP \nWHERE TO_CHAR(HIREDATE, 'DD') = '01';`},
    ]
  },
  {
    title: "JOINS: INNER, CARTESIAN/CROSS, LEFT OUTER, RIGHT OUTER, FULL OUTER",
    tag: "JOINS",
    tagColor: "#06D6A0",
    tagLight: "#E6FAF5",
    count: 40,
    questions: [
      {q:"What is the purpose of the NVL function in SQL?", a:`The NVL function is used to replace a NULL value with a specific value.\nSyntax: NVL(expression, replacement_value)\nIf the expression is NULL, it returns the replacement value; otherwise, it returns the original value.`, theory:true},
      {q:"Display employee name and commission. If commission is NULL, display 0", s:"EMP (ENAME, COMM)", a:`SELECT ENAME, NVL(COMM, 0) AS COMMISSION \nFROM EMP;`},
      {q:"What is the difference between NVL and NVL2?", a:`- NVL(exp, val1): Returns val1 if exp is NULL.\n- NVL2(exp, val1, val2): Returns val1 if exp is NOT NULL, returns val2 if exp is NULL.`, theory:true},
      {q:"Display 'Income_Type'. If commission is NULL show 'Salary Only', else 'Salary + Comm'", a:`SELECT ENAME, \nNVL2(COMM, 'Salary + Comm', 'Salary Only') AS INCOME_TYPE \nFROM EMP;`},
      {q:"Explain the NULLIF function", a:`The NULLIF function compares two expressions. If they are equal, returns NULL. If not equal, returns the first expression.\nSyntax: NULLIF(exp1, exp2)`, theory:true},
      {q:"Display employee name and job. Show NULL if the job is 'CLERK' using NULLIF", a:`SELECT ENAME, JOB, \nNULLIF(JOB, 'CLERK') AS JOB_CHECK \nFROM EMP;`},
      {q:"What is the COALESCE function?", a:`COALESCE returns the first non-null expression in a list. It can take multiple arguments and evaluates them in order.\nSyntax: COALESCE(val1, val2, ..., valN)`, theory:true},
      {q:"Display employee name and total annual income (SAL + COMM). Ensure NULL commissions don't break the calculation", a:`SELECT ENAME, \n(SAL + NVL(COMM, 0)) * 12 AS ANNUAL_INCOME \nFROM EMP;`},
      {q:"Using NVL, display 'No Manager' for employees without a manager", a:`SELECT ENAME, \nNVL(TO_CHAR(MGR), 'No Manager') AS MANAGER_ID \nFROM EMP;`},
      {q:"Display 0 if commission is NULL using COALESCE function", a:`SELECT ENAME, SAL, COMM, \nCOALESCE(COMM, 0) AS COMM_CHECK \nFROM EMP;`},
      {q:"Display 'Top Boss' if MGR is NULL, otherwise display the Manager ID", a:`SELECT ENAME, \nNVL(TO_CHAR(MGR), 'Top Boss') AS MGR_STATUS \nFROM EMP;`},
      {q:"Calculate the total monthly remuneration for each employee (SAL + COMM)", a:`SELECT ENAME, SAL, COMM, \n(SAL + NVL(COMM, 0)) AS TOTAL_REMUNERATION \nFROM EMP;`},
      {q:"If commission is 0, show it as NULL using the NULLIF function", a:`SELECT ENAME, \nNULLIF(COMM, 0) AS COMM_AS_NULL \nFROM EMP;`},
      {q:"If commission is NOT NULL bonus is 500; if NULL bonus is 100 (Use NVL2)", a:`SELECT ENAME, \nNVL2(COMM, 500, 100) AS BONUS \nFROM EMP;`},
      {q:"Display employees who do not have a commission (COMM IS NULL)", a:`SELECT * FROM EMP \nWHERE COMM IS NULL;`},
      {q:"Display employees who have a commission (COMM IS NOT NULL)", a:`SELECT * FROM EMP \nWHERE COMM IS NOT NULL;`},
      {q:"Calculate average commission including employees with NULL commission", a:`SELECT AVG(NVL(COMM, 0)) AS AVG_COMM_ALL \nFROM EMP;`},
      {q:"Display 'Verified' if MGR is NOT NULL; 'Unverified' if NULL (Use NVL2)", a:`SELECT ENAME, \nNVL2(MGR, 'Verified', 'Unverified') AS VERIFICATION \nFROM EMP;`},
      {q:"Calculate commission percentage of salary. Employees with NULL commission show 0", a:`SELECT ENAME, \nNVL(COMM, 0) / SAL AS COMM_PERCENT \nFROM EMP;`},
      {q:"Display 'N/A' if commission is NULL; otherwise show actual commission value", a:`SELECT ENAME, \nNVL(TO_CHAR(COMM), 'N/A') AS COMM_STATUS \nFROM EMP;`},
    ]
  },
  {
    title: "Interview Questions: JOINS",
    tag: "Interview",
    tagColor: "#FF9671",
    tagLight: "#FFF0EA",
    count: 24,
    questions: [
      {q:"What is the DECODE function in SQL?", a:`The DECODE function provides if-then-else logic in SQL. It compares an expression to each search value one by one. If the expression matches a search value, it returns the corresponding result.\nSyntax: DECODE(column, search1, result1, search2, result2, ..., default)`, theory:true},
      {q:"Using DECODE, display dept name based on DEPTNO (10=ACCOUNTING, 20=RESEARCH, 30=SALES)", a:`SELECT ENAME, \nDECODE(DEPTNO, 10, 'ACCOUNTING', \n               20, 'RESEARCH', \n               30, 'SALES', \n               'OTHERS') AS DNAME \nFROM EMP;`},
      {q:"What is the CASE expression?", a:`The CASE expression is a more flexible version of DECODE. It can handle complex conditions (BETWEEN, <, >) and is ANSI SQL compliant.\nSyntax: CASE\n  WHEN condition THEN result\n  ELSE default\nEND`, theory:true},
      {q:"Using CASE, display salary grade: 'High' if SAL>3000, 'Medium' if SAL>1500, else 'Low'", a:`SELECT ENAME, \nCASE \n  WHEN SAL > 3000 THEN 'High'\n  WHEN SAL > 1500 THEN 'Medium'\n  ELSE 'Low'\nEND AS SALARY_GRADE\nFROM EMP;`},
      {q:"What is the difference between Simple CASE and Searched CASE?", a:`- Simple CASE: Compares one expression to multiple values (like DECODE).\n  Example: CASE DEPTNO WHEN 10 THEN 'A' END\n- Searched CASE: Uses Boolean expressions for each WHEN clause.\n  Example: CASE WHEN SAL > 2000 THEN 'B' END`, theory:true},
      {q:"Using DECODE, calculate bonus: CLERK=500, SALESMAN=1000, MANAGER=1500, others=0", a:`SELECT ENAME, JOB, \nDECODE(JOB, 'CLERK', 500, \n            'SALESMAN', 1000, \n            'MANAGER', 1500, \n            0) AS BONUS \nFROM EMP;`},
      {q:"Rewrite the Bonus question using a CASE expression", a:`SELECT ENAME, JOB, \nCASE JOB \n  WHEN 'CLERK' THEN 500\n  WHEN 'SALESMAN' THEN 1000\n  WHEN 'MANAGER' THEN 1500\n  ELSE 0\nEND AS BONUS\nFROM EMP;`},
      {q:"Display 'Senior' if hired before 1982, 'Junior' if hired after 1981", a:`SELECT ENAME, HIREDATE, \nCASE \n  WHEN HIREDATE < TO_DATE('01-JAN-1982', 'DD-MON-YYYY') THEN 'Senior'\n  ELSE 'Junior'\nEND AS STATUS\nFROM EMP;`},
      {q:"Display employee name and 'Duty': 'Office' for CLERK/MANAGER, 'Field' for SALESMAN, 'Lab' for ANALYST", a:`SELECT ENAME, JOB, \nCASE \n  WHEN JOB IN ('CLERK', 'MANAGER') THEN 'Office'\n  WHEN JOB = 'SALESMAN' THEN 'Field'\n  WHEN JOB = 'ANALYST' THEN 'Lab'\n  ELSE 'General'\nEND AS DUTY\nFROM EMP;`},
      {q:"Using DECODE, display location based on DEPTNO (10=NEW YORK, 20=DALLAS, 30=CHICAGO, 40=BOSTON)", a:`SELECT ENAME, \nDECODE(DEPTNO, 10, 'NEW YORK', \n               20, 'DALLAS', \n               30, 'CHICAGO', \n               40, 'BOSTON', \n               'UNKNOWN') AS LOCATION \nFROM EMP;`},
      {q:"Using CASE, display 'Tax' column: 20% if SAL>3000, 10% if SAL>1500, else 5%", a:`SELECT ENAME, SAL, \nCASE \n  WHEN SAL > 3000 THEN SAL * 0.20\n  WHEN SAL > 1500 THEN SAL * 0.10\n  ELSE SAL * 0.05\nEND AS TAX_AMOUNT\nFROM EMP;`},
      {q:"Using CASE, display 'Joined in 80s' / '90s' / 'Other' based on hire year", a:`SELECT ENAME, HIREDATE, \nCASE \n  WHEN HIREDATE BETWEEN '01-JAN-1980' AND '31-DEC-1989' THEN 'Joined in 80s'\n  WHEN HIREDATE BETWEEN '01-JAN-1990' AND '31-DEC-1999' THEN 'Joined in 90s'\n  ELSE 'Other'\nEND AS HIRE_ERA\nFROM EMP;`},
      {q:"Using DECODE, if COMM is NULL show 'No Bonus', otherwise 'Eligible'", a:`SELECT ENAME, \nDECODE(COMM, NULL, 'No Bonus', 'Eligible') AS BONUS_STATUS \nFROM EMP;`},
      {q:"Using CASE, categorize employees: dept 10 = 'Admin', 20 = 'Tech', 30 = 'Sales', else 'General'", a:`SELECT ENAME, \nCASE DEPTNO \n  WHEN 10 THEN 'Admin'\n  WHEN 20 THEN 'Tech'\n  WHEN 30 THEN 'Sales'\n  ELSE 'General'\nEND AS DEPT_CATEGORY\nFROM EMP;`},
      {q:"Using DECODE, display salary increase: CLERK+10%, ANALYST+15%, others+5%", a:`SELECT ENAME, SAL, \nSAL + DECODE(JOB, 'CLERK', SAL * 0.10, \n                  'ANALYST', SAL * 0.15, \n                  SAL * 0.05) AS NEW_SALARY \nFROM EMP;`},
      {q:"Using CASE, if name starts with 'S' show 'Starts with S', else show ENAME", a:`SELECT \nCASE \n  WHEN ENAME LIKE 'S%' THEN 'Starts with S'\n  ELSE ENAME\nEND AS NAME_CHECK\nFROM EMP;`},
      {q:"Using DECODE, count how many employees are in dept 10, 20, and 30 in a single row", a:`SELECT \n  COUNT(DECODE(DEPTNO, 10, 1)) AS DEPT10_COUNT,\n  COUNT(DECODE(DEPTNO, 20, 1)) AS DEPT20_COUNT,\n  COUNT(DECODE(DEPTNO, 30, 1)) AS DEPT30_COUNT\nFROM EMP;`},
      {q:"Using CASE, display 'Odd' if salary is odd, 'Even' if salary is even", a:`SELECT ENAME, SAL,\nCASE \n  WHEN MOD(SAL, 2) = 0 THEN 'Even'\n  ELSE 'Odd'\nEND AS SALARY_TYPE\nFROM EMP;`},
      {q:"Using DECODE, show 'Comm_Level': 0 if NULL, 'Low' if 300, 'Medium' if 500, else 'High'", a:`SELECT ENAME, COMM,\nDECODE(COMM, NULL, '0', \n             300, 'Low', \n             500, 'Medium', \n             'High') AS COMM_LEVEL\nFROM EMP;`},
      {q:"Using CASE, display 'Very Senior' if hired before 1981, 'Senior' if in 1981, else 'Junior'", a:`SELECT ENAME, HIREDATE,\nCASE \n  WHEN HIREDATE < TO_DATE('01-JAN-1981', 'DD-MON-YYYY') THEN 'Very Senior'\n  WHEN TO_CHAR(HIREDATE, 'YYYY') = '1981' THEN 'Senior'\n  ELSE 'Junior'\nEND AS SENIORITY\nFROM EMP;`},
      {q:"Using CASE, find the total annual income including commission. If COMM is NULL, use 0", a:`SELECT ENAME, \nCASE \n  WHEN COMM IS NULL THEN (SAL * 12)\n  ELSE (SAL * 12) + COMM\nEND AS TOTAL_ANNUAL_INCOME\nFROM EMP;`},
      {q:"Can you nest a DECODE function inside another DECODE?", a:`Yes, DECODE functions can be nested to handle more complex logic.\nExample: DECODE(DEPTNO, 10, DECODE(JOB, 'CLERK', 'A', 'B'), 'C')`, theory:true},
      {q:"Using DECODE, display the month name based on the month number of HIREDATE", a:`SELECT ENAME, \nDECODE(TO_CHAR(HIREDATE, 'MM'), '01', 'Jan', \n                               '02', 'Feb', \n                               '03', 'Mar', \n                               '04', 'Apr', \n                               'Other') AS MONTH_NAME \nFROM EMP;`},
      {q:"Using DECODE, display salary increase: CLERK+10%, ANALYST+15%, others+5% (full query)", a:`SELECT ENAME, SAL, \nSAL + DECODE(JOB, 'CLERK', SAL * 0.10, \n                  'ANALYST', SAL * 0.15, \n                  SAL * 0.05) AS NEW_SALARY \nFROM EMP;`},
    ]
  }
];

let currentChapter = null;

function buildHome() {
  const grid = document.getElementById('chaptersGrid');
  const colors = ['#6C63FF','#FF6584','#FF9671','#43C59E','#118AB2','#06D6A0','#EF476F','#FFD166','#FF9671','#6C63FF','#43C59E','#EF476F'];
  const lights = ['#EEF0FF','#FFEFF3','#FFF0EA','#E8FAF5','#E6F4FA','#E6FAF5','#FDEEF2','#FFF8E6','#FFF0EA','#EEF0FF','#E8FAF5','#FDEEF2'];

  CHAPTERS.forEach((ch, i) => {
    const color = ch.tagColor || colors[i % colors.length];
    const light = ch.tagLight || lights[i % lights.length];
    const card = document.createElement('div');
    card.className = 'chapter-card';
    card.style.setProperty('--tag-color', color);
    card.style.setProperty('--tag-color-light', light);
    card.innerHTML = `
      <span class="ch-tag">${ch.tag}</span>
      <h2>${ch.title}</h2>
      <div class="ch-meta">
        <span class="ch-count">${ch.questions.length} questions</span>
        <span class="ch-arrow">›</span>
      </div>
    `;
    card.onclick = () => showChapter(i);
    grid.appendChild(card);
  });
}

function showChapter(idx) {
  currentChapter = idx;
  const ch = CHAPTERS[idx];
  document.getElementById('home').style.display = 'none';
  document.getElementById('question-page').style.display = 'block';
  document.getElementById('qpTitle').textContent = ch.title;
  document.getElementById('qpBadge').textContent = ch.questions.length + ' questions';
  document.getElementById('searchInput').value = '';
  renderQuestions(ch.questions);
}

function renderQuestions(questions) {
  const list = document.getElementById('questionList');
  const noRes = document.getElementById('noResults');
  list.innerHTML = '';

  if (questions.length === 0) {
    noRes.style.display = 'block';
    return;
  }
  noRes.style.display = 'none';

  questions.forEach((q, i) => {
    const card = document.createElement('div');
    card.className = 'q-card';
    card.dataset.idx = i;

    const isTheory = q.theory === true;
    const ansHTML = isTheory
      ? `<div class="theory">${escHtml(q.a)}</div>`
      : `<pre>${escHtml(q.a)}</pre>`;

    card.innerHTML = `
      <button class="q-btn" onclick="toggleQ(this)">
        <span class="q-num">${i + 1}</span>
        <span class="q-text-wrap">
          ${q.s ? `<div class="q-schema">${escHtml(q.s)}</div>` : ''}
          <span class="q-text">${escHtml(q.q)}</span>
        </span>
        <span class="q-chevron">▼</span>
      </button>
      <div class="q-answer">
        <div class="q-answer-inner">
          <div class="answer-label">Answer</div>
          ${ansHTML}
        </div>
      </div>
    `;
    list.appendChild(card);
  });
}

function toggleQ(btn) {
  const card = btn.closest('.q-card');
  const answer = card.querySelector('.q-answer');
  const isOpen = card.classList.contains('open');

  // close all
  document.querySelectorAll('.q-card.open').forEach(c => {
    c.classList.remove('open');
    c.querySelector('.q-answer').style.maxHeight = '0';
  });

  if (!isOpen) {
    card.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
  }
}

function showHome() {
  document.getElementById('home').style.display = 'block';
  document.getElementById('question-page').style.display = 'none';
  currentChapter = null;
}

function filterQuestions() {
  if (currentChapter === null) return;
  const q = document.getElementById('searchInput').value.toLowerCase();
  const all = CHAPTERS[currentChapter].questions;
  const filtered = q ? all.filter(item => item.q.toLowerCase().includes(q) || (item.a && item.a.toLowerCase().includes(q))) : all;
  renderQuestions(filtered);
}

function escHtml(str) {
  if (!str) return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

buildHome();
