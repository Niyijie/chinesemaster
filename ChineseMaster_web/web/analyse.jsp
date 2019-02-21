<%--
  Created by IntelliJ IDEA.
  User: niyijie
  Date: 2018/11/16
  Time: 10:28 PM
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
                        <li><a href="advanced_form_components.jsp">文章管理</a></li>
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
        <section class="wrapper site-min-height">
            <h3><i class="fa fa-angle-right"></i>业务分析</h3>
            <!-- page start-->
            <div id="morris">
                <div class="row mt">
                    <div class="col-lg-6">
                        <div class="content-panel">
                            <h4><i class="fa fa-angle-right"></i>用户活跃数</h4>
                            <div class="panel-body">
                                <div id="hero-graph" class="graph"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="content-panel">
                            <h4><i class="fa fa-angle-right"></i>学习资源数量</h4>
                            <div class="panel-body">
                                <div id="hero-bar" class="graph"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row mt">
                    <div class="col-lg-6">
                        <div class="content-panel">
                            <h4><i class="fa fa-angle-right"></i>订单分析</h4>
                            <div class="panel-body">
                                <div id="hero-area" class="graph"></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="content-panel">
                            <h4><i class="fa fa-angle-right"></i>用户群体分析</h4>
                            <div class="panel-body">
                                <div id="hero-donut" class="graph"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- page end-->
        </section>
    </section>
</section>


<script class="include" type="text/javascript" src="lib/jquery.dcjqaccordion.2.7.js"></script>
<!--common script for all pages-->
<script src="lib/common-scripts.js"></script>
<script src="lib/jquery.scrollTo.min.js"></script>

<script src="lib/raphael/raphael.min.js"></script>
<script src="lib/morris/morris.min.js"></script>
<script src="lib/morris-conf.js"></script>

<script src="index/UserManager.js"></script>

</body>

</html>
