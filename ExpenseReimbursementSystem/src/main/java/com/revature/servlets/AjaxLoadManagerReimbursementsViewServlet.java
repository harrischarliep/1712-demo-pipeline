package com.revature.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ajaxLoadManagerReimbursementsView")
public class AjaxLoadManagerReimbursementsViewServlet extends HttpServlet {
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("AjaxLoadManagerReimbursementsViewServlet -GET");
		req.getRequestDispatcher("features/manager/view_reimbursements/reimbursements_view.html").forward(req, resp);
	}

}
