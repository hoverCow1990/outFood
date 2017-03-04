<?php
	header('Access-Control-Allow-Origin:*');
	$arr = array (
		'0' => array(
			'id' => 0,
			'name' => '麦当劳',
			'address' =>'徐汇区老沪闵路809号好又多正门附近',
			'tele' => '(021)54391019',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'mc',
			'sales' => 1266,
			'start' => 20,
			'express' => 10,
			'stars' => 2800,
			'time' => 20,
			'tag' => 'fast',
			'isLove' => true,
			'search' => '快餐,炸鸡,mc,肉,夜宵',
			'info' => '这是一家很牛逼的快餐店,能吃炸鸡'
		),
		'1' => array(
			'id' => 1,
			'name' => '天工麻辣烫',
			'address' => '百色路1059号',
			'tele' => '15821556661',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'tgmlt',
			'sales' => 188,
			'start' => 5,
			'express' => 0,
			'stars' => 2300,
			'time' => 12,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '火锅,中餐,烧烤,夜宵',
			'info' => '口味非常好,出菜快,汤底浓'
		),
		'2'=> array(
			'id' => 2,
			'name' => '拼豆夜宵',
			'address' => '漕河泾南宁路485号',
			'tele' => '400655900',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'pdyx',
			'sales' => 87,
			'start' => 35,
			'express' => 9,
			'stars' => 1700,
			'time' => 18,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '量大,中餐,蔬菜,炒菜,意面,夜宵',
			'info' => '量很大,包装好,味道鲜美'
		),
		'3'=> array(
			'id' => 3,
			'name' => '黄焖鸡米饭',
			'address' => '(021)61843606',
			'tele' => '400655900',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'hmjmf',
			'sales' => 312,
			'start' => 20,
			'express' => 5,
			'stars' => 2320,
			'time' => 38,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '红烧,中餐,炒菜,鸡肉',
			'info' => '非常实在的黄焖鸡米饭,很香'
		),
		'4'=> array(
			'id' => 4,
			'name' => '时尚烤吧',
			'address'=>'东兰路288号',
			'tele' => '15221979132',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'sskb',
			'sales' => 288,
			'start' => 32,
			'express' => 0,
			'stars' => 2572,
			'time' => 26,
			'tag' => 'chinese',
			'isLove' => true,
			'search' => '烧,烤肉,羊肉串,烧烤,肉,夜宵',
			'info' => '你想吃的烧烤这里应有尽有'
		),
		'5' => array(
			'id' => 5,
			'name' => '觅甜记',
			'address' =>'徐汇区百色路1038号',
			'tele' => '(021)54389693',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'mtj',
			'sales' => 623,
			'start' => 15,
			'express' => 8,
			'stars' => 2520,
			'time' => 37,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '甜品,满记,榴莲,芒果,冰品',
			'info' => '港式甜点,各种冰品'
		),
		'6' => array(
			'id' => 6,
			'name' => '阿姨奶茶',
			'address' => '上中西路林云1街坊',
			'tele' => '13262549199',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'aync',
			'sales' => 378,
			'start' => 10,
			'express' => 5,
			'stars' => 2329,
			'time' => 32,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '甜品,波霸,丝袜,饮料,冰品',
			'info' => '滴滴香浓,丝般感受'
		),
		'7'=> array(
			'id' => 7,
			'name' => '千岛湖小海鲜',
			'address' => '梅陇路599号',
			'tele' => '1312222923',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'qdhxhx',
			'sales' => 128,
			'start' => 90,
			'express' => 12,
			'stars' => 2780,
			'time' => 50,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '螃蟹,大闸蟹,新鲜,中餐',
			'info' => '量很大,包装好,味道鲜美'
		),
		'8'=> array(
			'id' => 8,
			'name' => '105度海鲜面',
			'address' => '石龙路951号103室',
			'tele' => '17321091802',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => '105dhxm',
			'sales' => 76,
			'start' => 12,
			'express' => 0,
			'stars' => 1380,
			'time' => 38,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '海味,面食,中餐,意面',
			'info' => '味道浓郁的海鲜面'
		),
		'9'=> array(
			'id' => 9,
			'name' => '猫山王榴莲甜品',
			'address'=>'上中西路280号',
			'tele' => '13701793189',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'mswlltp',
			'sales' => 621,
			'start' => 20,
			'express' => 10,
			'stars' => 2900,
			'time' => 57,
			'tag' => 'sweet',
			'isLove' => true,
			'search' => '奶茶,新鲜,饮料,冰品',
			'info' => '打开盖子就能闻到一股浓郁的榴莲香'
		),
		'10' => array(
			'id' => 10,
			'name' => '韩式啤酒炸鸡',
			'address' =>'龙舟路168号',
			'tele' => '13611821395',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'hspjzj',
			'sales' => 478,
			'start' => 20,
			'express' => 0,
			'stars' => 2377,
			'time' => 58,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '快餐,韩国,韩国料理,肉,夜宵',
			'info' => '炸炸炸,炸出好味道'
		),
		'11' => array(
			'id' => 11,
			'name' => '必胜宅急送',
			'address' => '罗秀东路128号',
			'tele' => '4009208809',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'bszjs',
			'sales' => 920,
			'start' => 50,
			'express' => 18,
			'stars' => 2900,
			'time' => 40,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '西餐,牛排,意面,披萨,甜品,饮料,肉,夜宵',
			'info' => '老牌美食,不需要解释'
		),
		'12'=> array(
			'id' => 12,
			'name' => '拿渡麻辣香锅',
			'address' => '老沪闵路809号',
			'tele' => '(021)54828277',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'ndmlxg',
			'sales' => 167,
			'start' => 25,
			'express' => 0,
			'stars' => 1978,
			'time' => 25,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '火锅,中餐,辣,肉',
			'info' => '非常好吃的麻辣香锅料理'
		),
		'13'=> array(
			'id' => 13,
			'name' => '鲜丰水果',
			'address' => '百色路1025号',
			'tele' => '(021)62201297',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'xfsg',
			'sales' => 329,
			'start' => 30,
			'express' => 0,
			'stars' => 2189,
			'time' => 50,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '新鲜',
			'info' => '最新鲜的水果'
		),
		'14'=> array(
			'id' => 14,
			'name' => '王记东北人',
			'address'=>'虹梅南路126弄311号',
			'tele' => '18601746882',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'wjdbr',
			'sales' => 807,
			'start' => 10,
			'express' => 5,
			'stars' => 2593,
			'time' => 29,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '炒菜,鱼香肉丝,刀豆土豆,回锅肉,中餐',
			'info' => '你最熟悉的东北味道'
		),
		'15'=> array(
			'id' => 15,
			'name' => '吉祥馄饨',
			'address' => '罗香路15号',
			'tele' => '(021)64760567',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'jxht',
			'sales' => 328,
			'start' => 10,
			'express' => 3,
			'stars' => 1896,
			'time' => 20,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '面食,中餐',
			'info' => '熟悉的麻麻的味道'
		),
		'16'=> array(
			'id' => 16,
			'name' => '棒约翰比萨',
			'address' => '石龙路981号',
			'tele' => '4008887272',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'byhbs',
			'sales' => 1287,
			'start' => 35,
			'express' => 10,
			'stars' => 2681,
			'time' => 52,
			'tag' => 'fast',
			'isLove' => true,
			'search' => '披萨,西餐,快餐,香肠,牛排,意面,肉',
			'info' => '棒约翰的披萨味道666'
		),
		'17'=> array(
			'id' => 17,
			'name' => '福荣祥烧腊',
			'address'=>'上中西路9号',
			'tele' => '13641603087',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'frxsl',
			'sales' => 188,
			'start' => 23,
			'express' => 5,
			'stars' => 1559,
			'time' => 50,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '港式,叉烧,烧鹅,烤肉,烤鸡,中餐,肉',
			'info' => '专业港式烧腊馆,味道你一定懂'
		),
		'18' => array(
			'id' => 18,
			'name' => '龙南水果店',
			'address' =>'黄石路32号底层103室',
			'tele' => '15214388305',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'lnsgd',
			'sales' => 296,
			'start' => 10,
			'express' => 6,
			'stars' => 1793,
			'time' => 25,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '新鲜',
			'info' => '本店售卖各种水果,保证新鲜'
		),
		'19' => array(
			'id' => 19,
			'name' => '阳澄湖大闸蟹',
			'address' => '航东路32号',
			'tele' => '13601650886',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'ychdzx',
			'sales' => 46,
			'start' => 200,
			'express' => 0,
			'stars' => 2392,
			'time' => 500,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '螃蟹,海鲜,新鲜',
			'info' => '各位亲,本店明码标价哦'
		),
		'20'=> array(
			'id' => 20,
			'name' => '明康生鲜',
			'address' => '蒙自西路2号',
			'tele' => '15800668614',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'mksx',
			'sales' => 162,
			'start' => 120,
			'express' => 20,
			'stars' => 2189,
			'time' => 420,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '海鲜,新鲜,中餐,生蚝,螃蟹',
			'info' => '纯天然没有污染的高端海鲜'
		),
		'21'=> array(
			'id' => 21,
			'name' => 'HEY JUICE 茶桔',
			'address' => '百色路1088号',
			'tele' => '18217233052',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'heyjuicecj',
			'sales' => 274,
			'start' => 25,
			'express' => 2,
			'stars' => 2436,
			'time' => 30,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '饮料,甜品,冰品,奶茶',
			'info' => '欢迎光临Hey jUICE!!'
		),
		'22'=> array(
			'id' => 22,
			'name' => '卡漫莫尼蛋糕',
			'address'=>'龙州路995号',
			'tele' => '15270148288',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'kmmndg',
			'sales' => 128,
			'start' => 100,
			'express' => 0,
			'stars' => 2098,
			'time' => 330,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '甜品,奶油,新鲜',
			'info' => '老牌香港蛋糕店'
		),
		'23'=> array(
			'id' => 23,
			'name' => '星巴克咖啡',
			'address'=>'古美路569号',
			'tele' => '(021)54270007',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'xbkkf',
			'sales' => 1209,
			'start' => 35,
			'express' => 10,
			'stars' => 2628,
			'time' => 46,
			'tag' => 'drink',
			'isLove' => true,
			'search' => '饮料,冰品,蛋糕,三明治',
			'info' => '网上订单不提供清单小票'
		),
		'24'=> array(
			'id' => 24,
			'name' => '肯德基宅急送',
			'address' => '田林路1号',
			'tele' => '4008823823',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'kdjzjs',
			'sales' => 986,
			'start' => 35,
			'express' => 10,
			'stars' => 2520,
			'time' => 32,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '快餐,炸鸡,西餐,kfc,KFC,肉,夜宵',
			'info' => 'kfc,给你最好的炸鸡味道'
		),
		'25'=> array(
			'id' => 25,
			'name' => '蔡先生汤包馆',
			'address' => '罗香路90号',
			'tele' => '13601752712',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'cxstbg',
			'sales' => 865,
			'start' => 20,
			'express' => 2,
			'stars' => 2508,
			'time' => 35,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '中餐,小笼包,面食,炒菜,春卷,包子,馒头,肉',
			'info' => '欢迎光临蔡先生汤包馆'
		),
		'26'=> array(
			'id' => 26,
			'name' => '蜀地源冒菜',
			'address'=>'罗秀路861号',
			'tele' => '15800454154',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'sdymc',
			'sales' => 294,
			'start' => 45,
			'express' => 0,
			'stars' => 2174,
			'time' => 50,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '火锅,中餐,量大',
			'info' => '外卖消费必须点打包盒'
		),
		'27' => array(
			'id' => 27,
			'name' => '鸡鸡蛙蛙饭饭',
			'address' =>'华发路276号',
			'tele' => '13916346739',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'jjwwff',
			'sales' => 209,
			'start' => 26,
			'express' => 2,
			'stars' => 1980,
			'time' => 25,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '牛蛙,米饭,中餐,小龙虾,肉,夜宵',
			'info' => '牛蛙炒饭领先品牌'
		),
		'28' => array(
			'id' => 28,
			'name' => '小杨龙虾海鲜馆',
			'address' => '龙州路475号',
			'tele' => '17317563672',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'xylxhxg',
			'sales' => 98,
			'start' => 60,
			'express' => 6,
			'stars' => 1300,
			'time' => 50,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '海鲜,海味,小龙虾,肉,夜宵',
			'info' => '新品上市,欢迎品尝'
		),
		'29'=> array(
			'id' => 29,
			'name' => '东方既白',
			'address' => '老沪闵路809号',
			'tele' => '(021)54288753',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'dfjb',
			'sales' => 892,
			'start' => 25,
			'express' => 8,
			'stars' => 2682,
			'time' => 32,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '中餐,快餐,油条,夜宵',
			'info' => '各位客户大大,快来尝尝味道'
		),
		'30'=> array(
			'id' => 30,
			'name' => '豪大大鸡排',
			'address' => '罗秀路871号',
			'tele' => '15618037970',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'hddjp',
			'sales' => 275,
			'start' => 15,
			'express' => 3,
			'stars' => 2368,
			'time' => 28,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '炸鸡,快餐,奶茶,肉',
			'info' => '正宗香港豪大大鸡排'
		),
		'31'=> array(
			'id' => 31,
			'name' => '龙门花甲',
			'address'=>'天等路478号',
			'tele' => '13761035542',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'lmhj',
			'sales' => 286,
			'start' => 70,
			'express' => 8,
			'stars' => 2186,
			'time' => 82,
			'tag' => 'seafood',
			'isLove' => true,
			'search' => '中餐,海鲜,新鲜,意面,肉',
			'info' => '欢迎您的光临'
		),
		'32'=> array(
			'id' => 32,
			'name' => '亮亮桂林米粉',
			'address'=>'罗秀路861号',
			'tele' => '15800454154',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'llglmf',
			'sales' => 139,
			'start' => 12,
			'express' => 2,
			'stars' => 1665,
			'time' => 42,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '面食,中餐,夜宵',
			'info' => '非常好吃的米粉哦'
		),
		'33' => array(
			'id' => 33,
			'name' => '百果园',
			'address' =>'龙吴路1333号',
			'tele' => '(021)54355098',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'bgy',
			'sales' => 465,
			'start' => 100,
			'express' => 0,
			'stars' => 2681,
			'time' => 200,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '水果,新鲜',
			'info' => '如此新鲜的水果,你哪里去找'
		),
		'34' => array(
			'id' => 34,
			'name' => '85度C',
			'address' => '石龙路951号',
			'tele' => '(021)64756328',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => '85dc',
			'sales' => 697,
			'start' => 35,
			'express' => 5,
			'stars' => 2517,
			'time' => 45,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '珍珠奶茶,波霸,丝袜,奶绿,饮料,甜品',
			'info' => '老牌奶茶店'
		),
		'35'=> array(
			'id' => 35,
			'name' => 'Coco都可茶饮',
			'address' => '凌云路401号',
			'tele' => '15021467305',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'cocodkcy',
			'sales' => 2192,
			'start' => 15,
			'express' => 2,
			'stars' => 2980,
			'time' => 25,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '珍珠奶茶,波霸,丝袜,奶绿,饮料,冰品,甜品',
			'info' => 'coco的奶茶你懂得!'
		),
		'36'=> array(
			'id' => 36,
			'name' => '味千拉面',
			'address' => '老沪闵路809号',
			'tele' => '(021)52231397',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'wqlm',
			'sales' => 357,
			'start' => 35,
			'express' => 7,
			'stars' => 2612,
			'time' => 42,
			'tag' => 'fast',
			'isLove' => true,
			'search' => '日式料理,面食,肉',
			'info' => '味千拉面,吃的你停不下来'
		),
		'37'=> array(
			'id' => 37,
			'name' => '绿之源果品批发行',
			'address'=>'天等路478号',
			'tele' => '13761035542',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'lzygppf',
			'sales' => 95,
			'start' => 130,
			'express' => 10,
			'stars' => 2007,
			'time' => 90,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '水果,新鲜,量大',
			'info' => '大量水果,大量！'
		),
		'38'=> array(
			'id' => 38,
			'name' => '诺心LECAKE',
			'address'=>'宛平南路420弄4号',
			'tele' => '4001578578',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'nxlecake',
			'sales' => 428,
			'start' => 120,
			'express' => 8,
			'stars' => 2619,
			'time' => 200,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '蛋糕,甜品,冰淇淋,冷饮',
			'info' => '新鲜新作蛋糕！'
		),
		'39'=> array(
			'id' => 39,
			'name' => '凯司令',
			'address'=>'百色路1076号',
			'tele' => '13917888417',
			'points' => array('0' => 121.438202,'1' => 31.143133),
			'logo' => 'ksl',
			'sales' => 182,
			'start' => 50,
			'express' => 3,
			'stars' => 1988,
			'time' => 90,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '蛋糕,甜品,冰淇淋,冷饮',
			'info' => '欢迎品尝我们家的蛋糕！'
		)
	);
	
	$tag = $_POST["tag"];
	$start = $_POST["start"];
	
 	$array = array();

	// if($tag === 'all'){
	// 	$array = $arr;
	// }else if($tag === 'delicious'){
	// 	foreach ($arr as $key => $value){
	//        if ($value['stars'] > 2500){
	//            $array[] = $value;
	//        }else{
	//            continue;
	//        }
	//     }
	// }else if($tag === 'discount'){
	// 	foreach ($arr as $key => $value){
	//        if ($value['start'] < 40){
	//            $array[] = $value;
	//        }else{
	//            continue;
	//        }
	//     }
	// }else if($tag === 'love'){
	// 	foreach ($arr as $key => $value){
	//        if ($value['isLove'] === true){
	//            $array[] = $value;
	//        }else{
	//            continue;
	//        }
	//     }
	// }else{
	// 	foreach ($arr as $key => $value){
	//        if ($value['tag'] === $tag){
	//            $array[] = $value;
	//        }else{
	//            continue;
	//        }
	//     }
	// }

	switch ($tag){
		case 'all' :
			$array = $arr;
			break;
		case 'delicious' :
			foreach ($arr as $key => $value){
		       if ($value['stars'] > 2500){
		           $array[] = $value;
		       }else{
		           continue;
		       }
		    }
		    break;
		case 'discount' : 
			foreach ($arr as $key => $value){
		       if ($value['start'] < 35){
		           $array[] = $value;
		       }else{
		           continue;
		       }
		    }
		    break;
		case 'love' :
			foreach ($arr as $key => $value){
		       if ($value['isLove'] === true){
		           $array[] = $value;
		       }else{
		           continue;
		       }
	    	}
	    	break;
	    case 'seafood' :
	    case 'fruit' :
	    case 'sweet' :
	    case 'fast' :
	    case 'drink':
	    case 'chinese' :
	    	foreach ($arr as $key => $value){
		       if ($value['tag'] === $tag){
		           $array[] = $value;
		       }else{
		           continue;
		       }
		    }
		    break;
		default :
			foreach ($arr as $key => $value){
		       if (preg_match("|$tag|is",$value['name']) > 0 || preg_match("|$tag|is",$value['search']) > 0 ){
		           $array[] = $value;
		       }else{
		           continue;
		       }
		    }
		    if(count($array) == 0) $array = array('0' => array('id' => -1,'err' => true));
	}
	echo json_encode(array_slice($array,$start,5));
?>