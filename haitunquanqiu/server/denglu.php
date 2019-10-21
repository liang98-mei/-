<?php
$db=mysqli_connect("127.0.0.1","root","","haitunquanqiu");

$username = $_REQUEST["username"];
$password = $_REQUEST["password"];
 

$sql="SELECT *FROM  urse WHERE username = '$username'";
$reult = mysqli_query($db,$sql);

if(mysqli_num_rows($reult)==0){
    $response['status']="error";
    $response["msg"]="该用户不存在!!";
    echo json_encode($response,true);
}else{
    $data=mysqli_fetch_all($reult,MYSQLI_ASSOC);
    $data= $data[0];
if($data["password"] != $password)
{
  $response["status"] = "error";
  $response["msg"] = "密码不正确！！";
  echo json_encode($response, true);
}else{
    $response["status"] = "success";
    $response["msg"] = "登录成功";
    echo json_encode($response, true);
  }
}

?>