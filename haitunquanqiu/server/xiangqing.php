
<?php
header("Content-type:text/html;charset=utf-8");
$goods_id =$_REQUEST["id"];
// print_r($goods_id);
$db = mysqli_connect("127.0.0.1","root","","haitunquanqiu");
$sql="SELECT * FROM liebiao WHERE id='$goods_id'";
$result=mysqli_query($db,$sql);
$data=mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>