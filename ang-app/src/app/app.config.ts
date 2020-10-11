export class AppConfig {
	
	static authViews = [
		'home','mailerconfigs','modules','appconfigs','s3configs',
		'simplemails','users','applogs','images','files','categoryproducts',
		'products','fixedcosts','supplys',
	];
	static categories = [
		['modules',                                ['admin_master']],
	    ['appconfigs',                             ['admin_master']],
	    ['s3configs',                              ['admin_master']],
		['mailerconfigs',                          ['admin_master','admin','system_auditor']],
		['simplemails',                            ['admin_master','admin','system_auditor']],
		['users',                                  ['admin_master','admin','system_auditor']],
		['applogs',                                ['admin_master','admin','system_auditor']],
		['files',                                  ['admin_master','admin','system_auditor']],
		['categoryproducts',                       ['admin_master','admin','system_auditor']],
		['images',                                 ['admin_master','admin','system_auditor','enroll']],
		['products',                               ['admin_master','admin','system_auditor','enroll']],
		['fixedcosts',                             ['admin_master','admin','system_auditor','enroll']],
		['supplys',                                ['admin_master','admin','system_auditor','enroll']],
    ];
	
}