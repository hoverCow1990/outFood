<?php
	header('Access-Control-Allow-Origin:*');
	$arr = array (
		'0' => array(
			'id' => 0,
			'name' => '麦当劳',
			'address' =>'徐汇区老沪闵路809号好又多正门附近',
			'tele' => '(021)54391019',
			'logo' => 'mc',
			'start' => 20,
			'express' => 10,
			'stars' => 2800,
			'time' => 20,
			'tag' => 'fast',
			'isLove' => true,
			'info' => '这是一家很牛逼的快餐店,能吃炸鸡',
			'menu' => array(
				'0' => '{"id":0,"name":"经典麦辣鸡腿汉堡","score":98,"sell":478,"value":17}',
				'1' => '{"id":1,"name":"麦辣鸡翅2块","score":86,"sell":372,"value":11}',
				'2' => '{"id":2,"name":"麦乐鸡5块","score":78,"sell":576,"value":11}',
				'3' => '{"id":3,"name":"麦辣鸡翅4块","score":86,"sell":285,"value":22}',
				'4' => '{"id":4,"name":"薯条","score":76,"sell":198,"value":12}',
				'5' => '{"id":5,"name":"香骨鸡腿","score":87,"sell":188,"value":12}',
				'6' => '{"id":6,"name":"这么大鸡排","score":78,"sell":138,"value":12}',
				'7' => '{"id":7,"name":"麦辣鸡腿堡中套餐","score":86,"sell":210,"value":30}',
				'8' => '{"id":8,"name":"板烧鸡腿堡中套餐","score":92,"sell":365,"value":29}',
				'9' => '{"id":9,"name":"烟肉蛋满分配薯饼","score":57,"sell":142,"value":22}',
				'10' => '{"id":10,"name":"猪柳蛋配脆薯饼","score":85,"sell":281,"value":24}'),
		),
		'1' => array(
			'id' => 1,
			'name' => '天工麻辣烫',
			'address' => '百色路1059号',
			'tele' => '15821556661',
			'logo' => 'tgmlt',
			'start' => 5,
			'express' => 0,
			'stars' => 2300,
			'time' => 12,
			'tag' => 'chinese',
			'isLove' => false,
			'info' => '口味非常好,出菜快,汤底浓',
			'menu' => array(
				'0' => '{"id":0,"name":"经典麦辣鸡腿汉堡","score":98,"sell":478,"value":17}',
				'1' => '{"id":1,"name":"麦辣鸡翅2块","score":86,"sell":372,"value":11}',
				'2' => '{"id":2,"name":"麦乐鸡5块","score":78,"sell":576,"value":11}',
				'3' => '{"id":3,"name":"麦辣鸡翅4块","score":86,"sell":285,"value":22}',
				'4' => '{"id":4,"name":"薯条","score":76,"sell":198,"value":12}',
				'5' => '{"id":5,"name":"香骨鸡腿","score":87,"sell":188,"value":12}',
				'6' => '{"id":6,"name":"这么大鸡排","score":78,"sell":138,"value":12}',
				'7' => '{"id":7,"name":"麦辣鸡腿堡中套餐","score":86,"sell":210,"value":30}',
				'8' => '{"id":8,"name":"板烧鸡腿堡中套餐","score":92,"sell":365,"value":29}',
				'9' => '{"id":9,"name":"烟肉蛋满分配薯饼","score":57,"sell":142,"value":22}',
				'10' => '{"id":10,"name":"猪柳蛋配脆薯饼","score":85,"sell":281,"value":24}'),
		)
	);
	
	$id = $_POST["id"];

	echo json_encode($arr[$id]);
?>