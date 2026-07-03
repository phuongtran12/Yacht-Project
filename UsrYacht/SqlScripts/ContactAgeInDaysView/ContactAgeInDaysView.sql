CREATE OR ALTER VIEW UsrVwContactAgeDays
AS
SELECT Id AS UsrId, Name AS UsrName, BirthDate AS UsrBirthDate,
DATEDIFF(day, BirthDate, GETDATE()) AS UsrAgeDays
FROM Contact