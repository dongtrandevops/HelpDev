begin tran

DECLARE @CreatedBy NVARCHAR(20) = 'System';
DECLARE @CreateDate DATETIME = GETDATE();
DECLARE @InsertedTable TABLE (Id int,Name nvarchar(20));
DECLARE @ParentId bigint;

IF NOT EXISTS( SELECT 1 FROM Menu WHERE Name = 'Dashboard')
	INSERT INTO Menu(Name,RouterLink,MatIcon,RouterLinkActive,[order],CreatedDate ,CreatedBy, IsActive)
	VALUES ('Dashboard','/dashboard','dashboard','actived-parent-menu',
	1,@CreateDate, @CreatedBy, 1)	

IF NOT EXISTS( SELECT 1 FROM Menu WHERE Name = 'Working')
	INSERT INTO Menu(Name,RouterLink,MatIcon,RouterLinkActive,
	[order],CreatedDate ,CreatedBy, IsActive)
	VALUES ('Working','/working','computer','actived-parent-menu', 
	2,@CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Menu WHERE Name = 'Learning')
	INSERT INTO Menu(Name,RouterLink,MatIcon,RouterLinkActive,
	[order], CreatedDate ,CreatedBy, IsActive)
	VALUES ('Learning','/learning','school','actived-parent-menu', 
	3,@CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Menu WHERE Name = 'Job & Company')
	INSERT INTO Menu(Name,RouterLink,MatIcon,RouterLinkActive ,
	[order],CreatedDate ,CreatedBy, IsActive)
	VALUES ('Job & Company','/job-company','paid','actived-parent-menu', 
	4,@CreateDate, @CreatedBy, 1)	

IF NOT EXISTS( SELECT 1 FROM Menu WHERE Name = 'Crawl Data')
	INSERT INTO Menu(Name,MatIcon ,
	[order],CreatedDate ,CreatedBy, IsActive)
	output inserted.Id,inserted.Name into @InsertedTable(Id,Name)
	VALUES ('Crawl Data','bug_report', 
	5,@CreateDate, @CreatedBy, 1)

Select @ParentId = id from @InsertedTable where Name = 'Crawl Data'
IF NOT EXISTS( SELECT 1 FROM Menu WHERE Name = 'Calculate Url')
	INSERT INTO Menu(Name,RouterLink, ParentId,
	[order],CreatedDate ,CreatedBy, IsActive)
	VALUES ('Calculate Url','/crawl/calculate-url',
	@ParentId,
	1,@CreateDate, @CreatedBy, 1)

commit tran

--truncate table menu
