# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### 10. How can you calculate aggregate functions like `COUNT()`, `SUM()`, and `AVG()` in PostgreSQL?

Aggregate functions compute a single result from a set of input values. These functions are essential for reporting, analytics, and summarizing data in PostgreSQL.

| Function | Purpose                     |
|----------|-----------------------------|
| `COUNT()`| Counts rows or values       |
| `SUM()`  | Calculates the total sum    |
| `AVG()`  | Computes the average        |
| `MAX()`  | Finds the highest value     |
| `MIN()`  | Finds the lowest value      |

#### 🔹 Examples:

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

