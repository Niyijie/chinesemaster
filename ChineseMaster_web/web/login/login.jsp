<%--
  Created by IntelliJ IDEA.
  User: niyijie
  Date: 2018/11/16
  Time: 8:33 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" %>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChineseMaster - your best chinese teacher</title>
  <!-- Favicons -->
  <link href="../img/favicon.png" rel="icon">
  <link href="../img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Bootstrap core CSS -->
  <link href="../lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!--external css-->
  <link href="../lib/font-awesome/css/font-awesome.css" rel="stylesheet" />
  <!-- Custom styles for this template -->
  <link href="../css/style.css" rel="stylesheet">
  <link href="../css/style-responsive.css" rel="stylesheet">
</head>

<body>
<!-- **********************************************************************************************************************************************************
    MAIN CONTENT
    *********************************************************************************************************************************************************** -->
<div id="login-page">
  <div class="container">
    <form class="form-login" action="logConfirm.jsp" name="log_form" id="log_form_id" method="get">
      <h2 class="form-login-heading">ChineseMaster后台管理系统</h2>
      <div class="login-wrap">
        <input type="text" class="form-control" name="userId" placeholder="User ID" >
        <br>
        <input type="password" class="form-control" name="userPassword"placeholder="Password">
        <label class="checkbox">
          <a>&#160&#160&#160&#160&#160&#160</a>
          <input type="checkbox" value="remember-me"> 记住密码
          <span class="pull-right">
            <a data-toggle="modal" href="login.jsp#myModal"> 忘记密码?</a>
            </span>
        </label>
        <button class="btn btn-theme btn-block" onclick="login_post()" type="submit"><i class="fa fa-lock"></i> 登陆</button>
        <hr>
        <!-- Modal -->
        <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="myModal" class="modal fade">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                <h4 class="modal-title">找回密码</h4>
              </div>
              <div class="modal-body">
                <p>在下方输入你的E-mail找回密码</p>
                <input type="text" name="email" placeholder="Email" autocomplete="off" class="form-control placeholder-no-fix">
              </div>
              <div class="modal-footer">
                <button data-dismiss="modal" class="btn btn-default" type="button">取消</button>
                <button class="btn btn-theme" type="button">确定</button>
              </div>
            </div>
          </div>
        </div>
        <!-- modal -->
      </div>
    </form>
  </div>
</div>
<script src="../lib/jquery/jquery.min.js"></script>
<script src="../lib/bootstrap/js/bootstrap.min.js"></script>
<script type="text/javascript" src="../lib/jquery.backstretch.min.js"></script>

<script>
    $.backstretch("../img/login-bg.jpg", {
        speed: 500
    });
</script>

<script language="javascript">
    function login_post()
    {
        var form = document.getElementById("log_form_id");
        form.submit();
    }
</script>
</body>
</html>
