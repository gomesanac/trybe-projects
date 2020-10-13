SELECT 
    CONCAT(employees.FIRST_NAME,
            ' ',
            employees.LAST_NAME) AS `Nome completo`,
    DATE_FORMAT(history.START_DATE, '%d/%m/%Y') AS 'Data de início',
    DATE_FORMAT(history.END_DATE, '%d/%m/%Y') AS 'Data de rescisão',
    ROUND(DATEDIFF(history.END_DATE, history.START_DATE) / 365,
            2) AS `Anos trabalhados`
FROM
    hr.employees AS employees
        INNER JOIN
    hr.job_history AS history ON employees.EMPLOYEE_ID = history.EMPLOYEE_ID
ORDER BY `Nome completo` , `Anos trabalhados`;
