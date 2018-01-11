package com.revature.servlets;

import java.io.IOException;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ajaxUploadReceipt")
public class AjaxUploadReceiptServlet extends HttpServlet {
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		System.out.println("AjaxUploadReceiptServlet -POST");
		
		Map<String, String[]> paramsMap = req.getParameterMap();
		for(String str: paramsMap.keySet()) System.out.println(str);
		
		
		//		Object obj = req.getParameter("receiptBlob");
//		System.out.println("obj: " + obj);
//		System.out.println("obj class: " + obj.getClass());
	}
	
	

}
