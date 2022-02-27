begin tran

DECLARE @CreatedBy NVARCHAR(20) = 'System';
DECLARE @CreateDate DATETIME = GETDATE();

IF NOT EXISTS( SELECT 1 FROM Category WHERE Name = 'Job')
	INSERT INTO Category(Name, CreatedDate ,CreatedBy, IsActive)
	VALUES ('Job', @CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Category WHERE Name = 'Company')
	INSERT INTO Category(Name, CreatedDate ,CreatedBy, IsActive)
	VALUES ('Company', @CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Category WHERE Name = 'TechSkill')
	INSERT INTO Category(Name, CreatedDate ,CreatedBy, IsActive)
	VALUES ('TechSkill', @CreateDate, @CreatedBy, 1)	

commit tran