import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class FareServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String distStr = request.getParameter("distance");
        double distance = Double.parseDouble(distStr);
        double baseFare = 30;
        double costPerKm = 10;
        double totalFare = baseFare+(distance*costPerKm);
        out.println("<html><body>");
        out.println("<h2>Fare Details</h2>");
        out.println("Distance: " + distance + " km<br>");
        out.println("Total Fare:" + totalFare);
        out.println("<h3>24071A05H2</h3>");
        out.println("</body></html>");
    }
}