<?php
	header("Access-Control-Allow-Origin:*");
	$arr = array (
		'0'=>'{
			"name" : "胖胖的牛牛哦",
  			"tele" : "13636556375",
  			"adress" : "长桥八村27号",
        "allAdress" : [
          "长桥八村27号",
          "金沙江路823号"
        ],
  			"balance" : 52.2,
  			"friend" : [],
  			"love" : [
          {
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
          },
          {
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
          }
        ],
  			"redPacket" : [
  				{
  					"value" : 2,
  					"time" : "2017-3-25"	
  				},
  				{
  					"value" : 5,
  					"time" : "2017-3-25"	
  				}
  			],
  			"order" : [
  				{},
  				{},
  				{}
  			]
		}');     
	echo json_encode($arr);
?>