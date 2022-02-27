DECLARE @CreatedBy NVARCHAR(20) = 'System';
DECLARE @CreateDate DATETIME = GETDATE();

begin tran

IF NOT EXISTS( SELECT 1 FROM Website WHERE Name = 'ITViec')
	INSERT INTO Website(Name, Url, [Order],CreatedDate ,CreatedBy, IsActive)
	VALUES ('ITViec', 'https://itviec.com', 1,@CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Website WHERE Name = 'TopDev')
	INSERT INTO Website(Name, Url, [Order],  CreatedDate ,CreatedBy, IsActive)
	VALUES ('TopDev', 'https://topdev.vn', 2, @CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Website WHERE Name = 'JobsGO')
	INSERT INTO Website(Name, Url, [Order],  CreatedDate ,CreatedBy, IsActive)
	VALUES ('JobsGO', 'https://jobsgo.vn', 3, @CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Website WHERE Name = 'ITNavi')
	INSERT INTO Website(Name, Url, [Order],  CreatedDate ,CreatedBy, IsActive)
	VALUES ('ITNavi', 'https://itnavi.com.vn', 4, @CreateDate, @CreatedBy, 1)

IF NOT EXISTS( SELECT 1 FROM Website WHERE Name = 'TopCV')
	INSERT INTO Website(Name, Url, [Order],  CreatedDate ,CreatedBy, IsActive)
	VALUES ('TopCV', 'https://www.topcv.vn', 5, @CreateDate, @CreatedBy, 1)

commit tran