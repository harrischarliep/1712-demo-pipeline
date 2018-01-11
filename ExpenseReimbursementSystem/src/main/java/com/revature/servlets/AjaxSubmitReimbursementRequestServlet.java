package com.revature.servlets;

import java.io.IOException;
import java.util.Map;
import java.util.Set;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.model.ErsReimbursement;
import com.revature.model.ErsUser;
import com.revature.model.ErsUserRole;
import com.revature.service.AppServiceImpl;

@WebServlet("/ajaxSubmitReimbursementRequest")
public class AjaxSubmitReimbursementRequestServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("AjaxSubmitReimbursementRequest -GET");
		req.getRequestDispatcher("features/employee/submit_reimbursement/reimbursement_submit.html").forward(req, resp);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("AjaxSubmitReimbursementRequestServlet -POST");
		
		Map<String, String[]> myMap = req.getParameterMap();
		Set<String> reObject = myMap.keySet();
		Object obj = reObject.toArray()[0];
		ObjectMapper jackson = new ObjectMapper();
		
		ErsReimbursement re = jackson.readValue(((String) obj), ErsReimbursement.class);
		
		HttpSession session = req.getSession();
		ErsUser user = (ErsUser) session.getAttribute("user");
		
		AppServiceImpl.getService().submitReimbursementRequest(re, user);
		session.removeAttribute("reimbursements");
		
		if (user.getRole() == ErsUserRole.EMPLOYEE) req.getRequestDispatcher("features/employee/view_reimbursements/reimbursements_view.html").forward(req, resp);
	}
}
