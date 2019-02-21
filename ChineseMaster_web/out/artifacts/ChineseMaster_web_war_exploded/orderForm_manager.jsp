<%--
  Created by IntelliJ IDEA.
  User: niyijie
  Date: 2018/11/16
  Time: 10:31 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ChineseMaster - your best chinese teacher</title>

    <!-- Favicons -->
    <link href="img/head.png" rel="icon">

    <!-- jquery -->
    <script src="lib/jquery/jquery.min.js"></script>
    <script src="lib/bootstrap/js/bootstrap.min.js"></script>
    <!-- Bootstrap core CSS -->
    <link href="lib/bootstrap/css/bootstrap.min.css" rel="stylesheet">

    <script src="lib/jquery/jquery.js"></script>
    <script src="lib/bootstrap/js/bootstrap.js"></script>
    <link href="lib/bootstrap/css/bootstrap.css" rel="stylesheet" />

    <!-- Custom styles for this template -->
    <link href="css/style.css" rel="stylesheet">

    <!-- 引入bootstrap-table样式 -->
    <link href="lib/bootstrap-table-develop/dist/bootstrap-table.min.css" rel="stylesheet">
    <script src="lib/bootstrap-table-develop/dist/bootstrap-table.min.js"></script>
    <script src="lib/bootstrap-table-develop/src/locale/bootstrap-table-zh-CN.js"></script>
</head>

<body>
<section id="container">
    <!-- **********************************************************************************************************************************************************
        TOP BAR CONTENT & NOTIFICATIONS
        *********************************************************************************************************************************************************** -->
    <header class="header black-bg">
        <div class="sidebar-toggle-box">
            <div class="fa fa-bars tooltips" data-placement="right" data-original-title="Toggle Navigation"></div>
        </div>
        <!--logo start-->
        <a href="index/index.jsp" class="logo"><b>Chinese<span>Master</span></b></a>
        <!--logo end-->

        <div class="top-menu">
            <ul class="nav pull-right top-menu">
                <li><a class="logout" href="login/login.jsp">安全退出</a></li>
            </ul>
        </div>
    </header>

    <!--main content -->
    <aside>
        <div id="sidebar" class="nav-collapse ">
            <ul class="sidebar-menu" id="nav-accordion">
                <p class="centered"><a href="index/index.jsp"><img src="img/logo.png" class="img-circle" width="70"></a></p>
                <h5 class="centered">ChineseMaster</h5>

                <li class="sub-menu">
                    <a href="index/index.jsp">
                        <i class="fa fa-dashboard"></i>
                        <span>用户管理</span>
                    </a>

                </li>

                <li class="sub-menu">
                    <a href="javascript:;">
                        <i class="fa fa-desktop"></i>
                        <span>资源管理</span>
                    </a>
                    <ul class="sub">
                        <li><a href="word_manage/word_manager.jsp">字词管理</a></li>
                        <li><a href="satuations_manager.jsp">情景对话管理</a></li>
                        <li><a href="article_manager.jsp">文章管理</a></li>
                    </ul>
                </li>
                </li>
                <li class="sub-menu">
                    <a href="orderForm_manager.jsp">
                        <i class="fa fa-th"></i>
                        <span>订单管理</span>
                    </a>
                </li>
                <li>
                    <a href="javascript:;">
                        <i class="fa fa-envelope"></i>
                        <span>消息通知</span>
                    </a>
                </li>
                <li class="sub-menu">
                    <a href="analyse.jsp">
                        <i class=" fa fa-bar-chart-o"></i>
                        <span>业务分析</span>
                    </a>
                </li>
                <li class="sub-menu">
                    <a href="javascript:;">
                        <i class="fa fa-cogs"></i>
                        <span>系统管理</span>
                    </a>
                    <ul class="sub">
                        <li><a href="form_component.jsp">权限管理</a></li>
                        <li><a href="advanced_form_components.jsp">用户组管理</a></li>
                        <li><a href="advanced_form_components.jsp">操作日志管理</a></li>
                    </ul>
                </li>
            </ul>
            <!-- sidebar menu end-->
        </div>
    </aside>
    <!--sidebar end-->
    <!-- **********************************************************************************************************************************************************
        MAIN CONTENT
        *********************************************************************************************************************************************************** -->
    <!--main content start-->
    <section id="main-content">
        <section class="wrapper">

            <div>
                <div class="panel-body" style="padding-bottom:0px;">
                    <div class="panel panel-default">
                        <div class="panel-heading">查询条件</div>
                        <div class="panel-body">
                            <form id="formSearch" class="form-horizontal">
                                <div class="form-group" style="margin-top:15px">
                                    <label class="control-label col-sm-1" for="txt_search_departmentname">订单号</label>
                                    <div class="col-sm-3">
                                        <input type="text" class="form-control" id="txt_search_departmentname">
                                    </div>
                                    <label class="control-label col-sm-1" for="txt_search_statu">客户ID</label>
                                    <div class="col-sm-3">
                                        <input type="text" class="form-control" id="txt_search_statu">
                                    </div>
                                    <div class="col-sm-4" style="text-align:left;">
                                        <button type="button" style="margin-left:50px" id="btn_query" class="btn btn-primary">查询</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div id="toolbar" class="btn-group">
                        <button id="btn_edit" type="button" class="btn btn-default">
                            <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>修改
                        </button>
                        <button id="btn_delete" type="button" class="btn btn-default">
                            <span class="glyphicon glyphicon-remove" aria-hidden="true"></span>删除
                        </button>
                    </div>
                    <table id="tb_departments"></table>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消
                        </button>
                        <button type="submit" class="btn btn-primary" id="add_submit">
                            添加
                        </button><span id="tip"> </span>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal -->
            </div>
            </form>
            </div>
            </div>
            </div>
        </section>
    </section>
</section>


<script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
<!--common script for all pages-->
<script src="lib/common-scripts.js"></script>
<script src="lib/jquery.scrollTo.min.js"></script>

<script src="orderFormManager.js"></script>

</body>

</html>
