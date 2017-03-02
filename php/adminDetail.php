<?php
	header("Access-Control-Allow-Origin:*");
	$arr = array (
		'0'=>'{
			"name" : "胖胖的牛牛哦",
  			"tele" : "13636556375",
  			"adress" : "长桥八村27号",
  			"balance" : 52.2,
  			"friend" : [],
  			"love" : [],
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