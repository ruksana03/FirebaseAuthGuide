# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# PostgreSQL Concepts and Queries

### 2. What is the purpose of a database schema in PostgreSQL?

A **schema** in PostgreSQL  is a logical namespace that organizes database objects (tables, views, functions, etc.) into groups.

#### Purpose:
- Logical organization of objects
- Separation between different parts of an application
- Avoid name conflicts (e.g. same table name in different schemas)
- Strengthen security with schema-level permissions

**Example**:
```sql
CREATE SCHEMA hr;

CREATE TABLE hr.employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(50)
);


### 3. Explain the Primary Key and Foreign Key concepts in PostgreSQL.

Primary Key:
A primary key uniquely identifies each row in a table. It must be unique and not null.

CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,
    dept_name VARCHAR(50) NOT NULL
);


Foreign Key:

A foreign key establishes a relationship between two tables by referring to a primary key in another table.

CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    dept_id INTEGER REFERENCES departments(dept_id)
);


### 10. How can you calculate aggregate functions like `COUNT()`, `SUM()`, and `AVG()` in PostgreSQL?

Aggregate functions compute a single result from a set of input values. These functions are essential for reporting, analytics, and summarizing data in PostgreSQL.

| Function | Purpose                     |
|----------|-----------------------------|
| `COUNT()`| Counts rows or values       |
| `SUM()`  | Calculates the total sum    |
| `AVG()`  | Computes the average        |
| `MAX()`  | Finds the highest value     |
| `MIN()`  | Finds the lowest value      |

####  Examples:

```sql
-- Total number of employees
SELECT COUNT(*) FROM employees;

-- Average salary in each department
SELECT department, AVG(salary)
FROM employees
GROUP BY department;

-- Total sales made by each employee
SELECT emp_id, SUM(sales_amount)
FROM sales
GROUP BY emp_id;

