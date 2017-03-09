<?php
	header("Access-Control-Allow-Origin:*");
	$arr = array (
			"name" => "胖胖的牛牛哦",
  		"tele" => "13636556375",
  		"address" => "徐汇区长桥八村27号",
      "allAddress" => array('0' => "徐汇区长桥八村27号",'1' => "普陀区金沙江路823号"),
      "adminPoints" => null,
  		"balance" => 52.2,
  		"redPacket" => array(
        '0' => array(
          "value" => 2,
          "time" => "2017-3-25" 
        ),
        '1' => array(
          "value" => 5,
          "time" => "2017-3-29" 
        ),
      ),
  		"order" => array()
  );     
	echo json_encode($arr);
?>