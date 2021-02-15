const fs = require('fs');

fs.readdir('./', 'UTF-8', (err, datas) => {
	if (err) throw err;
    else 
    {
        // console.log(datas)--this is array
		datas.forEach((value) => {
			fs.stat(value,(err,copyofvalue) => {
				if (copyofvalue.isFile()) 
                {
					console.log(value + '=>It is a file');
				}
                else 
                {
					console.log(value + '=> It is a folder');
				}
			});
            
		});
	}
});