<?php
	header("Access-Control-Allow-Origin:*");
	$arr = array (
		'0'=>'{
			"id" : 0,
			"name" : "麦当劳",
			"address":"徐汇区老沪闵路809号好又多正门附近",
			"tele" : "(021)54391019",
			"points" : [121.438202,31.143133],
			"logo" : "mc",
			"sales" : 1266,
			"start" : 20,
			"express" : 10,
			"stars" : 5,
			"time" : 20,
			"info" : "这是一家很牛逼的快餐店,能吃炸鸡"
		}',
		'1'=>'{
			"id" : 1,
			"name" : "天工麻辣烫",
			"address" : "百色路1059号",
			"tele" : "15821556661",
			"points" : [121.438202,31.143133],
			"logo" : "tgmlt",
			"sales" : 188,
			"start" : 5,
			"express" : 0,
			"stars" : 4,
			"time" : 12,
			"info" : "口味非常好,出菜快,汤底浓"
		}',
		'2'=>'{
			"id" : 2,
			"name" : "拼豆夜宵",
			"address" : "漕河泾南宁路485号",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "pdyx",
			"sales" : 87,
			"start" : 35,
			"express" : 9,
			"stars" : 3,
			"time" : 18,
			"info" : "量很大,包装好,味道鲜美"
		}',
		'3'=>'{
			"id" : 3,
			"name" : "黄焖鸡米饭",
			"address" : "(021)61843606",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "hmjmf",
			"sales" : 312,
			"start" : 20,
			"express" : 5,
			"stars" : 4,
			"time" : 38,
			"info" : "非常实在的黄焖鸡米饭,很香"
		}',
		'4'=>'{
			"id" : 4,
			"name" : "时尚烤吧",
			"address":"东兰路288号",
			"tele" : "15221979132",
			"points" : [121.438202,31.143133],
			"logo" : "sskb",
			"sales" : 288,
			"start" : 32,
			"express" : 0,
			"stars" : 5,
			"time" : 26,
			"info" : "你想吃的烧烤这里应有尽有"
		}',
		'5'=>'{
			"id" : 5,
			"name" : "麦当劳",
			"address":"徐汇区老沪闵路809号好又多正门附近",
			"tele" : "(021)54391019",
			"points" : [121.438202,31.143133],
			"logo" : "mc",
			"sales" : 1266,
			"start" : 20,
			"express" : 10,
			"stars" : 5,
			"time" : 20,
			"info" : "这是一家很牛逼的快餐店,能吃炸鸡"
		}',
		'6'=>'{
			"id" : 6,
			"name" : "天工麻辣烫",
			"address" : "百色路1059号",
			"tele" : "15821556661",
			"points" : [121.438202,31.143133],
			"logo" : "tgmlt",
			"sales" : 188,
			"start" : 5,
			"express" : 0,
			"stars" : 4,
			"time" : 12,
			"info" : "口味非常好,出菜快,汤底浓"
		}',
		'7'=>'{
			"id" : 7,
			"name" : "拼豆夜宵",
			"address" : "漕河泾南宁路485号",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "pdyx",
			"sales" : 87,
			"start" : 35,
			"express" : 9,
			"stars" : 3,
			"time" : 18,
			"info" : "量很大,包装好,味道鲜美"
		}',
		'8'=>'{
			"id" : 8,
			"name" : "黄焖鸡米饭",
			"address" : "(021)61843606",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "hmjmf",
			"sales" : 312,
			"start" : 20,
			"express" : 5,
			"stars" : 4,
			"time" : 38,
			"info" : "非常实在的黄焖鸡米饭,很香"
		}',
		'9'=>'{
			"id" : 9,
			"name" : "时尚烤吧",
			"address":"东兰路288号",
			"tele" : "15221979132",
			"points" : [121.438202,31.143133],
			"logo" : "sskb",
			"sales" : 288,
			"start" : 32,
			"express" : 0,
			"stars" : 5,
			"time" : 26,
			"info" : "你想吃的烧烤这里应有尽有"
		}',
		'10'=>'{
			"id" : 10,
			"name" : "麦当劳",
			"address":"徐汇区老沪闵路809号好又多正门附近",
			"tele" : "(021)54391019",
			"points" : [121.438202,31.143133],
			"logo" : "mc",
			"sales" : 1266,
			"start" : 20,
			"express" : 10,
			"stars" : 5,
			"time" : 20,
			"info" : "这是一家很牛逼的快餐店,能吃炸鸡"
		}',
		'11'=>'{
			"id" : 11,
			"name" : "天工麻辣烫",
			"address" : "百色路1059号",
			"tele" : "15821556661",
			"points" : [121.438202,31.143133],
			"logo" : "tgmlt",
			"sales" : 188,
			"start" : 5,
			"express" : 0,
			"stars" : 4,
			"time" : 12,
			"info" : "口味非常好,出菜快,汤底浓"
		}',
		'12'=>'{
			"id" : 12,
			"name" : "拼豆夜宵",
			"address" : "漕河泾南宁路485号",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "pdyx",
			"sales" : 87,
			"start" : 35,
			"express" : 9,
			"stars" : 3,
			"time" : 18,
			"info" : "量很大,包装好,味道鲜美"
		}',
		'13'=>'{
			"id" : 13,
			"name" : "黄焖鸡米饭",
			"address" : "(021)61843606",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "hmjmf",
			"sales" : 312,
			"start" : 20,
			"express" : 5,
			"stars" : 4,
			"time" : 38,
			"info" : "非常实在的黄焖鸡米饭,很香"
		}',
		'14'=>'{
			"id" : 14,
			"name" : "时尚烤吧",
			"address":"东兰路288号",
			"tele" : "15221979132",
			"points" : [121.438202,31.143133],
			"logo" : "sskb",
			"sales" : 288,
			"start" : 32,
			"express" : 0,
			"stars" : 5,
			"time" : 26,
			"info" : "你想吃的烧烤这里应有尽有"
		}',
		'15'=>'{
			"id" : 15,
			"name" : "麦当劳",
			"address":"徐汇区老沪闵路809号好又多正门附近",
			"tele" : "(021)54391019",
			"points" : [121.438202,31.143133],
			"logo" : "mc",
			"sales" : 1266,
			"start" : 20,
			"express" : 10,
			"stars" : 5,
			"time" : 20,
			"info" : "这是一家很牛逼的快餐店,能吃炸鸡"
		}',
		'16'=>'{
			"id" : 16,
			"name" : "天工麻辣烫",
			"address" : "百色路1059号",
			"tele" : "15821556661",
			"points" : [121.438202,31.143133],
			"logo" : "tgmlt",
			"sales" : 188,
			"start" : 5,
			"express" : 0,
			"stars" : 4,
			"time" : 12,
			"info" : "口味非常好,出菜快,汤底浓"
		}',
		'17'=>'{
			"id" : 17,
			"name" : "拼豆夜宵",
			"address" : "漕河泾南宁路485号",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "pdyx",
			"sales" : 87,
			"start" : 35,
			"express" : 9,
			"stars" : 3,
			"time" : 18,
			"info" : "量很大,包装好,味道鲜美"
		}',
		'18'=>'{
			"id" : 18,
			"name" : "黄焖鸡米饭",
			"address" : "(021)61843606",
			"tele" : "400655900",
			"points" : [121.438202,31.143133],
			"logo" : "hmjmf",
			"sales" : 312,
			"start" : 20,
			"express" : 5,
			"stars" : 4,
			"time" : 38,
			"info" : "非常实在的黄焖鸡米饭,很香"
		}',
		'19'=>'{
			"id" : 19,
			"name" : "时尚烤吧",
			"address":"东兰路288号",
			"tele" : "15221979132",
			"points" : [121.438202,31.143133],
			"logo" : "sskb",
			"sales" : 288,
			"start" : 32,
			"express" : 0,
			"stars" : 5,
			"time" : 26,
			"info" : "你想吃的烧烤这里应有尽有"
		}');
	// function JSON($array) { 
	//     arrayRecursive($array, 'urlencode', true); 
	//     $json = json_encode($array); 
	//     return urldecode($json); 
	// } 
	// function arrayRecursive(&$array, $function, $apply_to_keys_also = false){ 
	//     static $recursive_counter = 0; 
	//     if (++$recursive_counter > 1000) { 
	//         die('possible deep recursion attack'); 
	//     } 
	//     foreach ($array as $key => $value) { 
	//         if (is_array($value)) { 
	//             arrayRecursive($array[$key], $function, $apply_to_keys_also); 
	//         } else { 
	//             $array[$key] = $function($value); 
	//         }                                        
	//         if ($apply_to_keys_also && is_string($key)) { 
	//             $new_key = $function($key); 
	//             if ($new_key != $key) { 
	//                 $array[$new_key] = $array[$key]; 
	//                 unset($array[$key]); 
	//             } 
	//         } 
	//     } 
	//     $recursive_counter--; 
	// }        
	$start = $_POST["start"];
	$end = $_POST["end"];   
	echo json_encode(array_slice($arr,$start,$end));
?>