<?php
	header('Access-Control-Allow-Origin:*');
	$arr = array (
		'0' => array(
			'id' => 0,
			'name' => '麦当劳',
			'address' =>'徐汇区老沪闵路809号好又多正门附近',
			'tele' => '(021)54391019',
			'logo' => 'mc',
			'sales' => 1266,
			'start' => 20,
			'express' => 10,
			'stars' => 2800,
			'time' => 12,
			'tag' => 'fast',
			'isLove' => true,
			'search' => '快餐,炸鸡,mc,肉,夜宵'
		),
		'1' => array(
			'id' => 1,
			'name' => '天工麻辣烫',
			'address' => '百色路1059号',
			'tele' => '15821556661',
			'logo' => 'tgmlt',
			'sales' => 188,
			'start' => 5,
			'express' => 0,
			'stars' => 2300,
			'time' => 15,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '火锅,中餐,烧烤,夜宵,贡丸,豆腐'
		),
		'2'=> array(
			'id' => 2,
			'name' => '拼豆夜宵',
			'address' => '漕河泾南宁路485号',
			'tele' => '400655900',
			'logo' => 'pdyx',
			'sales' => 87,
			'start' => 35,
			'express' => 9,
			'stars' => 1700,
			'time' => 18,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '包子,中餐,炒饭,炒菜,花菜,扇贝'
		),
		'3'=> array(
			'id' => 3,
			'name' => '黄焖鸡米饭',
			'address' => '石龙路128号',
			'tele' => '400655900',
			'logo' => 'hmjmf',
			'sales' => 312,
			'start' => 20,
			'express' => 5,
			'stars' => 2320,
			'time' => 17,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '红烧,中餐,炒菜,鸡肉,炒饭,排骨'
		),
		'4'=> array(
			'id' => 4,
			'name' => '时尚烤吧',
			'address'=>'东兰路288号',
			'tele' => '15221979132',
			'logo' => 'sskb',
			'sales' => 288,
			'start' => 32,
			'express' => 0,
			'stars' => 2572,
			'time' => 32,
			'tag' => 'chinese',
			'isLove' => true,
			'search' => '鸡翅,烤肉,羊肉串,烧烤,肉,夜宵,玉米'
		),
		'5' => array(
			'id' => 5,
			'name' => '觅甜记',
			'address' =>'徐汇区百色路1038号',
			'tele' => '(021)54389693',
			'logo' => 'mtj',
			'sales' => 623,
			'start' => 15,
			'express' => 8,
			'stars' => 2520,
			'time' => 10,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '甜品,红豆,榴莲,芒果,冰品,奶油,红豆'
		),
		'6' => array(
			'id' => 6,
			'name' => '阿姨奶茶',
			'address' => '上中西路林云1街坊',
			'tele' => '13262549199',
			'logo' => 'aync',
			'sales' => 378,
			'start' => 10,
			'express' => 5,
			'stars' => 2329,
			'time' => 18,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '甜品,波霸,丝袜,饮料,冰品'
		),
		'7'=> array(
			'id' => 7,
			'name' => '千岛湖小海鲜',
			'address' => '梅陇路599号',
			'tele' => '1312222923',
			'logo' => 'qdhxhx',
			'sales' => 128,
			'start' => 90,
			'express' => 12,
			'stars' => 2780,
			'time' => 25,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '螃蟹,螺丝,新鲜,中餐,生蚝'
		),
		'8'=> array(
			'id' => 8,
			'name' => '105度海鲜面',
			'address' => '石龙路951号103室',
			'tele' => '17321091802',
			'logo' => '105dhxm',
			'sales' => 76,
			'start' => 12,
			'express' => 0,
			'stars' => 1380,
			'time' => 16,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '海味,面食,中餐,意面'
		),
		'9'=> array(
			'id' => 9,
			'name' => '猫山王榴莲甜品',
			'address'=>'上中西路280号',
			'tele' => '13701793189',
			'logo' => 'mswlltp',
			'sales' => 621,
			'start' => 20,
			'express' => 10,
			'stars' => 2900,
			'time' => 19,
			'tag' => 'sweet',
			'isLove' => true,
			'search' => '奶茶,新鲜,饮料,冰品'
		),
		'10' => array(
			'id' => 10,
			'name' => '韩式啤酒炸鸡',
			'address' =>'罗秀路321号',
			'tele' => '13611821395',
			'logo' => 'hspjzj',
			'sales' => 878,
			'start' => 20,
			'express' => 0,
			'stars' => 2377,
			'time' => 22,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '快餐,韩国,韩国料理,肉,夜宵'
		),
		'11' => array(
			'id' => 11,
			'name' => '必胜宅急送',
			'address' => '罗秀东路128号',
			'tele' => '4009208809',
			'logo' => 'bszjs',
			'sales' => 920,
			'start' => 50,
			'express' => 18,
			'stars' => 2900,
			'time' => 18,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '西餐,牛排,意面,披萨,甜品,饮料,鸡翅,夜宵'
		),
		'12'=> array(
			'id' => 12,
			'name' => '拿渡麻辣香锅',
			'address' => '老沪闵路809号',
			'tele' => '(021)54828277',
			'logo' => 'ndmlxg',
			'sales' => 167,
			'start' => 25,
			'express' => 0,
			'stars' => 1978,
			'time' => 25,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '中餐,肉'
		),
		'13'=> array(
			'id' => 13,
			'name' => '鲜丰水果',
			'address' => '百色路1025号',
			'tele' => '(021)62201297',
			'logo' => 'xfsg',
			'sales' => 929,
			'start' => 30,
			'express' => 0,
			'stars' => 2189,
			'time' => 50,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '新鲜'
		),
		'14'=> array(
			'id' => 14,
			'name' => '王记东北人',
			'address'=>'虹梅南路126弄311号',
			'tele' => '18601746882',
			'logo' => 'wjdbr',
			'sales' => 807,
			'start' => 10,
			'express' => 5,
			'stars' => 2593,
			'time' => 15,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '炒菜,鱼香肉丝,刀豆土豆,回锅肉,中餐'
		),
		'15'=> array(
			'id' => 15,
			'name' => '吉祥馄饨',
			'address' => '罗香路15号',
			'tele' => '(021)64760567',
			'logo' => 'jxht',
			'sales' => 1328,
			'start' => 10,
			'express' => 3,
			'stars' => 1896,
			'time' => 10,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '面食,中餐'
		),
		'16'=> array(
			'id' => 16,
			'name' => '棒约翰比萨',
			'address' => '石龙路981号',
			'tele' => '4008887272',
			'logo' => 'byhbs',
			'sales' => 1287,
			'start' => 35,
			'express' => 10,
			'stars' => 2681,
			'time' => 22,
			'tag' => 'fast',
			'isLove' => true,
			'search' => '披萨,西餐,快餐,香肠,牛排,意面,肉'
		),
		'17'=> array(
			'id' => 17,
			'name' => '福荣祥烧腊',
			'address'=>'上中西路9号',
			'tele' => '13641603087',
			'logo' => 'frxsl',
			'sales' => 1588,
			'start' => 23,
			'express' => 5,
			'stars' => 1559,
			'time' => 18,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '港式,叉烧,烧鹅,烤肉,烤鸡,中餐,肉,炒饭'
		),
		'18' => array(
			'id' => 18,
			'name' => '龙南水果店',
			'address' =>'黄石路32号底层103室',
			'tele' => '15214388305',
			'logo' => 'lnsgd',
			'sales' => 296,
			'start' => 10,
			'express' => 6,
			'stars' => 1793,
			'time' => 25,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '新鲜'
		),
		'19' => array(
			'id' => 19,
			'name' => '阳澄湖大闸蟹',
			'address' => '航东路32号',
			'tele' => '13601650886',
			'logo' => 'ychdzx',
			'sales' => 46,
			'start' => 200,
			'express' => 0,
			'stars' => 2392,
			'time' => 200,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '螃蟹,海鲜,新鲜'
		),
		'20'=> array(
			'id' => 20,
			'name' => '明康生鲜',
			'address' => '蒙自西路2号',
			'tele' => '15800668614',
			'logo' => 'mksx',
			'sales' => 1162,
			'start' => 120,
			'express' => 20,
			'stars' => 2189,
			'time' => 22,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '海鲜,新鲜,中餐,生蚝,螃蟹,铁板,火锅'
		),
		'21'=> array(
			'id' => 21,
			'name' => 'HEY JUICE 茶桔',
			'address' => '百色路1088号',
			'tele' => '18217233052',
			'logo' => 'heyjuicecj',
			'sales' => 274,
			'start' => 25,
			'express' => 2,
			'stars' => 2436,
			'time' => 30,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '饮料,甜品,冰品,奶茶'
		),
		'22'=> array(
			'id' => 22,
			'name' => '卡漫莫尼蛋糕',
			'address'=>'龙州路995号',
			'tele' => '15270148288',
			'logo' => 'kmmndg',
			'sales' => 128,
			'start' => 100,
			'express' => 0,
			'stars' => 2098,
			'time' => 120,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '甜品,奶油,新鲜'
		),
		'23'=> array(
			'id' => 23,
			'name' => '星巴克咖啡',
			'address'=>'古美路569号',
			'tele' => '(021)54270007',
			'logo' => 'xbkkf',
			'sales' => 1209,
			'start' => 35,
			'express' => 10,
			'stars' => 2628,
			'time' => 15,
			'tag' => 'drink',
			'isLove' => true,
			'search' => '饮料,冰品,蛋糕,三明治'
		),
		'24'=> array(
			'id' => 24,
			'name' => '肯德基宅急送',
			'address' => '田林路1号',
			'tele' => '4008823823',
			'logo' => 'kdjzjs',
			'sales' => 986,
			'start' => 35,
			'express' => 10,
			'stars' => 2520,
			'time' => 10,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '快餐,炸鸡,西餐,kfc,KFC,肉,夜宵'
		),
		'25'=> array(
			'id' => 25,
			'name' => '蔡先生汤包馆',
			'address' => '罗香路90号',
			'tele' => '13601752712',
			'logo' => 'cxstbg',
			'sales' => 865,
			'start' => 20,
			'express' => 2,
			'stars' => 2508,
			'time' => 13,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '中餐,小笼包,面食,炒菜,春卷,包子,馒头,炒饭'
		),
		'26'=> array(
			'id' => 26,
			'name' => '蜀地源冒菜',
			'address'=>'罗秀路861号',
			'tele' => '15800454154',
			'logo' => 'sdymc',
			'sales' => 294,
			'start' => 45,
			'express' => 0,
			'stars' => 2174,
			'time' => 50,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '火锅,中餐,量大'
		),
		'27' => array(
			'id' => 27,
			'name' => '鸡鸡蛙蛙饭饭',
			'address' =>'华发路276号',
			'tele' => '13916346739',
			'logo' => 'jjwwff',
			'sales' => 209,
			'start' => 26,
			'express' => 2,
			'stars' => 1980,
			'time' => 25,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '牛蛙,炒饭,中餐,小龙虾,肉,夜宵'
		),
		'28' => array(
			'id' => 28,
			'name' => '小杨龙虾海鲜馆',
			'address' => '龙州路475号',
			'tele' => '17317563672',
			'logo' => 'xylxhxg',
			'sales' => 98,
			'start' => 60,
			'express' => 6,
			'stars' => 1300,
			'time' => 20,
			'tag' => 'seafood',
			'isLove' => false,
			'search' => '海鲜,海味,小龙虾,肉,夜宵'
		),
		'29'=> array(
			'id' => 29,
			'name' => '东方既白',
			'address' => '老沪闵路809号',
			'tele' => '(021)54288753',
			'logo' => 'dfjb',
			'sales' => 892,
			'start' => 25,
			'express' => 8,
			'stars' => 2682,
			'time' => 13,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '中餐,快餐,油条,夜宵',
		),
		'30'=> array(
			'id' => 30,
			'name' => '豪大大鸡排',
			'address' => '罗秀路871号',
			'tele' => '15618037970',
			'logo' => 'hddjp',
			'sales' => 475,
			'start' => 15,
			'express' => 3,
			'stars' => 2368,
			'time' => 8,
			'tag' => 'fast',
			'isLove' => false,
			'search' => '炸鸡,快餐,奶茶,肉',
		),
		'31'=> array(
			'id' => 31,
			'name' => '龙门花甲',
			'address'=>'天等路478号',
			'tele' => '13761035542',
			'logo' => 'lmhj',
			'sales' => 286,
			'start' => 70,
			'express' => 8,
			'stars' => 2186,
			'time' => 23,
			'tag' => 'seafood',
			'isLove' => true,
			'search' => '中餐,海鲜,新鲜,意面,肉'
		),
		'32'=> array(
			'id' => 32,
			'name' => '亮亮桂林米粉',
			'address'=>'罗秀路861号',
			'tele' => '15800454154',
			'logo' => 'llglmf',
			'sales' => 139,
			'start' => 12,
			'express' => 2,
			'stars' => 1665,
			'time' => 6,
			'tag' => 'chinese',
			'isLove' => false,
			'search' => '面食,中餐,夜宵,炒饭'
		),
		'33' => array(
			'id' => 33,
			'name' => '百果园',
			'address' =>'龙吴路1333号',
			'tele' => '(021)54355098',
			'logo' => 'bgy',
			'sales' => 465,
			'start' => 100,
			'express' => 0,
			'stars' => 2681,
			'time' => 50,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '水果,新鲜'
		),
		'34' => array(
			'id' => 34,
			'name' => '85度C',
			'address' => '石龙路951号',
			'tele' => '(021)64756328',
			'logo' => '85dc',
			'sales' => 697,
			'start' => 35,
			'express' => 5,
			'stars' => 2517,
			'time' => 12,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '珍珠奶茶,波霸,丝袜,奶绿,饮料,甜品'
		),
		'35'=> array(
			'id' => 35,
			'name' => 'Coco都可茶饮',
			'address' => '凌云路401号',
			'tele' => '15021467305',
			'logo' => 'cocodkcy',
			'sales' => 2192,
			'start' => 15,
			'express' => 2,
			'stars' => 2980,
			'time' => 10,
			'tag' => 'drink',
			'isLove' => false,
			'search' => '珍珠奶茶,波霸,丝袜,奶绿,饮料,冰品,甜品'
		),
		'36'=> array(
			'id' => 36,
			'name' => '味千拉面',
			'address' => '老沪闵路809号',
			'tele' => '(021)52231397',
			'logo' => 'wqlm',
			'sales' => 757,
			'start' => 35,
			'express' => 7,
			'stars' => 2612,
			'time' => 23,
			'tag' => 'fast',
			'isLove' => true,
			'search' => '日式料理,面食,肉'
		),
		'37'=> array(
			'id' => 37,
			'name' => '绿之源果品批发行',
			'address'=>'天等路478号',
			'tele' => '13761035542',
			'logo' => 'lzygppf',
			'sales' => 95,
			'start' => 130,
			'express' => 10,
			'stars' => 2007,
			'time' => 65,
			'tag' => 'fruit',
			'isLove' => false,
			'search' => '水果,新鲜,量大'
		),
		'38'=> array(
			'id' => 38,
			'name' => '诺心LECAKE',
			'address'=>'宛平南路420弄4号',
			'tele' => '4001578578',
			'logo' => 'nxlecake',
			'sales' => 428,
			'start' => 120,
			'express' => 8,
			'stars' => 2619,
			'time' => 150,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '蛋糕,甜品,冰淇淋,冷饮'
		),
		'39'=> array(
			'id' => 39,
			'name' => '凯司令',
			'address'=>'百色路1076号',
			'tele' => '13917888417',
			'logo' => 'ksl',
			'sales' => 782,
			'start' => 50,
			'express' => 3,
			'stars' => 1988,
			'time' => 60,
			'tag' => 'sweet',
			'isLove' => false,
			'search' => '蛋糕,甜品,冰淇淋,冷饮'
		)
	);
	
	$tag = $_POST["tag"];
	$start = $_POST["start"];
	
 	$array = array();

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