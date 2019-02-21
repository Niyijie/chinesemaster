import atg.taglib.json.util.JSONArray;
import atg.taglib.json.util.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class User_Date_Server extends HttpServlet {

        @Override
        public void init() throws ServletException {

        }

        @Override
        protected void service(HttpServletRequest req, HttpServletResponse resp)
                throws ServletException, IOException {

            String method = req.getParameter("method");
            if ("get_user_date".equals(method))
            {
                get_user_Date(req,resp);
            }
            else if ("get_word_date".equals(method)) {
                this.get_word_Date(req, resp);
            }
        }

        protected void doPost(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException {
            System.out.println("doPost--------");    //打印请求类型
            request.setCharacterEncoding("utf-8");
            response.setContentType("text/html;charset=utf-8");

            String name=request.getParameter("name");
            System.out.println("name------"+name);    //打印获取的参数


        }

        private void get_user_Date(HttpServletRequest request, HttpServletResponse response)
                throws ServletException, IOException {
            //url指向要访问的数据库
            String url =  "jdbc:mysql://127.0.0.1:3306/chineseMaster?useUnicode=true&characterEncoding=utf-8&useSSL=false";
            //数据库用户
            String user = "root";
            //数据库用户密码
            String password = "niyijie221";

            try {
                PrintWriter out = response.getWriter();
                //加载驱动
                String driver = "com.mysql.jdbc.Driver";
                Class.forName(driver);
                Connection conn = DriverManager.getConnection(url, user, password);
                Statement statement = conn.createStatement();

                String sql = "SELECT * FROM user_date;";
                ResultSet rs = statement.executeQuery(sql);
                int total = 0;

                JSONObject outData = new JSONObject();
                JSONArray jsonArray = new JSONArray();

                while (rs.next()) {

                    total++;
                    JSONObject node = new JSONObject();
                    String Name = rs.getString(1);
                    String ID = rs.getString(4);
                    String Contact = rs.getString(3);
                    String StudyNum = rs.getString(5);
                    String RegisterTime = rs.getString(6);
                    String LastLoinTime = rs.getString(7);

                    node.put("Name",Name);
                    node.put("ID",ID);
                    node.put("Contact",Contact);
                    node.put("StudyNum",StudyNum);
                    node.put("RegisterTime",RegisterTime);
                    node.put("LastLoinTime",LastLoinTime);
                    jsonArray.put(node);
                }

                outData.put("total",total);
                outData.put("rows",jsonArray);

                out.print(outData);
            }
            catch (Exception e)
            {
                e.printStackTrace();
            }
        }


    private void get_word_Date(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException
    {
        response.setContentType("text/html;charset=UTF-8");
        request.setCharacterEncoding ("utf-8");
        //url指向要访问的数据库
        String url =  "jdbc:mysql://127.0.0.1:3306/chineseMaster?useUnicode=true&characterEncoding=utf-8&useSSL=false";
        //数据库用户
        String user = "root";
        //数据库用户密码
        String password = "niyijie221";

        try {
            PrintWriter out = response.getWriter();
            //加载驱动
            String driver = "com.mysql.jdbc.Driver";
            Class.forName(driver);
            Connection conn = DriverManager.getConnection(url, user, password);
            Statement statement = conn.createStatement();

            String sql = "SELECT * FROM word_date;";
            ResultSet rs = statement.executeQuery(sql);
            int total = 0;

            JSONObject outData = new JSONObject();
            JSONArray jsonArray = new JSONArray();

            while (rs.next()) {
                total++;
                JSONObject node = new JSONObject();
                String word = rs.getString(1);
                String chinese = rs.getString(2);
                String terms = rs.getString(3);
                String trans1 = rs.getString(4);
                String sentence = rs.getString(5);
                String trans2 = rs.getString(6);
                String spell = rs.getString(7);


                node.put("word",word);
                node.put("chinese",chinese);
                node.put("terms",terms);
                node.put("trans1",trans1);
                node.put("sentence",sentence);
                node.put("trans2",trans2);
                node.put("spell",spell);

                jsonArray.put(node);
            }

            outData.put("total",total);
            outData.put("rows",jsonArray);

            out.print(outData);

           // out.print(new String(outData.toString().getBytes("iso-8859-1"), "gb2312"));
            System.out.println(outData.toString());

        }
        catch (Exception e)
        {
            e.printStackTrace();
        }
    }

    @Override
        public void destroy() {
            super.destroy();
        }


    }
