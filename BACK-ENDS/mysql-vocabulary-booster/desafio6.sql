SELECT 
    CONCAT(employees.FIRST_NAME,
            ' ',
            employees.LAST_NAME) AS `Nome completo`,
    jobs.JOB_TITLE AS `Cargo`,
    history.START_DATE AS 'Data de início do cargo',
    departments.DEPARTMENT_NAME AS 'Departamento'
FROM
    hr.job_history AS history
        INNER JOIN
    hr.jobs AS jobs ON history.JOB_ID = jobs.JOB_ID
        INNER JOIN
    hr.employees AS employees ON employees.EMPLOYEE_ID = history.EMPLOYEE_ID
        INNER JOIN
    hr.departments AS departments ON history.DEPARTMENT_ID = departments.DEPARTMENT_ID
ORDER BY `Nome completo` DESC , `Cargo` ASC;
