<%--
  Created by IntelliJ IDEA.
  User: niyijie
  Date: 2018/11/17
  Time: 9:42 AM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ page import="java.sql.*" %>
<html>
<head>
    <title></title>

<script language="JavaScript">
    function login_error() {
        alert("账号密码错误，请重新输入!");
        window.location.href="login.jsp";
    }

    function input_error() {
        alert("账号密码不能为空，请重新输入!");
        window.location.href="login.jsp";
    }
</script>
</head>
<body>


    <%
        //url指向要访问的数据库
        String url =  "jdbc:mysql://127.0.0.1:3306/chineseMaster?useUnicode=true&characterEncoding=utf-8&useSSL=false";
        //数据库用户
        String user = "root";
        //数据库用户密码
        String password = "niyijie221";
        //获取表单信息
        String id = request.getParameter("userId");
        String pd = request.getParameter("userPassword");
        System.out.println(id + ":" + pd);

        if (id.equals("") || pd.equals(""))
        {
            out.println("<script> input_error();</script>");
        }


        try {
            //加载驱动
            String driver = "com.mysql.jdbc.Driver";
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url, user, password);
            Statement statement = conn.createStatement();

            String sql = "SELECT psd FROM account_manager WHERE ID = \"" +id+ "\";";
            ResultSet rs = statement.executeQuery(sql);

            String psd = "******";

            if(rs.next())
            {
                psd = rs.getString(1);
            }
            if (psd.equals(pd))
            {
                %>
                <jsp:forward page="../index/index.jsp"/>
    <%
            }
            else
            {
                out.println("<script> login_error();</script>");
            }
        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    %>
</body>
</html>
